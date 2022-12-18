//this isn't elegant solution at all, but it works >_<
const QUOTES = [`'`, `"`, "`"];

const inputInterpreter = (string) => {
  const fullPieces = [];
  //holder for quoted commands remove
  const start = {
      quote: null,
      place: null,
      space: false,
  };
  //holder for spaced commands remove
  const spaceHolder = {
    place: 0,
    space: true,
  };



  for(let i = 0; i < string.length; i++){
    //quotes solutions
    if(start.quote === string[i]){
      fullPieces.push(string.slice(start.place + 1, i));
      start.place = null;
      start.quote = null;
      continue;
    }
    if(QUOTES.includes(string[i]) && start.place === null){
      start.quote = string[i];
      start.place = i;
    }
    //space solutions
    //last check for spaced word
    if((spaceHolder.space === true) && (i === (string.length - 1)) && !(QUOTES.includes(string[i]))){
      fullPieces.push(string.slice(spaceHolder.place, i+1));
    }
    //work with spaced words in middle lane
    if((spaceHolder.space === true) && (string[i] === ' ') && (start.place === null)){
      let piece = string.slice(spaceHolder.place, i);
      if(!(piece.at(0) && piece.at(-1) && QUOTES.includes(piece.at(0)))){
        fullPieces.push(piece);
      } 
      spaceHolder.place = i+1;
      spaceHolder.space = true;
    } 
    //first check for spaces without quotes
    if((spaceHolder.place === 0) && (start.place === null) && (string[i] === ' ')){
      fullPieces.push(string.slice(spaceHolder.place, i));
      spaceHolder.place = i+1;
      spaceHolder.space = true;
    }
  }
  return fullPieces;
}

export {inputInterpreter};