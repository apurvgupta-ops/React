import React, { useState, useEffect } from 'react'
import { add } from '../Store/cartSlice'
import { useDispatch } from 'react-redux'

const Products = () => {
  const dispatch = useDispatch()
  const [products, setProducts] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://fakestoreapi.com/products");
      const res = await data.json()
      console.log(res)
      setProducts(res)
    }
    fetchData()
  }, [])


  const handleAdd = (product) => {
    dispatch(add(product))
    // console.log(dispatch(add(product)))
  }
  return (
    <div className='grid grid-cols-5 gap-2'>

      {
        products.map((product) => (
          <div key={product.id} className="w-auto h-auto my-4 rounded-lg p-2 ">
            <img src={product.image} alt="images" className='h-16' />
            <h2 className='text-sm'>{product.title}</h2>
            <h2 className='text-sm' >{product.price}</h2>
            <button onClick={() => handleAdd(product)} className='bg-purple-600 rounded-lg p-1 text-sm'>Add to cart</button>
          </div>
        ))
      }

    </div>
  )
}

export default Products