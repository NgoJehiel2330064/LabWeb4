import { NextRequest, NextResponse } from "next/server";
import { getPostById, updatePost, deletePost } from "@/lib/dataStore";

interface RouteParams {
  params: Promise<{ id: string }>;
}

// GET /api/posts/[id] — Obtenir une publication par son ID
export async function GET(_request: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  const post = getPostById(id);

  if (!post) {
    return NextResponse.json({ error: "Article non trouvé." }, { status: 404 });
  }

  return NextResponse.json(post);
}

// PUT /api/posts/[id] — Modifier une publication
export async function PUT(request: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  const body = await request.json();
  const { titre, auteur, date, contenu } = body;

  const updated = updatePost(id, { titre, auteur, date, contenu });

  if (!updated) {
    return NextResponse.json({ error: "Article non trouvé." }, { status: 404 });
  }

  return NextResponse.json(updated);
}

// DELETE /api/posts/[id] — Supprimer une publication
export async function DELETE(_request: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  const success = deletePost(id);

  if (!success) {
    return NextResponse.json({ error: "Article non trouvé." }, { status: 404 });
  }

  return NextResponse.json({ message: "Article supprimé avec succès." });
}
