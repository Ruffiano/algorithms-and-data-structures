## **LRU Cache (Least Recently Used Cache)**

### **1. Mavzuni tushuntirish**

#### **Nima uchun LRU Cache kerak?**

Kesh — kompyuter tizimida tezroq ma'lumotlarni saqlash uchun ishlatiladigan vaqtinchalik saqlash joyi. Ammo keshning hajmi cheklangan bo‘lgani sababli, yangi ma'lumot qo‘shilganda eski va kam foydalanilgan ma'lumotlarni olib tashlash talab etiladi.

**LRU (Least Recently Used)** kesh algoritmi eng kam foydalanilgan elementni olib tashlashni afzal ko‘radi. Bu tizimda eng so‘nggi foydalanilgan elementlar keshda qoladi, kam foydalanilgan elementlar esa olib tashlanadi.

#### **LRU Cache qanday ishlaydi?**

LRU Cache ikki asosiy operatsiyani qo‘llab-quvvatlaydi:
1. **Get(key):**  
   - Berilgan kalit bo‘yicha qiymatni olish.
   - Agar qiymat topilsa, uni so‘nggi foydalanilgan holatga ko‘taradi.
2. **Put(key, value):**  
   - Yangi kalit-qiymat juftligini keshga qo‘shish.
   - Agar kesh to‘liq bo‘lsa, eng kam foydalanilgan element olib tashlanadi.

#### **LRU Cache tuzilmasi**
- **HashMap:** Ma'lumotlarni tezkor qidirish uchun.
- **Doubly Linked List:** Elementlarni foydalanish tartibini boshqarish va oson olib tashlash/qo‘shish uchun.

---

### **2. Misollar bilan tushuntirish (Typescript)**

#### **LRU Cache implementatsiyasi**

```typescript
class LRUCache {
  private capacity: number;
  private cache: Map<number, number>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key: number): number {
    if (!this.cache.has(key)) {
      return -1; // Agar kalit topilmasa, -1 qaytariladi.
    }
    const value = this.cache.get(key)!;
    this.cache.delete(key); // Kalitni o‘chirib, qaytadan qo‘shamiz.
    this.cache.set(key, value);
    return value;
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      this.cache.delete(key); // Kalitni o‘chirib, yangi qiymat bilan qo‘shamiz.
    }
    this.cache.set(key, value);
    if (this.cache.size > this.capacity) {
      // Eng kam foydalanilgan elementni olib tashlaymiz (birinchi element).
      const leastUsedKey = this.cache.keys().next().value;
      this.cache.delete(leastUsedKey);
    }
  }
}

// Misol:
const lru = new LRUCache(2);
lru.put(1, 1); // [1]
lru.put(2, 2); // [1, 2]
console.log(lru.get(1)); // 1 (1 eng so‘nggi ishlatilgan bo‘ladi)
lru.put(3, 3); // [2, 3] (2 olib tashlanadi, chunki 1 foydalanilgan edi)
console.log(lru.get(2)); // -1 (2 olib tashlangan)
console.log(lru.get(3)); // 3
```

---

### **3. Uyga vazifalar**

#### **1. LRU Cache bilan ishlash**

**Masala:**  
Berilgan operatsiyalar ketma-ketligi bo‘yicha LRU Cacheni boshqaring. Har bir `get` operatsiyasi qiymatni qaytarsin.  

**Input:**  
```typescript
operations = ["put", "put", "get", "put", "get"];
values = [[1, 1], [2, 2], [1], [3, 3], [2]];
capacity = 2;
```

**Output:**  
`[null, null, 1, null, -1]`

**Kod:**  
```typescript
function processLRU(operations: string[], values: any[], capacity: number): any[] {
  // Your code here
  return [];
}
```

**Pseudo Code:**  
```pseudo
function processLRU(operations, values, capacity):
    initialize LRUCache with given capacity
    results = []
    for each operation in operations:
        if operation is "put":
            call LRUCache.put(values)
            append null to results
        else if operation is "get":
            call LRUCache.get(values)
            append result to results
    return results
```

---

#### **2. Keshdagi eng katta qiymatni toping**

**Masala:**  
LRU Cachedan foydalanib, keshdagi eng katta qiymatni qaytaring.  

**Input:**  
```typescript
operations = ["put", "put", "put", "getMax"];
values = [[1, 10], [2, 5], [3, 20], []];
capacity = 3;
```

**Output:**  
`[null, null, null, 20]`

**Kod:**  
```typescript
function getMaxLRU(operations: string[], values: any[], capacity: number): any[] {
  // Your code here
  return [];
}
```

**Pseudo Code:**  
```pseudo
function getMaxLRU(operations, values, capacity):
    initialize LRUCache with given capacity
    initialize max value variable
    results = []
    for each operation in operations:
        if operation is "put":
            call LRUCache.put(values)
            update max value if necessary
            append null to results
        else if operation is "getMax":
            append max value to results
    return results
```

---

#### **3. Foydalanish chastotasi bo‘yicha qaytarish**

**Masala:**  
LRU Cacheda eng ko‘p foydalanilgan qiymatni qaytaring.  

**Input:**  
```typescript
operations = ["put", "put", "get", "getMostUsed"];
values = [[1, 100], [2, 200], [1], []];
capacity = 2;
```

**Output:**  
`[null, null, 100, 1]` (1 qiymat eng ko‘p foydalanilgan)

**Kod:**  
```typescript
function getMostUsed(operations: string[], values: any[], capacity: number): any[] {
  // Your code here
  return [];
}
```

**Pseudo Code:**  
```pseudo
function getMostUsed(operations, values, capacity):
    initialize LRUCache with given capacity
    initialize usage count map
    results = []
    for each operation in operations:
        if operation is "put":
            call LRUCache.put(values)
            update usage count
            append null to results
        else if operation is "getMostUsed":
            find key with highest usage count
            append key to results
    return results
```  