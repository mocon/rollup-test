// Load a stylesheet
import '../styles/main.scss';

// Dependencies
import debug from 'debug';

// Logging via debug
const log = debug('app:log');

// Disable logging in production
if (ENV !== 'production') {
    debug.enable('*');
    log('Logging is enabled!');
    document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] +
  ':35729/livereload.js?snipver=1"></' + 'script>');
} else {
    debug.disable();
}

log('Testing');
