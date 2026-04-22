"use client";

import { useEffect } from "react";
import { Publication } from "@/types";
import BlogCard from "./BlogCard";
import { syncAllPostsToIDB } from "@/lib/indexedDB";

interface BlogListProps {
  posts: Publication[];
}

// Composant BlogList — grille de cartes, identique au lab3, avec sync IndexedDB
export default function BlogList({ posts }: BlogListProps) {
  // Synchroniser les articles dans IndexedDB à chaque chargement
  useEffect(() => {
    syncAllPostsToIDB(posts).catch(console.error);
  }, [posts]);

  return (
    <div className="container my-5 bg-dark" data-testid="blog-list">
      {/* row g-4 : grille avec espacement niveau 4 entre les cartes */}
      <div className="row g-4">
        {posts.map((pub) => (
          <BlogCard key={pub.id} post={pub} />
        ))}
      </div>
    </div>
  );
}
