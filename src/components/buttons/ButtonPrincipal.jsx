import React from 'react'

const ButtonPrincipal = (props) => {
    return (
        <div>
            <a href="#shop" className="btn btn-primary container-main-button-fresh font-weight-bold">{props.callToAction}</a>
        </div>
    )
}

export default ButtonPrincipal
