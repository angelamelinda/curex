import React, { Component } from 'react';

const BaseCurrency = (props) => {
  return(
    <div className="pt-4 pb-4 mb-4 border-bottom">
      <p className="font-italic">USD - {props.getCurrencyName("USD")}</p>
      <div className="d-flex justify-content-between flex-wrap">
        <span><strong>USD</strong></span>
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

export default BaseCurrency
