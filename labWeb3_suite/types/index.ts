export interface Publication {
  id: number | string;
  titre: string;
  auteur: string;
  date: string;
  contenu: string;
}

export interface Commentaire {
  id: number | string;
  postId: number | string;
  contenu: string;
  date: string;
}
