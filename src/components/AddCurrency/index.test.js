import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import { AddCurrency } from './';
import * as helper from '../../helper';

Enzyme.configure({ adapter: new Adapter()});

describe('AddCurrency', () => {
  let props = helper.mockData();

  let mountedApp;

  const addcurrency = () => {
    if(!mountedApp) {
      mountedApp = mount (
        <AddCurrency {...props} />
      );
    }
    return mountedApp;
  }

  beforeEach( () => {
    mountedApp = null;
  })

  it('renders correctly', () => {
    // search for the div which shown before the form
    let div = addcurrency().find('div#add-currency');
    expect(div.exists()).toBe(true);

    // simulates click on div to trigger state to show form
    div = div.first().simulate('click');

    // at this point form should appear and component works well visually
    let form = addcurrency().find('form#add-currency-form');
    expect(form.exists()).toBe(true);
  });

  it('calls actions properly', ()=>{
    // simulate clicking on div to show form
    let div = addcurrency().find('div#add-currency');
    div = div.first().simulate('click');

    //after form is shown, change the value of the select and submit the form
    let form = addcurrency().find('form#add-currency-form').first();
    form.find('select').instance().value = "IDR";
    form.simulate('submit');

    expect(addcurrency().prop("RequestConvertSelectedCurrency")).toHaveBeenCalled();
  });

  it('show warning when the currency is added and the currency is already in the list', () => {
      props.listConvertedCurrency = { USD: 1 };
      // simulate clicking on div to show form
      let div = addcurrency().find('div#add-currency');
      div = div.first().simulate('click');

      //after form is shown, change the value of the select and submit the form
      let form = addcurrency().find('form#add-currency-form').first();
      form.find('select').instance().value = "USD";
      form.simulate('submit');

      let alert = addcurrency().find('small.color-danger');
      expect(alert.exists()).toBe(true);
  })

  it('matches with snapshot', () => {
    const wrapper = shallow(
        <AddCurrency {...props} />
    );
    expect(toJson(wrapper),{mode:'shallow'}).toMatchSnapshot();
  })
})
