import './gallery.css'
import { useContext } from "react";
import { CatalogContext } from '@/context/CatalogContext'
import { GalleryCard } from "@/components/GalleryCard/GalleryCard";

const Gallery = () => {
  const { getProductsByCategory } = useContext(CatalogContext)
  const cardData = getProductsByCategory({})
  const cards = cardData.data
  console.log(cards)

  return (<div className="section gallery">
    <h2>Tu próxima aventura comienza acá</h2>
    <span>Explorá una selección íntima pensada para despertar tus sentidos. Productos únicos, atención discreta y placer a tu medida.</span>
    <div className="catalog-container">
    {
      cards.map((card) => (<GalleryCard key={card.id} productName={card.name} description={card.description} img={card.image} alt={card.imgAlt}/>
      ))
    }
    </div>
  </div>)
}

export default Gallery;