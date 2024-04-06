import React from 'react';

const CardContact = () => {
    return(
        <div className="cardcontact">
            <div className="cardcontact__container">
                <div class="cardcontact__content">
                    <span className="cardcontact__title text--lead">
                        Address
                    </span>
                    <span class="cardcontact__description text--body">
                        Dato uno algo de texto< br/>
                        Dato dos algo más de texto
                    </span>
                </div>
            </div>
        </div>       
    )
}

export default CardContact;