# Mavzu: Doubly Linked List**

#### **1. Mavzuni tushuntirish**

**Doubly Linked List (Ikki tomonlama bog‘langan ro‘yxat)** — bu ma'lumotlar tuzilmasi bo‘lib, har bir tugun ikkita ko‘rsatkichga ega:  
1. **Oldingi tugunga ishora (prev)** — oldingi tugunni ko‘rsatadi.  
2. **Keyingi tugunga ishora (next)** — keyingi tugunni ko‘rsatadi.  

Doubly Linked List quyidagi xususiyatlarga ega:  
- Tugunlar ikki yo‘nalishda bog‘langan, ya'ni oldinga ham, orqaga ham harakat qilish mumkin.  
- Bu massivga nisbatan moslashuvchanroq bo‘lib, elementlarni qo‘shish va o‘chirish operatsiyalari samaraliroq bajariladi (O(1) yoki O(n)).  
- Elementlarni indeks orqali olish nisbatan sekinroq (O(n)).

---

#### **2. Misollar bilan tushuntirish (Typescript)**

##### **a) Tugunni aniqlash**
```typescript
class DoublyNode {
    value: number;
    next: DoublyNode | null;
    prev: DoublyNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
```

##### **b) Doubly Linked List yaratish**
```typescript
class DoublyLinkedList {
    head: DoublyNode | null;
    tail: DoublyNode | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Elementni oxiriga qo'shish
    append(value: number): void {
        const newNode = new DoublyNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail!.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    // Elementlarni boshi orqali chiqarish
    printForward(): void {
        let current = this.head;
        const values: number[] = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values.join(" -> "));
    }

    // Elementlarni orqasi orqali chiqarish
    printBackward(): void {
        let current = this.tail;
        const values: number[] = [];
        while (current) {
            values.push(current.value);
            current = current.prev;
        }
        console.log(values.join(" -> "));
    }
}
```

##### **c) Linked Listni ishlatish**
```typescript
const list = new DoublyLinkedList();
list.append(10);
list.append(20);
list.append(30);

list.printForward();  // Output: 10 -> 20 -> 30
list.printBackward(); // Output: 30 -> 20 -> 10
```

##### **d) Izoh**  
- Oxirgi tugunga yangi tugun qo‘shilganda, uni `tail` bilan bog‘laymiz.  
- Tugunlar o‘zaro ikki tomonlama bog‘langanligi sababli, ma'lumotlarni oldingi yoki keyingi tugunga qarab chiqarishimiz mumkin.

---

#### **3. Uyga vazifalar**

##### **a) Masala 1: Tugunni qidirish**
Berilgan qiymatni Doubly Linked List ichida qidirib, topilsa tugunni qaytaring, topilmasa `null` qaytarsin.  

**Input:**  
`[10, 20, 30, 40]`, `20`  
**Output:**  
Tugun (`{value: 20, next: {value: 30, ...}, prev: {value: 10, ...}}`)

**Bo‘sh kod:**
```typescript
function searchNode(list: DoublyLinkedList, value: number): DoublyNode | null {
    // your code here
}
```

**Pseudo Code:**  
1. Bosh tugundan boshlang.  
2. Har bir tugun qiymatini berilgan qiymat bilan solishtiring.  
3. Agar topilsa, tugunni qaytaring.  
4. Oxirigacha topilmasa, `null` qaytaring.

```pseudo
function searchNode(list, value):
    current = list.head
    while current is not null:
        if current.value == value:
            return current
        move to current.next
    return null
```

---

##### **b) Masala 2: Tugunni o‘chirish**
Berilgan qiymatni Doubly Linked Listdan o‘chirish funksiyasini yozing.  

**Input:**  
`[10, 20, 30, 40]`, `20`  
**Output:**  
`[10, 30, 40]`

**Bo‘sh kod:**
```typescript
function deleteNode(list: DoublyLinkedList, value: number): void {
    // your code here
}
```

**Pseudo Code:**  
1. Qidirilayotgan qiymatni topguncha harakat qiling.  
2. Tugunni o‘chirishda uning `prev` tugunini `next` bilan bog‘lang.  
3. Agar tugun boshida yoki oxirida bo‘lsa, tegishli holda `head` yoki `tail`ni yangilang.

```pseudo
function deleteNode(list, value):
    current = list.head
    while current is not null:
        if current.value == value:
            if current.prev is not null:
                current.prev.next = current.next
            if current.next is not null:
                current.next.prev = current.prev
            if current == list.head:
                list.head = current.next
            if current == list.tail:
                list.tail = current.prev
            return
        move to current.next
```

---

##### **c) Masala 3: Reverse Doubly Linked List**
Doubly Linked Listni teskari tartibda qaytaring.

**Input:**  
`[10, 20, 30]`  
**Output:**  
`[30, 20, 10]`

**Bo‘sh kod:**
```typescript
function reverseList(list: DoublyLinkedList): void {
    // your code here
}
```

**Pseudo Code:**  
1. Har bir tugun uchun `prev` va `next` ni almashtiring.  
2. Yakunda `head` va `tail` ni almashtiring.  

```pseudo
function reverseList(list):
    current = list.head
    while current is not null:
        temp = current.next
        current.next = current.prev
        current.prev = temp
        move to temp
    swap list.head and list.tail
```