import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const items = useSelector((state) => state.cart)
    return (
        <div className="flex justify-between items-center gap-2 bg-slate-500 p-4">
            <h2>Redux Store</h2>
            <div className='flex gap-4 '>
                <Link to="/">Home</Link>
                <Link to="/cart">Cart</Link>
                <h2 className='font-bold'>Cart Item : {items.length}</h2>
            </div>
        </div>
    )
}

export default Navbar