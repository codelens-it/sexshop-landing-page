import './accordionItem.css'
import { useState } from 'react';

const AccordionItem = ({title, children}) => {
  const [isOpen, setIsOpen] = useState(false)

  return(
    <div className={`accordion-item-container ${isOpen && 'open'}`} onClick={() => setIsOpen(!isOpen)}>
      <button className='accordion-item-title'>
        <span>{title}</span>
          <img className='accordion-arrow' src="/icons/expand-arrow.svg" alt="Expand button" />
      </button>
      <div className='accordion-item-content'>
        {children}
      </div>
    </div>
  )
}

export default AccordionItem;