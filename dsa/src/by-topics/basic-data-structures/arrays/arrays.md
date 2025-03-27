# **1. Arrays (Massivlar)**

### **1. Tushuntirish: Massivlar nima va ular qanday ishlaydi?**

Massivlar bir xil turdagi ma’lumotlarni ketma-ket saqlash uchun ishlatiladigan eng oddiy ma’lumotlar tuzilmasi hisoblanadi. Har bir element indeks orqali adreslanadi, va indekslar 0 dan boshlanadi. 

#### **Asosiy xususiyatlari:**
1. **Statik o‘lcham**: Massivning o‘lchami oldindan belgilangan va keyinchalik o‘zgarmaydi.
2. **Tezkor murojaat**: Har qanday elementga indeks orqali murojaat qilish O(1) vaqt ichida amalga oshiriladi.
3. **Homogen ma’lumotlar**: Massiv faqat bir xil turdagi elementlarni saqlaydi (masalan, faqat sonlar yoki qatorlar).

#### **Massivni ishlatishning asosiy usullari:**
- **Element qo‘shish**: Massivga element qo‘shish uchun oxiriga qo‘shiladi yoki kerakli indeksga joylashtiriladi.
- **Element o‘chirish**: Element o‘chirilganda qolgan elementlar qayta tashkil etiladi.
- **Qidiruv**: Elementni massivda topish uchun ketma-ket qidiruv yoki tartiblangan massiv uchun binary search ishlatiladi.

---

### **2. Misollar bilan tushuntirish**

#### **Misol 1: Massivni yaratish va ishlatish**
```typescript
let numbers: number[] = [10, 20, 30, 40];

// Elementlarni konsolga chiqarish
console.log(numbers[0]); // 10

// Yangi element qo‘shish
numbers.push(50);
console.log(numbers); // [10, 20, 30, 40, 50]

// Elementni o‘chirish
numbers.pop();
console.log(numbers); // [10, 20, 30, 40]

// Elementni yangilash
numbers[2] = 35;
console.log(numbers); // [10, 20, 35, 40]
```

**Nega ishlaydi?**  
1. `push()` metodi massiv oxiriga yangi element qo‘shadi.  
2. `pop()` metodi oxirgi elementni olib tashlaydi.  
3. Indeks orqali elementga murojaat qilish O(1) vaqtni oladi.

---

#### **Misol 2: Eng katta va eng kichik qiymatni topish**
```typescript
function findMinMax(arr: number[]): { min: number; max: number } {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return { min, max };
}

let arr = [3, 5, 1, 8, 2];
console.log(findMinMax(arr)); // { min: 1, max: 8 }
```

**Nega ishlaydi?**  
- `Math.min(...arr)` massivdagi eng kichik elementni qaytaradi.  
- `Math.max(...arr)` massivdagi eng katta elementni qaytaradi.  

---

#### **Misol 3: Massivni teskari qilish**
```typescript
function reverseArray(arr: number[]): number[] {
    return arr.reverse();
}

let arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr)); // [5, 4, 3, 2, 1]
```

**Nega ishlaydi?**  
- `reverse()` metodi massivni joyida teskari tartibga keltiradi. Bu har bir elementni almashtiradi.

---

### **3. Uyga Vazifalar**

#### **Vazifa 1: Juft sonlarni chiqaruvchi funksiya**
Massivdan barcha juft sonlarni qaytaruvchi funksiya yozing.  

**Input:** `[1, 2, 3, 4, 5, 6]`  
**Output:** `[2, 4, 6]`

```typescript
function getEvenNumbers(arr: number[]): number[] {
    // your code here
}
```

**Pseudo Code:**
1. Massiv yaratish.
2. Har bir elementni tekshirish.
3. Agar son juft bo‘lsa, uni natija massiviga qo‘shish.
4. Natija massivini qaytarish.

```pseudo
function getEvenNumbers(arr):
    result = []
    for num in arr:
        if num % 2 == 0:
            append num to result
    return result
```

---

#### **Vazifa 2: Ikki massivni birlashtirish va tartiblash**
Ikki massivni birlashtiruvchi va tartiblangan massiv qaytaruvchi funksiya yozing.  

**Input:** `[3, 1, 4]`, `[5, 2]`  
**Output:** `[1, 2, 3, 4, 5]`

```typescript
function mergeAndSort(arr1: number[], arr2: number[]): number[] {
    // your code here
}
```

**Pseudo Code:**
1. Ikki massivni birlashtirish.
2. Natijaviy massivni kichikdan kattaga tartiblash.
3. Tartiblangan massivni qaytarish.

```pseudo
function mergeAndSort(arr1, arr2):
    result = combine arr1 and arr2
    sort result in ascending order
    return result
```

---

#### **Vazifa 3: Takrorlanadigan qiymatlarni hisoblash**
Massivdagi har bir qiymatning necha marta takrorlanganligini qaytaruvchi funksiya yozing.  

**Input:** `[1, 2, 2, 3, 3, 3, 4]`  
**Output:** `{ 1: 1, 2: 2, 3: 3, 4: 1 }`

```typescript
function countOccurrences(arr: number[]): { [key: number]: number } {
    // your code here
}
```

**Pseudo Code:**
1. Bo‘sh obyekt yaratish.
2. Har bir elementni ko‘rish.
3. Agar element obyektda mavjud bo‘lsa, hisobini oshirish.
4. Aks holda yangi element sifatida qo‘shish.
5. Natija obyektini qaytarish.

```pseudo
function countOccurrences(arr):
    count = {}
    for num in arr:
        if num in count:
            increment count[num]
        else:
            set count[num] = 1
    return count
```