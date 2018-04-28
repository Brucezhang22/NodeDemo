const _ = require('underscore');

/**
 * each
 */
(function (call) {
    if (call) {
        _.each(
            ['apple', 'cherry'],
            function (fruit) {
                console.log(fruit);
            }
        );
    }
})(false);

/**
 * mixin
 */
(function (call) {
    _.mixin({
        betterWithNode: function (str) {
            return str + ' is better with node';
        }
    });
    console.log(_.betterWithNode('chocolate'));
})(true);