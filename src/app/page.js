'use client'

import { useEffect, useMemo, useState } from 'react';
import { products as productsData } from './buy.json';
import Product from '@/components/Product';
import { MainComponent } from './styles';
import ExempleTitle from '@/components/exempleTitle';

export default function Home() {
  const [products, setProducts] = useState(productsData);
  const [newProduct, setNewProduct] = useState('')

  function handleSubmit(event) {
    event.preventDefault();

    setProducts([...products, { name: newProduct }])
  }

  useEffect(() => {
    document.title = "Shopping-List"
  }, [])

  const [titleH1] = useState("Shopping List");

  const memorizedExempleTitle = useMemo(() => <ExempleTitle title={titleH1} />, [titleH1])

  return (
    <MainComponent>
      {memorizedExempleTitle}
      <br />
      <form onSubmit={handleSubmit}>
        <input type="text" 
        value={newProduct}
        onChange={(event) => setNewProduct(event.target.value)}
         />
      </form>
      <br />
      <ul>
        {products.map((products) => (
          <Product key={products.name} name={products.name} />
        ) )}
      </ul>
    </MainComponent>
  )
}
