import React from "react";


type RatingType = {
    value: number,
}

export function Rating(props: RatingType) {
    const starArray = [];

    if (props.value > 0
        && props.value < 6) {

        for (let i = 1; i <= 5; i++) {
            if (props.value >= i
            ) {
                starArray.push(
                    <Star selected={true} key={i}/>
                );
            } else {
                starArray.push(
                    <Star selected={false} key={i}/>
                );
            }
        }
        return (
            <div>
                {starArray}
            </div>
        )
    }

    return (
        <div>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    )
}

type StarType = {
    selected: boolean,
}

function Star(props: StarType) {
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