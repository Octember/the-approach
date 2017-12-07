import React from 'react';
import { mount } from 'enzyme';

import TileList from '../index';
import ClickableTile from '../../ClickableTile';

describe('<TileList />', () => {
  it('should have a className', () => {
    const content = [{
      title: 'test',
      link: 'test link'
    }]
    const renderedComponent = mount(<TileList className="test" component={ClickableTile}/>);
    expect(renderedComponent.find('li')).toBeDefined();
  });

  it('should render the content passed to it', () => {
    const content = [{
      title: 'test',
      link: 'test link'
    }]
    const renderedComponent = mount(
      <TileList items={content} component={ClickableTile}/>
    );
    expect(renderedComponent.contains(content[0].title)).toBe(true);
  });
});
