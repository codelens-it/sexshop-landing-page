import './galleryCard.css'

export const GalleryCard = ({productName, description, img, alt}) => {
  return(
    <div className="gallery-card">
      <div className="card-img"><img src={img} alt={alt} /></div>
      <div className="card-description">
        <h4>{productName}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}