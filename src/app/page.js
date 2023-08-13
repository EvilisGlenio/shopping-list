'use client'

import { useState } from 'react';
import { products as productsData } from './buy.json';
import styles from './page.module.css'
import Product from '@/components/Product';

export default function Home() {
  const [products, setProducts] = useState(productsData);
  const [newProduct, setNewProduct] = useState('')

  function handleSubmit(event) {
    event.preventDefault();

    setProducts([...products, { name: newProduct }])
  }

  return (
    <main style={styles}>
      <form onSubmit={handleSubmit}>
        <input type="text" 
        value={newProduct}
        onChange={(event) => setNewProduct(event.target.value)}
         />
      </form>
      <ul>
        {products.map((products) => (
          <Product key={products.name} name={products.name} />
        ) )}
      </ul>
    </main>
  )
}
