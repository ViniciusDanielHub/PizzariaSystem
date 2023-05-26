export type OrderProps = {
  id: string;
  table: number;
  status: boolean;
  draft: boolean;
  name: string | null;
}

export type HomeProps = {
  orders: OrderProps[];
}

export type OrderItemProps = {
  id: string;
  amount: number;
  order_id: string;
  product_id: string;
  product: {
    id: string;
    name: string;
    description: string;
    price: string;
    banner: string;
  }
  order: {
    id: string;
    table: string | number;
    status: boolean;
    name: string | null;
  }
}

export type ItemProps = {
  id: string;
  name: string;
}

export interface CategoryProps {
  categoryList: ItemProps[];
}
