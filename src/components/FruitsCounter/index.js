import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, banana: 0}

  eatMango = () => {
    this.setState(prevState => ({
      mangoes: prevState.mangoes + 1,
      banana: prevState.banana,
    }))
  }

  eatBanana = () => {
    this.setState(prevState => ({
      mangoes: prevState.mangoes,
      banana: prevState.banana + 1,
    }))
  }

  render() {
    const {mangoes, banana} = this.state

    return (
      <div className="container">
        <div className="contain-container">
          <h1 className="heading">
            Bob ate <span className="count-style">{mangoes}</span> mangoes{' '}
            <span className="count-style">{banana}</span> bananas
          </h1>
          <div className="card-container">
            <div className="card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <div className="btn">
                <button
                  className="btn-style"
                  onClick={this.eatMango}
                  type="button"
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <div className="btn">
                <button
                  className="btn-style"
                  onClick={this.eatBanana}
                  type="button"
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
