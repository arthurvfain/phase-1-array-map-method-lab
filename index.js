const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased()
{
  return tutorials.map(title =>
  {
    let working = [...title];
    for (let i = 0; i < working.length-1; i++)
    {
       if (i === 0)
       {
         working[i] = working[i].toUpperCase();
       }
       else if (title[i-1] === " ")
       {
         working[i] = working[i].toUpperCase();
       }
    }
    return working.join('');
  });
}

// function titleCased(){
//   let finalOutput = []

//   tutorials.forEach(phrase => {
//     // break phrase into single words
//     // capitalize each word
//     // join words back into phrases
//     // re-build phrase array with new phrases

//     let phraseWordArray = phrase.split(" ")
//     let mappedPhraseWords = phraseWordArray.map(word => word[0].toUpperCase())
//     let newPhraseArray = mappedPhraseWords.join(" ")
//     finalOutput.push(newPhraseArray)
//   })

//   return finalOutput
// }


// regex


// function titleCase(ars,title)
// {
//   let working = [...ars[title]]
//   //console.log(ars[title]);
//   for (let i = 0; i < working.length-1; i++)
//   {
//      if (i === 0)
//      {
//        working[i] = working[i].toUpperCase();
//        //console.log(working[i]);
//      }
//     else if (ars[title][i-1] === " ")
//     {
//       working[i] = working[i].toUpperCase();
//       //console.log(working[i]);
//     }
//     //ars[title] = working.join(``);
//   }
//   ars[title] = working.join(``);
//   return ars[title];
// }

// function titleCased(arr)
// {
//   arr.map(titleCase)
//   return tutorials;
// }