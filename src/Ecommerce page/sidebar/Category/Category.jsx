import Input from '../../Components/Input'
import './Category.css'

const Category = ({handleChange}) => {
  return (
    <div>
      <h2 className='sidebar-title'>Category</h2>
    <label className='sidebar-container'>
      <input onClick={handleChange} type="radio"  value="" name="test"/>
      <span className='checkmark'></span>All
    </label>

    <Input 
    handleChange={handleChange}
    name="test"
    value="sneakers"
    title = "Sneakers"/>

    <Input 
    handleChange={handleChange}
    name="test"
    value="flats"
    title = "Flats"/>

    <Input 
    handleChange={handleChange}
    name="test"
    value="sandals"
    title = "Sandals"/>

    <Input 
    handleChange={handleChange}
    name="test"
    value="heels"
    title = "Heels"/>
    </div>
  )
}

export default Category