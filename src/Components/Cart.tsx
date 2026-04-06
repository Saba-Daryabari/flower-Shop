import { useCart } from "../context/CartContext";
import "../styles/cart.scss";

export default function Cart() {
  const { items, removeItem, updateQty, clearCart, total, itemCount, isOpen, closeCart } =
    useCart();

  return (
    <>
      {/* backdrop */}
      <div
        className={`cart-backdrop ${isOpen ? "cart-backdrop--visible" : ""}`}
        onClick={closeCart}
      />

      {/* drawer */}
      <aside className={`cart-drawer ${isOpen ? "cart-drawer--open" : ""}`}>
        <div className="cart-header">
          <h2 className="cart-title">
            Your Cart{" "}
            {itemCount > 0 && (
              <span className="cart-count">{itemCount}</span>
            )}
          </h2>
          <button className="cart-close" onClick={closeCart} aria-label="Close cart">
            ✕
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <span className="cart-empty-icon">🌸</span>
            <p>Your cart is empty</p>
            <small>Add some beautiful flowers!</small>
          </div>
        ) : (
          <>
            <ul className="cart-items">
              {items.map((item) => {
                const imgUrl = `http://localhost:3000${item.product.image}`;
                const itemKey = `${item.product.id}-${item.variant?.size ?? ""}`;
                return (
                  <li key={itemKey} className="cart-item">
                    <img
                      src={imgUrl}
                      alt={item.product.title}
                      className="cart-item-img"
                    />
                    <div className="cart-item-details">
                      <p className="cart-item-title">{item.product.title}</p>
                      {item.variant && (
                        <p className="cart-item-variant">{item.variant.size}</p>
                      )}
                      <p className="cart-item-price">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                      <div className="cart-item-qty">
                        <button
                          onClick={() =>
                            updateQty(item.product.id, item.variant?.size, item.quantity - 1)
                          }
                        >
                          −
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQty(item.product.id, item.variant?.size, item.quantity + 1)
                          }
                          disabled={
                            item.variant
                              ? item.quantity >= item.variant.stock
                              : false
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      className="cart-item-remove"
                      onClick={() => removeItem(item.product.id, item.variant?.size)}
                      aria-label="Remove item"
                    >
                      ✕
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className="cart-checkout-btn">Proceed to Checkout</button>
              <button className="cart-clear-btn" onClick={clearCart}>
                Clear Cart
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
