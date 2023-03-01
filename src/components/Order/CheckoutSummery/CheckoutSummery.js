import React from "react";
import Burger from '../../../components/Burger/Burger'
import Button from '../../../components/UI/Button/Button'
import './CheckoutSummery.css'

const checkoutSummery = (props) => {
    return (
        <div className="CheckoutSummary">
            <h2>We hope it tastes well</h2>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button
                btnType='Danger'
                clicked={props.checkoutCancelled}>CANCEL</Button>
            <Button
                btnType='Success'
                clicked={props.checkoutContinued}
            >CONTINUE</Button>
        </div >
    )

}
export default checkoutSummery 