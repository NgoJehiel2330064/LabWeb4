"use client";

import { useState, useTransition } from "react";
import { ajouterCommentaire } from "@/lib/actions";
import { syncCommentToIDB } from "@/lib/indexedDB";

interface AddCommentProps {
  postId: number | string;
}

// Composant AddComment — formulaire d'ajout de commentaire, identique au lab3
export default function AddComment({ postId }: AddCommentProps) {
  const [contenu, setContenu] = useState("");
  const [message, setMessage] = useState<{ type: string; texte: string } | null>(null);
  const [isPending, startTransition] = useTransition();

  async function envoyerCommentaire() {
    if (!contenu.trim()) {
      setMessage({ type: "warning", texte: "Le commentaire ne peut pas être vide." });
      return;
    }

    const formData = new FormData();
    formData.set("postId", String(postId));
    formData.set("contenu", contenu);

    startTransition(async () => {
      const today = new Date().toISOString().split("T")[0];
      await syncCommentToIDB({ id: Date.now(), postId, contenu, date: today }).catch(console.error);
      await ajouterCommentaire(formData);
      setContenu("");
      setMessage({ type: "success", texte: "Commentaire ajouté avec succès !" });
      setTimeout(() => setMessage(null), 3000);
    });
  }

  return (
    <div className="mt-5" data-testid="add-comment">

      <h5 className="mb-3">Ajouter un commentaire</h5>

      {/* Zone de texte */}
      <div className="mb-4">
        <textarea
          className="form-control"
          rows={5}
          placeholder="Votre commentaire..."
          value={contenu}
          onChange={(e) => setContenu(e.target.value)}
          data-testid="comment-input"
        />
      </div>

      {/* Message de feedback */}
      {message && (
        <div className={`alert alert-${message.type} mb-3`}>
          {message.texte}
        </div>
      )}

      {/* Bouton aligné à droite comme dans le lab3 */}
      <div className="text-end mb-5">
        <button
          className="btn btn-primary px-4"
          onClick={envoyerCommentaire}
          disabled={isPending}
          data-testid="submit-comment"
        >
          {isPending ? "Envoi..." : "Submit"}
        </button>
      </div>

    </div>
  );
}
