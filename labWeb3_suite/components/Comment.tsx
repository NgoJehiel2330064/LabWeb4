import { Commentaire } from "@/types";

interface CommentProps {
  commentaire: Commentaire;
}

// Composant Comment — icône person-circle + texte + date, identique au lab3
export default function Comment({ commentaire }: CommentProps) {
  return (
    // d-flex align-items-start mb-3 : icône et texte côte à côte
    <div className="d-flex align-items-start mb-3" data-testid="comment">

      {/* Icône utilisateur */}
      <i className="bi bi-person-circle fs-3 me-3 text-primary"></i>

      <div>
        {/* Texte du commentaire */}
        <p className="mb-1">{commentaire.contenu}</p>

        {/* Date en petit texte grisé */}
        {commentaire.date && (
          <small className="text-muted">{commentaire.date}</small>
        )}
      </div>

    </div>
  );
}
