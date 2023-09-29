import { useContext } from "react";
import { Cart } from "./Context";

 const Shoppingcart = ({ prod}) => {

    const {cart,setCart}=useContext(Cart)

    console.log(cart);
  
    return (
      
      <div className="products">
            <img src={prod.image} alt={prod.name}/> 
            <div className="productDesc">
                <span style={{fontWeight:700}}> 
                    {prod.name}
                </span>  
                <span>
                    ${prod.price}
                </span> 
            </div>  
            {cart.includes(prod)?(
            <button className="add" onClick={()=>setCart([...cart,prod])}>
                Remove to Cart
            </button> 
            ):(
            <button className="add" onClick={()=>setCart([...cart,prod])}>
            Add to Cart
        </button> 
            )}
      </div>
    );
  };

  export default Shoppingcart
