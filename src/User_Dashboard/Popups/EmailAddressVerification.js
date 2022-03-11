import React from 'react'

const EmailAddressVerification = ({ handleClose, showE, children }) => {

    const showHideClassName = showE ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="gift-main">
                {children}
               <div className="close_icon"> <a onClick={handleClose}>
                <i class="fas fa-times-circle"></i>
                </a></div>
            </section>
        </div>
)
}

export default EmailAddressVerification
