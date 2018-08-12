import React, { Component } from 'react';
import { connect } from 'react-redux';

import { RequestConvertSelectedCurrency } from '../../redux/Action/action_convertion';
import './style.css';

class AddCurrency extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive : false,
      existAlert: ''
    }
    this.handleShowOption = this.handleShowOption.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleShowOption() {
    this.setState((prevState) => (
      {isActive: !prevState.isActive}
    ))
  }
  handleSubmit(e) {
    e.preventDefault();
    let name = this.selectedOption.value,
        amount = this.props.filterFloat(this.props.amountValue),
        rate = this.props.currencies.rates[name],
        detailCurrency = {
          name : name,
          amount : amount,
          rate : rate,
          listCurrency : this.props.listConvertedCurrency
        };

    if(this.props.listConvertedCurrency.hasOwnProperty(name)){
      this.setState((prevState) => ({
          isActive: !prevState.isActive,
          existAlert: 'Sorry, the currency is already on the list'
        }
      ))
    } else if(!this.props.listConvertedCurrency.hasOwnProperty(name) && !isNaN(amount)) {
      this.props.RequestConvertSelectedCurrency(detailCurrency);
      this.setState((prevState) => ({
          isActive: !prevState.isActive,
          existAlert: ''
        }
      ))
    }
  }
  render() {
    return (
      <React.Fragment>
      {
        this.state.isActive ? (
            <form onSubmit={this.handleSubmit} className="box-shadow">
              <select ref={(el) => this.selectedOption = el}>
                <option value="USD">USD</option>
                <option value="CAD">CAD</option>
                <option value="IDR">IDR</option>
                <option value="GBP">GBP</option>
                <option value="CHF">CHF</option>
                <option value="SGD">SGD</option>
                <option value="INR">INR</option>
                <option value="MYR">MYR</option>
                <option value="JPY">JPY</option>
                <option value="KRW">KRW</option>
              </select>
              <button type="submit" className="cursor-pointer">Submit</button>
            </form>
        ) : (
            <React.Fragment>
              <div id="Add Currency" className="cursor-pointer" onClick={this.handleShowOption}>(+) Add More Currency</div>
              {
                this.state.existAlert != '' && <small className="d-block color-danger">{this.state.existAlert}</small>
              }
            </React.Fragment>
        )
      }
    </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currencies: state.Currency.currencies,
    listConvertedCurrency: state.Convertion.listConvertedCurrency
  }
}
const matchDispatchToProps = (dispatch) => {
  return {
    RequestConvertSelectedCurrency : ( currencyData ) => dispatch(RequestConvertSelectedCurrency( currencyData )),
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(AddCurrency);
