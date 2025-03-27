# Priority Queue


#### **1. Mavzuni tushuntirish**

**Priority Queue** — bu maxsus ma'lumotlar tuzilmasi bo‘lib, unda har bir element o‘zining ustuvorlik darajasiga ega. Elementlar ustuvorlik darajasiga qarab boshqariladi, ya'ni yuqori ustuvorlikka ega bo‘lgan elementlar birinchi bo‘lib qayta ishlanadi.

**Asosiy operatsiyalar:**
1. **Enqueue**: Navbatga yangi element qo‘shish, bu ustuvorlik darajasiga qarab joylashtiriladi.  
2. **Dequeue**: Eng yuqori ustuvorlikka ega bo‘lgan elementni chiqarish va qaytarish.  
3. **Peek**: Eng yuqori ustuvorlikka ega bo‘lgan elementni ko‘rish (lekin o‘chirmaslik).  
4. **IsEmpty**: Navbatning bo‘sh ekanligini tekshirish.

Priority Queue odatda **Binary Heap** asosida amalga oshiriladi:  
- **Min-Heap**: Eng past ustuvorlikka ega element birinchi bo‘lib chiqadi.  
- **Max-Heap**: Eng yuqori ustuvorlikka ega element birinchi bo‘lib chiqadi.

---

#### **2. Misollar bilan tushuntirish (Typescript)**

##### **a) Priority Queue'ni amalga oshirish**
```typescript
class PriorityQueue<T> {
    private items: { value: T; priority: number }[] = [];

    // Element qo‘shish
    enqueue(value: T, priority: number): void {
        const newItem = { value, priority };
        let added = false;

        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > newItem.priority) {
                this.items.splice(i, 0, newItem);
                added = true;
                break;
            }
        }

        if (!added) {
            this.items.push(newItem);
        }
    }

    // Elementni chiqarish
    dequeue(): T | undefined {
        return this.items.shift()?.value;
    }

    // Eng yuqori ustuvorlikka ega elementni ko‘rish
    peek(): T | undefined {
        return this.items[0]?.value;
    }

    // Navbat bo‘shligini tekshirish
    isEmpty(): boolean {
        return this.items.length === 0;
    }
}
```

##### **b) Priority Queue'ning ishlashini tushuntirish**
```typescript
const pq = new PriorityQueue<string>();

pq.enqueue("Clean the room", 2);
pq.enqueue("Do homework", 1);
pq.enqueue("Watch TV", 3);

console.log(pq.peek());  // Output: "Do homework" (Eng yuqori ustuvorlik)
console.log(pq.dequeue()); // Output: "Do homework"
console.log(pq.dequeue()); // Output: "Clean the room"
console.log(pq.isEmpty()); // Output: false
console.log(pq.dequeue()); // Output: "Watch TV"
console.log(pq.isEmpty()); // Output: true
```

##### **c) Izoh**  
- `enqueue` orqali ustuvorlik darajasi bo‘yicha elementlar joylashtirildi.  
- `peek` eng yuqori ustuvorlikka ega elementni qaytardi.  
- `dequeue` elementlarni ustuvorlik tartibida o‘chirib chiqdi.  
- `isEmpty` navbat bo‘shligini tekshirdi.  

---

#### **3. Uyga vazifalar**

##### **a) Masala 1: Eng yuqori ustuvorlikdagi talabni bajarish**
Berilgan talablar ro‘yxatidan eng yuqori ustuvorlikdagi talabni qaytaring.  

**Input:**  
Talablar: `[{"name": "A", "priority": 3}, {"name": "B", "priority": 1}, {"name": "C", "priority": 2}]`  
**Output:**  
`{"name": "B", "priority": 1}`

**Bo‘sh kod:**
```typescript
function getHighestPriorityTask(tasks: { name: string; priority: number }[]): { name: string; priority: number } | null {
    // your code here
}
```

**Pseudo Code:**  
1. Talablar ro‘yxatini tekshiring.  
2. Ustuvorlik darajasini solishtirib, eng kichik qiymatni toping.  
3. Shu talabni qaytaring.  

```pseudo
function getHighestPriorityTask(tasks):
    if tasks is empty:
        return null
    set minPriority = infinity
    set result = null
    for each task in tasks:
        if task.priority < minPriority:
            set minPriority = task.priority
            set result = task
    return result
```

---

##### **b) Masala 2: Tibbiy navbatni boshqarish**
Tibbiy yordam navbatida bemorlar ustuvorlik darajasiga qarab tartiblanadi. Har bir bemorning ismi va ustuvorligi berilgan. Navbatni FIFO tamoyiliga qarab tartiblang va elementlarni chiqarib bering.  

**Input:**  
Bemorlari: `[{"name": "Ali", "priority": 3}, {"name": "Vali", "priority": 1}, {"name": "Karim", "priority": 2}]`  
**Output:**  
`["Vali", "Karim", "Ali"]`

**Bo‘sh kod:**
```typescript
function processMedicalQueue(patients: { name: string; priority: number }[]): string[] {
    // your code here
}
```

**Pseudo Code:**  
1. Bemorlarni ustuvorlik darajasiga qarab tartiblang.  
2. Har bir bemorni navbatdan chiqarib, ismini qaytaruvchi massivga joylashtiring.  

```pseudo
function processMedicalQueue(patients):
    sort patients by priority
    create result list
    for each patient in patients:
        append patient.name to result
    return result
```

---

##### **c) Masala 3: Max ustuvorlikdagi elementni topish**
Priority Queue'dagi maksimal ustuvorlikka ega elementni qaytaring.  

**Input:**  
`[{"value": 10, "priority": 1}, {"value": 20, "priority": 3}, {"value": 30, "priority": 2}]`  
**Output:**  
`{"value": 20, "priority": 3}`

**Bo‘sh kod:**
```typescript
function findMaxPriorityElement(queue: { value: number; priority: number }[]): { value: number; priority: number } | null {
    // your code here
}
```

**Pseudo Code:**  
1. Navbatdagi barcha elementlarni ko‘rib chiqing.  
2. Ustuvorlik darajasiga qarab eng katta qiymatni toping.  
3. Shu elementni qaytaring.  

```pseudo
function findMaxPriorityElement(queue):
    if queue is empty:
        return null
    set maxPriority = -infinity
    set result = null
    for each element in queue:
        if element.priority > maxPriority:
            set maxPriority = element.priority
            set result = element
    return result
```