const inputText = document.getElementById("inputText");
const btn = document.getElementById("btn");
const output = document.getElementById("output");
const vowels = ["a", "e", "i", "o", "u"];
console.log(vowels);

const countVowels = () => {
  let count = 0;
  let text = inputText.value;
  for (let letter of text.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  output.innerHTML = `The text contains <span>${count}</span>  vowels`;
  return count;
};

btn.addEventListener("click", countVowels);
countVowels();
