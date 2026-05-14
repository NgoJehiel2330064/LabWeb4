"use client";

import Dexie, { Table } from "dexie";
import { Publication, Commentaire } from "@/types";

class BlogDatabase extends Dexie {
  posts!: Table<Publication>;
  comments!: Table<Commentaire>;

  constructor() {
    super("BlogDB");
    this.version(1).stores({
      posts: "id, titre, auteur, date",
      comments: "id, postId, date",
    });
  }
}

export const db = new BlogDatabase();

export async function syncPostToIDB(post: Publication): Promise<void> {
  await db.posts.put(post);
}

export async function syncAllPostsToIDB(posts: Publication[]): Promise<void> {
  await db.posts.bulkPut(posts);
}

export async function deletePostFromIDB(id: number | string): Promise<void> {
  await db.posts.delete(id as never);
}

export async function syncCommentToIDB(comment: Commentaire): Promise<void> {
  await db.comments.put(comment);
}

export async function syncAllCommentsToIDB(comments: Commentaire[]): Promise<void> {
  await db.comments.bulkPut(comments);
}
