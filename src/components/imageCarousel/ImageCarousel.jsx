import './imageCarousel.css'
import { useState } from 'react'

const ImageCarousel = ({ images }) => {

  const [mainImg, setMainImg] = useState(images[0])

  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = (img, index) => {
    setMainImg(img)
    setSelectedIndex(index)
  }

  return (
    <div id='image-carousel-container'>
      <div className='main-image'>
        <img src={mainImg.src} alt={mainImg.alt} />
      </div>
      <div className='image-list-container'>
        {images.map((img, i) => {
          return <div
            onClick={() => { onSelect(images[i], i) }}
            onMouseOver={() => { onSelect(images[i], i) }}
            key={'key' + i}
            className={`image-carousel-item ${selectedIndex === i && 'selected'}`}
          >
            <img src={img.src} alt={img.alt} />
          </div>
        })}
      </div>
    </div>)
}

export default ImageCarousel;