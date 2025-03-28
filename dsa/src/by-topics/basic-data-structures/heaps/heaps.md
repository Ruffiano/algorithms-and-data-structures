### **4. Advanced Data Structures: Heaps**

#### **1. Mavzuni tushuntirish**

**Heap** — maxsus ma'lumot tuzilmasi bo‘lib, u ko‘pincha **to‘liq ikki daraxt (complete binary tree)** shaklida bo‘ladi. Heaplar tartiblangan holatda saqlanadi va asosan **Min Heap** va **Max Heap** shaklida mavjud.

- **Min Heap**: Har bir tugun o‘z farzandlaridan kichik yoki ularga teng qiymatga ega.  
  (Masalan: Kichikroq qiymatlar ildiz tomon yaqin joylashgan bo‘ladi.)
  
- **Max Heap**: Har bir tugun o‘z farzandlaridan katta yoki ularga teng qiymatga ega.  
  (Masalan: Katta qiymatlar ildiz tomon yaqin joylashgan bo‘ladi.)

#### **Heaps xususiyatlari:**
1. **Parent-Child munosabat**:
   - Har bir tugun faqat bitta ota tugunga ega.
   - Tugunlar farzandlari:
     - Chap farzand: `2*i + 1`
     - O‘ng farzand: `2*i + 2`

2. **Asosiy operatsiyalar:**
   - **Insert (Qo‘shish)**: Yangi tugunni qo‘shish va tartibni saqlash.
   - **Delete (O‘chirish)**: Odatda eng yuqori ustuvorlikdagi qiymatni olib tashlash.
   - **Heapify**: Tartibni saqlash uchun struktura qayta tashkil qilinadi.

---

### **2. Misollar bilan tushuntirish (Typescript)**

#### **Misol 1: Min Heapni yaratish**

```typescript
class MinHeap {
  heap: number[];

  constructor() {
    this.heap = [];
  }

  insert(value: number): void {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp(): void {
    let index = this.heap.length - 1;

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index] >= this.heap[parentIndex]) break;

      // Swap
      [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
      index = parentIndex;
    }
  }

  extractMin(): number | null {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop()!;

    const min = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapify(0);

    return min;
  }

  heapify(index: number): void {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let smallest = index;

    if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }
    if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    if (smallest !== index) {
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      this.heapify(smallest);
    }
  }
}

const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(20);
minHeap.insert(3);
console.log(minHeap.extractMin()); // 3
console.log(minHeap.extractMin()); // 5
```

---

#### **Misol 2: Max Heapni yaratish**

```typescript
class MaxHeap {
  heap: number[];

  constructor() {
    this.heap = [];
  }

  insert(value: number): void {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp(): void {
    let index = this.heap.length - 1;

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index] <= this.heap[parentIndex]) break;

      // Swap
      [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
      index = parentIndex;
    }
  }

  extractMax(): number | null {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop()!;

    const max = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapify(0);

    return max;
  }

  heapify(index: number): void {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let largest = index;

    if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
      largest = left;
    }
    if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
      largest = right;
    }

    if (largest !== index) {
      [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
      this.heapify(largest);
    }
  }
}

const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(20);
maxHeap.insert(5);
console.log(maxHeap.extractMax()); // 20
console.log(maxHeap.extractMax()); // 10
```

---

### **3. Uyga vazifalar**

#### **1. Min Heapni yaratish**

**Masala:** Min Heap tuzing va eng kichik qiymatni qaytaring.  
**Input:** `Insert` amallari.  
**Output:** Eng kichik qiymat.  

```typescript
class MinHeapTask {
  // Your code here
}
```

```pseudo
function MinHeap:
    initialize heap as empty array

function insert(value):
    add value to heap
    bubbleUp()

function bubbleUp():
    while child value is smaller than parent:
        swap parent and child values
```

---

#### **2. Max Heapni yaratish**

**Masala:** Max Heap tuzing va eng katta qiymatni qaytaring.  
**Input:** `Insert` amallari.  
**Output:** Eng katta qiymat.  

```typescript
class MaxHeapTask {
  // Your code here
}
```

```pseudo
function MaxHeap:
    initialize heap as empty array

function insert(value):
    add value to heap
    bubbleUp()

function bubbleUp():
    while child value is larger than parent:
        swap parent and child values
```

---

#### **3. Heapni tartiblangan massivga o‘zgartirish**

**Masala:** Heap elementlarini o‘tkazib, tartiblangan massiv qaytaring.  
**Input:** Heap.  
**Output:** Tartiblangan massiv.  

```typescript
function heapToSortedArray(heap: number[]): number[] {
  // Your code here
  return [];
}
```

```pseudo
function heapToSortedArray(heap):
    initialize empty array result
    while heap is not empty:
        extract minimum/maximum from heap
        add to result array
    return result
```