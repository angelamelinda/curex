import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './action_currency';
import * as helper from '../../helper';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {

    let store;

    beforeEach(() => {
        store = mockStore();
    });

    it('should properly dispatch when fetching success', () => {
        const expectedActions = [
            { type: 'CURRENCY_UPDATING' },
            { type: 'CURRENCY_UPDATED', payload: expect.any(Object) }
        ];

        return store.dispatch(actions.RequestCurrencyData()).then( () =>{
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
})
