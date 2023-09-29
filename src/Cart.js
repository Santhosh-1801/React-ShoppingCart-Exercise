import React, { useContext, useEffect, useState } from 'react'
import Shoppingcart from './Shoppingcart'
import { Cart } from './Context';

const Carts = () => {

  const {cart,setCart}=useContext(Cart);


  const [total,setTotal]=useState();

  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price),0))
  },[cart])
  return (
    <div>
      <span style={{fontSize:30}}>
        My Cart 
      </span> 
      <br/> 
      <br/>
      <span style={{fontSize:30}}>
        Total Value:{total}
      </span>
      <div className='productContainer'> 
      {console.log(cart)}
      {cart.map(prod=>(
            <Shoppingcart prod={prod} cart={cart} setCart={setCart}/>
        ))}
      </div>
    </div>
  )
}

export default Carts