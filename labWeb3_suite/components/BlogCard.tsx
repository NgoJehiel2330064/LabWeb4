import Link from "next/link";
import { Publication } from "@/types";

interface BlogCardProps {
  post: Publication;
}

// Composant BlogCard — carte bg-secondary avec image entrepreneur.png, identique au lab3
export default function BlogCard({ post }: BlogCardProps) {
  return (
    // col-md-4 : 3 par ligne sur tablette+, col-sm-6 : 2 par ligne, col-12 : 1 sur mobile
    <div className="col-12 col-sm-6 col-md-4" data-testid="blog-card">

      {/* Carte Bootstrap — bg-secondary text-white identique au lab3 */}
      <div className="card h-100 bg-secondary text-white">

        {/* Image de la carte — même image pour tous les articles */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/image/entrepreneur.png"
          className="card-img-top"
          alt="Image de l'article"
        />

        <div className="card-body d-flex flex-column">

          {/* Titre de l'article */}
          <h5 className="card-title">{post.titre}</h5>

          {/* Aperçu du contenu : 100 premiers caractères */}
          <p className="card-text">
            {post.contenu.length > 100
              ? post.contenu.substring(0, 100) + "..."
              : post.contenu}
          </p>

          {/* Bouton vers le détail — mt-auto pousse vers le bas */}
          <div className="mt-auto">
            <Link href={`/blog/${post.id}`} className="btn btn-primary">
              Lire l&apos;article
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
}
