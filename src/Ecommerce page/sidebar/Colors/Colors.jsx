import './Colors.css'
import '../Category/Category.css'
import Input from '../../Components/Input'

const Colors = ({handleChange}) => {
  return (
    <div>
       <h2 className='sidebar-title color-title'>Colors</h2>
    <label className='sidebar-container'>
      <input onClick={handleChange} type="radio"  value="" name="test3"/>
      <span className='checkmark all'></span>All
    </label>

    <Input 
    handleChange={handleChange}
    name="test3"
    value="black"
    title = "Black"
    color="black"/>

    <Input 
    handleChange={handleChange}
    name="test3"
    value="blue"
    title = "Blue"
    color="blue"/>

    <Input 
    handleChange={handleChange}
    name="test3"
    value="red"
    title = "Red"
    color="red"/>

    <Input 
    handleChange={handleChange}
    name="test3"
    value="green"
    title = "Green"
    color="green"/>


    <label className='sidebar-container'>
      <input type="radio" onClick={handleChange} value="white" name="test3"/>
      <span className='checkmark' style={{ background: "white", border: "2px solid black" }}></span>White
    </label>
    
    </div>
  )
}

export default Colors