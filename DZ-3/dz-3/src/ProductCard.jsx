function ProductCard({ product, onAdd }) {
  return (
    <div className="product-card">
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <button onClick={onAdd}>Добавить в корзину</button>
    </div>
  )
}

export default ProductCard;
