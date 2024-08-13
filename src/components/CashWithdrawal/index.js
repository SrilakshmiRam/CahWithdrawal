import {Component} from 'react'
import './index.css'

import DenominationItem from '../DenominationItem/index'

class CashWithdrawal extends Component {
  state = {money: 2000}

  getValue = value => {
    const {money} = this.state
    console.log(value)
    if (value === 50 && money > 0) {
      this.setState({
        money: money - value,
      })
    } else if (value === 100) {
      this.setState({
        money: money - value,
      })
    } else if (value === 100) {
      this.setState({
        money: money - value,
      })
    } else {
      this.setState({
        money: money - value,
      })
    }
  }

  render() {
    const {denominationsList} = this.props
    const {money} = this.state

    return (
      <div className="container">
        <div className="cashWithdrawalCard-container">
          <div className="accountantName-container">
            <p className="intialName">S</p>
            <h1 className="fullName">Sarah Williams</h1>
          </div>
          <div className="balanceAmount-container">
            <p className="balance">Your Balance</p>
            <p className="Rupees">
              {money} <br />
              <span className="text-rupees">In Rupees</span>
            </p>
          </div>
          <p className="withdrawText">Withdraw</p>
          <p className="ChooseSumText">CHOOSE SUM (IN RUPEES)</p>
          <ul className="items-list">
            {denominationsList.map(eachItem => (
              <DenominationItem
                itemDetails={eachItem}
                getValue={this.getValue}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal