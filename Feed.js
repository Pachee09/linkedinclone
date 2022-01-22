import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Feed.css";
/* import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import { SubscriptionsIcon } from "@material-ui/icons/Subscriptions";
import { ImageIcon } from "@material-ui/icons/Image";
import { EventNoteIcon } from "@material-ui/icons/EventNote";
import { CalendarViewDayIcon } from "@material-ui/icons/CalendarViewDay"; */
import Posts from "./Posts";
import { db } from "./firebase";
import firebase from "./firebase";
import { selectUser } from "./features/userSlice";
import {
    CalendarViewDay,
    EventNote,
    Image,
    Subscriptions,
} from "@material-ui/icons";

function Feed() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState(" ");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        ))
    }, [])

    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name: user.displayName,
            description: user.email || "",
            message: input,
            photoUrl: user.photoUrl,
            timestamp: firebase.firestone.FieldValue.serverTimestamp(),
        })
        setInput(" ");
    }

    return ( <
        div className = "feed" >
        <
        div className = "feed_inputContainer" >
        <
        div className = "feed_input" >
        <
        CreateIcon / >
        <
        form >
        <
        input value = { input }
        onChange = {
            (e) => setInput(e.target.value) }
        type = "text" /
        >
        <
        button onClick = { sendPost }
        type = "submit" > { " " }
        Send { " " } <
        /button>{" "} <
        /form>{" "} <
        /div>{" "} <
        div className = "feed_inputOptions" >
        <
        InputOption Icon = { Image }
        title = "Photo"
        color = "#7085F9" / >
        <
        InputOption Icon = { Subscriptions }
        title = "Video"
        color = "#E7A33E" / >
        <
        InputOption Icon = { EventNote }
        title = "Event"
        color = "#C0CBCD" / >
        <
        InputOption Icon = { CalendarViewDay }
        title = "Write Article"
        color = "#7FC15E" /
        >
        <
        /div> <
        /div> {
            posts.map(({ id, data: { name, description, message, photoUrl } }) => ( <
                Posts key = { id }
                name = { name }
                description = { description }
                message = { message }
                photoUrl = { photoUrl }
                />
            ))
        } <
        /div>
    )
}

export default Feed;