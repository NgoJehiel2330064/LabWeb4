"use client";

import { useEffect } from "react";
import { Commentaire } from "@/types";
import Comment from "./Comment";
import { syncAllCommentsToIDB } from "@/lib/indexedDB";

interface CommentListProps {
  commentaires: Commentaire[];
}

// Composant CommentList — liste des commentaires avec sync IndexedDB, identique au lab3
export default function CommentList({ commentaires }: CommentListProps) {
  // Synchroniser les commentaires dans IndexedDB
  useEffect(() => {
    if (commentaires.length > 0) {
      syncAllCommentsToIDB(commentaires).catch(console.error);
    }
  }, [commentaires]);

  return (
    <div id="liste-commentaires" className="mb-4" data-testid="comment-list">
      <h4 className="mb-4">Commentaires ({commentaires.length})</h4>

      {commentaires.length === 0 ? (
        <p className="text-muted">Aucun commentaire pour l&apos;instant. Soyez le premier !</p>
      ) : (
        commentaires.map((c) => (
          <Comment key={c.id} commentaire={c} />
        ))
      )}
    </div>
  );
}
