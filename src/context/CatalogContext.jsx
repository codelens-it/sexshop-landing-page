import { createContext } from 'react'
import products from '@/data/products.json' 

export const CatalogContext = createContext(null)

export const CatalogProvider = ({ children }) => {

  const getProductCardList = () => {
    const cardList = products.map((product) => {
      return {
        id: product.id,
        name: product.name,
        description: product.description,
        image: product.images[0]
      }
    })
    console.log(cardList)
    return cardList
  }

  const getProductById = (id) => {
    const card = products.find((card) => card.id === id)
    return card
  }

  const getProductsByCategory = (category) => {
    console.log(category)
    return
  }

  return(
    <CatalogContext.Provider value={
      {getProductById,
      getProductsByCategory,
      getProductCardList
    }}>
      {children}
    </CatalogContext.Provider>
  )
}