"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createPost, updatePost, deletePost, createComment } from "@/lib/dataStore";

export async function ajouterPublication(formData: FormData): Promise<void> {
  const titre = formData.get("titre") as string;
  const auteur = formData.get("auteur") as string;
  const date = formData.get("date") as string;
  const contenu = formData.get("contenu") as string;

  if (!titre || !auteur || !date || !contenu) {
    throw new Error("Tous les champs sont obligatoires.");
  }

  createPost({ titre, auteur, date, contenu });

  revalidatePath("/");
  redirect("/");
}

export async function modifierPublication(id: number | string, formData: FormData): Promise<void> {
  const titre = formData.get("titre") as string;
  const auteur = formData.get("auteur") as string;
  const date = formData.get("date") as string;
  const contenu = formData.get("contenu") as string;

  updatePost(id, { titre, auteur, date, contenu });
  revalidatePath("/");
  revalidatePath(`/blog/${id}`);
  redirect(`/blog/${id}`);
}

export async function supprimerPublication(id: number | string): Promise<void> {
  deletePost(id);
  revalidatePath("/");
  redirect("/");
}

export async function ajouterCommentaire(formData: FormData): Promise<void> {
  const postId = formData.get("postId") as string;
  const contenu = formData.get("contenu") as string;

  if (!postId || !contenu.trim()) {
    throw new Error("Le commentaire ne peut pas être vide.");
  }

  const today = new Date().toISOString().split("T")[0];
  createComment({ postId, contenu, date: today });

  revalidatePath(`/blog/${postId}`);
}
