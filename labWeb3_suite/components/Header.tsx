"use client";

import Link from "next/link";

// Composant Header — barre de navigation identique au lab3
export default function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-dark shadow-sm border border-bottom border-white"
      data-testid="header"
    >
      <div className="container-fluid px-4">

        {/* Logo — version responsive : grand sur desktop, petit sur mobile */}
        <Link className="navbar-brand" href="/">
          {/* d-none d-md-block : caché sur mobile, visible sur tablette+ */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/image/logo.png" alt="Logo" width="120" height="80" className="d-none d-md-block" />
          {/* Version plus petite du logo sur mobile */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/image/logo.png" alt="Logo" width="60" height="40" className="d-block d-md-none" />
        </Link>

        {/* Bouton hamburger visible seulement sur mobile/tablette */}
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

        {/* Menu de navigation */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto text-center text-lg-start">
            <li className="nav-item me-lg-4">
              <Link className="nav-link text-white" href="/blog/1">Menu1</Link>
            </li>
            <li className="nav-item me-lg-4">
              <Link className="nav-link text-white" href="#">Menu2</Link>
            </li>
            <li className="nav-item me-lg-4">
              <Link className="nav-link text-white" href="#">Menu3</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" href="#">Menu4</Link>
            </li>
          </ul>

          {/* Icône utilisateur — mène vers la page de connexion */}
          <ul className="navbar-nav text-center text-lg-start">
            <li className="nav-item">
              <Link className="nav-link text-white" href="/login">
                <i className="bi bi-person-circle fs-2"></i>
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}
