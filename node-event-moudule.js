const EventEmitter = require('node:events');

const emitter = new EventEmitter();

emitter.on('user-added', (email, country) => {
    console.log(`Registration successful from ${country}`);
});

emitter.on('user-added', (email) => {
    console.log(`Sending email to ${email}`);
});

console.log('Welcome to the System');
emitter.emit('user-added', 'demo@email.com', 'Canada');