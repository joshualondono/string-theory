/******************
 * YOUR CODE HERE *
 ******************/


function indexedChar(str){
  let result = ''
  
  for(let i = 0; i < str.length; i++){
    result += i + str[i]
  }
  return result
}


function exclaim(str){
  let result = ''
  
  for(let i = 0; i < str.length; i++){
    
    if(str[i] === '?' || str[i] === '.'){
     result = result + '!'
    } else {
      result = result + str[i]
    }
   }
  return result
}


function repeat(str,val){
  let result = ''
  
  for(let i = 0; i < str.length; i++){
    result = result + str[i]
  }
  
  for (let step = 0; step < val; step++) {
  const output = result 
  console.log(output);
}
}


function repeatagain (str,max){
   let result = ''
   let count = 0 
   
   while (count < max){
     result = result + str
     count = count + 1
   }
return result 
}

function truncate(str){
  
  let result = ''
  let rep_str = '...'
  
  for (let i = 0; i < 15; i++){
    
    if(i === 15 - 1){
      result = result + rep_str
    } else {
      result = result + str[i]
    }    
  }  
  return result
}


function ciEmailify(str){
  let result = ''
   
  for(let i = 0; i < str.length; i++){
    if(str[i] === ' '){
      result = result + '.'
    } else if(i === str.length - 1) {
      result = result + str[i] + '@codeimmersives.com'
    } else {
      result = result + str[i]
    }
  }
  return result 
}


function reverse(str){
  let result = ''
  
  for(let i = str.length - 1; i > -1; i--){
    result = result + str[i] 
  }
  
  return result 
}


function onlyVowels(str){
  let result = ''
  
  for(let i = 0; i < str.length; i++){
    
    if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
      result = result + str[i]
    }
  }
  return result  
}



function crazyCase(str){
  //every other value determined by even odd test

  let result = ''
  let space = 0

  for(let i = 0; i < str.length; i++){
    

       if (str[i] === ' '){
       //everytime a space is found in string, space variable is incremented by 1 
       result = result + str[i] 
       space++
         
     } else if ([i + space] % 2 === 0) {
       //space variable added to 
       result = result + str[i].toLowerCase()
     } else {
       result = result + str[i].toUpperCase()
     } 
  } 
  return result
}

function camelCase(str){
  let result = ''
  
  for(let i = 0; i < str.length; i++){
    
   if(i === 0){
     result = result + str[i].toLowerCase()
   
  } else if (str[i] === ' ' && str[i + 1] === ' '){
    result = result
  } else if (str[i] === ' ' && str[i + 1] != ' '){
    result = result + str[i + 1].toUpperCase()
    i++
  } else {
    result = result + str[i].toLowerCase()
  }
}
    return result 

}






 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  indexedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  numberedChars,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
