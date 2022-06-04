// Write a function that takes two input `numA` and `numB` and returns the sum of both numbers.
// 2. After writing the function write 5 tests for above function with different values
// 3. Throw an error when the arguments passed in not a number.
// 4. Make first test fail and see if you get the result of second test.
// 5. If not fix it using the test framework (try...catch) we learned in the testing framework video.

function add(numA,numB) {
    return numA + numB;
}

let result,expected;

//testing framework

function test(message,callback) {
    try{
        callback();
        console.log('yes', message);
    } catch (error){
    console.error(error);
    console.log('no', message);
    }
}

// assertion library
function expect(actual) {
    return {
        toEqual: function(expected){
            if(actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}`)
            }
        },
        toBeEqual: function(expected){
            if(typeof actual !== expected) {
                throw new Error(`${typeof actual} is not equal to ${expected}`)
            }
        }
    };
}

function testAdd(){
    result = add(2,4);
    expected = 5;
    expect(result).toEqual(expected)
}

test('adding 2 and 4', testAdd);
test("add 10 + 20 to be equal 30",() =>{
    expect(add(10,20).toEqual(30));
});
