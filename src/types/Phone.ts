export interface Phone {
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  ram: string;
  image: string;
  color: string;
  category: string;
  discount: number;
  id: string;
  itemId: string;
  phoneId: string;
  year: number;
}

export interface Good extends Phone {
  quantity: number;
}
