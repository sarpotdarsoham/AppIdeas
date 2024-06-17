function BinaryToDecimal(number) {
    const digits = number.split('');
    console.log(digits);

    let result = 0;
    let isValid = true;
    digits.forEach(digit => {
        if(digit !== '0' && digit !== '1') {
            console.error('Invalid binary number.');
            isValid = false;
        }
    })
    if(isValid) {
        let placeValue = 1;
        for(let i = digits.length - 1; i >= 0; i--) {
            let number = digits[i];
            console.log(`For i = ${i}, the number is ${number}`);
            result += (number * placeValue);
            console.log(result);
            placeValue *= 2;

        }
        console.log({result});
        return result;
    }

}

document.getElementById('convertButton').addEventListener('click', () => {
    let fulLElement = document.getElementById('BinaryInput');
    console.log({fulLElement})
    const binaryInput = document.getElementById('BinaryInput').value;
    const decimalResult = BinaryToDecimal(binaryInput);

    (decimalResult != null) ? document.getElementById('result').textContent = `Decimal : ${decimalResult}` : document.getElementById('result').textContent = `Invalid binary number`
})
