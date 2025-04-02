export interface IReview {
  _id: string;
  productId: string;
  customerId: string;
  review: number;
  description: string;
  info: any;
}

export interface IWish {
  product: any;
  _id: string;
  productId: string;
  customerId: string;
  review: number;
  description: string;
  info: any;
}
