'use strict';

describe('Service: TrimmersService', function () {

  // load the service's module
  beforeEach(module('flipkartApp'));

  // instantiate service
  var TrimmersService;
  beforeEach(inject(function (_TrimmersService_) {
    TrimmersService = _TrimmersService_;
  }));

  it('should do something', function () {
    expect(!!TrimmersService).toBe(true);
  });

});
