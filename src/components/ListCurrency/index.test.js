import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { ListCurrency } from './';
import * as helper from '../../helper';

Enzyme.configure({ adapter: new Adapter()});

describe('ListCurrency', () => {
  let props = helper.mockData();

  let mountedApp;

  const listcurrency = () => {
    if(!mountedApp) {
      mountedApp = mount (
        <ListCurrency {...props} />
      );
    }
    return mountedApp;
  }

  beforeEach( () => {
    mountedApp = null;
  })

  it('renders correctly', () => {
    // search for the div which shown when the currency has been added
    let div = listcurrency().find('div.list-currency');
    expect(div.exists()).toBe(true);
  });

  it('calls actions properly', ()=>{
    // simulate clicking on div to delete
    let div = listcurrency().find('div.delete-currency');
    div = div.first().simulate('click');

    expect(listcurrency().prop("RequestDeleteCurrency")).toHaveBeenCalled();
  });

  it('renders correctly on listConvertedCurrency is empty', () => {
    props.listConvertedCurrency = {};
    // search for the div which is not exist
    let div = listcurrency().find('div.list-currency');
    expect(div.exists()).toBe(false);

  })
})
