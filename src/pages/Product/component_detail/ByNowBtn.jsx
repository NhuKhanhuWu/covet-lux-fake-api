/** @format */

import { Link } from "react-router-dom";

export function ByNowBtn({ product, amount, handleAddToCart }) {
  return (
    <Link
      onClick={() =>
        handleAddToCart(
          product,
          amount,
          () => {},
          () => {}
        )
      }
      to={`/covet-lux-fake-api/cart/`}
      className="fill-btn">
      Buy now
    </Link>
  );
}
