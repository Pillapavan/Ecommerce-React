import './recommended.css'
import Button from "../Components/Button"

const Recommended = ({handleClick}) => {
  return (
    <div>
      <h2 className='recommended-title'>Recommended</h2>
      <section className='recommended-flex'>
        <Button handleClick={handleClick} value="" title="All Products"/>
        <Button handleClick={handleClick} value="Nike" title="Nike"/>
        <Button handleClick={handleClick} value="Adidas" title="Adidas"/>
        <Button handleClick={handleClick} value="Puma" title="Puma"/>
        <Button handleClick={handleClick} value="Vans" title="Vans"/>

      </section>
    </div>
  )
}

export default Recommended