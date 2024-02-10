

import "./components.scss"

const Radio = ({id, name, value, isChecked}) => {
   return (
      <div className="radio">
         <input type="radio" id={id} name={name} value={value} checked={isChecked ? true : false} />
         <label for={value}>{value}</label>
      </div>
   )
}

export default Radio