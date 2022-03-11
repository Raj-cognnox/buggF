import React from 'react'

const BuyTrade = ({ handleClose, shows, children }) => {

    const showHideClassName = shows ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main ">
                {children}
               <div className="close_icon"> <a onClick={handleClose}>
                <i class="fas fa-times-circle"></i>
                </a></div>
            </section>
        </div>
)
}

export default BuyTrade
