import React from "react";
import "./Nav.css";
import { FaSearch } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { MdBusinessCenter } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { MdNotifications } from "react-icons/md";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import HeaderOption from "./HeaderOption.js";

function Nav() {
    const dispatch = useDispatch();
    const logOutOfApp = () => {
        dispatch(logout())
        auth.signOut()
    }

    return ( <
        div className = "header" >

        <
        div className = "header_left" >

        <
        img className = "header_image"
        src = "https://cdn-icons-png.flaticon.com/512/174/174857.png"
        alt = "" / >

        <
        div className = "header_search" > { /*search icon */ } < FaSearch / >

        <
        input type = "text"
        placeholder = "search" / >

        <
        /div> <
        /div >  <
        div className = "header_right" >

        <
        HeaderOption Icon = { FaHome }
        title = "Home" / >

        <
        HeaderOption Icon = { BsPeopleFill }
        title = "My Network" / >

        <
        HeaderOption Icon = { MdBusinessCenter }
        title = "Jobs" / >

        <
        HeaderOption Icon = { MdMessage }
        title = "Messaging" / >

        <
        HeaderOption Icon = { MdNotifications }
        title = "Notification" / >

        <
        HeaderOption avatar = { true }
        onClick = { logOutOfApp }
        title = "Me" / >

        <
        /div> 

        <
        /div >
    );
}

export default Nav;