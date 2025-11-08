export interface MenuNode {
  title: string;
  url: string;
  level: number;
  links?: MenuNode[];
}

export type Product = {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
};
