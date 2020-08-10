import {transform} from '../src/romainzer.js'


describe('romanize', () => {
    it('should return X when given 10', () => {
        const result = transform(10);
        expect(result).toEqual('X');
    });
})