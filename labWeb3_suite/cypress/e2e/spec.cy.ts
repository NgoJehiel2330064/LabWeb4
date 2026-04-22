describe("Header", () => {
  beforeEach(() => cy.visit("/"));

  it("affiche le composant header", () => {
    cy.get('[data-testid="header"]').should("be.visible");
  });

  it("contient un lien vers la page de connexion", () => {
    cy.get('[data-testid="header"]').find('a[href="/login"]').should("exist");
  });

  it("affiche le logo CEPI", () => {
    cy.get('[data-testid="header"]')
      .find("img")
      .invoke("attr", "src")
      .should("include", "logo");
  });
});

describe("Footer", () => {
  beforeEach(() => cy.visit("/"));

  it("affiche le composant footer", () => {
    cy.get('[data-testid="footer"]').should("be.visible");
  });

  it("contient le nom de l organisation", () => {
    cy.get('[data-testid="footer"]').should("contain", "Perfectionnement en Informatique");
  });

  it("affiche les icones de reseaux sociaux", () => {
    cy.get('[data-testid="footer"]').find(".bi-facebook").should("exist");
    cy.get('[data-testid="footer"]').find(".bi-linkedin").should("exist");
  });
});

describe("BlogList", () => {
  beforeEach(() => cy.visit("/"));

  it("affiche le composant blog-list", () => {
    cy.get('[data-testid="blog-list"]', { timeout: 10000 }).should("be.visible");
  });

  it("contient au moins une carte article", () => {
    cy.get('[data-testid="blog-list"]', { timeout: 10000 })
      .find('[data-testid="blog-card"]')
      .should("have.length.greaterThan", 0);
  });
});

describe("BlogCard", () => {
  beforeEach(() => cy.visit("/"));

  it("affiche au moins une BlogCard", () => {
    cy.get('[data-testid="blog-card"]', { timeout: 10000 }).first().should("be.visible");
  });

  it("chaque carte contient une image entrepreneur", () => {
    cy.get('[data-testid="blog-card"]', { timeout: 10000 })
      .first()
      .find("img")
      .invoke("attr", "src")
      .should("include", "entrepreneur");
  });

  it("chaque carte contient un bouton Lire", () => {
    cy.get('[data-testid="blog-card"]', { timeout: 10000 })
      .first()
      .find("a.btn")
      .should("exist");
  });
});

describe("BlogDetails", () => {
  beforeEach(() => cy.visit("/blog/1"));

  it("affiche le titre de l article", () => {
    cy.get('[data-testid="blog-titre"]', { timeout: 10000 }).should("be.visible");
  });

  it("affiche le contenu de l article", () => {
    cy.get('[data-testid="blog-contenu"]', { timeout: 10000 }).should("be.visible");
  });

  it("affiche l image de l article", () => {
    cy.get('[data-testid="blog-page"]', { timeout: 10000 })
      .find("img")
      .invoke("attr", "src")
      .should("include", "entrepreneur");
  });
});

describe("CommentList", () => {
  beforeEach(() => cy.visit("/blog/1"));

  it("affiche le composant comment-list", () => {
    cy.get('[data-testid="comment-list"]', { timeout: 10000 }).should("be.visible");
  });
});

describe("Comment", () => {
  beforeEach(() => cy.visit("/blog/1"));

  it("affiche au moins un commentaire", () => {
    cy.get('[data-testid="comment"]', { timeout: 10000 }).first().should("be.visible");
  });

  it("chaque commentaire contient un contenu", () => {
    cy.get('[data-testid="comment"]', { timeout: 10000 })
      .first()
      .should("not.be.empty");
  });
});

describe("AddComment", () => {
  beforeEach(() => cy.visit("/blog/1"));

  it("affiche le formulaire d ajout de commentaire", () => {
    cy.get('[data-testid="add-comment"]', { timeout: 10000 }).should("be.visible");
  });

  it("contient un champ de saisie de commentaire", () => {
    cy.get('[data-testid="comment-input"]', { timeout: 10000 }).should("be.visible");
  });

  it("contient un bouton de soumission", () => {
    cy.get('[data-testid="submit-comment"]', { timeout: 10000 }).should("be.visible");
  });

  it("affiche une alerte si le commentaire est vide", () => {
    cy.get('[data-testid="submit-comment"]', { timeout: 10000 }).click();
    cy.get(".alert").should("be.visible");
  });
});

describe("FormulairePublication", () => {
  beforeEach(() => cy.visit("/formulaire"));

  it("affiche le formulaire de publication", () => {
    cy.get('[data-testid="formulaire-publication"]', { timeout: 10000 }).should("be.visible");
  });

  it("contient les champs titre, auteur, contenu et date", () => {
    cy.get('[data-testid="input-titre"]', { timeout: 10000 }).should("be.visible");
    cy.get('[data-testid="input-auteur"]').should("be.visible");
    cy.get('[data-testid="input-contenu"]').should("be.visible");
    cy.get('[data-testid="input-date"]').should("be.visible");
  });

  it("contient le bouton de soumission", () => {
    cy.get('[data-testid="submit-publication"]', { timeout: 10000 }).should("be.visible");
  });

  it("affiche le dialog de confirmation apres soumission valide", () => {
    cy.get('[data-testid="input-titre"]', { timeout: 10000 }).type("Test article");
    cy.get('[data-testid="input-auteur"]').type("Auteur test");
    cy.get('[data-testid="input-contenu"]').type("Contenu de test suffisamment long");
    cy.get('[data-testid="input-date"]').type("2024-01-01");
    cy.get('[data-testid="submit-publication"]').click();
    cy.get('[data-testid="dialog-confirmation"]', { timeout: 10000 }).should("be.visible");
  });
});
