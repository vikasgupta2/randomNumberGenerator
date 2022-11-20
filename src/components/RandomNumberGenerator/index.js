// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  onGenerate = () => {
    const randomNum = Math.ceil(Math.random() * 100)
    this.setState({randomNumber: randomNum})
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="bg-container">
        <h1>Random Number</h1>
        <p className="paragraph">
          Generate a random number in the range of 0 to 100
        </p>
        <button className="btn" type="button" onClick={this.onGenerate}>
          Generate
        </button>
        <p className="count">{randomNumber}</p>
      </div>
    )
  }
}

export default RandomNumberGenerator
