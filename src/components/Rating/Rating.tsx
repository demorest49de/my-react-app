import React from "react";

export function Rating() {
    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    )
}

function Star(props: any) {
    if (props.selected) {
        return (
            <>
                <div><b>star</b></div>
            </>
        )
    }
    return (
        <>
            <div>star</div>
        </>
    )
}