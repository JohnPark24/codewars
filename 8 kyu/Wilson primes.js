// Wilson primes satisfy the following condition. Let P represent a prime number.

// Then,

// ((P-1)! + 1) / (P * P)
// should give a whole number.

// Your task is to create a function that returns true if the given number is a Wilson prime.

function isWilsonPrime(p) {
    if (p === 0 || p === 1) {
        return false;
    }

    let factorial = 1;
    for (let i = 2; i <= (p - 1); i++) {
        factorial = (factorial * i) % p;
    }

    return (factorial + 1) % p === 0;
}

//failed screw this kata