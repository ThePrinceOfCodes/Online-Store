import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
  const { filtered_products: products , list_view, grid_view} = useFilterContext();

  if (products.length < 1) {
    return <h5 style={{ textTransform: 'none'}}>
      sorry no products match your search...
    </h5>
  }

  if (!grid_view) {
    return <ListView products = {products} />
  }

  return <GridView products = {products} />
}

export default ProductList
