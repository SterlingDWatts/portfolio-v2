import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Connect from './Connect';

describe(`Connect Component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Connect />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<Connect />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

})
