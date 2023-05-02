function palindrome(str) {

  let string = str.toLowerCase();

  let regex = /[a-z0-9]+/ig;

  let char = string.match(regex);

  let filtered = char.join("");

  let reversed_filtered = filtered.split("").reverse().join("");

  
  if(filtered == reversed_filtered)
  {
    return true;
  }
  else
  {
    return false;
  }
}

palindrome("_eye");

//Challenge Complete.

