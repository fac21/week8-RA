import React from "react";
import Game from "./Game";

function Result(props) {
    // console.log(props.result)
    return props.result ? <h1>win</h1> : <h1>lose</h1>
}

export default Result;