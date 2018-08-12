import React, { Component } from 'react';

class BaseCurrency extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="pt-4 pb-4 mb-4 border-bottom">
        <p className="font-italic">USD - {this.props.getCurrencyName("USD")}</p>
        <div className="d-flex justify-content-between flex-wrap">
          <span><strong>USD</strong></span>
          <div>
            <input type="text" onChange={this.props.handleChange} value={this.props.amountValue} className="pl-2 pr-2 font-weight-bold max-w-200"/>
            {
              this.props.alert != '' && <small className="text-right color-danger d-block">{this.props.amountAlert}</small>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default BaseCurrency
