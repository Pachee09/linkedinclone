import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
    return ( <
        div className = "widgets" >

        <
        div className = "widgets_header" >

        <
        h2 > LinkedIn News < /h2> <InfoIcon / >

        <
        /div>  <
        div className = "widgets_article" >

        <
        div className = "widgets_articleLeft" >

        <
        FiberManualRecordIcon / >

        <
        /div>  <
        div className = "widgets_articleRight" >

        <
        h4 > Corona virus India Update: < /h4> <
        p > Top news 8 k reader < /p >  <
        /div>  <
        /div >  <
        /div>
    );
}

export default Widgets;