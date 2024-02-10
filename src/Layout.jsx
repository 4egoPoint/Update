

import { Outlet } from "react-router-dom";
import "./app.scss"

const Layout = () => {
   return (
      <div className="layout">
         <Outlet />
      </div>
   )
}

export default Layout