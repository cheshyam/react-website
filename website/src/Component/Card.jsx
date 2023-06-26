import React from "react";
import { NavLink } from "react-router-dom";



const Card =(props)=>{
    return(
        <>
          <div className="col-md-4 col-10 mx-auto ">
                <div className="card">
                    <img src={props.img} className="card-img-top card_img" alt="developement"/>
                    <div className="card-body card_details">
                        <h5 className="card_title">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="/" className="btn btn-primary button">Go More About</NavLink>
                    </div>
                 </div>
          </div>
        </>
    )

}

export default Card;