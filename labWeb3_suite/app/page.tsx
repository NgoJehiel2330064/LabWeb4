import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogList from "@/components/BlogList";
import BootstrapClient from "@/components/BootstrapClient";
import Link from "next/link";
import { getAllPosts } from "@/lib/dataStore";

// Page d'accueil — reproduit principal.html du lab3
export default function HomePage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />

      {/* Barre de recherche et filtre — identique au principal.html du lab3 */}
      <div className="container my-4 bg-dark">
        <div className="row align-items-center g-3">
          <div className="col-12 col-md-5">
            <div className="input-group">
              <span className="input-group-text bg-white">
                <i className="bi bi-search"></i>
              </span>
              <input type="text" className="form-control" placeholder="Rechercher..." data-testid="search-input" />
            </div>
          </div>
          <div className="col-12 col-md-2 text-center text-md-center">
            <span>Trier par:</span>
          </div>
          <div className="col-12 col-md-3">
            <select className="form-select" data-testid="sort-select">
              <option>Select</option>
              <option value="1">Date</option>
              <option value="2">Titre</option>
              <option value="3">Popularité</option>
            </select>
          </div>
          <div className="col-12 col-md-2 text-end">
            <Link href="/formulaire" className="btn btn-primary">
              + Nouvel article
            </Link>
          </div>
        </div>
      </div>

      <BlogList posts={posts} />

      <Footer />
      <BootstrapClient />
    </>
  );
}
