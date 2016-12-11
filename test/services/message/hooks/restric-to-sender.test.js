'use strict';

const assert = require('assert');
const restricToSender = require('../../../../src\services\message\hooks\restric-to-sender.js');

describe('message restricToSender hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    restricToSender()(mockHook);

    assert.ok(mockHook.restricToSender);
  });
});
