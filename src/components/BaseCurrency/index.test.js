import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { BaseCurrency } from './';
import * as helper from '../../helper';

Enzyme.configure({ adapter: new Adapter()});

describe('BaseCurrency', () => {
  let props = helper.mockData();

  let mountedApp;

  const basecurrency = () => {
    if(!mountedApp) {
      mountedApp = mount (
        <BaseCurrency {...props} />
      );
    }
    return mountedApp;
  }

  beforeEach( () => {
    mountedApp = null;
  })

  it('call action when input change with number', () => {
    props.handleChange = jest.fn();

    basecurrency().find('input').simulate('change', { target : { value: '111'}});
    expect(basecurrency().prop('handleChange')).toHaveBeenCalled();
  })

  it('show warning when props alert is passed', () => {
    props.amountAlert = "alert here";

    let alert = basecurrency().find('.color-danger');
    expect(alert.exists()).toBe(true);
  })

})
