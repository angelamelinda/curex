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