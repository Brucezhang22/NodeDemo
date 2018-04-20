const async = require('async');

/**
 * water fall
 * Runs the tasks array of functions in series, each passing their results to the next in the array. However, if any of the tasks pass an error to their own callback, the next function is not executed, and the main callback is immediately called with error.
 */
(function (call) {
  if (call) {
    async.waterfall([
      function (callback) {
        callback(null, 'one', 'two');
      },
      function (arg1, arg2, callback) {
        callback(null, 'three');
      },
      function (arg1, callback) {
        callback(null, 'done');
      }
    ], function (err, result) {
      if (err) {
        console.error(err);
      } else {
        console.log(result); // 'done'
      }
    });
  }
})(false);

/**
 * series
 * Run the functions in the tasks collection in series, each one running once the previous function has completed. If any functions in the series pass an error to its callback, no more functions are run, and callback is immediately called with the value of the error. Otherwise, callback receives an array of results when tasks have compeletd.
 * It is also possibale to use an object instead of an array. Each property will be run as a functon, and the results will be passed to the final callback as an object instead of an array. This ca be a more readable way of handling results from async.series.
 */
(function (call) {
  if (call) {
    async.series([
      function (callback) {
        callback(null, 'one');
      },
      function (callback) {
        callback(null, 'two');
      }
    ], function (err, results) {
      if (err) {
        console.error(err);
      } else {
        console.log(results); // ['one', 'two']
      }
    });
  }
})(false);

/**
 * parallel
 * Run the tasks collection of functions in parallel, without waiting until the previous function has completed. If any of the functions passes and error to its callback, the main callback is immediately called the the value of the error. Once the tasks have completed, the results are passed to final callback as an array.
 */
(function (call) {
  if (call) {
    async.parallel([
      function (callback) {
        setTimeout(function () {
          callback(null, 'one');
        }, 200);
      },
      function (callback) {
        setTimeout(function () {
          callback(null, 'two');
        }, 100);
      }
    ], function (err, results) {
      if (err) {
        console.error(err);
      } else {
        console.log(results);  // ['one', 'two']
      }
    });
  }
})(false);

/**
 * whilst
 * Repeatedly call iteratee, while test returns true, Calls callback when stopped, or an error occurs.
 */
(function (call) {
  if (call) {
    var count = 0;
    async.whilst(
      function () {
        return count < 5;
      },
      function (callback) {
        count++;
        setTimeout(function () {
          callback(null, count);
        }, 1000);
      },
      function (err, n) {
        if (err) {
          console.error(err);
        } else {
          console.log(n);
        }
      }
    );
  }
})(false);

/**
 * queue
 * Creates a queue object with the specified concurrency. Tasks added to the queue are processed in parallel(up to the concurrency limit). If all workers are in progress, the task is queued until one becomes avaliable. Once a worker completes a task, that task's callback is called.
 */
(function (call) {
  if (call) {
    var q = async.queue(function (task, callback) {
      console.log('run ' + task.name);
      callback();
    }, 2);

    q.drain = function () {
      console.log('all items have been processed');
    };

    q.push({ name: 'task1' }, function (err) {
      console.log('finished task1');
    });

    q.push({ name: 'task2' }, function (err) {
      console.log('finished task2');
    });

    q.push([{ name: 'task3' }, { name: 'task4' }, { name: 'task5' }], function (err) {
      console.log('finished task3, task4, task5');
    });

    q.unshift({ name: 'task6' }, function (err) {
      console.log('finished task6');
    });
  }
})(false);

/**
 * util
 * Repeatedly call iteratee until test returns true. Call callback when stopped, or an error occurs. callback will be passed an error and any arguments passed to the final iteratee's callback.
 * The inverse of whilst
 */

(function (call) {
  if (call) {
    var count = 0;
    async.until(
      function () {
        return count >= 5;
      },
      function (callback) {
        setTimeout(function () {
          ++count;
          callback(null, count);
        }, 500);
      },
      function (err, n) {
        if (err) {
          console.error(err);
        } else {
          console.log(n);
        }
      }
    )
  }
})(false);

