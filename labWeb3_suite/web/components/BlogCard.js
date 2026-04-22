// ============================================================
// COMPOSANT BLOGCARD
// Représente une seule carte d'article dans la liste.
// Ce composant reçoit les données d'un article via les "props"
// (propriétés) et les affiche sous forme de carte Bootstrap.
//
// PROPS attendues :
//   - id        : identifiant unique de l'article (pour le lien)
//   - titre     : titre de l'article
//   - contenu   : texte complet (on affichera seulement 100 char)
//   - auteur    : nom de l'auteur
//   - date      : date de publication
// ============================================================

// Les props sont passées en paramètre de la fonction,
// comme un objet qu'on destructure directement { id, titre, ... }
function BlogCard({ id, titre, contenu, auteur, date }) {
    return (
        // col-md-4 : chaque carte prend 4 colonnes sur tablette+ (3 par ligne)
        // col-sm-6 : 2 colonnes sur petits écrans (2 par ligne)
        // col-12 : pleine largeur sur mobile (1 par ligne)
        <div className="col-12 col-sm-6 col-md-4">

            {/* Carte Bootstrap - h-100 : hauteur 100% pour aligner les cartes */}
            <div className="card h-100 bg-secondary text-white">

                {/* Image de la carte (toujours la même pour l'instant) */}
                <img
                    src="image/entrepreneur.png"
                    className="card-img-top"
                    alt="Image de l'article"
                />

                <div className="card-body d-flex flex-column">

                    {/* Titre de l'article */}
                    <h5 className="card-title">{titre}</h5>

                    {/* Aperçu du contenu : on affiche les 100 premiers caractères */}
                    {/* suivi de "..." si le texte est plus long */}
                    <p className="card-text">
                        {contenu.length > 100
                            ? contenu.substring(0, 100) + '...'
                            : contenu
                        }
                    </p>

                    {/* mt-auto : pousse le bouton vers le bas de la carte */}
                    <div className="mt-auto">
                        {/* Lien vers la page de détail du blog, avec l'ID dans l'URL */}
                        {/* Ex: blog.html?id=3 */}
                        <a href={`blog.html?id=${id}`} className="btn btn-primary">
                            Lire l'article
                        </a>
                    </div>

                </div>
            </div>

        </div>
    );
}
