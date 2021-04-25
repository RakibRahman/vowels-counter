const inputText = document.getElementById("inputText");
console.log(inputText);
const btn = document.getElementById("btn");
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
  console.log(`The text contains ${count} vowels`);
  return count;
};

btn.addEventListener("click", countVowels);
