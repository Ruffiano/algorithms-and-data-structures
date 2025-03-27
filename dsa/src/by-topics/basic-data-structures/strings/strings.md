### **1. Tushuntirish: Qatorlar nima va ular qanday ishlaydi?**

Qatorlar (Strings) belgilar ketma-ketligi bo‘lib, ular odatda matnni saqlash uchun ishlatiladi. Qatorlar indekslash yordamida boshqariladi va har bir belgi o‘z indeksiga ega (0 dan boshlanadi). 

#### **Asosiy xususiyatlari:**
1. **O‘zgarmaslik (Immutable):** Ko‘pchilik dasturlash tillarida qatorlar o‘zgartirilmaydi. O‘zgartirishlar yangi qator yaratishni talab qiladi.
2. **Keng ko‘lamli amallar:** Qatorlar kesish, qidirish, qo‘shish, almashtirish kabi ko‘plab amallarni qo‘llab-quvvatlaydi.
3. **Xotira boshqaruvi:** Qatorlar odatda doimiy uzunlikda xotirada saqlanadi, bu esa indekslashni tezlashtiradi.

#### **String bilan ishlashning asosiy usullari:**
- Qatorlarni qo‘shish (`concatenation`).
- Substring olish (kesish).
- Belgini qidirish.
- Qatorni teskari qilish.
- Qatorlarni tartiblash yoki o‘zgartirish.

---

### **2. Misollar bilan tushuntirish**

#### **Misol 1: Qatorni teskari qilish**
Qatorni teskari tartibda qaytaruvchi funksiya.

```typescript
function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello")); // "olleh"
```

**Nega ishlaydi?**  
1. `split('')` qatorni belgilar massiviga aylantiradi.  
2. `reverse()` massivni teskari qiladi.  
3. `join('')` massivni qaytadan qatorga birlashtiradi.

---

#### **Misol 2: Belgini qidirish**
Berilgan qator ichida bir belgi necha marta uchraganligini aniqlash.

```typescript
function countCharacter(str: string, char: string): number {
    let count = 0;
    for (let c of str) {
        if (c === char) {
            count++;
        }
    }
    return count;
}

console.log(countCharacter("hello world", "o")); // 2
```

**Nega ishlaydi?**  
- Har bir belgi uchun tekshiruv amalga oshiriladi va belgi mos kelsa, hisoblagich ortadi.

---

#### **Misol 3: Qatorni palindromligini tekshirish**
Qatorning chapdan va o‘ngdan bir xil bo‘lishini tekshirish.

```typescript
function isPalindrome(str: string): boolean {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
```

**Nega ishlaydi?**  
- Qatorning teskari nusxasi yaratiladi va original qator bilan taqqoslanadi.

---

### **3. Uyga Vazifalar**

#### **Vazifa 1: Eng uzun so‘zni toping**
Berilgan qator ichida eng uzun so‘zni qaytaruvchi funksiya yozing.  

**Input:** `"The quick brown fox jumps over the lazy dog"`  
**Output:** `"jumps"`

```typescript
function findLongestWord(str: string): string {
    // your code here
}
```

**Pseudo Code:**
1. Qatorni bo‘shliq bo‘yicha bo‘ling (so‘zlar ro‘yxati yarating).  
2. Har bir so‘zning uzunligini tekshiring.  
3. Eng uzun so‘zni qaytarish.

```pseudo
function findLongestWord(str):
    words = split str by spaces
    longest = ""
    for word in words:
        if length(word) > length(longest):
            longest = word
    return longest
```

---

#### **Vazifa 2: Belgilarni unikal qilib o‘zgartirish**
Berilgan qator ichida faqat bir marta uchraydigan belgilarni qaytaruvchi funksiya yozing.  

**Input:** `"aabccde"`  
**Output:** `"bde"`

```typescript
function uniqueCharacters(str: string): string {
    // your code here
}
```

**Pseudo Code:**
1. Belgilarni sanash uchun obyekt yarating.  
2. Har bir belgi uchun uning uchrash sonini hisoblang.  
3. Faqat bir marta uchraydigan belgilarni natija sifatida qaytaring.

```pseudo
function uniqueCharacters(str):
    count = {}
    for char in str:
        if char in count:
            increment count[char]
        else:
            set count[char] = 1
    result = ""
    for char in str:
        if count[char] == 1:
            append char to result
    return result
```

---

#### **Vazifa 3: Qator ichida raqamlarni yig‘indisini hisoblash**
Qator ichida mavjud bo‘lgan barcha raqamlarning yig‘indisini qaytaruvchi funksiya yozing.  

**Input:** `"abc123xyz45"`  
**Output:** `15`

```typescript
function sumOfNumbersInString(str: string): number {
    // your code here
}
```

**Pseudo Code:**
1. Qatorni har bir belgi bo‘yicha tekshiring.  
2. Agar belgi raqam bo‘lsa, uni yig‘indiga qo‘shing.  
3. Umumiy yig‘indini qaytarish.

```pseudo
function sumOfNumbersInString(str):
    sum = 0
    for char in str:
        if char is a digit:
            sum += convert char to number
    return sum
```