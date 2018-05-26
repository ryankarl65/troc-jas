import { User } from "../user/user";
import { Categorie } from "../categorie/categorie";


export interface Article {
  user: User;
  categorie: Categorie;
  marque: string;
  description: string;
  prix: number;
  quantité: number;
  date_ajout: Date;
  date_retrait: Date;
  etat: string;
  ville: string;
  pays: string;
  longitude: number;
  latitude: number;
}
