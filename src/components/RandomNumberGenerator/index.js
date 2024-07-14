// Write your code here
import './index.css'
import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  onGenerate = () => {
    const newRandomNumber = Math.ceil(Math.random() * 100)

    this.setState({randomNumber: newRandomNumber})
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="app-container">
        <div className="number-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" onClick={this.onGenerate} className="button">
            Generate
          </button>
          <p className="number-heading">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
