import './accordionItem.css'
import { useState } from 'react';

const AccordionItem = ({title, children}) => {
  const [isOpen, setIsOpen] = useState(false)

  return(
    <div lassName='accordion-item-container' onClick={() => setIsOpen(!isOpen)}>
      <div className='accordion-item-title'>
        <span>{title}</span>
        <button className='accordion-item-expand-btn'>
          <img src="/icons/expand-arrow.svg" alt="Expand button" />
          </button>
      </div>
      <div lassName='accordion-item-content'>
        {children}
      </div>
    </div>
  )
}

export default AccordionItem;