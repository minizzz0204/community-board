import { PropaneRounded } from "@mui/icons-material";
import React from "react";

const Card = (props) => {
    function viewMenu(e) {
        alert("This is a menu");
      }
    
    return (
        <div className="Card">
            <img src={props.img}></img>
            <h4>{props.name}</h4>
            <h5>{props.type}</h5>
            <button onClick={viewMenu}>View Menu</button>
        </div>
    )
}

export default Card;