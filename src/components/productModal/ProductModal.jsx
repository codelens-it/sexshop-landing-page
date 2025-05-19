import './productModal.css'
import { useState, useContext } from 'react'
import CatalogContext from '@/context/CatalogContext.jsx'


const ProductModal = ({id, isOpen}) => {


  /*
- Definir onClose
- Definir estado del producto
*/

const { getProductById } = useContext(CatalogContext)

const [product, setProduct] = useState(getProductById(id))

const onClose = () => {
// Cerrar modal
return 
}

if(!isOpen) return  

else return (
<div id='product-modal-container'>
<dialog id='product-detail'>
<h3></h3>
<div>
  
</div>
<p>description</p>
<button onClick={() => onClose()}><img src="/icons/close-menu.svg" alt="Cerrar modal" /></button>
  </dialog>
  </div>
  )
}


export default ProductModal;