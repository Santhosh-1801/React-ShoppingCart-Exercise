import React, { useContext, useState } from 'react' 
import { faker } from '@faker-js/faker';
import Shoppingcart from './Shoppingcart';
import Context, { Cart } from './Context';


const Home = () => {  

    const {cart,setCart}=useContext(Cart);

    console.log(useContext(Cart))
    faker.seed(100)



    const productsArray = [...Array(20)].map((p) => ({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.url()
      })); 

      console.log(productsArray); 


      const [products]=useState(productsArray); 

  return (
    <div className='productContainer'> 
        {products.map((product)=>(
            <Shoppingcart prod={product} cart={cart} setCart={setCart} key={product.id}/>
        ))}
    </div>
  )
}

export default Home