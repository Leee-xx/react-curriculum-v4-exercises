import { NavLink, useParams, useLocation } from 'react-router';

export default function ProductDetails() {
  //export default function ProductDetails({ products }) {
  const { id } = useParams();
  const location = useLocation();
  const { products } = location.state || [];

  const product = products.find((p) => p.id === id);

  return (
    <section>
      <h2>Product Details</h2>``
      {product ? (
        <div
          style={{ border: '1px solid #ddd', borderRadius: 10, padding: 12 }}
        >
          <img
            src={product.previewImage}
            alt={product.name}
            style={{ width: '100%', maxWidth: 420, borderRadius: 8 }}
          />
          <h3 style={{ marginTop: 10 }}>
            {product.name} ({id})
          </h3>
          <p style={{ margin: 0 }}>
            <strong>${product.price.toFixed(2)}</strong>
          </p>
          <p style={{ marginTop: 8 }}>{product.description}</p>
        </div>
      ) : (
        <p>
          No product found for id: <code>{String(id)}</code>
        </p>
      )}
      <div style={{ marginTop: 12 }}>
        <NavLink to="/lessons/lesson-10">Go Home</NavLink>
      </div>
    </section>
  );
}
