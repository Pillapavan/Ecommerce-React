const Button = ({handleClick,title,value}) => {
  return (
    <div>
        <button className="btns"
        onClick={handleClick} value={value}>{title}</button>
    </div>
  )
}

export default Button