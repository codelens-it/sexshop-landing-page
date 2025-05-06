import { createContext } from 'react'
import { products } from '@/data/products.json'

const CatalogContext = createContext(null)

export const CatalogProvider = () => {

  const getProductCardList = () => {
    const cardList = products.map((product) => {
      return {
        id: product.id,
        name: product.name,
        description: product.description,
        image: product.images[0]
      }
    })
    return cardList
  }

  const getProductById = (id) => {
    console.log(id)
    return
  }

  const getProductsByCategory = (category) => {
    console.log(category)
    return
  }

  return(
    <CatalogContext.Provider value={
      {getProductById,
      getProductsByCategory
    }}>
      {children}
    </CatalogContext.Provider>
  )
}