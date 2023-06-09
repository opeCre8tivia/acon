interface Row {
  feature: string;
  specifications: string;
}

export interface Product {
  id: number;
  name: string;
  caption: string;
  description: string;
  image: string;
  isFeatured: boolean;
  bullet_points_title: string;
  bullet_points: string[];
  tableRows?: Row[];
  category: number;
}

export interface Category {
  id: number;
  name: string;
  title: string;
  description: string;
  logo: string;
}
