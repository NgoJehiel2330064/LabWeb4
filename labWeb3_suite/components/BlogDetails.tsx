"use client";

import { useEffect } from "react";
import { Publication } from "@/types";
import { syncPostToIDB } from "@/lib/indexedDB";

interface BlogDetailsProps {
  article: Publication;
}

// Composant BlogDetails — image centrée, titre, auteur/date, contenu, identique au lab3
export default function BlogDetails({ article }: BlogDetailsProps) {
  // Synchroniser l'article dans IndexedDB
  useEffect(() => {
    syncPostToIDB(article).catch(console.error);
  }, [article]);

  return (
    <>
      {/* Image principale de l'article — centrée, 75% de largeur */}
      <div className="text-center mt-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/image/entrepreneur.png"
          className="img-fluid w-75 mx-auto d-block"
          alt="Image de l'article"
        />
      </div>

      {/* Titre de l'article */}
      <h1 className="mt-4 mb-3" data-testid="blog-titre">{article.titre}</h1>

      {/* Méta-données : auteur et date */}
      <p className="text-muted">
        Par <strong>{article.auteur}</strong> — {article.date}
      </p>

      {/* Contenu complet — white-space: pre-wrap pour respecter les retours à la ligne */}
      <p style={{ whiteSpace: "pre-wrap" }} data-testid="blog-contenu">{article.contenu}</p>
    </>
  );
}
