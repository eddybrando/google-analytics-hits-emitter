'use strict';

var LOG_TYPES = {
  ERROR: 'LOG_ERROR',
  WARNING: 'LOG_WARNING',
};

var ERRORS = {};

var WARNINGS = {
  GA_UNDEFINED: 'W001: "ga()" is undefined. No hits will be send to Google Analytics.',
};

function log(type, msg) {
  var msgTemplate = '[Google Analytics Hits Emitter] ' + msg;
  if (type === LOG_TYPES.ERROR) {
    console.error(msgTemplate);
  } else if (type === LOG_TYPES.WARNING) {
    console.warn(msgTemplate);
  }
}

function hitsEmitter(cb) {
  if (typeof window.ga === 'undefined') {
    log(LOG_TYPES.WARNING, WARNINGS.GA_UNDEFINED);
    return null;
  }
  return cb();
}

function listenedSendEvent(e) {
  var targetTagName = e.target.tagName;
  console.log(targetTagName);
}

function sendEvent() {
  console.log('Run sendEvent');
}

function init() {
  var nodes = document.querySelectorAll('[data-ga-send-event]');
  for (var i = 0; i < nodes.length; i++) {
    nodes[i].addEventListener(
      'click',
      function(e) { listenedSendEvent(e); },  // jshint ignore:line
      false
    );
  }
}

module.exports = {
  init: function() { init(); },
  sendEvent: function() { hitsEmitter(sendEvent); },
};
