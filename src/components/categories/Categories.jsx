import './categories.css'

export const Categories = () => {

  const categoryList = ['todos', "accesorios", "anal", "consoladores", "vibradores", "lubricantes", "lenceria"]

  return(
  <div className='category-list-container'>
    {categoryList.map((category, i) => {
      return <button className='category-btn' key={i}>{category}</button>
    })}

  </div>)
}