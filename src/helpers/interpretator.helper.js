//this isn't elegant solution at all, but it works >_<
const QUOTES = [`'`, `"`, "`"];

const inputInterpreter = (string) => {
  const fullPieces = [];
  //holder for quoted commands remove
  const start = {
      quote: null,
      place: null,
      space: 0,
  };

  for(let i = 0; i < string.length; i++){
    //quotes solutions
    //close quote
    if(start.quote === string[i]){
      fullPieces.push(string.slice(start.place + 1, i));
      start.place = null;
      start.quote = null;
      continue;
    }
    //open quote
    if(QUOTES.includes(string[i]) && start.place === null){
      start.quote = string[i];
      start.place = i;
    }
    //space solutions
    //last check for spaced word
    if((i === (string.length - 1)) && !(QUOTES.includes(string[i]))){
      fullPieces.push(string.slice(start.space, i+1));
    }
    //work with spaced words in middle lane
    if((string[i] === ' ') && (start.place === null)){
      let piece = string.slice(start.space, i);
      if(!(piece.at(0) && piece.at(-1) && QUOTES.includes(piece.at(0)))){
        fullPieces.push(piece);
      } 
      start.space = i+1;
    } 
    //first check for spaces without quotes
    if((start.space === 0) && (start.place === null) && (string[i] === ' ')){
      fullPieces.push(string.slice(start.space, i));
      start.space = i+1;
    }
  }
  const trimmed = fullPieces.map(e => e.trim());
  return trimmed;
}

export {inputInterpreter};