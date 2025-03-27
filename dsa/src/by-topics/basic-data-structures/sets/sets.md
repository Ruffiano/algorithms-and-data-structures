# Sets

---

#### **1. Mavzuni tushuntirish**

**Set** — ma'lumotlarni saqlashning o‘ziga xos turi bo‘lib, unda bir xil qiymatlar saqlanmaydi (takrorlanishsiz). Set o‘z elementlarini unikal qilib saqlaydi va ular ustida tezkor amallar bajarishga imkon beradi. 

**Asosiy xususiyatlari:**
1. Har bir element unikal bo‘lishi kerak.
2. Tartibga e'tibor bermaydi.
3. Odatda, elementlarga qo‘shish, o‘chirish va mavjudligini tekshirish amallari O(1) vaqtni talab qiladi.

**Set'ning asosiy amallari:**
- Element qo‘shish: `add(value)`
- Elementni o‘chirish: `delete(value)`
- Element mavjudligini tekshirish: `has(value)`
- Set uzunligini aniqlash: `size`

**Set ishlatiladigan joylar:**
1. Takrorlanmaydigan ma'lumotlarni saqlash.
2. Bir xil ma'lumotlarni filtr qilish.
3. Birgalikda ishlatiladigan ma'lumotlar ustida matematik operatsiyalar (unions, intersections).

---

#### **2. Misollar bilan tushuntirish (Typescript)**

##### **a) Oddiy Set bilan ishlash**
```typescript
const mySet = new Set<number>();

// Element qo'shish
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1); // Takrorlangan element qabul qilinmaydi

console.log(mySet); // Output: Set { 1, 2, 3 }

// Elementni o'chirish
mySet.delete(2);
console.log(mySet); // Output: Set { 1, 3 }

// Element mavjudligini tekshirish
console.log(mySet.has(1)); // Output: true
console.log(mySet.has(4)); // Output: false

// Set uzunligini aniqlash
console.log(mySet.size); // Output: 2
```

##### **b) Set yordamida takrorlanishni olib tashlash**
```typescript
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = new Set(numbers);

console.log(uniqueNumbers); // Output: Set { 1, 2, 3, 4, 5 }
```

**Izoh:**  
Massivda bir xil qiymatlar bo‘lsa, `Set` ularni avtomatik ravishda filtrlaydi.

##### **c) Set orqali umumiy elementlarni topish**
```typescript
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

const intersection = new Set([...setA].filter(x => setB.has(x)));

console.log(intersection); // Output: Set { 3, 4 }
```

**Izoh:**  
`filter` metodi yordamida ikki setning umumiy elementlarini topish mumkin.

---

#### **3. Uyga vazifalar**

##### **a) Masala 1: Takrorlanmas massivni yaratish**
Berilgan massivdan barcha takroriy elementlarni olib tashlab, unikal elementlar saqlangan yangi massiv qaytaring.

**Input:**  
`[1, 2, 2, 3, 4, 4, 5]`  
**Output:**  
`[1, 2, 3, 4, 5]`

**Bo‘sh kod:**
```typescript
function removeDuplicates(arr: number[]): number[] {
    // your code here
}
```

**Pseudo Code:**  
1. `Set` yaratish.  
2. Massivdagi barcha elementlarni `Set`ga qo‘shish.  
3. `Set`ni massivga aylantirib qaytarish.  

```pseudo
function removeDuplicates(arr):
    create a new Set with elements of arr
    convert Set to array
    return the array
```

---

##### **b) Masala 2: Umumiy elementlarni topish**
Berilgan ikkita massivdagi umumiy elementlarni toping va ularni qaytaring.

**Input:**  
Massiv1: `[10, 20, 30, 40]`  
Massiv2: `[20, 30, 50, 60]`  
**Output:**  
`[20, 30]`

**Bo‘sh kod:**
```typescript
function findCommonElements(arr1: number[], arr2: number[]): number[] {
    // your code here
}
```

**Pseudo Code:**  
1. Birinchi massiv elementlarini `Set`ga joylashtirish.  
2. Ikkinchi massivni `filter` orqali tekshirish.  
3. `Set`ga mos keladigan elementlarni qaytarish.  

```pseudo
function findCommonElements(arr1, arr2):
    create Set from arr1
    create resultList
    for each item in arr2:
        if item is in Set:
            add item to resultList
    return resultList
```

---

##### **c) Masala 3: Birlashtirilgan Set yaratish**
Berilgan ikkita massivni birlashtirib, takroriy elementlarni olib tashlang.

**Input:**  
Massiv1: `[1, 2, 3]`  
Massiv2: `[2, 3, 4, 5]`  
**Output:**  
`[1, 2, 3, 4, 5]`

**Bo‘sh kod:**
```typescript
function unionSets(arr1: number[], arr2: number[]): number[] {
    // your code here
}
```

**Pseudo Code:**  
1. Ikkala massivni birlashtirib yangi massiv yaratish.  
2. Yangi massivni `Set`ga joylashtirish.  
3. `Set`ni massivga aylantirib qaytarish.  

```pseudo
function unionSets(arr1, arr2):
    create newArray by concatenating arr1 and arr2
    create Set from newArray
    convert Set to array
    return the array
```