import React, { useState } from "react";
import Backdrop from "./Backdrop/Backdrop";
import Sidebar from "./SideBar/SideBar";
import Toolbar from "./ToolBar/Toolbar";
import './MobileNav.scss'

const MobileNav =() =>{
    const [openSideDrawer,setIsOpenSideDrawer] = useState(false);
    function showDrawer(){
        setIsOpenSideDrawer(!openSideDrawer);
    }
    function backDropClickHandler(){
        setIsOpenSideDrawer(false);
    }
    let sideDrawer;
    let backDrop;
  
    if (openSideDrawer){
        sideDrawer =  <Sidebar click={backDropClickHandler}/>
        backDrop = <Backdrop click ={backDropClickHandler}/>

    }
   return(
    <div className="mobile-nav">
        <Toolbar drawerClickHandler ={showDrawer} iconHandler ={openSideDrawer}/>
        {sideDrawer}
        {backDrop}
    </div>
   )
}

export default MobileNav