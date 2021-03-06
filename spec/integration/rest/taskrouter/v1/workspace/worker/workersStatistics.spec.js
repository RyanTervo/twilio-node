'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('WorkersStatistics', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.taskrouter.v1.workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .workers
                                        .statistics().fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var workspaceSid = 'WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://taskrouter.twilio.com/v1/Workspaces/${workspaceSid}/Workers/Statistics`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'cumulative': {
              'reservations_created': 0,
              'reservations_accepted': 0,
              'reservations_rejected': 0,
              'reservations_timed_out': 0,
              'reservations_canceled': 0,
              'reservations_rescinded': 0,
              'activity_durations': [
                  {
                      'max': 0,
                      'min': 900,
                      'sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'friendly_name': 'Offline',
                      'avg': 1080,
                      'total': 5400
                  },
                  {
                      'max': 0,
                      'min': 900,
                      'sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'friendly_name': 'Busy',
                      'avg': 1012,
                      'total': 8100
                  },
                  {
                      'max': 0,
                      'min': 0,
                      'sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'friendly_name': 'Idle',
                      'avg': 0,
                      'total': 0
                  },
                  {
                      'max': 0,
                      'min': 0,
                      'sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'friendly_name': 'Reserved',
                      'avg': 0,
                      'total': 0
                  }
              ],
              'start_time': '2008-01-02T00:00:00Z',
              'end_time': '2008-01-02T00:00:00Z'
          },
          'realtime': {
              'total_workers': 15,
              'activity_statistics': [
                  {
                      'friendly_name': 'Idle',
                      'workers': 0,
                      'sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                  },
                  {
                      'friendly_name': 'Busy',
                      'workers': 9,
                      'sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                  },
                  {
                      'friendly_name': 'Offline',
                      'workers': 6,
                      'sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                  },
                  {
                      'friendly_name': 'Reserved',
                      'workers': 0,
                      'sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                  }
              ]
          },
          'workspace_sid': 'WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'url': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Workers/Statistics'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.taskrouter.v1.workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .workers
                                        .statistics().fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
