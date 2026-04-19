import { notFound } from "next/navigation";

async function Review({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { reviewId, productId } = await params;
  if (parseInt(reviewId) > 100) notFound();
  return (
    <div>
      This is Review number #{reviewId} of {productId}th product
    </div>
  );
}
export default Review;
