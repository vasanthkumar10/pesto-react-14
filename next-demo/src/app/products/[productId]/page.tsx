import { notFound } from "next/navigation";

interface ProductDetailsProp {
  params: {
    productId: string;
  };
  searchParams: object;
}

export default function ProductDetails(props: ProductDetailsProp) {
  if (Number(props.params.productId) > 100) notFound();
  // console.log("product", props);
  return <h1>Product details - {props.params.productId}</h1>;
}
