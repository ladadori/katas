/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

import _ from 'lodash';

export default (oldObj, newObj) => {
    const result = {};
    const keys = _.union(_.keys(oldObj), _.keys(newObj));
    for (const key of keys) {
      if (_.has(oldObj, key) && _.has(newObj, key)) {
        if (oldObj[key] === newObj[key]) {
          result[key] = 'unchanged';
        }
        else {
          result[key] = 'changed';
        }
      }
      if (_.has(oldObj, key) && !_.has(newObj, key)) {
        result[key] = 'deleted';
      }
      if (!_.has(oldObj, key) && _.has(newObj, key)) {
        result[key] = 'added';
      }
    }
    return result;
  };