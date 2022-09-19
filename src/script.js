let letterCounts = {};
let wordCount = {};

const letters = document.getElementById("lettersDiv");
const wordsdiv = document.getElementById("wordsDiv"); 

const button = document.getElementById("countButton");
  button.addEventListener("click", function() {     

    let typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase();  
    typedText = typedText.replace(/[^a-z'\s]+/g, "");
    let words = typedText.split(/\s/);    

    if(letters.childElementCount > 0){
      letterCounts = {};
      wordCount = {};     
      letters.innerHTML = "";
      wordsdiv.innerHTML = "";
    }    

    for (let i = 0; i < typedText.length; i++) {
        let currentLetter = typedText[i];    
        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1; 
        }else { 
            letterCounts[currentLetter]++; 
        }
      }

      for (let letter in letterCounts) { 
        const span = document.createElement("span");        
        const textContent = `"${letter}": ${letterCounts[letter]}, \n`;
        span.innerText = textContent;                 
        letters.appendChild(span);
        
      }
      
      for(let i = 0; i < words.length; i++){
        let currentWord = words[i];
        if (wordCount[currentWord] === undefined) {
          wordCount[currentWord] = 1; 
        }else { 
          wordCount[currentWord]++; 
        }
      }

      for (let word in wordCount) { 
        const span = document.createElement("span"); 
        const wordContent = `"${word}": ${wordCount[word]}, \n`;
        span.innerText = wordContent;                
        wordsdiv.appendChild(span); 
      }      
  });
  