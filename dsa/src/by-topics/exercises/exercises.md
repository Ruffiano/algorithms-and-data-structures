### **String: Misollar**

#### **1. Oson: Reverse a String**  
**Masala sharti:** Berilgan matnni teskari tartibda qaytaring.  
**Input:** `"hello"`  
**Output:** `"olleh"`  

```typescript
function reverseString(str: string): string {
  // Your code here
}
```

**Pseudo Code:**  
1. Matnni massivga aylantirish.  
2. Elementlarni teskari tartibda joylashtirish.  
3. Yig‘ib, yangi satr qaytarish.

---

#### **2. Oson: Count Vowels in a String**  
**Masala sharti:** Satrdagi unli harflar sonini hisoblang.  
**Input:** `"education"`  
**Output:** `5`  

```typescript
function countVowels(str: string): number {
  // Your code here
}
```

**Pseudo Code:**  
1. Unli harflar ro‘yxatini yaratish.  
2. Satr bo‘yicha har bir harfni tekshirish.  
3. Agar unli harf bo‘lsa, hisoblagichni oshirish.

---

#### **3. O‘rtacha: Palindrome Check**  
**Masala sharti:** Satrdan orqaga va oldinga o‘qilganda bir xil bo‘lsa, `true` qaytaring.  
**Input:** `"madam"`  
**Output:** `true`  

```typescript
function isPalindrome(str: string): boolean {
  // Your code here
}
```

**Pseudo Code:**  
1. Satrni teskari tartibda qaytarib olish.  
2. Asl satr bilan solishtirish.  
3. Agar teng bo‘lsa, `true` qaytarish.

---

#### **4. Qiyin: Longest Substring Without Repeating Characters**  
**Masala sharti:** Satr ichida takrorlanmaydigan eng uzun substringni qaytaring.  
**Input:** `"abcabcbb"`  
**Output:** `3` (substring: `"abc"`)  

```typescript
function lengthOfLongestSubstring(str: string): number {
  // Your code here
}
```

**Pseudo Code:**  
1. Pointer va oyna ishlatish.  
2. Har bir elementni tekshirib, takrorlansa oynadan chiqarish.  
3. Eng uzun substringni yangilab borish.

---

#### **5. Qiyin: Group Anagrams**  
**Masala sharti:** Berilgan so‘zlarni anagramma guruhlariga ajrating.  
**Input:** `["eat", "tea", "tan", "ate", "nat", "bat"]`  
**Output:** `[["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]`  

```typescript
function groupAnagrams(strs: string[]): string[][] {
  // Your code here
}
```

**Pseudo Code:**  
1. So‘zni tartiblangan ko‘rinishga keltirish.  
2. Tartiblangan ko‘rinishni asos qilib olish.  
3. Guruhlarga ajratish.

---

### **Array: Misollar**

#### **1. Oson: Find Maximum Element**  
**Masala sharti:** Massivdagi eng katta sonni qaytaring.  
**Input:** `[1, 3, 5, 2]`  
**Output:** `5`  

```typescript
function findMax(arr: number[]): number {
  // Your code here
}
```

**Pseudo Code:**  
1. Massivni boshidan oxirigacha qidirish.  
2. Eng kattasini qaytarish.

---

#### **2. Oson: Remove Duplicates**  
**Masala sharti:** Massivdan takroriy elementlarni olib tashlang.  
**Input:** `[1, 2, 2, 3, 4, 4, 5]`  
**Output:** `[1, 2, 3, 4, 5]`  

```typescript
function removeDuplicates(arr: number[]): number[] {
  // Your code here
}
```

**Pseudo Code:**  
1. Setga massivni o‘tkazish.  
2. Setni massivga qaytarish.

---

#### **3. O‘rtacha: Merge Two Sorted Arrays**  
**Masala sharti:** Ikki saralangan massivni birlashtirib, yangi saralangan massivni qaytaring.  
**Input:** `[1, 3, 5]`, `[2, 4, 6]`  
**Output:** `[1, 2, 3, 4, 5, 6]`  

```typescript
function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
  // Your code here
}
```

**Pseudo Code:**  
1. Ikkala massivni birlashtirish.  
2. Sort funksiyasini ishlatish.

---

#### **4. Qiyin: Rotate Array**  
**Masala sharti:** Massivni k marta o‘ngga siljiting.  
**Input:** `[1, 2, 3, 4, 5]`, `k = 2`  
**Output:** `[4, 5, 1, 2, 3]`  

```typescript
function rotateArray(arr: number[], k: number): number[] {
  // Your code here
}
```

**Pseudo Code:**  
1. K qiymatini massiv uzunligiga moslashtirish.  
2. Massivni bo‘lib olib, birlashtirish.

---

#### **5. Qiyin: Find Pair with Target Sum**  
**Masala sharti:** Berilgan massivda yig‘indisi ma’lum maqsadga teng bo‘lgan juftlikni toping.  
**Input:** `[2, 7, 11, 15]`, `target = 9`  
**Output:** `[0, 1]` (indices)  

```typescript
function findPairWithTargetSum(arr: number[], target: number): number[] {
  // Your code here
}
```

**Pseudo Code:**  
1. HashMapni ishlatish.  
2. Har bir elementni tekshirish.  
3. Juftlikni qaytarish.


---

### **Map: Misollar**

#### **1. Oson: Create a Frequency Map**
**Masala sharti:** Berilgan massivdagi har bir elementning nechta marta takrorlanganini hisoblaydigan xarita yarating.  
**Input:** `[1, 2, 2, 3, 3, 3, 4]`  
**Output:** `Map { 1 => 1, 2 => 2, 3 => 3, 4 => 1 }`  

```typescript
function createFrequencyMap(arr: number[]): Map<number, number> {
  const map = new Map<number, number>();
  // Your code here
  return map;
}
```

**Pseudo Code:**  
1. Yangi xarita yaratish.  
2. Har bir element uchun:  
   - Xaritada bor bo‘lsa, qiymatini oshirish.  
   - Aks holda, qiymatini `1` ga teng qilib qo‘yish.  

---

#### **2. Oson: Check Map Contains Key**
**Masala sharti:** Xaritada ma’lum kalit mavjudligini tekshiring.  
**Input:** `Map { 1 => 'a', 2 => 'b' }`, `key = 1`  
**Output:** `true`  

```typescript
function hasKey(map: Map<number, string>, key: number): boolean {
  // Your code here
}
```

**Pseudo Code:**  
1. Xaritaning `.has()` metodidan foydalanish.  
2. Natijani qaytarish.

---

#### **3. O‘rtacha: Invert a Map**
**Masala sharti:** Xaritadagi kalitlar va qiymatlarni almashtiring.  
**Input:** `Map { 1 => 'a', 2 => 'b' }`  
**Output:** `Map { 'a' => 1, 'b' => 2 }`  

```typescript
function invertMap(map: Map<number, string>): Map<string, number> {
  const invertedMap = new Map<string, number>();
  // Your code here
  return invertedMap;
}
```

**Pseudo Code:**  
1. Xaritadagi har bir juftlikni o‘qish.  
2. Kalit va qiymatlarni almashtirib yangi xaritaga qo‘shish.

---

#### **4. Qiyin: Group Elements by Frequency**
**Masala sharti:** Massivdagi elementlarni chastotasiga qarab guruhlang.  
**Input:** `[1, 2, 2, 3, 3, 3]`  
**Output:** `Map { 1 => [1], 2 => [2, 2], 3 => [3, 3, 3] }`  

```typescript
function groupByFrequency(arr: number[]): Map<number, number[]> {
  const map = new Map<number, number[]>();
  // Your code here
  return map;
}
```

**Pseudo Code:**  
1. Xarita yaratish.  
2. Har bir element uchun xaritada massiv qo‘shish yoki yangilash.

---

#### **5. Qiyin: Find First Non-Repeating Character**
**Masala sharti:** Berilgan satrda takrorlanmaydigan birinchi belgi indeksini toping.  
**Input:** `"swiss"`  
**Output:** `0` (birinchi `"s"`)  

```typescript
function firstNonRepeatingCharacter(str: string): number {
  const map = new Map<string, number>();
  // Your code here
  return -1; // If no non-repeating character is found
}
```

**Pseudo Code:**  
1. Xaritada har bir belgini hisoblash.  
2. Satrdan xaritaga asoslanib birinchi takrorlanmaydigan belgi topish.  

---

### **Set: Misollar**

#### **1. Oson: Remove Duplicates**
**Masala sharti:** Berilgan massivdagi takroriy elementlarni olib tashlang.  
**Input:** `[1, 2, 2, 3, 4, 4]`  
**Output:** `[1, 2, 3, 4]`  

```typescript
function removeDuplicates(arr: number[]): number[] {
  const set = new Set<number>();
  // Your code here
  return Array.from(set);
}
```

**Pseudo Code:**  
1. Setga massiv elementlarini qo‘shish.  
2. Setni massivga aylantirish.  

---

#### **2. Oson: Check Element in Set**
**Masala sharti:** Setda element mavjudligini tekshiring.  
**Input:** `Set { 1, 2, 3 }`, `value = 2`  
**Output:** `true`  

```typescript
function hasElement(set: Set<number>, value: number): boolean {
  // Your code here
}
```

**Pseudo Code:**  
1. `.has()` metodidan foydalanish.  
2. Natijani qaytarish.  

---

#### **3. O‘rtacha: Find Intersection of Two Sets**
**Masala sharti:** Ikki setning umumiy elementlarini toping.  
**Input:** `Set { 1, 2, 3 }`, `Set { 2, 3, 4 }`  
**Output:** `Set { 2, 3 }`  

```typescript
function intersection(set1: Set<number>, set2: Set<number>): Set<number> {
  const result = new Set<number>();
  // Your code here
  return result;
}
```

**Pseudo Code:**  
1. Birinchi setdagi har bir elementni ikkinchi set bilan solishtirish.  
2. Umumiy elementlarni natija setiga qo‘shish.  

---

#### **4. Qiyin: Find Subsets**
**Masala sharti:** Berilgan to‘plamning barcha kichik to‘plamlarini toping.  
**Input:** `[1, 2]`  
**Output:** `[[], [1], [2], [1, 2]]`  

```typescript
function findSubsets(arr: number[]): number[][] {
  const subsets: number[][] = [];
  // Your code here
  return subsets;
}
```

**Pseudo Code:**  
1. Rekursiv yoki iterativ algoritm orqali kichik to‘plamlarni topish.  
2. Har bir elementni mavjud to‘plamlarga qo‘shish.

---

#### **5. Qiyin: Find Unique Pairs with Target Sum**
**Masala sharti:** Berilgan massivdagi takrorlanmaydigan juftliklarni toping, ularning yig‘indisi ma’lum maqsadga teng bo‘lishi kerak.  
**Input:** `[2, 4, 3, 5, 7, 8]`, `target = 10`  
**Output:** `[[2, 8], [3, 7]]`  

```typescript
function uniquePairs(arr: number[], target: number): number[][] {
  const set = new Set<number>();
  const result: number[][] = [];
  // Your code here
  return result;
}
```

**Pseudo Code:**  
1. Set orqali elementlarni saqlash.  
2. Har bir element uchun juftlikni tekshirish va natijaga qo‘shish.  

---