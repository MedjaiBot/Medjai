import * as React from 'react';
import renderer from 'react-test-renderer';
import {App} from '../../src/ts/Components/App';

describe('App component tests', () => {
    it('should match the snapshot', () => {
        const tree = renderer.create(<App/>).toJSON();

        expect(tree).toMatchSnapshot();
    });
});