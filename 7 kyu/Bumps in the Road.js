// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead

function bump(x){
    let count = {}
    x.split('').forEach(letter => {
        count[letter] = count[letter] ? ++count[letter] : 1;
    })
    return count['n'] <= 15 || count['n'] == undefined ? "Woohoo!" : "Car Dead"
}

const bump=x=>x.split('n').length>16?"Car Dead":"Woohoo!"

function bump(x){
    return (x.match(/n/g) || []).length > 15 ? "Car Dead" : "Woohoo!";
}

const bump = x => x.split``.filter(e => e === 'n').length > 15 ? 'Car Dead' : 'Woohoo!';
