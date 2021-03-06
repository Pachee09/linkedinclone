import React, { useEffect } from "react";
import "./App.css";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Login from "./Login";
import { selectUser } from "./features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "./firebase";
import { logout, login } from "./features/userSlice";
import Widgets from "./Widgets";

function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged((userAuth) => {
            if (userAuth) {
                //user logged in
                dispatch(
                    login({
                        email: userAuth.email,
                        uid: userAuth.uid,
                        displayName: userAuth.displayName,
                        photoUrl: userAuth.photoURL,
                    })
                );
            } else {
                dispatch(logout());
            }
        });
    }, []);

    return ( <
        div className = "app" >
        <
        Nav / > {!user ? ( <
                Login / >
            ) : ( <
                div className = "app_body" >
                <
                Sidebar / >
                <
                Feed / >
                <
                Widgets / >
                <
                /div>
            )
        } <
        /div>
    );
}

export default App;