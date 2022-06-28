import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../Store/cartSlice'
const Cart = () => {
  const dispatch = useDispatch()
  const product = useSelector(state => state.cart)

  const handleRemove = (productId) => {
    dispatch(remove(productId))
  }

  return (
    <div>
      {product.map((item) => (
        <div>
          <img src={item.image} alt="images" className='w-auto h-44 ' />
          <h2 className='text-sm'>{item.title}</h2>
          <h2 className='text-sm' >{item.price}</h2>
          <button onClick={() => handleRemove(item.id)} className='bg-purple-600 rounded-lg p-1 text-sm'>Remove from cart</button>
        </div>
      ))}
    </div>
  )
}

export default Cart