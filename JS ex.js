//1. Swaping Two Variables
let a = "Product A";
let b = "Product B";

let temp = a;
a = b;
b = temp;

console.log(a); 

console.log(b); 

//2. Checking if a Number is Odd or Even

function assignmentSection(ticketNumber) {

    if (ticketNumber % 2 === 0) {
      return 'Section A';
    } else {

      return 'Section B';
    }
  }
  
  console.log(assignmentSection(123)); 


  //3. Factorial of a Number

  function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }
 console.log(factorial(6))  ;
 console.log(factorial(0));


 //4.Palindrome Check  // 
 function isPalindrome (str) {
    let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
  }
  isPalindrome("A man, a plan, a canal, Panama");

 // 5. Find the Largest of Three Numbers

 function findLargestsales(a, b, c) {
    return Math.max(a, b, c);

  }
  
   console.log(findLargestsales(6, 20, 30)); 

  //6. Fibonacci Sequence

  function fibonacci(n) {
    let seq = [0, 1];
    for (let i = 2; i < n; i++) {
      seq.push(seq[i - 1] + seq[i - 2]);
    }
    return seq;
  }
  console.log(fibonacci(5));


  //7. sum of digits


  function sumDigits(num) {
  let sum = 0;
   let str = num.toString();

  for (let i = 0; i < str.length; i++) {

    sum += Number(str[i]);
  }
   return sum;
}
  console.log(sumDigits(123));

//8.Check Prime Number

function primeNum (num) {
    if (num <= 1) return false;

    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  console.log(primeNum (10));

  //.9 Reverse a String

  function reverseString (str) {
    let reversed = '';
    
    for ( let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  console.log(reverseString('sumaia'));


  //10.  Factorial Using a Loop

  function loopFac(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  console.log(loopFac(3));
  

  //11. Find the GCD of Two Numbers

  function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  
  console.log(gcd(48,88));


  //12. perfect num

  function perfectNum(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {

      if (num % i === 0)
       sum += i;
    }
    return sum === num;
  }

  console.log(perfectNum(15));


  //13. Find the LCM of Two Numbers

  function lcm(a, b) {
    function gcd(x, y) {
      while (y !== 0) {
        [x, y] = [y, x % y];
      }
      return x;
    }
    return (a * b) / gcd(a, b);
  }
  
  console.log(lcm(4, 6));


  //14.  Remove Duplicates from an Array

  function sumArray(arr) {
    
    let uniqueArr = [...new Set(arr)];
  
    let total = 0;
    for (let i = 0; i < uniqueArr.length; i++) {
      total += uniqueArr[i];
    }
  
    return total;
  }
  
  console.log(sumArray([4, 6, 9, 6, 4, 3, 2, 1, 9, 1, 1])); 


  //15.Sum of Elements in an Array
  function sumArrayof(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  }
  
  console.log(sumArrayof([4, 6, 9, 6, 4, 3, 2, 1, 9, 1, 1])); 
  

  //16. Find the Maximum Number in an Array
  function findMaxSteps(dailySteps) {
    let maxSteps = 0; 

    for (let i = 0; i < dailySteps.length; i++) {
      if (dailySteps[i] > maxSteps) {
        maxSteps = dailySteps[i]; 
      }
    }
    return maxSteps;
  }
  
  const steps = [5000, 7500, 12000, 6000, 9000];
  console.log(findMaxSteps(steps)); 

  //17. Find the Minimum Number in an Array

  function findMinExpense(monthlyExpenses) {
    let minExpense = monthlyExpenses[0];

    for (let i = 1; i < monthlyExpenses.length; i++) {
      if (monthlyExpenses[i] < minExpense) {

        minExpense = monthlyExpenses[i]; 
      }
    }
    return minExpense;
  }
  
  const expenses = [350, 280, 420, 300, 250];
  console.log(findMinExpense(expenses)); 


 // 18. Find the Common Elements Between Two Arrays

 function findCommonMovies(list1, list2) {
  const commonMovies = [];

  for (let i = 0; i < list1.length; i++) {
    if (list2.includes(list1[i])) { 
      commonMovies.push(list1[i]);
    }
  }
  return commonMovies;

}

const watchlist1 = ["Inception", "Interstellar", "Dune", "Arrival"];
const watchlist2 = ["Dune", "Arrival", "Blade Runner 2049", "Parasite"];

console.log(findCommonMovies(watchlist1, watchlist2)); 

//19. Count the Occurrences of a Value in an Array

function countProductOccurrences(inventory, productId) {
  let count = 0;

  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i] === productId) {
      count++;
    }
  }
  return count;
}

const productInventory = [101, 105, 101, 103, 101, 107];

console.log(countProductOccurrences(productInventory, 101)); 

//20
function findSongIndex(playlist, songTitle) {
  return playlist.indexOf(songTitle); 
}

const myPlaylist = ["Song A", "Song B", "Song C", "Song D"];

console.log(findSongIndex(myPlaylist, "Song C")); 
console.log(findSongIndex(myPlaylist, "Song E")); 

//21. Sort an Array in Ascending Order

function sortDeadlinesAscending(deadlines) {
  
  return deadlines.sort((a, b) => a - b);
}

const taskDeadlines = [new Date('2025-08-10'), new Date('2025-08-05'), new Date('2025-08-15')];
console.log(sortDeadlinesAscending(taskDeadlines)); 


//22. Convert a String to an Array

function stringToArray(text) {
  return text.split(''); 
}

const Textto = "sumaia ";

console.log(stringToArray(Textto)); 

//23.Join an Array into a String

function arrayToString(characters) {
  return characters.join(''); 
}

const messageCharacters = ["H", "i", " ", "s", "u", "m", "a", "i","a"];
console.log(arrayToString(messageCharacters)); 


//24.  Find the Length of a String

function getBioLength(str) {
  return str.length;
}

const stringtext = "computer engineer.";
console.log(getBioLength(stringtext)); 

//25.Convert a String to Uppercase

function convertToUppercase(title) {
  return title.toUpperCase();
}

const blogTitle = "hi, welcome to my blog";
console.log(convertToUppercase(blogTitle)); 


//26. Convert a String to Lowercase

function convertToLowercase(title) {
  return title.toLowerCase();
}

const blogTitlelow = "HI, WELCOME TO MY BLOG";
console.log(convertToLowercase(blogTitlelow));


//27. Check if a String Contains a Substring

function containsThisWord(Content,Word) {
  return Content.includes(Word);
}

const chick = "computer engineer graduate";

console.log(containsThisWord(chick, "graduate")); 


//29. Get the Character at a Specific Index in a String

function getCharAtIndex(text, index) {
  return text[index];
}

const content = "attack";
console.log(getCharAtIndex(content, 0)); 
console.log(getCharAtIndex(content, 2)); 

//30.Check if a String Starts with a Specific Substring


function startsWithDomain(email, domain) {
  return email.startsWith(domain);
}

const userEmail = "sumaiayadak@gmail.com";
console.log(startsWithDomain(userEmail, "sumaiayadak@")); 
console.log(startsWithDomain(userEmail, "admin@")); 


//31. Check if a String Ends with a Specific Substring

function endsWithExtension(filename, extension) {
  return filename.endsWith(extension);
}

const uploadedFile = "document.pdf";
console.log(endsWithExtension(uploadedFile, ".pdf")); 
console.log(endsWithExtension(uploadedFile, ".docx")); 



//32. Extract a Substring from a String

function messagePreview(message, length) {
  return message.substring(0, length); 
}

const fullMessage = "Hello, how are you ?";
console.log(messagePreview(fullMessage, 7)); 

//33.  Create a Countdown Timer

function countdown(seconds) {
  let timer = seconds;
  const countdownInterval = setInterval(() => {
    console.log(timer + " seconds remaining...");
    timer--;

    if (timer < 0) {
      clearInterval(countdownInterval); 
      console.log("Time's up!");
    }
  }, 1000); 
}

//34.Random Number Between Two Values

function getRandomNumber(min, max) {
  
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber(3, 6));


//35. Convert a Number to a String
function numberToString(num) {
  return String(num); // Or num.toString()
}

const price = 200;
console.log(numberToString(price));
console.log(typeof numberToString(price)); 

//37. Get the Current Date and Time
function getCurrentDateTime() {
  const now = new Date();
  return now; 
}

console.log(getCurrentDateTime()); 

//Get the Day of the Week


function getDayOfWeek() {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date();
  return days[today.getDay()];
}

console.log(getDayOfWeek());

//39. Check if an Array Contains a Specific Element


function productExists(productList, productId) {
  return productList.includes(productId);
}

const products = ["P10", "P5", "P3", "P70"];
console.log(productExists(products, "P3")); 
console.log(productExists(products, "P90")); 

//40. Find the Length of an Array

function getLength(productIDs) {
  return productIDs.length;
}

const contentlength = ["1234", "4567", "8910", "1112"];
console.log(getLength(contentlength)); 











  



  



  
  
