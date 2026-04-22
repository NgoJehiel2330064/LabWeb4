import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogDetails from "@/components/BlogDetails";
import CommentList from "@/components/CommentList";
import AddComment from "@/components/AddComment";
import BootstrapClient from "@/components/BootstrapClient";
import Link from "next/link";
import { getPostById, getCommentsByPostId } from "@/lib/dataStore";

interface PageProps {
  params: Promise<{ id: string }>;
}

// Page de détail d'un article — reproduit blog.html du lab3
export default async function BlogPage({ params }: PageProps) {
  const { id } = await params;
  const article = getPostById(id);

  if (!article) {
    notFound();
  }

  const commentaires = getCommentsByPostId(id);

  return (
    <>
      <Header />

      <div className="container my-5" data-testid="blog-page">
        <div className="row justify-content-center">
          <div className="col-lg-8">

            {/* Détails de l'article */}
            <BlogDetails article={article} />

            <hr className="my-5" />

            {/* Zone des commentaires */}
            <div id="form-commentaire">
              <CommentList commentaires={commentaires} />
              <AddComment postId={article.id} />
            </div>

            {/* Lien retour */}
            <div className="mt-3">
              <Link href="/" className="btn btn-secondary">
                ← Retour à la liste
              </Link>
            </div>

          </div>
        </div>
      </div>

      <Footer />
      <BootstrapClient />
    </>
  );
}
