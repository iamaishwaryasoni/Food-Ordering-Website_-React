
import { Link } from "react-router-dom";
import {LOGO_URL} from "../utils/constant"

import { useState } from "react";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

   const [btnlog, setBtnlog] = useState("Login");
   
    const OnlineStatus = useOnlineStatus();

   
    
    return (
        <div className="flex justify-between shadow-md h-24 sm: bg-green-200 lg:bg-white ">
          <div className="">
            <img className="w-16 h-16  m-5 rounded-full" 
            src= {LOGO_URL} />
          </div>
          
           <div className="flex items-center">
              <ul className="flex p-4 m-4">
                <li className="px-3">
                  Online Status: {OnlineStatus ? " ✅" : "🔴"}
                </li>
                <li className="px-3">
                  <Link to ="/">Home</Link>
                </li>
                <li className="px-3">
                  <Link to="/about">  About Us</Link>
                </li>
                <li className="px-3">
                  <Link to="/contact">Contact Us</Link>
                  </li>
                  <li className="px-3">
                    <Link to = "/grocery"> Grocery</Link>
                  </li>
                <li className="px-3">Cart</li>
                <button className="px-4"
                 onClick={() => {
                  btnlog == "Login" 
                  ?setBtnlog ("Logout")
                  :setBtnlog("Login");
                 }}
                >
                 {btnlog}
                </button>
              </ul>
           </div>

        </div>
        )
}

export default Header;