### **Bloom Filters**

#### **1. Mavzuni tushuntirish**

**Bloom Filter** — bu xotira samaradorligi yuqori bo‘lgan probabilistik ma'lumot tuzilmasi bo‘lib, unda elementlarning mavjudligini tezkor tekshirish mumkin. Bu tuzilma har doim *False Positive* natijalar berishi mumkin, ammo *False Negative* hech qachon bo‘lmaydi.

**Xususiyatlari:**
1. **Xotira samaradorligi:** Juda ko‘p elementlarni saqlash uchun kam joy talab qiladi.
2. **False Positive imkoniyati:** Element mavjud bo‘lmagan holatda mavjud deb qaytarishi mumkin.
3. **No False Negative:** Agar element mavjud bo‘lsa, u har doim topiladi.

**Qanday ishlaydi?**
1. Bo‘sh **bit array** yaratiladi.
2. Bir nechta **hash funksiyalar** tanlanadi.
3. Har bir element uchun:
   - Hash funksiyalari hisoblanadi va natijada olingan indekslar bo‘yicha bit arraydagi qiymatlar `1` qilib belgilanadi.
4. Elementni tekshirishda:
   - Element hash funksiyalar yordamida bit array indekslariga mos tushsa, u mavjud deb hisoblanadi.

**Kamchiliklari:**
- O‘chirib tashlashni qo‘llab-quvvatlamaydi.
- Foydalanilgan hash funksiyalar va array uzunligiga bog‘liq holda False Positive darajasi oshadi.

---

#### **2. Misollar bilan tushuntirish (Typescript)**

##### **Bloom Filter implementatsiyasi**

```typescript
class BloomFilter {
  private size: number;
  private bitArray: Uint8Array;
  private hashFunctions: ((key: string) => number)[];

  constructor(size: number, hashFunctions: ((key: string) => number)[]) {
    this.size = size;
    this.bitArray = new Uint8Array(size);
    this.hashFunctions = hashFunctions;
  }

  add(key: string): void {
    this.hashFunctions.forEach((hashFn) => {
      const index = hashFn(key) % this.size;
      this.bitArray[index] = 1;
    });
  }

  contains(key: string): boolean {
    return this.hashFunctions.every((hashFn) => {
      const index = hashFn(key) % this.size;
      return this.bitArray[index] === 1;
    });
  }
}

// Misol:
// Oddiy hash funksiyalar
const hash1 = (key: string) => [...key].reduce((acc, char) => acc + char.charCodeAt(0), 0);
const hash2 = (key: string) => [...key].reduce((acc, char) => acc * char.charCodeAt(0), 1);

const bloom = new BloomFilter(20, [hash1, hash2]);

bloom.add("apple");
console.log(bloom.contains("apple")); // true
console.log(bloom.contains("banana")); // false
```

**Nega ishlaydi?**
1. Har bir element hash funksiyalar yordamida indekslarga joylashtiriladi.
2. Tekshirishda barcha hash funksiyalar bit arrayda mos keladigan qiymatlarni aniqlaydi.
3. Agar barcha indekslar `1` bo‘lsa, element mavjud deb qaytariladi.

---

#### **3. Uyga vazifalar**

##### **1. Oddiy Bloom Filterni yaratish**

**Masala:**  
Bloom Filter yaratish va unda elementlarni qo‘shish va mavjudligini tekshirishni amalga oshiring.

**Input:**  
```typescript
operations = ["add", "add", "contains", "contains"];
values = [["apple"], ["banana"], ["apple"], ["grape"]];
size = 20;
hashFunctions = [hash1, hash2];
```

**Output:**  
`[null, null, true, false]`

**Kod:**  
```typescript
function processBloomFilter(operations: string[], values: string[][], size: number): any[] {
  // Your code here
  return [];
}
```

**Pseudo Code:**  
```pseudo
function processBloomFilter(operations, values, size):
    initialize BloomFilter with given size and hash functions
    results = []
    for each operation in operations:
        if operation is "add":
            call BloomFilter.add(values)
            append null to results
        else if operation is "contains":
            append BloomFilter.contains(values) to results
    return results
```

---

##### **2. False Positiveni kuzatish**

**Masala:**  
False Positive holatlarni kuzating. Elementlar qo‘shilgach, boshqa elementlarning mavjudligini tekshiring.  

**Input:**  
```typescript
elementsToAdd = ["cat", "dog", "fish"];
elementsToCheck = ["cat", "bird", "dog", "horse"];
size = 15;
hashFunctions = [hash1, hash2];
```

**Output:**  
`[true, false, true, false]` (False Positive kuzatilmasligi mumkin)  

**Kod:**  
```typescript
function testFalsePositive(elementsToAdd: string[], elementsToCheck: string[], size: number): boolean[] {
  // Your code here
  return [];
}
```

**Pseudo Code:**  
```pseudo
function testFalsePositive(elementsToAdd, elementsToCheck, size):
    initialize BloomFilter with given size and hash functions
    for each element in elementsToAdd:
        add element to BloomFilter
    results = []
    for each element in elementsToCheck:
        append BloomFilter.contains(element) to results
    return results
```

---

##### **3. Bloom Filterni optimal sozlash**

**Masala:**  
Kiritilgan elementlar soniga qarab Bloom Filterni hash funksiyalar va bit array hajmini optimallashtiring.  

**Input:**  
```typescript
elements = ["a", "b", "c", "d", "e"];
size = 10;
```

**Output:**  
Optimal hash funksiyalar va bit array hajmi.

**Kod:**  
```typescript
function optimizeBloomFilter(elements: string[], size: number): { optimalHashCount: number; optimalSize: number } {
  // Your code here
  return { optimalHashCount: 0, optimalSize: 0 };
}
```

**Pseudo Code:**  
```pseudo
function optimizeBloomFilter(elements, size):
    calculate optimal number of hash functions as (size / elements.length) * ln(2)
    calculate optimal bit array size based on elements.length and false positive rate
    return optimal hash count and size
```  