import * as Yup from 'yup';

export type Product = {
  id: string,
  imgUrl:string,
  productName: string,
  description: string,
  price: number,
  title: string
};

export const ProductSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string(),
  price: Yup.number().required(),
});
