// ============================================================
// COMPOSANT COMMENTLIST
// Affiche la liste de tous les commentaires d'un article.
// Ce composant :
//   1. Reçoit l'ID de l'article via les props
//   2. Appelle l'API pour récupérer les commentaires filtrés
//   3. Affiche un composant Comment pour chaque commentaire
//
// PROPS attendues :
//   - postId : l'identifiant de l'article dont on veut les commentaires
// ============================================================

function CommentList({ postId }) {
    // State pour stocker la liste des commentaires
    const [commentaires, setCommentaires] = React.useState([]);
    const [chargement, setChargement] = React.useState(true);

    // -----------------------------------------------------------
    // Fonction exportée pour permettre à AddComment de recharger
    // la liste après l'ajout d'un nouveau commentaire.
    // On l'expose via window pour la rendre accessible.
    // -----------------------------------------------------------

    // Fonction de chargement des commentaires (réutilisable)
    const chargerCommentaires = () => {
        setChargement(true);
        // L'API retourne TOUS les commentaires, on filtre ensuite
        // par postId pour n'afficher que ceux de cet article
        fetch('http://localhost:3000/comments')
            .then(response => response.json())
            .then(data => {
                // Filtrage : on garde seulement les commentaires
                // dont le postId correspond à l'article courant
                // On compare en String car les types peuvent varier (string vs number)
                const filtres = data.filter(
                    c => String(c.postId) === String(postId)
                );
                setCommentaires(filtres);
                setChargement(false);
            })
            .catch(err => {
                console.error('Erreur chargement commentaires:', err);
                setChargement(false);
            });
    };

    // Charger les commentaires au montage du composant
    // ET quand postId change (dépendance dans le tableau)
    React.useEffect(() => {
        if (!postId) return;
        chargerCommentaires();
    }, [postId]);

    // Exposer la fonction de rechargement globalement
    // pour que AddComment puisse l'appeler après un ajout
    React.useEffect(() => {
        window.rechargerCommentaires = chargerCommentaires;
    }, [postId]);

    if (chargement) {
        return <p className="text-muted">Chargement des commentaires...</p>;
    }

    return (
        <div id="liste-commentaires" className="mb-4">
            {/* Titre de la section */}
            <h4 className="mb-4">Commentaires ({commentaires.length})</h4>

            {/* Si aucun commentaire, afficher un message */}
            {commentaires.length === 0 ? (
                <p className="text-muted">Aucun commentaire pour l'instant. Soyez le premier !</p>
            ) : (
                // Sinon, afficher un Comment pour chaque élément
                // key={c.id} : identifiant unique requis par React
                commentaires.map(c => (
                    <Comment
                        key={c.id}
                        contenu={c.contenu}
                        date={c.date}
                    />
                ))
            )}
        </div>
    );
}
