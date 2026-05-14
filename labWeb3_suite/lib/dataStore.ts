import fs from "fs";
import path from "path";
import { Publication, Commentaire } from "@/types";

const DB_PATH = path.join(process.cwd(), "data", "db.json");

interface DB {
  posts: Publication[];
  comments: Commentaire[];
  $schema?: string;
}

function readDB(): DB {
  const raw = fs.readFileSync(DB_PATH, "utf-8");
  return JSON.parse(raw) as DB;
}

function writeDB(data: DB): void {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), "utf-8");
}

export function getAllPosts(): Publication[] {
  return readDB().posts;
}

export function getPostById(id: number | string): Publication | undefined {
  return readDB().posts.find((p) => String(p.id) === String(id));
}

export function createPost(post: Omit<Publication, "id">): Publication {
  const db = readDB();
  const numIds = db.posts
    .filter((p) => /^\d+$/.test(String(p.id)))
    .map((p) => Number(p.id));
  const newId = numIds.length > 0 ? Math.max(...numIds) + 1 : 1;
  const newPost: Publication = { id: newId, ...post };
  db.posts.push(newPost);
  writeDB(db);
  return newPost;
}

export function updatePost(id: number | string, data: Partial<Omit<Publication, "id">>): Publication | null {
  const db = readDB();
  const index = db.posts.findIndex((p) => String(p.id) === String(id));
  if (index === -1) return null;
  db.posts[index] = { ...db.posts[index], ...data };
  writeDB(db);
  return db.posts[index];
}

export function deletePost(id: number | string): boolean {
  const db = readDB();
  const index = db.posts.findIndex((p) => String(p.id) === String(id));
  if (index === -1) return false;
  db.posts.splice(index, 1);
  writeDB(db);
  return true;
}

export function getCommentsByPostId(postId: number | string): Commentaire[] {
  return readDB().comments.filter((c) => String(c.postId) === String(postId));
}

export function getAllComments(): Commentaire[] {
  return readDB().comments;
}

export function createComment(comment: Omit<Commentaire, "id">): Commentaire {
  const db = readDB();
  const numIds = db.comments
    .filter((c) => /^\d+$/.test(String(c.id)))
    .map((c) => Number(c.id));
  const newId = numIds.length > 0 ? Math.max(...numIds) + 1 : 1;
  const newComment: Commentaire = { id: newId, ...comment };
  db.comments.push(newComment);
  writeDB(db);
  return newComment;
}
