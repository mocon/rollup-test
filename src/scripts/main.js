import debug from 'debug';

const log = debug('app:log');

// Disable logging in production
if (ENV !== 'production') {
    debug.enable('*');
    log('Logging is enabled!');
} else {
    debug.disable();
}
