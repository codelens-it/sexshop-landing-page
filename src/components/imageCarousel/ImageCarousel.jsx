import './imageCarousel.css'
import { useState } from 'react'

const ImageCarousel = ({ images }) => {

  const [mainImg, setMainImg] = useState(images[0])

  return (
    <div id='image-carousel-container'>
      <div className='main-image'><img src={mainImg.src} alt={mainImg.alt} /></div>
      <div className='image-list'>
        {images.map((img, i) => {
          return <img key={'key' + i} className='image-carousel-item' src={img.src} alt={img.alt} />
        })}
      </div>
    </div>)
}