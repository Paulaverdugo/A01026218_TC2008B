function firstNoRep(str){
    let repeated = {};

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        repeated[char] = (repeated[char] || 0) + 1;
    }

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if(repeated[char] === 1){
            return char;
        }
    }
}

console.log('First Non Repeated Character:', firstNoRep('your string'));

function bubble_sort(lst){
    let len = lst.length;

    for (let i = 0; i < len; i++){
        for (j = i+1; j < len; j++){
            if(lst[j] < lst[i]){
                const temp = lst[i];
                lst[i] = lst[j];
                lst[j] = temp;
            }
        }
    }
    return lst;
}

console.log('Bubble Sort:', bubble_sort([1, 5, 3, 8, 2, 9, 4, 7, 6, 0]));

function rev(lst){
    let len = lst.length;
    let temp = [];

    for (let i = len - 1; i >= 0; i--)
    {
        temp.push(lst[i]);
    }

    return temp;
}

console.log('Reverse:', rev([1, 2, 3]));

function revarg(lst)
{
    let len = lst.length;
    let temp = 0;

    for(let i = 0; i < len / 2; i++)
    {
        let j = len - 1 - i;
        temp = lst[i];
        lst[i] = lst[j];
        lst[j] = temp;
    }

    return lst;
}

console.log('Reverse in Argument:', revarg([1, 2, 3]));

function firstCapitalize(str)
{
    let capLetters = [];
    let len = str.length;
    capLetters.push((str[0]).toUpperCase());

    for(let i = 0; i<len - 1; i++)
    {
        if(str[i] == " ")
        {
            capLetters.push((str[i+1]).toUpperCase());
        }
    }

    return(capLetters);
}

console.log('First Letters Capitalized:',firstCapitalize("hello i am paula verdugo"))

function GCD(n, m) 
{
    if (m === 0)
    {
      return n;
    }
    else 
    {
      return GCD(m, n % m);
    }
}

console.log('GDC:', GCD(10, 25)); // Output: 5

function hackerSpeak(str)
{
    let translated = '';
    let len = str.length;

    dictionary = {
        'a': '4',
        'e' : '3',
        'i' : '1',
        'o' : '0',
        's' : '5',
    }

    for(i = 0; i < len; i++){
        let char = str[i];
        if (dictionary[char])
        {
            translated += dictionary[char];
        }
        else
        {
            translated += char;
        }
    }
    return(translated)
}

console.log('Hacker Speak:', hackerSpeak("your string"))

function factors(n) 
{
    let factors_lst = []
    for (let i = 1; i <= n; i++) 
    {
      if (n % i === 0) 
      {
        factors_lst.push(i);
      }
    }
    return(factors_lst);
  }
  
console.log('Factors:', factors(12)) // Output: Factors of 12: 1, 2, 3, 4, 6, 12

function removeDuplicates(arr) {
    const uniqueElements = new Set(arr);
    return [...uniqueElements];
}

console.log('Remove Duplicates:', removeDuplicates([1, 0, 1, 1, 0, 0]))

function shortestStringLength(strList) 
{
    let shortest = strList[0].length;
    for (let i = 1; i < strList.length; i++) 
    {
      if (strList[i].length < shortest) 
      {
        shortest = strList[i].length;
      }
    }
    return shortest;
}

console.log(`Shortest String: ${shortestStringLength(['Hello', 'World', 'JavaScript'])}`)

function palindrome(str) 
{
    for (let i = 0, j = str.length - 1; i < j; i++, j--) 
    {
      if (str[i] !== str[j]) 
      {
        return false;
      }
    }
    return true;
}

console.log('Palindrome:', palindrome('civic'))

function ABC(list) 
{
    for (let i = 0; i < list.length - 1; i++) 
    {
      for (let j = 0; j < list.length - i - 1; j++) 
      {
        if (list[j] > list[j + 1]) 
        {
          let temp = list[j];
          list[j] = list[j + 1];
          list[j + 1] = temp;
        }
      }
    }
    return list;
}

console.log(ABC(["paula", "santiago", "mariel", "candy"]))

function median_mode(numbers) 
{
    const sorted = numbers.sort((a, b) => a - b);
    const length = sorted.length;
    const mid = Math.floor(length / 2);
  
    let median = length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
  
    let mode = 0;
    let modeCount = 0;
    let currentCount = 0;
    let currentValue = sorted[0];
  
    for (let i = 0; i < length; i++) 
    {
      if (sorted[i] === currentValue) 
      {
        currentCount++;
      } else 
      {
        if (currentCount > modeCount) 
        {
          modeCount = currentCount;
          mode = currentValue;
        }
  
        currentCount = 1;
        currentValue = sorted[i];
      }
    }
  
    if (currentCount > modeCount) 
    {
      modeCount = currentCount;
      mode = currentValue;
    }
  
    return { median, mode };
}

console.log(median_mode([1, 2, 3, 4, 5, 6, 7, 7, 8, 9])) // Median: 5.5, Mode: 7


function mostFrequent(list) 
{
    let freq = {};
    let max = 0;
    let result;
  
    for (let i = 0; i < list.length; i++) 
    {
      let word = list[i];
  
      if (freq[word]) 
      {
        freq[word]++;
      } else {
        freq[word] = 1;
      }
  
      if (freq[word] > max) 
      {
        max = freq[word];
        result = word;
      }
    }
  
    return result;
}

console.log('Most Frequent:', mostFrequent(["a", "b", "b", "c", "c", "c", "c"]))

function isPower2(num) 
{
    if (num < 1) {
      return false;
    }
  
    while (num % 2 === 0) {
      num /= 2;
    }
  
    return num === 1;
}

console.log('Is Power of 2:', isPower2(16))

function descending(nums) 
{
    const sortedNums = [];
    
    while (nums.length > 0) {
      let maxIndex = 0;
      for (let i = 1; i < nums.length; i++) 
      {
        if (nums[i] > nums[maxIndex]) 
        {
          maxIndex = i;
        }
      }
      sortedNums.push(nums[maxIndex]);
      nums.splice(maxIndex, 1);
    }
  
    return sortedNums;
}

console.log('Descending Numbers List:', descending([4, 2, 7, 1, 3])); // [7, 4, 3, 2, 1]