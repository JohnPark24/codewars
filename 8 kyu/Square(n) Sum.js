function squareSum(numbers){
    let numSquared = numbers.map(function (x) {
        return Math.pow(x, 2);
    });
    return numSquared.reduce(
        (p, c) => p + c, 0
    );
}