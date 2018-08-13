import React, { Component } from 'react';
import { connect } from 'react-redux';

import BaseCurrency from '../../components/BaseCurrency/';
import ListCurrency from '../../components/ListCurrency';
import AddCurrency from '../../components/AddCurrency';
import { RequestCurrencyData } from '../../redux/Action/action_currency';
import { RequestConvertChangeAmount } from '../../redux/Action/action_convertion';
import { isEmpty, filterFloat } from '../../helper';

export class Homepage extends Component {
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
    let amount = filterFloat(e.target.value),
        currencyData = {
          amount : amount,
          listCurrency: this.props.listConvertedCurrency,
          currencies : this.props.currencies
        }

    // Will edit the list converted currency if
    // 1. The list converted currecy is exist
    // 2. The amount is not a number
    if(!isEmpty(this.props.listConvertedCurrency) && !isNaN(amount)) {
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

  render() {
    return(
      <div className="container">
        <BaseCurrency amountValue={this.state.amountValue} handleChange={this.handleChange} amountAlert={this.state.amountAlert}/>
        <div className="p-sm-4 mb-5">
          {
            this.state.amountAlert == '' &&
            (
              <React.Fragment>
                <ListCurrency/>
                <AddCurrency amountValue={this.state.amountValue} />
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
