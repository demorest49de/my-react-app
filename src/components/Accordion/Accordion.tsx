import React from "react";


function Accordion(props: any) {
    return (
        <div>
            <Title title={props.titleValue}/>
            <ul>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
            </ul>
        </div>
    )
}

function Title(props: any) {
    return (
        <>
            <h3>--- {props.title}</h3>
        </>
    )
}

export default Accordion;