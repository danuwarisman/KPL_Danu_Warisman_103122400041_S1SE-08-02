/**
 * @param {number} value
 * @returns {number | string}
 * @throws {Error}
 */
function zzzzOrNum(value) {
    // Memastikan argumen berupa data tunggal bertipe number
    if (typeof value !== 'number') {
        throw new Error("Input zzzzOrNum harus berupa angka tunggal (number).");
    }

    if (value % 15 === 0) {
        return "FizzBuzz";
    } else if (value % 3 === 0) {
        return "Fizz";
    } else if (value % 5 === 0) {
        return "Buzz";
    }

    return value;
}

/**
 * @param {number[]} sequence
 * @returns {(number | string)[]}
 * @throws {Error} 
 */
function fizzBuzz(sequence) {
    // Memastikan argumen adalah sebuah array (larik)
    if (!Array.isArray(sequence)) {
        throw new Error("Input fizzBuzz harus berupa larik (array).");
    }

    // Eksekusi fungsi internal
    const newSequence = sequence.map((e) => zzzzOrNum(e));

    return newSequence;
}

module.exports = {
    fizzBuzz: fizzBuzz,
    zzzzOrNum: zzzzOrNum,
};