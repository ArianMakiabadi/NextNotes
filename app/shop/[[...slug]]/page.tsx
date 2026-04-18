async function ShopPage({
  params,
}: {
  params: Promise<{ slug: string | number }>;
}) {
  const x = await params;
  console.log(x);
  return <div>ShopPage</div>;
}
export default ShopPage;
