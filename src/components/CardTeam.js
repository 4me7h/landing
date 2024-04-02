import React from "react";

const CardTeam = ({image, name, description}) => {
    return(
        <div className="cardteam">
            <div className="cardteam__img image--background" style={{backgroundImage: `url(${image})`}}>
                <div className="cardteam__content">
                    <span className="cardteam__title">
                        {name}
                    </span>
                    <span class="cardteam__description">
                        {description}
                    </span>
                </div>
            </div>
        </div>       
    )
}

export default CardTeam;