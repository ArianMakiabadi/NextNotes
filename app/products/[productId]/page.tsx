import type { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { productId } = await params;

  // here you can fetch data from backend to get the relevant desc of the selected product

  return {
    title: `Product ${productId}`,
    description: `Details for product ${productId}.`,
  };
}

async function ProductDetailPage({ params }: Props) {
  const { productId } = await params;
  return <div>this is the {productId}th product</div>;
}
export default ProductDetailPage;
