import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RequestDeleteCurrency } from '../../redux/Action/action_convertion';
import './style.css';

class ListCurrency extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    let currency = e.target.getAttribute('data-currency'),
        listCurrency = this.props.listConvertedCurrency,
        currencyData = {
          currency: currency,
          listCurrency: listCurrency
        };
    this.props.RequestDeleteCurrency(currencyData);
  }
  render() {
    return(
      <div className="row">
        {
          Object.keys(this.props.listConvertedCurrency).map((key, id) => (
            <div className="col-12 mb-4" key={id}>
              <div className="box-shadow list-currency w-100 d-flex justify-content-between flex-wrap">
                <div className="p-4 border-right">
                  <div className="d-flex flex-wrap justify-content-between">
                    <span>{key}</span>
                    <span>
                    {
                      this.props.listConvertedCurrency[key] < 1000000 ? (
                        this.props.listConvertedCurrency[key].toLocaleString(undefined, { minimumFractionDigits: 2,maximumFractionDigits: 4})
                      ) : (
                        this.props.listConvertedCurrency[key].toLocaleString(undefined, { minimumFractionDigits: 2,maximumFractionDigits: 2})
                      )
                    }
                    </span>
                  </div>
                  <div>{key} - {this.props.getCurrencyName(key)}</div>
                  <div>1 USD = {key} {
                    this.props.currencies.rates[key] < 1000000 ? (
                      this.props.currencies.rates[key].toLocaleString(undefined, { minimumFractionDigits: 2,maximumFractionDigits: 4})
                    ) : (
                      this.props.currencies.rates[key].toLocaleString(undefined, { minimumFractionDigits: 2,maximumFractionDigits: 2})
                    )
                  }</div>
                </div>
                <div onClick={this.handleClick} data-currency={key} className="text-center align-self-center cursor-pointer">(-)</div>
              </div>
            </div>
          ))
        }
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
    RequestDeleteCurrency : ( currencyData ) => dispatch(RequestDeleteCurrency( currencyData ))
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(ListCurrency);
