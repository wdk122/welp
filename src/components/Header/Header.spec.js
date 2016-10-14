import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Header from './Header';

describe('<Header />', function() {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  // these show up as pending tests
  it('contains a title component with yelp', () => {
    expect(wrapper.find('h1').first().text())
      .to.equal('Yelp');
  });
  it('contains a section menu with the title', () => {
    expect(wrapper.find('section').first().text())
      .to.equal('Fullstack.io');
  });
});