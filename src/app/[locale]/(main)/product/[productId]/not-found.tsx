import { ErrorCard } from "~/islands/cards/error-card";
import { Shell } from "~/islands/shells/shell";

export default function ProductNotFound() {
  return (
    <Shell variant="centered" className="max-w-md">
      <ErrorCard
        title="Product not found"
        description="The product may have expired or you may have already updated your product"
        retryLink="/"
        retryLinkText="Go to Home"
      />
    </Shell>
  );
}
