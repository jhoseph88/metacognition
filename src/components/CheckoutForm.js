import React, { Component } from 'react'
import { CardElement, injectStripe } from 'react-stripe-elements'

import '../App.css'

class CheckoutForm extends Component {
  constructor(props) {
    super(props)
    this.state = { complete: false, imgUrl: '' }
    this.submit = this.submit.bind(this)
    this.getRandomPhoto = this.getRandomPhoto.bind(this)
  }

  async componentDidMount() {
    this.setState({ imgUrl: await this.getRandomPhoto() })
  }

  async submit(amount) {
    let { token } = await this.props.stripe.createToken({ name: "Name" })
    let response = await fetch("https://5rewr7jp8j.execute-api.us-east-1.amazonaws.com/dev/charge", {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: `{ "amount": ${amount}, "description": "${amount / 100} donation", "id": "${token.id}" }`
    })

    if (response.ok) this.setState({ complete: true }); console.log(response)
  }

  async getRandomPhoto() {
    let wikiUrl = "https://commons.wikimedia.org/w/api.php?action=query&generator=random&grnnamespace=6&prop=imageinfo&iiprop=url&format=json&origin=*"
    let response = (await fetch(wikiUrl)).json()
    let photoData = (await response)['query']['pages']
    let photoUrl = await photoData[Object.keys(await photoData)[0]]['imageinfo'][0]['url']
    return photoUrl
  }

  render() {
    return (
      <div>
      { !this.state.complete ? (
        <div className="checkout">
          <p>Would you like to support this listener-funded project?</p>
          <CardElement />
          <div className="btn-group">
            <button onClick={() => this.submit(500)}>Donate $5</button>
            <button onClick={() => this.submit(1000)}>Donate $10</button>
            <button onClick={() => this.submit(2000)}>Donate $20</button>
          </div>
        </div>
      ) : (
        <div>
          <h1>We are forever grateful to you for your generous contribution!</h1>
          <p>Please regard the following as a token of our gratitude:</p>
          <img src={this.state.imgUrl} alt="random" width="20%" height="20%"/>
        </div>
      )}
      </div>
    )
  }

}

export default injectStripe(CheckoutForm);
