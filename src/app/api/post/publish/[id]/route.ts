import prisma from "@/lib/prisma";
import { handleError } from "@/lib/utils";
import { PostStatus } from "@prisma/client";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
import { findPostById } from "../../[id]/route";

export async function POST(request: NextRequest, { params }: any) {
    const { id } = params;

    try {
        const post = await findPostById(id);
        if (!post) {
            return NextResponse.json({ error: "Post not found" }, { status: 404 });
        }

        const updatedPost = await prisma.post.update({
            where: { id },
            data: {
                status: PostStatus.PUBLISHED,
                published: true,
                scheduledAt: null,
            },
        });

        return NextResponse.json(updatedPost);
    } catch (error) {
        return handleError(error);
    }
}
