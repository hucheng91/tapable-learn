const {AsyncParallelBailHook} = require("tapable");


 const hook = new AsyncParallelBailHook(['name']);

 hook.tapAsync('1',(name) => {
     console.log('hello',name);
     return "1234"
 })
 hook.tapAsync('2',(name) => {
    console.log('Wellocome',name);
})



hook.callAsync('hucheng');