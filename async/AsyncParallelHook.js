const {
	AsyncParallelHook
 } = require("tapable");


 const hook = new AsyncParallelHook(['name']);

 hook.tapAsync('1',(name) => {
     console.log('hello',name);
 })
 hook.tapAsync('2',(name) => {
    console.log('Wellocome',name);
})



hook.callAsync('hucheng');