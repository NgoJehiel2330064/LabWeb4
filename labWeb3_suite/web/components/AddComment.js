// ============================================================
// COMPOSANT ADDCOMMENT
// Affiche le formulaire pour ajouter un nouveau commentaire.
// Ce composant :
//   1. Reçoit l'ID de l'article via les props
//   2. Gère l'état du champ texte (texte tapé par l'utilisateur)
//   3. Envoie le commentaire à l'API via un POST
//   4. Vide le champ et recharge la liste après l'envoi
//
// PROPS attendues :
//   - postId : l'identifiant de l'article auquel ajouter un commentaire
// ============================================================

function AddComment({ postId }) {
    // State pour stocker ce que l'utilisateur tape dans le textarea
    // Chaque frappe au clavier met ce state à jour (binding contrôlé)
    const [contenu, setContenu] = React.useState('');

    // State pour afficher un message de succès ou d'erreur
    const [message, setMessage] = React.useState(null);

    // -----------------------------------------------------------
    // Fonction appelée quand l'utilisateur clique sur "Submit"
    // -----------------------------------------------------------
    const envoyerCommentaire = () => {
        // Validation : ne pas envoyer un commentaire vide
        if (!contenu.trim()) {
            setMessage({ type: 'warning', texte: 'Le commentaire ne peut pas être vide.' });
            return;
        }

        // Construction de l'objet à envoyer à l'API
        const nouveauCommentaire = {
            contenu: contenu,
            postId: postId,
            // Date du jour au format ISO (ex: "2024-03-15")
            date: new Date().toISOString().split('T')[0]
        };

        // Envoi via fetch avec méthode POST
        // JSON.stringify() convertit l'objet JS en texte JSON
        fetch('http://localhost:3000/comments', {
            method: 'POST',
            headers: {
                // On indique au serveur qu'on envoie du JSON
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nouveauCommentaire)
        })
        .then(response => {
            if (!response.ok) throw new Error('Erreur lors de l\'envoi');
            return response.json();
        })
        .then(() => {
            setContenu('');  // Vider le champ après l'envoi
            setMessage({ type: 'success', texte: 'Commentaire ajouté avec succès !' });

            // Appeler la fonction de rechargement de la liste des commentaires
            // Cette fonction est exposée par CommentList via window
            if (window.rechargerCommentaires) {
                window.rechargerCommentaires();
            }

            // Effacer le message de succès après 3 secondes
            setTimeout(() => setMessage(null), 3000);
        })
        .catch(err => {
            console.error('Erreur envoi commentaire:', err);
            setMessage({ type: 'danger', texte: 'Erreur lors de l\'envoi du commentaire.' });
        });
    };

    return (
        <div className="mt-5">

            {/* Titre de la zone de saisie */}
            <h5 className="mb-3">Ajouter un commentaire</h5>

            {/* Zone de texte pour écrire le commentaire */}
            {/* value={contenu} : la valeur est contrôlée par le state */}
            {/* onChange : met à jour le state à chaque frappe (e.target.value = texte tapé) */}
            <div className="mb-4">
                <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Votre commentaire..."
                    value={contenu}
                    onChange={e => setContenu(e.target.value)}
                ></textarea>
            </div>

            {/* Message de feedback (succès, avertissement ou erreur) */}
            {message && (
                <div className={`alert alert-${message.type} mb-3`}>
                    {message.texte}
                </div>
            )}

            {/* Bouton d'envoi - text-end : aligne le bouton à droite */}
            <div className="text-end mb-5">
                <button className="btn btn-primary px-4" onClick={envoyerCommentaire}>
                    Submit
                </button>
            </div>

        </div>
    );
}
