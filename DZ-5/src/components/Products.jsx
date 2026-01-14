import "./style.css";



const Products = ({ set_page }) => {
  const products = [
      { id: 1, title: "капуста" },
      { id: 2, title: "скетбук" },
      { id: 3, title: "покемон" },
  ];

  return (
    <div>
      <div className="top">
          <button onClick={() => set_page("login")}>Выйти</button>
      </div>
      <h2>Список товаров</h2>

      {products.map((item) => {
           return <p key={item.id}>{item.title}</p>;
      })}
    </div>
  );
};




export default Products;
