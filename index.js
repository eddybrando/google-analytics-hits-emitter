'use strict';

var warnings = {
  gaUndefined: 'W001: "ga()" is undefined. No hits will be send to Google Analytics.',
};

function hitsEmitter(cb) {
  if (typeof window.ga === 'undefined') {
    console.warn(warnings.gaUndefined);
    return null;
  }
  return cb;
}

function emitEvent() {
  console.log('Run emitEvent');
}

module.exports = {
  emitEvent: hitsEmitter(emitEvent),
};
