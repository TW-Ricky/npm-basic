import _ from 'romanize';

const transform = (number) => {
    const romanize = require('romanize')
    return romanize(number);
}

export {
    transform
}