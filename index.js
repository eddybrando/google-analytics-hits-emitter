'use strict';

var warnings = {
  gaUndefined: 'W001: "ga()" is undefined. No hits will be send to Google Analytics.',
};

function logWarn(msg) {
  console.warn('[Google Analytics Hits Emitter] ' + msg);
}

function hitsEmitter(cb) {
  if (typeof window.ga === 'undefined') {
    logWarn(warnings.gaUndefined);
    return null;
  }
  return cb();
}

function sendEvent() {
  console.log('Run sendEvent');
}

module.exports = {
  sendEvent: function() { hitsEmitter(sendEvent); },
};
