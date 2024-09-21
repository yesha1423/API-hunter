import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import ProductsTable from "../Components/ProductsTable";
import axios from "axios";


const Dashboard = () => {

  const { authState, logoutUser } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    setLoading(true)
    axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products`)
    .then((res)=>{
      setLoading(false)
      setProducts(res.data.data)
      
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  },[])
  const handleLogout = () => {
    logoutUser();   
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <button data-testid="logout-btn" className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <p data-testid="user-token" className="token-info">
        Token: {authState.token}
      </p>
      {loading ? (
        <p className="products-loading">Loading...</p>
      ) : (
        <ProductsTable data={products} />
      )}
    </div>
  );
};

export default Dashboard