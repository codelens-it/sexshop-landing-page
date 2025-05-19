import './productModal.css'
import { useState, useContext, useEffect, useRef } from 'react'
import { CatalogContext } from '@/context/CatalogContext.jsx'


const ProductModal = () => {

const { getProductById, currentId, setCurrentId } = useContext(CatalogContext)
const [product, setProduct] = useState({})
const modalRef = useRef(null)

useEffect(() => {

  if(currentId) {
    const data = getProductById(currentId)
    setProduct(data)
    console.log('producto', product)
    modalRef.current.show()
  }

return

}, [currentId])


const onClose = () => {
setCurrentId(null)
setProduct(null)
modalRef.current.close()
return 
}


if(!product) return


else return (
<dialog id='product-modal-container' ref={modalRef}>
<div id='product-detail'>
<h3>hola</h3>
<div>
  
</div>
<p>description</p>
<button onClick={() => onClose()}><img src="/icons/close-menu.svg" alt="Cerrar modal" /></button>
  </div>
  </dialog>
  )
}


export default ProductModal;