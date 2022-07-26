function palindrome(str) {
    
    var string = str.toLowerCase();

    var length = string.length;

    var reversed_string = string.split("").reverse().join();

    

    for(var i = 0; i < length; i++)
    {
        if(string[i] == reversed_string[i])
        {
            continue;
        }
        else if(string[i] != reversed_string[i])
        {
            return false;
        }
    }

    return true;

  }
  
  palindrome("eye");

  console.log( palindrome("eye"))