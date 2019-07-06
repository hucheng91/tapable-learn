const { SyncBailHook } = require('tapable');

const syncBailHook = new SyncBailHook([ 'nam1', 'nam2']);

syncBailHook.tap('1', (name) => {
    console.log('Hello ', name);
    return  null;
});

syncBailHook.tap('2', (name) => {
    console.log('Welcome ', name);
    
});

syncBailHook.call('Hucheng');