import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import { Homepage } from './';

import * as helper from '../../helper';

Enzyme.configure({ adapter: new Adapter()});

describe('Homepage', () => {
  let props = helper.mockData();
  it('renders correctly', () => {

    const wrapper = shallow(
        <Homepage {...props} />
    );

    expect(toJson(wrapper),{mode:'shallow'}).toMatchSnapshot();
  });

  it("calls action properly", () => {
    const wrapper = shallow(
      <Homepage {...props} ></Homepage>
    );

    wrapper.instance().handleChange({target: {value : "1.005"}});

    expect(wrapper.instance().props.RequestConvertChangeAmount).toHaveBeenCalled();
  })
})
