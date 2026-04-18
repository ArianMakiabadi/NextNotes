async function Review({
  params,
}: {
  params: Promise<{ productId: number; reviewId: number }>;
}) {
  const { reviewId, productId } = await params;
  return (
    <div>
      This is Review number #{reviewId} of {productId}th product
    </div>
  );
}
export default Review;
