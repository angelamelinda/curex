import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

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
  
  it('show warning when input is not number', () => {
    let input = basecurrency().find('input');
    input.instance().value = 'abc';
    input.simulate('change');
    props.amountValue = 'abc';

    let alert = basecurrency().find('.color-danger');
    expect(alert.exists()).toBe(true);
  })

  it('show warning when input is empty', () => {
    let input = basecurrency().find('input');
    input.instance().value = '';
    input.simulate('change');
    props.amountValue = '';

    let alert = basecurrency().find('.color-danger');
    expect(alert.exists()).toBe(true);
  })
})
