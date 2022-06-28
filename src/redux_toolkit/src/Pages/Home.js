import React from 'react'
import Products from '../components/Products'

const Home = () => {
    return (
        <div className='p-2 text-2xl font-bold' >Welcome to Redux Store
        <section>
            <Products/>
        </section>
        </div>
    )
}

export default Home