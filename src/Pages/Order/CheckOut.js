import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const CheckOut = ({ payItem }) => {

    const { user } = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [clientSecrect, setClientSecret] = useState('');
    const [proccess, setProccess] = useState(false);
    const [success, setSuccess] = useState('');

    const { price } = payItem;
    console.log(price);

    useEffect(() => {
        fetch('https://secure-temple-89823.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecrect))
    }, [price])



    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        setProccess(true);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            setError(error.message);
            setSuccess('')
            // console.log(error);
        }
        else {
            setError('')
            console.log(paymentMethod);
        }


        // payment intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecrect,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        // name: '',
                        email: user.email,
                    },
                },
            },
        );

        if (intentError) {
            setError(intentError.message);
            setSuccess('')
        }
        else {
            setError('');
            setSuccess('Congrats! payment processed successfully.')
            console.log(paymentIntent)
        }
        setProccess(false)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {
                    proccess ? <p>Proccessing payment</p>
                        :
                        <button type="submit" disabled={!stripe}>
                            Pay Now (${payItem.price})
                        </button>}
            </form>
            {
                error && <p>{error}</p>
            }
            {
                success && <p>{success}</p>
            }
        </div>
    );
};

export default CheckOut;