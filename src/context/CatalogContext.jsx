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
        image: product.images[0].img,
        imgAlt: product.images[0].alt,
        category: product.category
      }
    })
    return cardList
  }

  const getProductById = (id) => {
    const card = products.find((card) => card.id === id)
    return card
  }

  
  const getProductsByCategory = ({category = null, limit = 6, page = 1}) => {
    const allCards= getProductCardList()
  
    const filteredCards = category 
    ? allCards.filter((card) => card.category.includes(category))
    : allCards

    const totalCards = filteredCards.length
    const totalPages = Math.ceil(totalCards / limit)
    const currentPage = Math.max(1, Math.min(page, totalPages || 1));
    const nextPage = page < totalPages ? page + 1 : null
    const start = (currentPage - 1) * limit
    const end = start + limit

    return {
      data: filteredCards.splice(start, end),
      totalCards,
      currentPage,
      totalPages,
      nextPage
    }
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