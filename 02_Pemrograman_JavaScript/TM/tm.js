function fizzBuzz(arr) {
    if (!Array.isArray(arr)) {
        return "Input tidak valid";
    }

    let hasil = "";

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let kata = "";

        // kelipatan 14 dulu, baru 7, terus 2
        if (num % 14 === 0) {
            kata = "FizzBuzz";
        } else if (num % 7 === 0) {
            kata = "Buzz";
        } else if (num % 2 === 0) {
            kata = "Fizz";
        } else {
            kata = num;
        }

        hasil += kata;

        if (i < arr.length - 1) {
            hasil += " ";
        }
    }

    return hasil;
}

module.exports = fizzBuzz;