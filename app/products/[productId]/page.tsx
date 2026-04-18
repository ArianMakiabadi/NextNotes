async function ProductDetailPage({
  params,
}: {
  params: Promise<{ productId: number }>;
}) {
  const { productId } = await params;
  return <div>this is the {productId}th product</div>;
}
export default ProductDetailPage;
