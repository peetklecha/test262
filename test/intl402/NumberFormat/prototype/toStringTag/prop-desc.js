// Copyright (C) 2018 Ujjwal Sharma. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-intl.numberformat.prototype-@@tostringtag
description: >
  Tests that Intl.NumberFormat.prototype[@@toStringTag] has the required attributes.
includes: [propertyHelper.js]
---*/

assert.sameValue(Intl.NumberFormat.prototype[Symbol.toStringTag], 'Object');
verifyProperty(Intl.NumberFormat.prototype, Symbol.toStringTag, {
  writable: false,
  enumerable: false,
  configurable: true
});
