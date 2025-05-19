import './gallery.css'
import { useContext } from "react";
import { CatalogContext } from '@/context/CatalogContext'
import { GalleryCard } from "@/components/GalleryCard/GalleryCard";
import { Categories } from '../categories/Categories';
import Loader from '../loader/Loader';
import ProductModal from '../productModal/ProductModal';

const Gallery = () => {
  const { cardList } = useContext(CatalogContext)
  const cardData = cardList
  const cards = cardData.data

  return (<div className="section gallery">
    <h2>Tu próxima aventura comienza acá</h2>
    <span>Explorá una selección íntima pensada para despertar tus sentidos. Productos únicos, atención discreta y placer a tu medida.</span>
    <Categories />

    {!cards ?
      <Loader/>
      :
      <div className="catalog-container">
        {
          cards.map((card) => (<GalleryCard key={card.id} productName={card.name} description={card.description} img={card.image} alt={card.imgAlt} />
          ))
        }
      </div>}
  <ProductModal/>
  </div>)
}

export default Gallery;