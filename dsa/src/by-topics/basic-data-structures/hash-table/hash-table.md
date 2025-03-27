# Hash Tables

---

#### **1. Mavzuni tushuntirish**

**Hash Table** — ma'lumotlarni saqlash va ularga tezkor kirish imkonini beruvchi ma'lumotlar tuzilmasi. U **hash function** orqali kalitni qiymatga bog‘laydi. Hash Table ko‘pincha asosiy operatsiyalarning (qo‘shish, o‘chirish, qidirish) O(1) vaqtni talab qilishini ta'minlaydi. 

Hash Table tarkibida:
- **Keys (Kalitlar)**: Unikal identifikatorlar.  
- **Values (Qiymatlar)**: Kalit bilan bog‘langan qiymatlar.  
- **Hash Function**: Kalitni massivdagi indeksga xaritalash vazifasini bajaradi.

**Ishlash prinsipi:**
1. Kalitni olish.
2. Hash function orqali indeksga o‘zgartirish.
3. Indeks bo‘yicha massivga qiymatni joylashtirish yoki undan olish.

**Muammo:** Hash function kolliziyalarni keltirib chiqarishi mumkin (bir xil indeksga bir nechta kalit mos kelishi).  
**Yechim:** Kolliziyalarni boshqarish uchun **Chaining** yoki **Open Addressing** usullari qo‘llaniladi.

---

#### **2. Misollar bilan tushuntirish (Typescript)**

##### **a) Hash Table'ni yaratish**
```typescript
class HashTable<K, V> {
    private buckets: [K, V][][];

    constructor(private size: number = 16) {
        this.buckets = Array.from({ length: size }, () => []);
    }

    // Hash function
    private hash(key: K): number {
        return typeof key === "string"
            ? key.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) % this.size
            : Number(key) % this.size;
    }

    // Element qo'shish yoki yangilash
    set(key: K, value: V): void {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (const [k, v] of bucket) {
            if (k === key) {
                bucket.splice(bucket.indexOf([k, v]), 1, [key, value]);
                return;
            }
        }
        bucket.push([key, value]);
    }

    // Elementni olish
    get(key: K): V | undefined {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (const [k, v] of bucket) {
            if (k === key) return v;
        }
        return undefined;
    }

    // Elementni o'chirish
    delete(key: K): boolean {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                return true;
            }
        }
        return false;
    }
}
```

##### **b) Misol va tushuntirish**
```typescript
const hashTable = new HashTable<string, number>();

hashTable.set("apple", 3);
hashTable.set("banana", 5);
hashTable.set("orange", 2);

console.log(hashTable.get("apple")); // Output: 3
console.log(hashTable.get("banana")); // Output: 5
console.log(hashTable.delete("orange")); // Output: true
console.log(hashTable.get("orange")); // Output: undefined
```

##### **Izoh**
- `hashTable.set` orqali kalit-qiymat juftliklari qo‘shildi.
- `hashTable.get` kalitga mos qiymatni qaytardi.
- `hashTable.delete` yordamida kalit o‘chirildi.

---

#### **3. Uyga vazifalar**

##### **a) Masala 1: Takrorlanayotgan elementlarni topish**
Massivdagi takrorlanayotgan elementlarni toping va ularning sonini qaytaring.

**Input:**  
`["apple", "banana", "apple", "orange", "banana", "banana"]`  
**Output:**  
`{ "apple": 2, "banana": 3, "orange": 1 }`

**Bo‘sh kod:**
```typescript
function findDuplicates(arr: string[]): Record<string, number> {
    // your code here
}
```

**Pseudo Code:**  
1. Hash Table yaratish.  
2. Har bir elementni ko‘rib chiqish.  
3. Agar element hash table'da mavjud bo‘lsa, uning qiymatini oshirish.  
4. Bo‘lmasa, elementni qo‘shish va qiymatini 1 qilish.  
5. Hash Table'ni qaytarish.  

```pseudo
function findDuplicates(arr):
    create hashTable
    for each item in arr:
        if item in hashTable:
            increment hashTable[item]
        else:
            set hashTable[item] = 1
    return hashTable
```

---

##### **b) Masala 2: Ikki massivdagi umumiy elementlarni topish**
Ikki massivdagi bir xil elementlarni toping va qaytaring.

**Input:**  
Massiv1: `[1, 2, 3, 4, 5]`  
Massiv2: `[3, 4, 5, 6, 7]`  
**Output:**  
`[3, 4, 5]`

**Bo‘sh kod:**
```typescript
function findCommonElements(arr1: number[], arr2: number[]): number[] {
    // your code here
}
```

**Pseudo Code:**  
1. Birinchi massiv elementlarini hash table'ga joylashtirish.  
2. Ikkinchi massivni ko‘rib chiqib, hash table'da mavjud elementlarni aniqlash.  
3. Umumiy elementlarni qaytarish.  

```pseudo
function findCommonElements(arr1, arr2):
    create hashTable
    create resultList
    for each item in arr1:
        add item to hashTable
    for each item in arr2:
        if item in hashTable:
            add item to resultList
    return resultList
```

---

##### **c) Masala 3: Kalitlarni tartiblangan holatda qaytarish**
Hash Table'dagi barcha kalitlarni tartiblangan holatda qaytaring.

**Input:**  
Hash Table: `{ "banana": 5, "apple": 3, "orange": 2 }`  
**Output:**  
`["apple", "banana", "orange"]`

**Bo‘sh kod:**
```typescript
function getSortedKeys(hashTable: Record<string, number>): string[] {
    // your code here
}
```

**Pseudo Code:**  
1. Hash Table'dan barcha kalitlarni oling.  
2. Kalitlarni tartiblang.  
3. Tartiblangan kalitlarni qaytaring.  

```pseudo
function getSortedKeys(hashTable):
    create keyList from hashTable keys
    sort keyList
    return keyList
```