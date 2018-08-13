import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './action_convertion';
import * as helper from '../../helper';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {

    let store;

    beforeEach(() => {
        store = mockStore(helper.mockData());
    });

    it('should properly dispatch when add new currency', () => {
        const expectedActions = [
            { type: 'CONVERTION_ADDING' },
            { type: 'CONVERTION_ADDED', payload: {"CAD": 1.3095321229} }
        ];

        let currencydata = {
            amount: 1,
            listCurrency:{},
            name: "CAD",
            rate: 1.3095321229
        };

        store.dispatch(actions.RequestConvertSelectedCurrency(currencydata));
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('should properly dispatch when edit base currency amount', () => {
        const expectedActions = [
            { type: 'CONVERTION_EDITING' },
            { type: 'CONVERTION_EDITED', payload: {} }
        ];

        let currencydata = {
            amount: 1.05,
            currencies: { base: "USD", date: "2018-08-10", rates: {
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
            }},
            listCurrency: {}
        };

        store.dispatch(actions.RequestConvertChangeAmount(currencydata));
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('should properly dispatch when delete a currency', () => {
        const expectedActions = [
            { type: 'CONVERTION_DELETING' },
            { type: 'CONVERTION_DELETED', payload: {} }
        ];

        let currencydata = {
            currency: "USD",
            listCurrency:{ USD: 1 }
        };

        store.dispatch(actions.RequestDeleteCurrency(currencydata));
        expect(store.getActions()).toEqual(expectedActions);
    });
})
