import React from "react";
import { useNavigate } from "react-router-dom";
import ProductStockCard from "../../components/ProductStockCard";

const Products = () => {
  const [prods, setProds] = React.useState([]);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (!localStorage.getItem("token")) return navigate("/login");

    fetch(process.env.REACT_APP_BASE_URL + "/product/cook", {
      method: "GET",
      headers: { Authorization: localStorage.getItem("token") },
    }).then((res) => {
      if (res.status === 200) res.json().then((data) => setProds(data));
      else if (res.status === 401 || res.status === 405)
        return navigate("/login");
      else return alert("Something went wrong! Please try again.");
    });
  }, [navigate]);

  return (
    <div className="d-flex flex-wrap p-2">
      {prods.map((prod, index) => (
        <ProductStockCard
          name={prod.name}
          pid={prod._id}
          key={index}
          stock={prod.inStock}
          update={(val) => {
            for (let i = 0; i < prods.length; i++)
              if (prods[i]._id === prod._id) {
                prods[i].inStock = val;
                setProds([...prods]);
                break;
              }
          }}
        />
      ))}
    </div>
  );
};

export default Products;
