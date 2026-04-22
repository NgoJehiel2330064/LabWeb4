// ============================================================
// COMPOSANT BLOG
// Composant "conteneur" (ou "parent") de la page blog.html.
// Il orchestre les autres composants de la page :
//   - BlogDetails : affiche le contenu de l'article
//   - CommentList : affiche les commentaires existants
//   - AddComment  : affiche le formulaire d'ajout de commentaire
//
// Ce composant est responsable de récupérer l'ID de l'article
// depuis l'URL (paramètre ?id=X) et de le passer aux enfants.
// ============================================================

function Blog() {
    // -----------------------------------------------------------
    // Lecture du paramètre "id" dans l'URL
    // Ex: blog.html?id=3 → on extrait "3"
    //
    // URLSearchParams est une API native du navigateur qui permet
    // de lire les paramètres de l'URL facilement
    // window.location.search = la partie "?id=3" de l'URL
    // -----------------------------------------------------------
    const params = new URLSearchParams(window.location.search);
    const postId = params.get('id'); // Retourne "3" ou null si absent

    // Si aucun ID dans l'URL, afficher un message d'erreur
    if (!postId) {
        return (
            <div className="container my-5">
                <div className="alert alert-warning">
                    Aucun article sélectionné. <a href="principal.html">Retourner à la liste</a>
                </div>
            </div>
        );
    }

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">

                    {/* Affichage des détails de l'article */}
                    {/* On passe postId en prop pour que BlogDetails sache quoi charger */}
                    <BlogDetails postId={postId} />

                    {/* Séparateur visuel */}
                    <hr className="my-5" />

                    {/* Zone des commentaires */}
                    <div id="form-commentaire">

                        {/* Liste des commentaires existants */}
                        {/* postId est passé pour filtrer les commentaires de cet article */}
                        <CommentList postId={postId} />

                        {/* Formulaire d'ajout d'un nouveau commentaire */}
                        <AddComment postId={postId} />

                    </div>

                </div>
            </div>
        </div>
    );
}
