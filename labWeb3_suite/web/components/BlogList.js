// ============================================================
// COMPOSANT BLOGLIST
// Affiche la liste de toutes les cartes d'articles.
// Ce composant est responsable de :
//   1. Appeler l'API pour récupérer les articles au chargement
//   2. Stocker les articles dans un state (état local)
//   3. Générer un composant BlogCard pour chaque article
// ============================================================

function BlogList() {
    // -----------------------------------------------------------
    // STATE (État local du composant)
    // useState() crée une variable réactive :
    // - "publications" : la valeur actuelle (tableau d'articles)
    // - "setPublications" : la fonction pour modifier la valeur
    // Quand setPublications est appelé, React re-affiche le composant
    // -----------------------------------------------------------
    const [publications, setPublications] = React.useState([]);

    // State pour afficher un message de chargement
    const [chargement, setChargement] = React.useState(true);

    // State pour afficher un message d'erreur si l'API échoue
    const [erreur, setErreur] = React.useState(null);

    // -----------------------------------------------------------
    // useEffect - Exécuté une seule fois au montage du composant
    // Le tableau vide [] en 2e paramètre signifie "exécuter
    // seulement quand le composant apparaît la première fois"
    // C'est l'équivalent React du $(document).ready() de jQuery
    // -----------------------------------------------------------
    React.useEffect(() => {
        // Appel à l'API pour récupérer tous les articles
        fetch('http://localhost:3000/posts')
            .then(response => response.json())   // Convertit la réponse en objet JS
            .then(data => {
                setPublications(data);           // Met les articles dans le state
                setChargement(false);            // Cache le spinner de chargement
            })
            .catch(err => {
                console.error('Erreur lors du chargement des articles:', err);
                setErreur('Impossible de charger les articles.');
                setChargement(false);
            });
    }, []); // [] = dépendances vides = exécution unique au montage

    // -----------------------------------------------------------
    // AFFICHAGE CONDITIONNEL
    // Selon l'état, on affiche un spinner, une erreur, ou la liste
    // -----------------------------------------------------------

    if (chargement) {
        return (
            <div className="text-center">
                {/* spinner-border : Animation de chargement Bootstrap */}
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Chargement...</span>
                </div>
                <p>Chargement des publications...</p>
            </div>
        );
    }

    if (erreur) {
        return <div className="alert alert-danger">{erreur}</div>;
    }

    return (
        <div className="container my-5 bg-dark">
            {/* row g-4 : Grille Bootstrap avec espacement niveau 4 entre les cartes */}
            <div className="row g-4">
                {/*
                  map() = parcourt le tableau et retourne un composant pour chaque article
                  C'est l'équivalent d'une boucle for...of
                  key={pub.id} est obligatoire en React pour identifier chaque élément
                  de la liste de façon unique (optimisation interne de React)
                */}
                {publications.map(pub => (
                    <BlogCard
                        key={pub.id}
                        id={pub.id}
                        titre={pub.titre}
                        contenu={pub.contenu}
                        auteur={pub.auteur}
                        date={pub.date}
                    />
                ))}
            </div>
        </div>
    );
}
