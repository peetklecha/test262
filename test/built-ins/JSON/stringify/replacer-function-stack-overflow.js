// Copyright (C) 2020 Alexey Shvayka. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-json.stringify
description: >
  Stack overflow due to infinite recursion in replacer throws an expected error.
---*/

var getStackOverflowError = function() {
  try {
    return getStackOverflowError();
  } catch (err) {
    return err;
  }
};

var StackOverflowError = getStackOverflowError().constructor;

var obj = {};
var objReplacer = function() {
  return {key: obj};
};

assert.throws(StackOverflowError, function() {
  JSON.stringify(null, objReplacer);
});

var arr = [];
var arrReplacer = function() {
  return [arr];
};

assert.throws(StackOverflowError, function() {
  JSON.stringify(null, arrReplacer);
});
