export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  photo: string;
}

export interface Menu {
  highlights?: Product[];
  hamburgers?: Product[];
  combos?: Product[];
  drinks?: Product[];
}

export interface Order {
  products: Product[];
  name: string;
  phone: string;
  cep: string;
  address: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
}
