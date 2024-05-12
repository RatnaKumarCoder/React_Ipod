import React from "react";
import styled from "styled-components";
import Settings from "./Settings";
import Games from "./Games";
import Musics from "./Music";
import CoverFlow from "./CoverFlow";

class Menu extends React.Component{
    //constructor
    constructor(){
        super();
    }

    render(){
        const {activeItem,activePage} = this.props;
        return(
            <>
                { activeItem === "NowPlaying" ? <CoverFlow color="Blue"/> : <CoverFlow/> }
                { activeItem === "Music" ? <Musics color="Blue"/> : <Musics/> }
                { activeItem === "Games" ? <Games color="Blue"/> : <Games/> }
                { activeItem === "Settings" ? <Settings color="Blue"/> : <Settings/> }
            </>

        )
    }
}





export default Menu;