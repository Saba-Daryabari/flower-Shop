import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/cart-page.scss";

export default function CartPage() {
  const { items, removeItem, updateQty, clearCart, total, itemCount } = useCart();

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-page-empty">
          <div className="cart-page-empty-icon">🌸</div>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added any flowers yet.</p>
          <Link to="/shop" className="cart-page-shop-btn">Browse the Shop</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-page-banner">
        <h1>Your Cart</h1>
        <p>{itemCount} {itemCount === 1 ? "item" : "items"}</p>
      </div>

      <div className="cart-page-content">
        {/* Items */}
        <div className="cart-page-items">
          <div className="cart-page-items-header">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Total</span>
          </div>

          {items.map((item) => {
            const imgUrl = `http://localhost:3000${item.product.image}`;
            const itemKey = `${item.product.id}-${item.variant?.size ?? ""}`;
            return (
              <div key={itemKey} className="cart-page-item">
                <div className="cart-page-item-product">
                  <img src={imgUrl} alt={item.product.title} className="cart-page-item-img" />
                  <div className="cart-page-item-meta">
                    <p className="cart-page-item-title">{item.product.title}</p>
                    {item.variant && (
                      <p className="cart-page-item-variant">Size: {item.variant.size}</p>
                    )}
                    <button
                      className="cart-page-item-remove"
                      onClick={() => removeItem(item.product.id, item.variant?.size)}
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <p className="cart-page-item-price">${item.product.price}</p>

                <div className="cart-page-item-qty">
                  <button
                    onClick={() => updateQty(item.product.id, item.variant?.size, item.quantity - 1)}
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQty(item.product.id, item.variant?.size, item.quantity + 1)}
                    disabled={item.variant ? item.quantity >= item.variant.stock : false}
                  >
                    +
                  </button>
                </div>

                <p className="cart-page-item-total">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </p>
              </div>
            );
          })}

          <div className="cart-page-actions">
            <button className="cart-page-clear" onClick={clearCart}>Clear Cart</button>
            <Link to="/shop" className="cart-page-continue">← Continue Shopping</Link>
          </div>
        </div>

        {/* Summary */}
        <div className="cart-page-summary">
          <h2 className="cart-page-summary-title">Order Summary</h2>

          <div className="cart-page-summary-rows">
            <div className="cart-page-summary-row">
              <span>Subtotal ({itemCount} items)</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="cart-page-summary-row">
              <span>Delivery</span>
              <span className="cart-page-free">Free</span>
            </div>
            <div className="cart-page-summary-row cart-page-summary-total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <button className="cart-page-checkout">Proceed to Checkout</button>

          <div className="cart-page-trust">
            <p>🔒 Secure checkout</p>
            <p>🌸 Fresh flowers guaranteed</p>
            <p>🚚 Free delivery on all orders</p>
          </div>
        </div>
      </div>
    </div>
  );
}
