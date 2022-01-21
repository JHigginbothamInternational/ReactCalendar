import React from "react";

export default function header(props) {
    return (
        <div className="header">
            <button>Previous</button>
            <h1>{props.month}</h1>
            <button>Next</button>
        </div>
    )
}