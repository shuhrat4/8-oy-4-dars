import { useQuery } from "@tanstack/react-query";
import { useAxios } from "../hook/useAxios";
import HomeProductItem from "./HomeProductItem";

interface HomeProductsType {
  categoryId: number | string;
}

export interface ProductType {
  id: string | number; 
  name: string;
  img: string;
  typeId: string;
  sizeId: number;
  price: string;
  isSaved: number;
}

const HomeProducts = ({ categoryId }: HomeProductsType) => {
  const axios = useAxios(); 

  const { data = [] } = useQuery<ProductType[]>({
    queryKey: ["product", categoryId],
    queryFn: () =>
      axios.get(`/products?categoryId=${categoryId}`).then((res) => res.data),
  });

  return (
    <div className="flex gap-5">
      {data.map((item: ProductType) => (
        <HomeProductItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default HomeProducts;
