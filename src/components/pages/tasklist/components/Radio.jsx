

import "./components.scss"

const Radio = ({ property, value, title}) => {
   return (
      <div className="checkbox">
         <input type="checkbox"  value={value} />
         {title}
      </div>
   )
}

export default Radio 