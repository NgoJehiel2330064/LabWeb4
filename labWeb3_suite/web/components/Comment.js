// ============================================================
// COMPOSANT COMMENT
// Affiche un seul commentaire dans la section des commentaires.
// Simple composant de présentation (pas d'appel API ici).
//
// PROPS attendues :
//   - contenu : le texte du commentaire
//   - date    : la date du commentaire (optionnelle)
// ============================================================

function Comment({ contenu, date }) {
    return (
        // d-flex : Flexbox pour aligner l'icône et le texte côte à côte
        // align-items-start : Aligne l'icône en haut
        // mb-3 : Marge en bas entre chaque commentaire
        <div className="d-flex align-items-start mb-3">

            {/* Icône de l'utilisateur (même icône pour tous les commentaires) */}
            {/* me-3 : Marge à droite de l'icône */}
            <i className="bi bi-person-circle fs-3 me-3 text-primary"></i>

            {/* Contenu du commentaire */}
            <div>
                {/* Texte du commentaire */}
                <p className="mb-1">{contenu}</p>

                {/* Date en petit texte grisé (si disponible) */}
                {date && (
                    <small className="text-muted">{date}</small>
                )}
            </div>

        </div>
    );
}
