import axios from 'axios';

export function RequestCurrencyData() {
  return dispatch => {
    dispatch({type:'CURRENCY_UPDATING'});
    return axios.get(`https://exchangeratesapi.io/api/latest?base=USD&symbols=USD,CAD,IDR,GBP,CHF,SGD,INR,MYR,JPY,KRW`)
     .then(resp => {
       dispatch({type:'CURRENCY_UPDATED',payload:resp.data});
     }).catch(resp => {
       dispatch({type:'CURRENCY_UPDATE_FAILED'});
   });
  }
}
