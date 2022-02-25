import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const onToken = token => {
    console.log(token);
    alert("Payment Successful")
};

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51KXCKXFqN2jwTYgF5nLN2y10XkqsfCrnt9TY8yJ994IP9x7tF2dD8g9kcVJw55JwopfjwyNVYOFfQe5sANQOeNfA00jERoAqG2";

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price} `}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey} />
    );
};

export default StripeCheckoutButton;