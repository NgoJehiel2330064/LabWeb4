// ============================================================
// COMPOSANT HEADER
// Ce fichier contient la barre de navigation (navbar) du site.
// Au lieu d'avoir le même code HTML dupliqué dans chaque page,
// on le met ici une seule fois et on l'importe partout.
// ============================================================

// En React, un composant est une fonction qui retourne du JSX.
// JSX = HTML écrit dans du JavaScript. Ex: <div className="...">
// Note: on utilise "className" au lieu de "class" en JSX,
// car "class" est un mot réservé en JavaScript.

function Header() {
    return (
        // Fragment React (<> </>) : permet de retourner plusieurs
        // éléments sans ajouter de div inutile dans le DOM
        <>
            {/* Barre de navigation Bootstrap */}
            <nav className="navbar navbar-expand-lg navbar-light bg-dark shadow-sm border border-bottom border-white">
                <div className="container-fluid px-4">

                    {/* Logo - lien vers la page principale */}
                    <a className="navbar-brand" href="principal.html">
                        {/* d-none d-md-block : caché sur mobile, visible sur tablette+ */}
                        <img src="image/logo.png" alt="Logo" width="120" height="80" className="d-none d-md-block" />
                        {/* Version plus petite du logo sur mobile */}
                        <img src="image/logo.png" alt="Logo" width="60" height="40" className="d-block d-md-none" />
                    </a>

                    {/* Bouton hamburger (visible seulement sur mobile/tablette) */}
                    {/* Quand on clique, il affiche/cache le menu #navbarNav */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Menu de navigation - se replie sur mobile */}
                    <div className="collapse navbar-collapse" id="navbarNav">

                        {/* Liens du menu, centrés sur l'écran */}
                        <ul className="navbar-nav mx-auto text-center text-lg-start">
                            <li className="nav-item me-lg-4">
                                <a className="nav-link text-white" href="blog.html">Menu1</a>
                            </li>
                            <li className="nav-item me-lg-4">
                                <a className="nav-link text-white" href="#">Menu2</a>
                            </li>
                            <li className="nav-item me-lg-4">
                                <a className="nav-link text-white" href="#">Menu3</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Menu4</a>
                            </li>
                        </ul>

                        {/* Icône utilisateur à droite - mène vers la page de connexion */}
                        <ul className="navbar-nav text-center text-lg-start">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="login.html">
                                    {/* fs-2 : grande taille d'icône */}
                                    <i className="bi bi-person-circle fs-2"></i>
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    );
}
