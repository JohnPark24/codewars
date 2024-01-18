// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

export function accum(s: string): string {
    let result = [];
    for(let i = 0; i < s.length; i++){
        let uppercase = s[i].toUpperCase();
        let lowercase = s[i].toLowerCase().repeat(i);
        result.push(uppercase + lowercase);
    }
    return result.join('-');
}

export function accum(s: string): string {
    return s.split('')
    .map((elem, index) => elem.toUpperCase() + (elem.toLowerCase()).repeat(index))
    .join('-');
}