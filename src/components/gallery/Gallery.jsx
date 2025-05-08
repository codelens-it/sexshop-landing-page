import { useContext } from "react";
import { CatalogContext } from '@/context/CatalogContext'

const Gallery = () => {
  const { getProductsByCategory } = useContext(CatalogContext)
  const test = getProductsByCategory({})

  console.log(test)
  return (<div className="section">
    <h2>Tu próxima aventura comienza acá</h2>
    <span>Explorá una selección íntima pensada para despertar tus sentidos. Productos únicos, atención discreta y placer a tu medida.</span>
    <div className="catalog-container"></div>
  </div>)
}

export default Gallery;