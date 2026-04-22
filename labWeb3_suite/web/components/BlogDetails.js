// ============================================================
// COMPOSANT BLOGDETAILS
// Affiche les détails complets d'un article de blog.
// Ce composant :
//   1. Reçoit l'ID de l'article via les props
//   2. Appelle l'API pour récupérer les données de cet article
//   3. Affiche le titre et le contenu complet
//
// PROPS attendues :
//   - postId : l'identifiant numérique de l'article à afficher
// ============================================================

function BlogDetails({ postId }) {
    // State pour stocker les données de l'article chargé
    const [article, setArticle] = React.useState(null);

    // State pour l'indicateur de chargement
    const [chargement, setChargement] = React.useState(true);

    // State pour les erreurs éventuelles
    const [erreur, setErreur] = React.useState(null);

    // -----------------------------------------------------------
    // useEffect - Appelé quand le composant est monté
    // ET chaque fois que postId change (c'est la dépendance)
    // Le tableau [postId] dit à React : "ré-exécute cet effet
    // si la valeur de postId change"
    // -----------------------------------------------------------
    React.useEffect(() => {
        if (!postId) return; // Si pas d'ID, on ne fait rien

        // Appel à l'API pour récupérer un article spécifique par son ID
        // Ex: http://localhost:3000/posts/3
        fetch(`http://localhost:3000/posts/${postId}`)
            .then(response => {
                if (!response.ok) throw new Error('Article introuvable');
                return response.json();
            })
            .then(data => {
                setArticle(data);        // Stocke l'article dans le state
                setChargement(false);
            })
            .catch(err => {
                console.error('Erreur chargement article:', err);
                setErreur('Impossible de charger l\'article.');
                setChargement(false);
            });
    }, [postId]); // Se ré-exécute si postId change

    // Affichage pendant le chargement
    if (chargement) {
        return (
            <div className="text-center my-4">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Chargement...</span>
                </div>
            </div>
        );
    }

    // Affichage en cas d'erreur
    if (erreur) {
        return <div className="alert alert-danger">{erreur}</div>;
    }

    // Affichage de l'article
    // Pas de wrapper row/col ici : le composant Blog parent s'en charge déjà
    return (
        <>
            {/* Image principale de l'article */}
            <div className="text-center mt-4">
                <img
                    src="image/entrepreneur.png"
                    className="img-fluid w-75 mx-auto d-block"
                    alt="Image de l'article"
                />
            </div>

            {/* Titre de l'article */}
            <h1 className="mt-4 mb-3">{article.titre}</h1>

            {/* Méta-données : auteur et date */}
            <p className="text-muted">
                Par <strong>{article.auteur}</strong> — {article.date}
            </p>

            {/* Contenu complet de l'article */}
            {/* white-space: pre-wrap pour respecter les retours à la ligne */}
            <p style={{ whiteSpace: 'pre-wrap' }}>{article.contenu}</p>
        </>
    );
}
