import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";

import type { NextRequest } from "next/server";
import { handleError } from "@/lib/utils";

const postSchema = z.object({
    title: z.string().min(1, "Title is required"),
    content: z.string().optional(),
});


export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get("page") || "1");
        const pageSize = parseInt(searchParams.get("pageSize") || "10");

        if (isNaN(page) || isNaN(pageSize) || page <= 0 || pageSize <= 0) {
            return NextResponse.json({ error: "Invalid pagination parameters" }, { status: 400 });
        }

        const [posts, totalPosts] = await Promise.all([
            prisma.post.findMany({
                skip: (page - 1) * pageSize,
                take: pageSize,
            }),
            prisma.post.count(),
        ]);

        const totalPages = Math.ceil(totalPosts / pageSize);

        return NextResponse.json({ posts, totalPages, currentPage: page, totalPosts });
    } catch (error) {
        return handleError(error);
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const result = postSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json({ error: result.error.errors }, { status: 400 });
        }

        const newPost = await prisma.post.create({
            data: {
                title: result.data.title,
                content: result.data.content,
            },
        });

        return NextResponse.json(newPost, { status: 201 });
    } catch (error) {
        return handleError(error);
    }
}