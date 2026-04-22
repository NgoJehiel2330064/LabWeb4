"use client";

import { useState, useTransition } from "react";
import { ajouterPublication } from "@/lib/actions";
import { syncPostToIDB } from "@/lib/indexedDB";

// Composant FormulairePublication — identique au formulaire.html du lab3
// avec dialog de confirmation avant publication
export default function FormulairePublication() {
  const [showDialog, setShowDialog] = useState(false);
  const [formData, setFormData] = useState<FormData | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setFormData(data);
    setShowDialog(true);
  }

  async function confirmerPublication() {
    if (!formData) return;
    setShowDialog(false);

    const titre = formData.get("titre") as string;
    const auteur = formData.get("auteur") as string;
    const date = formData.get("date") as string;
    const contenu = formData.get("contenu") as string;

    // Sync IndexedDB avant d'envoyer au serveur
    await syncPostToIDB({ id: Date.now(), titre, auteur, date, contenu }).catch(console.error);

    startTransition(async () => {
      await ajouterPublication(formData!);
    });
  }

  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <h1 className="mb-4 text-center">Formulaire</h1>

            {/* Formulaire — bg-dark border-secondary identique au lab3 */}
            <form
              id="form-publication"
              className="p-4 border rounded shadow-sm bg-dark border-secondary"
              onSubmit={handleSubmit}
              data-testid="formulaire-publication"
            >
              <div className="mb-3">
                <label htmlFor="titre" className="form-label">Titre</label>
                <input
                  type="text"
                  className="form-control"
                  id="titre"
                  name="titre"
                  required
                  data-testid="input-titre"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="auteur" className="form-label">Auteur</label>
                <input
                  type="text"
                  className="form-control"
                  id="auteur"
                  name="auteur"
                  required
                  data-testid="input-auteur"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="contenu" className="form-label">Contenu</label>
                <textarea
                  className="form-control"
                  id="contenu"
                  name="contenu"
                  rows={3}
                  required
                  data-testid="input-contenu"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="date" className="form-label">Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  name="date"
                  required
                  data-testid="input-date"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={isPending}
                data-testid="submit-publication"
              >
                {isPending ? "Publication..." : "Publier"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Dialog de confirmation — reproduit le comportement jQuery UI du lab3 */}
      {showDialog && (
        <div
          className="modal d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          data-testid="dialog-confirmation"
        >
          <div className="modal-dialog" style={{ maxWidth: "500px" }}>
            <div className="modal-content bg-dark border-secondary text-white">
              <div className="modal-header border-secondary">
                <h5 className="modal-title">Basic dialog</h5>
              </div>
              <div className="modal-body">
                <p>Confirmer la publication du formulaire ?</p>
              </div>
              <div className="modal-footer border-secondary">
                <button className="btn btn-primary" onClick={confirmerPublication}>
                  Publier
                </button>
                <button className="btn btn-secondary" onClick={() => setShowDialog(false)}>
                  Annuler
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
