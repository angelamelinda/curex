import React, { Component } from 'react';
import { connect } from 'react-redux';

import BaseCurrency from '../../components/BaseCurrency/';
import ListCurrency from '../../components/ListCurrency';
import AddCurrency from '../../components/AddCurrency';
import { RequestCurrencyData } from '../../redux/Action/action_currency';
import { RequestConvertChangeAmount } from '../../redux/Action/action_convertion';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountValue : '1.00',
      amountAlert : ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    //Fetch data from the API
    this.props.RequestCurrencyData();
  }
  handleChange(e) {
    let amount = this.filterFloat(e.target.value),
        currencyData = {
          amount : amount,
          listCurrency: this.props.listConvertedCurrency,
          currencies : this.props.currencies
        }

    // Will edit the list converted currency if
    // 1. The list converted currecy is exist
    // 2. The amount is not a number
    if(!this.isEmpty(this.props.listConvertedCurrency) && !isNaN(amount)) {
      this.props.RequestConvertChangeAmount(currencyData);
    }

    // Will give an alert
    // 1. if the amount is Not a Number
    // 2. if the amount is less than 0
    if(isNaN(amount) || amount < 0) {
      this.setState({
        amountAlert: 'Invalid Value',
        amountValue: e.target.value
      })
    } else {
      this.setState({
        amountAlert: '',
        amountValue: e.target.value
      })
    }
  }
  filterFloat(value) {
    if (/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/
      .test(value))
      return Number(value);
    return NaN;
  }
  isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
      return true;
    }
  }
  getCurrencyName(sym) {
    switch (sym) {
      case "USD":
        return "United State Dollar"
      case "CAD":
        return "Canadian Dollar"
      case "IDR":
        return "Indonesia Rupiah"
      case "GBP":
        return "British Pound"
      case "CHF":
        return "Swiss Franc"
      case "SGD":
        return "Singapore Dollar"
      case "INR":
        return "India Rupee"
      case "MYR":
        return "Malaysia Ringgit"
      case "JPY":
        return "Japan Yen"
      case "KRW":
        return "Korea Won"
      default:
        break;
    }
  }
  render() {
    return(
      <div className="container">
        <BaseCurrency getCurrencyName={this.getCurrencyName} amountValue={this.state.amountValue} handleChange={this.handleChange} amountAlert={this.state.amountAlert}/>
        <div className="p-sm-4 mb-5">
          {
            this.state.amountAlert == '' &&
            (
              <React.Fragment>
                <ListCurrency getCurrencyName={this.getCurrencyName} isEmpty={this.isEmpty} filterFloat={this.filterFloat}/>
                <AddCurrency amountValue={this.state.amountValue} filterFloat={this.filterFloat}/>
              </React.Fragment>
            )
          }
        </div>
      </div>
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
    RequestCurrencyData : () => dispatch(RequestCurrencyData()),
    RequestConvertChangeAmount : (currencyData) => dispatch(RequestConvertChangeAmount(currencyData))
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(Homepage);
