import {v4} from 'uuid';
 
describe('General tests', () => {
    it('UUIDs should be 36 characters long', () => {
        const uuid = v4();

        expect(uuid.length).toBe(36);
    });
});
