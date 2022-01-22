import { Avatar } from "@material-ui/core";
import React from "react";
import "./Posts.css";
import { Avatar } from "@material-ui/core";
import InputOption from "./InputOption";
import {
    ChatOutlined,
    SendOutlined,
    ShareOutlined,
    ThumbUpAltOutlined,
} from "@material-ui/icons";
/* import { ThumbUpAltOutlinedIcon } from "@material-ui/icons/ThumbUpAltOutlined";
import { ChatOutlinedIcon } from "@material-ui/icons/ChatOutlined";
import { ShareOutlinedIcon } from "@material-ui/icons/ShareOutlined";
import { SendOutlinedIcon } from "@material-ui/icons/SendOutlined"; */

function Posts({ name, description, message, photoUrl }) {
    return ( <
        div className = "post" >
        <
        div className = "post_header" >
        <
        Avatar src = { photoUrl }
        />{" "} <
        div className = "post_info" >
        <
        h2 > { name } < /h2> <
        p > { description } < /p>{" "} <
        /div>{" "} <
        /div>{" "} <
        div className = "post_body" >
        <
        p > { message } < /p>{" "} <
        /div>{" "} <
        div className = "post_buttons" >
        <
        InputOption Icon = { ThumbUpAltOutlined }
        title = "Like"
        color = "gray" / >
        <
        InputOption Icon = { ChatOutlined }
        title = "Comment"
        color = "gray" / >
        <
        InputOption Icon = { ShareOutlined }
        title = "Share"
        color = "gray" / >
        <
        InputOption Icon = { SendOutlined }
        title = "Send"
        color = "gray" / >
        <
        /div>{" "} <
        /div>
    );
}

export default Posts;