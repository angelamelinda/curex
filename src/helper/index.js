export function filterFloat(value) {
    if (/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/
      .test(value))
      return Number(value);
    return NaN;
}
export function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
        return false;
        }
        return true;
    }
}
export function getCurrencyName(sym) {
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

export function mockData() {
  return {
    // example data from redux store
    currencies:{
      base:"USD",
      date:"2018-08-10",
      rates: {
          CAD:1.3095321229,
          CHF:0.9943261173,
          GBP:0.7827775838,
          IDR:14475.8729050279,
          INR:68.8303072626,
          JPY:110.9200418994,
          KRW:1129.1375698324,
          MYR:4.0859811453,
          SGD:1.3711592179,
          USD:1,
      },
    }, listConvertedCurrency: {

    },

    // actions
    RequestConvertSelectedCurrency:jest.fn(),
    RequestDeleteCurrency:jest.fn(),
    RequestCurrencyData:jest.fn(),
    RequestConvertChangeAmount:jest.fn(),

    // function and value passed from homepage
    filterFloat:filterFloat,
    amountValue:1
  }
}
