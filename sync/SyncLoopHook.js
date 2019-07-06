const { SyncLoopHook } = require('tapable');

const syncLoopHook = new SyncLoopHook([ 'nam1', 'nam2']);

let count1 = 1;
syncLoopHook.tap('1', (name) => {
    console.log('Hello ', name);
   while(count1 > 0) {
        --count1;
        return true;
    }
});

let count2 = 1;
syncLoopHook.tap('2', (name) => {
    console.log('Welcome ', name);
    while(count2 > 0) {
        --count2;
        return true;
    }
});

let count3 = 3;
syncLoopHook.tap('3', (name) => {
    console.log('Thank ', name);
    while(count3 > 0) {
        --count3;
        return true;
    }
});

syncLoopHook.call('Alice');