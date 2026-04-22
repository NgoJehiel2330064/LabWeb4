import { NextRequest, NextResponse } from "next/server";
import { getAllPosts, createPost } from "@/lib/dataStore";

// GET /api/posts — Obtenir toutes les publications
export async function GET() {
  const posts = getAllPosts();
  return NextResponse.json(posts);
}

// POST /api/posts — Créer une nouvelle publication
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { titre, auteur, date, contenu } = body;

  if (!titre || !auteur || !date || !contenu) {
    return NextResponse.json(
      { error: "Tous les champs sont obligatoires : titre, auteur, date, contenu." },
      { status: 400 }
    );
  }

  const newPost = createPost({ titre, auteur, date, contenu });
  return NextResponse.json(newPost, { status: 201 });
}
