import { NextRequest, NextResponse } from "next/server";
import { getAllComments, getCommentsByPostId, createComment } from "@/lib/dataStore";

// GET /api/comments — Obtenir tous les commentaires (ou filtrés par postId)
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const postId = searchParams.get("postId");

  const comments = postId ? getCommentsByPostId(postId) : getAllComments();
  return NextResponse.json(comments);
}

// POST /api/comments — Créer un nouveau commentaire
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { postId, contenu } = body;

  if (!postId || !contenu) {
    return NextResponse.json(
      { error: "postId et contenu sont obligatoires." },
      { status: 400 }
    );
  }

  const today = new Date().toISOString().split("T")[0];
  const newComment = createComment({ postId, contenu, date: today });
  return NextResponse.json(newComment, { status: 201 });
}
