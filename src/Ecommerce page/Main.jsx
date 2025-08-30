import './Main.css'
import Nav from "./Nav/nav"
import SideBar from "./sidebar/sidebar"
import Recommended from "./Recommended/Recommended"
import Product from './products/Product'
import { useState } from 'react'

// import data from db
import products from './db/data'
import Card from './Components/Card'


const Main = () => {
  const[selectedCategory,setSelectedCategory] = useState(null)
  const[query,setQuery] = useState('')

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1)


  // Input 
  const handleInput = (event) => {
      setQuery(event.target.value)
  }
  // radio buttons
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  }

  //Recommended buttons
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  }

  function FilteredData(products,query,selected){
    let filteredProducts = products;
    if(query){
      filteredProducts = filteredItems;
    }

    if(selected){
      filteredProducts =filteredProducts.filter(({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      )}

    return filteredProducts.map(({img,title,star,reviews,prevPrice,newPrice}) => (
      <Card 
       key={Math.random()}
       img = {img}
       title={title}
       star = {star}
       reviews={reviews}
       prevPrice={prevPrice}
       newPrice={newPrice}/>
    ))
  }

  const result = FilteredData(products,query,selectedCategory)
  

  return (
    <div>
      <SideBar handleChange={handleChange}/>
      <Nav query={query} handleInput={handleInput}/>
      <Recommended handleClick={handleClick}/>
      <Product result={result}/>
    </div>
  )
}

export default Main