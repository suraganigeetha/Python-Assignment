function reverseString() {
  const stringInput = document.getElementById("stringInput").value;
  const reversedString = stringInput.split('').reverse().join('');
  document.getElementById("reversedString").textContent = `Reversed String: ${reversedString}`;
}

function checkPalindrome() {
  const numberInput = document.getElementById("numberInput").value;
  const isPalindrome = numberInput === numberInput.split('').reverse().join('');
  document.getElementById("palindromeResult").textContent = `Is Palindrome: ${isPalindrome}`;
}

function calculateTip() {
  const billAmount = parseFloat(document.getElementById("billAmount").value);
  const tipPercentage = parseFloat(document.getElementById("tipPercentage").value);
  const tipAmount = (billAmount * tipPercentage) / 100;
  const totalAmount = billAmount + tipAmount;
  document.getElementById("totalAmount").textContent = `Total Amount (including ${tipPercentage}% tip): $${totalAmount.toFixed(2)}`;
}