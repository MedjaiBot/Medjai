import * as React from 'react';
import renderer from 'react-test-renderer';
import {v4} from 'uuid';
import {App} from '../src/Components/App';
 
describe('General tests', () => {
    it('UUIDs should be 36 characters long', () => {
        const uuid = v4();

        expect(uuid.length).toBe(36);
    });
});

describe('App component tests', () => {
    it('should match the snapshot', () => {
        const tree = renderer.create(<App/>).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
