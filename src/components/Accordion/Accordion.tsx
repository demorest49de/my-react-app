import React from "react";
import { StyledMenuTitle } from "../Header.Styled";


function Accordion(props: any) {
    return (
        <div>
            <MenuTitle title={props.titleValue}/>
            <ul>
                <li><a href="http://www.google.com" title="google">google</a></li>
                <li><a href="#" title="1">1</a></li>
                <li><a href="#" title="1">1</a></li>
            </ul>
        </div>
    )
}

function MenuTitle(props: any) {
    return (
        <>
            <StyledMenuTitle>--- {props.title}</StyledMenuTitle>
        </>
    )
}

export default Accordion;