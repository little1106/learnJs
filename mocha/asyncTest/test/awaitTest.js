const assert = require('assert');
const hello = require('../hello');

describe('#asyncTest',()=>{
    describe('#awaitTest()',()=>{
        beforeEach(()=>{
            console.log('beforeEach');
        });
        it('#async function', async ()=>{
            let r = await hello();
            assert.strictEqual(r,15);
        });
    })
})