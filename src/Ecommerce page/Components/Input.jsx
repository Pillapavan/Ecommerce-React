const Input = ({handleChange,name,value,title,color}) => {
  return (
    <div>
      <label className="sidebar-container">
        <input onClick={handleChange} type="radio" value={value} name={name} />
        <span className="checkmark" style={{backgroundColor:color}}></span>{title}
      </label>
    </div>
  );
};

export default Input;
