import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ConnectLinks from './ConnectLinks';

describe(`ConnectLinks Component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ConnectLinks />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<ConnectLinks />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

})
