### **Mavzu: Stacks**

---

#### **1. Mavzuni tushuntirish**

**Stack (To‘planma)** — bu ma'lumotlar tuzilmasi bo‘lib, unda elementlar LIFO (Last In, First Out) tartibida boshqariladi. Bu shuni anglatadiki, oxirgi qo‘shilgan element birinchi bo‘lib chiqariladi. 

**Asosiy operatsiyalar:**
1. **Push**: Stack'ga yangi element qo‘shish.  
2. **Pop**: Stack'dan oxirgi elementni chiqarib tashlash va uni qaytarish.  
3. **Peek/Top**: Stack'ning yuqori elementini qaytarish (lekin o‘chirmaslik).  
4. **IsEmpty**: Stack bo‘sh ekanligini tekshirish.  

Stack ko‘pincha quyidagi hollarda ishlatiladi:
- Funksiyalarni chaqirish va ularning bajarilishini boshqarish.  
- Ma'lumotlarni vaqtinchalik saqlash.  
- Qavslar yoki belgilarni muvozanatini tekshirish.  
- Undo/Redo operatsiyalari.  

---

#### **2. Misollar bilan tushuntirish (Typescript)**

##### **a) Stack yaratish**
```typescript
class Stack<T> {
    private items: T[] = [];

    // Element qo‘shish
    push(element: T): void {
        this.items.push(element);
    }

    // Oxirgi elementni chiqarib tashlash
    pop(): T | undefined {
        return this.items.pop();
    }

    // Stack'ning yuqori elementini ko‘rish
    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    // Stack bo‘sh ekanligini tekshirish
    isEmpty(): boolean {
        return this.items.length === 0;
    }
}
```

##### **b) Stack'ning ishlashini tushuntirish**
```typescript
const stack = new Stack<number>();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // Output: 30
console.log(stack.pop());  // Output: 30
console.log(stack.pop());  // Output: 20
console.log(stack.isEmpty()); // Output: false
console.log(stack.pop());  // Output: 10
console.log(stack.isEmpty()); // Output: true
```

##### **c) Izoh**  
- `push` orqali elementlar navbatma-navbat qo‘shildi: 10 → 20 → 30.  
- `peek` yuqori elementni ko‘rsatdi, lekin o‘chirmadi.  
- `pop` elementlarni LIFO tartibida o‘chirib chiqdi.  
- `isEmpty` stack'da elementlar qolganligini tekshirdi.  

---

#### **3. Uyga vazifalar**

##### **a) Masala 1: Qavslar muvozanatini tekshirish**
Berilgan qatorni tekshiring: undagi qavslar ochilish va yopilish tartibida to‘g‘ri ishlatilganmi.  

**Input:**  
`"({[()]})"`  
**Output:**  
`true`  

**Input:**  
`"({[})"`  
**Output:**  
`false`  

**Bo‘sh kod:**
```typescript
function isValidParentheses(s: string): boolean {
    // your code here
}
```

**Pseudo Code:**  
1. Stack yaratish.  
2. Har bir ochiluvchi qavsni stack'ga qo‘shish.  
3. Yopiluvchi qavs uchun stack'dan element olib, u bilan mos kelishini tekshirish.  
4. Stack oxirida bo‘sh bo‘lsa, qavslar muvozanatli.  

```pseudo
function isValidParentheses(s):
    create an empty stack
    for each character in s:
        if character is an opening bracket:
            push it onto the stack
        else if character is a closing bracket:
            if stack is empty or top of stack does not match:
                return false
            pop the stack
    return stack is empty
```

---

##### **b) Masala 2: Postfix ifodani hisoblash**
Berilgan postfix ifodani hisoblash uchun algoritm yozing.  

**Input:**  
`"2 3 + 4 *"`  
**Output:**  
`20`

**Bo‘sh kod:**
```typescript
function evaluatePostfix(expression: string): number {
    // your code here
}
```

**Pseudo Code:**  
1. Bo‘sh stack yarating.  
2. Ifodaning har bir elementi uchun:  
   - Agar son bo‘lsa, stack'ga qo‘shing.  
   - Agar operator bo‘lsa, stack'dan ikki son oling, ularni hisoblab, natijani qayta qo‘shing.  
3. Yakuniy stack elementini qaytaring.  

```pseudo
function evaluatePostfix(expression):
    create an empty stack
    for each token in expression:
        if token is a number:
            push it onto the stack
        else if token is an operator:
            b = pop the stack
            a = pop the stack
            result = apply operator to a and b
            push result onto the stack
    return pop the stack
```

---

##### **c) Masala 3: Minimum qiymatni qo‘llab-quvvatlovchi stack**
Stack yaratish, unda `getMin` funksiyasi eng kichik qiymatni qaytarishi kerak.  

**Input:**  
Operatsiyalar: `push(10)`, `push(20)`, `push(5)`, `getMin()`  
**Output:**  
`5`

**Bo‘sh kod:**
```typescript
class MinStack {
    private stack: number[] = [];
    private minStack: number[] = [];

    push(value: number): void {
        // your code here
    }

    pop(): void {
        // your code here
    }

    getMin(): number | undefined {
        // your code here
    }
}
```

**Pseudo Code:**  
1. Ikkita stack yarating: asosiy stack va minStack.  
2. `push`: Yangi elementni asosiy stack'ga qo‘shing, agar u minStack'dan kichik yoki teng bo‘lsa, minStack'ga ham qo‘shing.  
3. `pop`: Elementni asosiy stack'dan olib tashlang, agar u minStack'ning yuqori elementiga teng bo‘lsa, minStack'dan ham oling.  
4. `getMin`: minStack'ning yuqori elementini qaytaring.  

```pseudo
class MinStack:
    mainStack = []
    minStack = []

    function push(value):
        append value to mainStack
        if minStack is empty or value <= top of minStack:
            append value to minStack

    function pop():
        if top of mainStack == top of minStack:
            remove top from minStack
        remove top from mainStack

    function getMin():
        return top of minStack
```