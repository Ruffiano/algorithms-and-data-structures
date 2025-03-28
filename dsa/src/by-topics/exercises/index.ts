/*
    1. Oson: Reverse a String
    Masala sharti: Berilgan matnni teskari tartibda qaytaring.
    Input: "hello"
    Output: "olleh"

    function reverseString(str: string): string {
    // Your code here
    }

    Pseudo Code:
    Matnni massivga aylantirish.
    Elementlarni teskari tartibda joylashtirish.
    Yig‘ib, yangi satr qaytarish.
*/
function reverseString(str: string): string {
    let arrStr: string[] = [];
    for(let element of str) {
        arrStr.push(element)
    }
    arrStr.reverse()
    const str2 = arrStr.toString()
    const st = str2.replaceAll(',', '')
    return st;
}

// console.log(reverseString("hello"));

/*
    2. Oson: Count Vowels in a String
    Masala sharti: Satrdagi unli harflar sonini hisoblang.
    Input: "education"
    Output: 5

    function countVowels(str: string): number {
        // Your code here
    }
    Pseudo Code:

    Unli harflar ro‘yxatini yaratish.

    Satr bo‘yicha har bir harfni tekshirish.

    Agar unli harf bo‘lsa, hisoblagichni oshirish.
*/
function countVowels(str: string): number {
    let count: number = 0;
    let map = new Map<string, string>();
    map.set('a', 'a');
    map.set('e', 'e');
    map.set('i', 'i');
    map.set('o', 'o');
    map.set('u', 'u');

    for(let element of str) {
        const elm = map.get(element)
        if(elm) count++;
    }
    return count
  }
  
//   console.log(countVowels("education"));

/*
3. O‘rtacha: Palindrome Check
    Masala sharti: Satrdan orqaga va oldinga o‘qilganda bir xil bo‘lsa, true qaytaring.
    Input: "madam"
    Output: true

    typescript
    Copy
    Edit
    function isPalindrome(str: string): boolean {
    // Your code here
    }
    Pseudo Code:

    Satrni teskari tartibda qaytarib olish.

    Asl satr bilan solishtirish.

    Agar teng bo‘lsa, true qaytarish.
*/
export function isPalindrome1(str: string): boolean {
    let arrStr: string[] = [];
    for(let element of str) {
        arrStr.push(element);
    }
    arrStr.reverse();
    const replaceString = arrStr.toString();
    const replaceStr = replaceString.replaceAll(',', '');
    return replaceStr === str;
}

export function isPalindrome2(str: string): boolean {
    console.log(str.split('').reverse().join(''));
    const reversedStr = str.split('').reverse().join('');
    return reversedStr === str;
}


// console.log(isPalindrome2('madam'));