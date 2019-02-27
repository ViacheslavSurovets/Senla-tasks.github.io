function frame (words, c){

    let len = Math.max(...words.map(x => x.length));

    let l = console.log;

    l(c.repeat(len + 4));

    words.forEach( s =>  l( c + s.padStart(len + 1) + ' ' + c));

    l(c.repeat(len + 4));

}

