import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";
import type { NextRequest } from "next/server";
import { handleError } from "@/lib/utils";

// Define o schema para validação com Zod
const postSchema = z.object({
    title: z.string().min(1, "Title is required"),
    content: z.string().optional(),
});

interface PostParams {
    id: string;
}

interface PostBody {
    title: string;
    content?: string;
}

export const findPostById = async (id: string) => {
    try {
        return await prisma.post.findUnique({ where: { id } });
    } catch (error) {
        throw new Error("Error querying the database");
    }
};

export async function GET(request: NextRequest, { params }: { params: PostParams }) {
    try {
        const { id } = params;

        const post = await findPostById(id);

        if (!post) {
            return NextResponse.json({ error: "Post not found" }, { status: 404 });
        }

        return NextResponse.json(post);
    } catch (error) {
        return handleError(error);
    }
}

export async function PUT(request: NextRequest, { params }: { params: PostParams }) {
    try {
        const { id } = params;
        const body = await request.json();

        const result = postSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json({ error: result.error.errors }, { status: 400 });
        }

        const updatedPost = await prisma.post.update({
            where: { id },
            data: result.data as PostBody,
        });

        return NextResponse.json(updatedPost);
    } catch (error) {
        return handleError(error);
    }
}

export async function DELETE(request: NextRequest, { params }: { params: PostParams }) {
    try {
        const { id } = params;

        const post = await prisma.post.findUnique({
            where: { id },
        });

        if (!post) {
            return NextResponse.json({ error: "Post not found" }, { status: 404 });
        }

        await prisma.post.delete({
            where: { id },
        });

        return NextResponse.json({ message: "Post deleted successfully" });
    } catch (error) {
        return handleError(error);
    }
}
