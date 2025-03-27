# Singly Linked List**

---

#### **1. Mavzuni tushuntirish**

Singly Linked List — bu ma'lumotlar tuzilmasi bo‘lib, elementlar uzviy ketma-ketlikda bog‘langan tugunlar (nodes) ko‘rinishida saqlanadi. Har bir tugun ikkita qismdan iborat:
1. **Ma'lumotlar (value)** — tugunning qiymatini saqlaydi.
2. **Keyingi tugunga ishora (next)** — keyingi tugunni ko‘rsatuvchi ko‘rsatkich.

Singly Linked List quyidagi xususiyatlarga ega:
- Ma'lumotlar faqat bir yo‘nalishda harakat qilishi mumkin (bir tomonga bog‘langan).
- Yangi elementni qo‘shish yoki o‘chirish massivga nisbatan samaraliroq (O(1) yoki O(n)).
- Indeks bo‘yicha ma'lumot olish O(n) vaqt talab qiladi, chunki boshidan izlash talab qilinadi.

---

#### **2. Misollar bilan tushuntirish (Typescript)**

##### **a) Tugunni aniqlash**
```typescript
class Node {
    value: number;
    next: Node | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}
```

##### **b) Singly Linked List yaratish**
```typescript
class SinglyLinkedList {
    head: Node | null;

    constructor() {
        this.head = null;
    }

    // Element qo'shish (oxiriga)
    append(value: number): void {
        const newNode = new Node(value);
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

    // Elementlarni konsolga chiqarish
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
```

##### **c) Linked Listni ishlatish**
```typescript
const list = new SinglyLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.print(); // Output: 10 -> 20 -> 30
```

##### **d) Element qo‘shish va chiqarishning qanday ishlashi**  
- Tugunlar zanjir ko‘rinishida bog‘langan, shuning uchun qo‘shishda oxirgi tugunni topamiz va yangi tugunni unga bog‘laymiz.  
- Elementlarni chiqarishda har bir tugunni navbatma-navbat o‘qiymiz.

---

#### **3. Uyga vazifalar**

##### **a) Masala 1: Tugun qidirish**
Funktsiya berilgan qiymatni Linked List ichida qidirib, topilsa `true`, topilmasa `false` qaytarsin.  

**Input:**  
`[10, 20, 30, 40]`, `20`  
**Output:**  
`true`

**Bo‘sh kod:**
```typescript
function searchNode(list: SinglyLinkedList, value: number): boolean {
    // your code here
}
```

**Pseudo Code:**  
1. Bosh tugundan boshlang.  
2. Har bir tugun qiymatini berilgan qiymat bilan solishtiring.  
3. Agar qiymat topilsa, `true` qaytaring.  
4. Oxirigacha topilmasa, `false` qaytaring.

```pseudo
function searchNode(list, value):
    current = list.head
    while current is not null:
        if current.value == value:
            return true
        move to current.next
    return false
```

---

##### **b) Masala 2: Elementni o‘chirish**
Berilgan qiymatni Linked Listdan o‘chirish funksiyasini yozing.  

**Input:**  
`[10, 20, 30, 40]`, `20`  
**Output:**  
`[10, 30, 40]`

**Bo‘sh kod:**
```typescript
function deleteNode(list: SinglyLinkedList, value: number): void {
    // your code here
}
```

**Pseudo Code:**  
1. Bosh tugunni tekshiring. Agar u o‘chiriladigan tugun bo‘lsa, boshni keyingi tugunga o‘tkazing.  
2. Tugunni topguncha keyingi tugunga o‘ting.  
3. Topilgandan so‘ng, o‘chirilayotgan tugunni undan keyingi tugun bilan bog‘lang.  

```pseudo
function deleteNode(list, value):
    if list.head.value == value:
        list.head = list.head.next
        return
    current = list.head
    while current.next is not null:
        if current.next.value == value:
            current.next = current.next.next
            return
        move to current.next
```

---

##### **c) Masala 3: Reverse Linked List**
Linked Listni teskari tartibda qaytaring.  

**Input:**  
`[10, 20, 30]`  
**Output:**  
`[30, 20, 10]`

**Bo‘sh kod:**
```typescript
function reverseList(list: SinglyLinkedList): void {
    // your code here
}
```

**Pseudo Code:**  
1. Oldingi (`prev`) va keyingi (`next`) tugunlarni saqlang.  
2. Har bir tugunni navbatma-navbat teskari bog‘lang.  
3. Oxirida yangi boshni qaytaring.  

```pseudo
function reverseList(list):
    prev = null
    current = list.head
    while current is not null:
        next = current.next
        current.next = prev
        prev = current
        current = next
    list.head = prev
```