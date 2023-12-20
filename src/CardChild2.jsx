import React from "react";

const CardChild2 = (props) =>{
    return(
<>
<div className='app-container'>
                <div className='app-head'>
                    <h1> <span className='initials'>JS</span> React Props Card</h1>
                </div>
                <div className='app-body'>
                    <h3>{props.title}</h3>
                    <p>{props.description} <span>{props.children}</span></p>

                </div>
            </div>
</>
    );
}


export default CardChild2;