import './productModal.css'
import { useContext, useEffect, useRef } from 'react'
import { CatalogContext } from '@/context/CatalogContext.jsx'
import ImageCarousel from '@/components/imageCarousel/ImageCarousel.jsx'
import AccordionItem from '@/components/accordionItem/AccordionItem.jsx'


const ProductModal = () => {

  const { getProductById, currentId, setCurrentId } = useContext(CatalogContext)
  const product = getProductById(currentId)
  const modalRef = useRef(null)

  useEffect(() => {
    if (product && modalRef.current) modalRef.current.show()
  }, [product])

  const onClose = () => {
    setCurrentId(null)
    modalRef.current?.close()
    return
  }

  if (!product) return null
  

  return (
    <dialog id='product-modal-container' ref={modalRef}>
      <div id='product-detail'>
        <h3>{product.name}</h3>
        <ImageCarousel images={product.images}/>
        <p>{product.description}</p>
        <AccordionItem title={"Características"}>
        <ul>
          {product.features.map((feature, i) => {
            return <li key={i}>{feature}</li>
          })}
        </ul>
        </AccordionItem>
        <AccordionItem title={"Medidas"}>
          {product.measurements.type === 'dimensions' ? 
            (<ul>
              <li>Ancho: {product.measurements.dimensions.width}</li>
              <li>Alto: {product.measurements.dimensions.height}</li>
              <li>Grosor: {product.measurements.dimensions.thickness}</li>
            </ul>)
            : (
              <div>
                <span>Talles disponibles:</span>
                <ul>
                  {product.measurements.sizes?.map((size) => {
                    return <li>{size}</li>
                  })}
                </ul>
              </div>
            )  
        }
        </AccordionItem>
        <AccordionItem title={"Precio y disponibilidad"}>
          <div>
            <span>{new Intl.NumberFormat('es-AR', {
              style: "currency",
              currency: "ARS"
            }).format(product.price)
            }</span>
            <br/>
            <span>{product.inStock ? "Disponible" : "Sin Stock"}</span>
          </div>
        </AccordionItem>
      </div>
      <button onClick={() => onClose()}>
        <img src="/icons/close-menu.svg" alt="Cerrar modal" />
      </button>
    </dialog>
  )
}


export default ProductModal;