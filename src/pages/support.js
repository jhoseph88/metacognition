import React from 'react'
import { Elements, StripeProvider } from 'react-stripe-elements'
import CheckoutForm from '../components/CheckoutForm'

import '../App.css'

export default function Support(props) {
		return (
  		<div className="content">
  			<StripeProvider apiKey="pk_live_D4gXMOpJ5EKQqSnFOJsu1Z7k">
  			    <Elements><CheckoutForm/></Elements>
  			</StripeProvider>
  		</div>
		)
}
