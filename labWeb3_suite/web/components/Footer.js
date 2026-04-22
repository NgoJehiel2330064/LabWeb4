// ============================================================
// COMPOSANT FOOTER
// Ce fichier contient le pied de page commun à toutes les pages.
// Même principe que le Header : on l'écrit une fois, on l'utilise
// partout. Si on veut changer le footer (ex: l'année, les liens),
// on n'a qu'à modifier ce fichier.
// ============================================================

function Footer() {
    return (
        // py-4 : padding vertical niveau 4
        // mt-5 : margin-top niveau 5 (espace au-dessus)
        // border-top border-white : ligne blanche au-dessus du footer
        <footer className="bg-dark py-4 mt-5 border-top border-white">
            <div className="container text-center text-white">

                {/* Section icônes des réseaux sociaux */}
                <div className="mb-3">
                    {/* me-4 : margin-end (droite) niveau 4 entre les icônes */}
                    {/* fs-4 : taille d'icône niveau 4 */}
                    <a href="#" className="text-white me-4 fs-4">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#" className="text-white me-4 fs-4">
                        <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#" className="text-white fs-4">
                        <i className="bi bi-linkedin"></i>
                    </a>
                </div>

                {/* Nom de l'organisation */}
                <p className="mb-1">Centre d'Expertise et de Perfectionnement en Informatique</p>

                {/* Année - mb-0 : pas de margin en bas */}
                <p className="mb-0">2022</p>

            </div>
        </footer>
    );
}
