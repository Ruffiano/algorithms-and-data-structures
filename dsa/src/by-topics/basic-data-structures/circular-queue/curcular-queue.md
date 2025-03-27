# **Mavzu: Queues**

#### **1. Mavzuni tushuntirish**

**Queue (Navbat)** — bu ma'lumotlar tuzilmasi bo‘lib, unda elementlar FIFO (First In, First Out) tamoyili asosida boshqariladi. Ya'ni, birinchi qo‘shilgan element birinchi bo‘lib chiqariladi.  

**Asosiy operatsiyalar:**
1. **Enqueue**: Navbatning oxiriga yangi element qo‘shish.  
2. **Dequeue**: Navbatning boshidagi elementni chiqarib tashlash va qaytarish.  
3. **Peek/Front**: Navbatning boshidagi elementni qaytarish (lekin o‘chirmaslik).  
4. **IsEmpty**: Navbat bo‘sh ekanligini tekshirish.  

Queue quyidagi hollarda ishlatiladi:
- Resurslarni ketma-ket ishlatish.  
- Vazifalarni bajarish uchun ketma-ketlik.  
- Bredt-First Search (BFS) algoritmida.

---

#### **2. Misollar bilan tushuntirish (Typescript)**

##### **a) Oddiy Queue yaratish**
```typescript
class Queue<T> {
    private items: T[] = [];

    // Element qo‘shish
    enqueue(element: T): void {
        this.items.push(element);
    }

    // Navbatdan birinchi elementni olish
    dequeue(): T | undefined {
        return this.items.shift();
    }

    // Navbatning boshidagi elementni ko‘rish
    peek(): T | undefined {
        return this.items[0];
    }

    // Navbat bo‘sh ekanligini tekshirish
    isEmpty(): boolean {
        return this.items.length === 0;
    }
}
```

##### **b) Queue'ning ishlashini tushuntirish**
```typescript
const queue = new Queue<number>();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.peek());  // Output: 10
console.log(queue.dequeue()); // Output: 10
console.log(queue.dequeue()); // Output: 20
console.log(queue.isEmpty()); // Output: false
console.log(queue.dequeue()); // Output: 30
console.log(queue.isEmpty()); // Output: true
```

##### **c) Izoh**  
- `enqueue` orqali elementlar navbatga qo‘shildi: 10 → 20 → 30.  
- `peek` birinchi elementni ko‘rsatdi, lekin o‘chirmadi.  
- `dequeue` elementlarni FIFO tartibida o‘chirib chiqdi.  
- `isEmpty` navbatda elementlar qolganligini tekshirdi.  

---

#### **3. Uyga vazifalar**

##### **a) Masala 1: Birinchi qaytarilgan takroriy elementni toping**
Berilgan massivdagi birinchi qaytarilgan elementni toping.  

**Input:**  
`[1, 2, 3, 4, 2, 5]`  
**Output:**  
`2`

**Bo‘sh kod:**
```typescript
function findFirstRepeatingElement(arr: number[]): number | null {
    // your code here
}
```

**Pseudo Code:**  
1. Queue va qo‘shimcha to‘plam (set) yarating.  
2. Har bir elementni navbatga qo‘shing va to‘plamda mavjudligini tekshiring.  
3. Agar element allaqachon to‘plamda bo‘lsa, uni qaytaring.  
4. Hech qanday takroriy element topilmasa, `null` qaytaring.  

```pseudo
function findFirstRepeatingElement(arr):
    create an empty queue
    create an empty set
    for each element in arr:
        if element is in set:
            return element
        else:
            add element to set
            enqueue element
    return null
```

---

##### **b) Masala 2: Oyna bo‘yicha maksimumni toping**
Berilgan massivda `k` uzunlikdagi oynada har bir maksimal elementni toping.  

**Input:**  
Massiv: `[1, 3, -1, -3, 5, 3, 6, 7]`, K: `3`  
**Output:**  
`[3, 3, 5, 5, 6, 7]`

**Bo‘sh kod:**
```typescript
function maxSlidingWindow(nums: number[], k: number): number[] {
    // your code here
}
```

**Pseudo Code:**  
1. Bo‘sh navbat yarating.  
2. Har bir element uchun:  
   - Navbatdagi eski elementlarni olib tashlang.  
   - Yangi elementni qo‘shing.  
   - Agar oynaning hajmi `k` ga teng bo‘lsa, maksimumni qaytaring.  

```pseudo
function maxSlidingWindow(nums, k):
    create an empty deque
    create an empty result list
    for each index i in nums:
        remove indices not in the current window
        remove smaller elements than nums[i]
        add current index to deque
        if window size is at least k:
            append nums[front of deque] to result
    return result
```

---

##### **c) Masala 3: Teskari tartibda chiqarish**
Navbatdagi elementlarni teskari tartibda chiqaring.  

**Input:**  
`[1, 2, 3, 4, 5]`  
**Output:**  
`[5, 4, 3, 2, 1]`

**Bo‘sh kod:**
```typescript
function reverseQueue<T>(queue: Queue<T>): Queue<T> {
    // your code here
}
```

**Pseudo Code:**  
1. Navbatdagi barcha elementlarni olib tashlab, stack'ga qo‘shing.  
2. Stack'dan barcha elementlarni navbatga qayta joylashtiring.  

```pseudo
function reverseQueue(queue):
    create an empty stack
    while queue is not empty:
        push dequeue(queue) to stack
    while stack is not empty:
        enqueue pop(stack) to queue
    return queue
```