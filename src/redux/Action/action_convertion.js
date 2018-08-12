export function RequestConvertSelectedCurrency(currencyData) {
  return dispatch => {
    dispatch({type:'CONVERTION_ADDING'});
    let convertedCurrency = currencyData.amount * currencyData.rate,
        listConvertedCurrency = { ...currencyData.listCurrency, [currencyData.name]:convertedCurrency}
    dispatch({type:'CONVERTION_ADDED',payload:listConvertedCurrency})
  }
}

export function RequestConvertChangeAmount(currencyData) {
  return dispatch => {
    dispatch({type:'CONVERTION_EDITING'});
    let listConvertedCurrency = {}
    Object.keys(currencyData.listCurrency).map((key) => {
      let converted = currencyData.amount * currencyData.currencies.rates[key];
      listConvertedCurrency = {...listConvertedCurrency, [key]:converted}
      return key;
    })
    dispatch({type:'CONVERTION_EDITED',payload:listConvertedCurrency});
  }
}

export function RequestDeleteCurrency(currencyData) {
  return dispatch => {
    dispatch({type:'DELETING_REQUEST'});
    let listConvertedCurrency = {};
    Object.keys(currencyData.listCurrency).filter((key) => {
      return key != currencyData.currency
    }).map((key) => {
      listConvertedCurrency = {...listConvertedCurrency, [key]:currencyData.listCurrency[key]}
      return key
    })
    dispatch({type:'CONVERTION_DELETED',payload:listConvertedCurrency});
  }
}
