import { memo } from 'react'

function Product ({ name }) {
  console.log('RENDERIZOU O PRODUTO!')

  return (
    <li>
      <strong>{name}</strong>
    </li>
  )
}

export default memo(Product);