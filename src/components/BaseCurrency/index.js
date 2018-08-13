import React from 'react';
import { connect } from 'react-redux';

import { getCurrencyName } from '../../helper';

export const BaseCurrency = (props) => {
  return(
    <div className="pt-4 pb-4 mb-4 border-bottom">
      <p className="font-italic">{props.currencies.base} - {getCurrencyName(props.currencies.base)}</p>
      <div className="d-flex justify-content-between flex-wrap">
        <span><strong>{props.currencies.base}</strong></span>
        <div>
          <input type="text" onChange={props.handleChange} value={props.amountValue} className="pl-2 pr-2 font-weight-bold max-w-200"/>
          {
            props.alert != '' && <small className="text-right color-danger d-block">{props.amountAlert}</small>
          }
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    currencies: state.Currency.currencies
  }
}
const matchDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(BaseCurrency);
