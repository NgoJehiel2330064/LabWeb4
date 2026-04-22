// Composant Footer — identique au lab3 avec icônes réseaux sociaux et nom CEPI
export default function Footer() {
  return (
    <footer
      className="bg-dark py-4 mt-5 border-top border-white"
      data-testid="footer"
    >
      <div className="container text-center text-white">

        {/* Icônes réseaux sociaux */}
        <div className="mb-3">
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

        <p className="mb-1">Centre d&apos;Expertise et de Perfectionnement en Informatique</p>
        <p className="mb-0">2022</p>

      </div>
    </footer>
  );
}
