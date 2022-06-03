function fullName(firstname,lastname) {
    return firstname + " " + lastname
}

let result = fullName('abhishek','vivek');
let expected = 'vivek';
if(result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`)
}


function totalamount(amount,taxRate) {
    return amount + (amount*taxRate)
}

result = totalamount(2,4);
expected = 12;
if(result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`)
}
