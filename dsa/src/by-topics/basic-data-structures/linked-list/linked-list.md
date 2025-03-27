# **1. Tushuntirish: Bog‘langan ro‘yxatlar nima va ular qanday ishlaydi?**

Bog‘langan ro‘yxatlar — ma’lumotlarni saqlash uchun tuzilgan dinamik ma’lumotlar tuzilmasi bo‘lib, har bir element (tugun) qiymatni (`value`) va keyingi tugunga (`next`) ishorani o‘z ichiga oladi.

#### **Bog‘langan ro‘yxat turlari:**
1. **Singly Linked List (Yakka bog‘langan ro‘yxat):** Har bir tugun faqat keyingi tugunga ishora qiladi.
2. **Doubly Linked List (Ikki tomonlama bog‘langan ro‘yxat):** Har bir tugun keyingi va avvalgi tugunga ishora qiladi.
3. **Circular Linked List (Aylana bog‘langan ro‘yxat):** So‘nggi tugun birinchi tugunga ishora qiladi.

#### **Asosiy xususiyatlari:**
- **Dinamik o‘lcham:** Elementlarni qo‘shish va o‘chirish oson.
- **Sekvensial kirish:** Elementlarni qidirish uchun boshidan oxirigacha yurish talab qilinadi.
- **Xotira boshqaruvi:** Har bir tugun alohida xotira joyida saqlanadi.

#### **Amaliyotlar:**
- Elementlarni qo‘shish (`insertion`).
- Elementlarni o‘chirish (`deletion`).
- Tugunni qidirish.
- Tugunlarni chop etish.

---

### **2. Misollar bilan tushuntirish**

#### **Misol 1: Yakka bog‘langan ro‘yxat yaratish va chop etish**
Bog‘langan ro‘yxatga tugun qo‘shish va uni chop etish.

```typescript
class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number, next: ListNode | null = null) {
        this.value = value;
        this.next = next;
    }
}

class SinglyLinkedList {
    head: ListNode | null = null;

    append(value: number): void {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    print(): void {
        let current = this.head;
        const values: number[] = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values.join(" -> "));
    }
}

// Example
const list = new SinglyLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.print(); // Output: 10 -> 20 -> 30
```

---

#### **Misol 2: Elementni o‘chirish**
Berilgan qiymatga ega tugunni bog‘langan ro‘yxatdan o‘chirish.

```typescript
delete(value: number): void {
    if (!this.head) return;

    if (this.head.value === value) {
        this.head = this.head.next;
        return;
    }

    let current = this.head;
    while (current.next && current.next.value !== value) {
        current = current.next;
    }

    if (current.next) {
        current.next = current.next.next;
    }
}
```

**Nega ishlaydi?**  
- Ro‘yxat boshidan oxirigacha yuriladi. Mos keladigan tugun topilganda, undan keyingi tugun hozirgi tugunga ulanadi.

---

#### **Misol 3: Tugunni qidirish**
Berilgan qiymat ro‘yxatda mavjudligini tekshirish.

```typescript
search(value: number): boolean {
    let current = this.head;
    while (current) {
        if (current.value === value) return true;
        current = current.next;
    }
    return false;
}

// Example
console.log(list.search(20)); // true
console.log(list.search(40)); // false
```

---

### **3. Uyga Vazifalar**

#### **Vazifa 1: Tugunni oxiridan qo‘shish**
Yangi tugunni ro‘yxatning oxiriga qo‘shuvchi funksiya yozing.

**Input:** `[1, 2, 3]`, `4`  
**Output:** `1 -> 2 -> 3 -> 4`

```typescript
function appendToEnd(head: ListNode | null, value: number): ListNode | null {
    // your code here
}
```

**Pseudo Code:**
1. Agar bosh tugun bo‘sh bo‘lsa, yangi tugunni bosh sifatida qaytaring.  
2. Oxirgi tugunga o‘tib, yangi tugunni unga ulang.  
3. Bosh tugunni qaytaring.

```pseudo
function appendToEnd(head, value):
    if head is null:
        return new Node(value)
    current = head
    while current.next is not null:
        current = current.next
    current.next = new Node(value)
    return head
```

---

#### **Vazifa 2: Tugunlarni teskari qilish**
Bog‘langan ro‘yxatni teskari tartibda qaytaruvchi funksiya yozing.

**Input:** `1 -> 2 -> 3 -> 4`  
**Output:** `4 -> 3 -> 2 -> 1`

```typescript
function reverseLinkedList(head: ListNode | null): ListNode | null {
    // your code here
}
```

**Pseudo Code:**
1. Uchta ko‘rsatkichdan foydalaning: oldingi (`prev`), hozirgi (`current`), va keyingi (`next`).  
2. Har bir tugunning yo‘nalishini o‘zgartiring (`current.next = prev`).  
3. Oxirida teskari ro‘yxatni qaytaring.

```pseudo
function reverseLinkedList(head):
    prev = null
    current = head
    while current is not null:
        next = current.next
        current.next = prev
        prev = current
        current = next
    return prev
```

---

#### **Vazifa 3: Ro‘yxat uzunligini hisoblash**
Bog‘langan ro‘yxatdagi tugunlar sonini qaytaruvchi funksiya yozing.

**Input:** `1 -> 2 -> 3 -> 4`  
**Output:** `4`

```typescript
function getLength(head: ListNode | null): number {
    // your code here
}
```

**Pseudo Code:**
1. Hisoblagich (`count`) yarating va uni 0 ga o‘rnating.  
2. Har bir tugunni bosqichma-bosqich o‘tkazib, hisoblagichni oshiring.  
3. Tugunlar tugaganda hisoblagichni qaytaring.

```pseudo
function getLength(head):
    count = 0
    current = head
    while current is not null:
        count += 1
        current = current.next
    return count
```