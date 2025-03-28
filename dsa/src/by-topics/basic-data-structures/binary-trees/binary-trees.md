### **Tree Data Structures: Binary Trees va Binary Search Trees**

---

### **1. Binary Trees**

#### **Mavzuni tushuntirish**  
Binary Tree — daraxtning har bir tuguni (node) ikki tagacha farzandga ega bo‘ladigan ma’lumot tuzilmasi. Tugunlar quyidagilarni o‘z ichiga oladi:  
1. **Data (qiymat)** — Tugundagi qiymat.  
2. **Left (chap farzand)** — Chap tugun bilan bog‘lanish.  
3. **Right (o‘ng farzand)** — O‘ng tugun bilan bog‘lanish.  

#### **Asosiy xususiyatlari:**  
- **Root** (ildiz): Daraxtning eng yuqori tuguni.  
- **Leaf** (barg): Farzandsiz tugunlar.  
- **Height**: Daraxtning eng uzun yo‘lining uzunligi.  

---

#### **Misollar bilan tushuntirish**

##### **Misol 1: Binary Tree tugunini yaratish**
```typescript
class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
console.log(root);
```

**Nega ishlaydi:**  
- Tugunlarni konstruktorda belgilab, daraxtni qo‘lda yaratdik.  
- `root` ildiz tuguni bo‘lib, uning chap va o‘ng farzandlari bor.  

---

##### **Misol 2: Binary Tree-ni chuqurlik bo‘yicha (DFS) o‘qish**
```typescript
function preOrderTraversal(node: TreeNode | null): void {
  if (node === null) return;
  console.log(node.value); // Root
  preOrderTraversal(node.left); // Left subtree
  preOrderTraversal(node.right); // Right subtree
}

preOrderTraversal(root);
```

---

### **2. Binary Search Trees**

#### **Mavzuni tushuntirish**  
Binary Search Tree (BST) — Binary Tree’ning maxsus turi bo‘lib, quyidagi qoidalarga amal qiladi:  
1. Har bir tugunning chap farzandlari uning qiymatidan kichik.  
2. Har bir tugunning o‘ng farzandlari uning qiymatidan katta yoki teng.  

#### **Asosiy xususiyatlari:**  
- BST qidiruv operatsiyalarini tezlashtirish uchun ishlatiladi.  
- O‘qish (Traversal) tartibida tugunlar o‘sish tartibida qaytariladi.  

---

#### **Misollar bilan tushuntirish**

##### **Misol 1: BST tugunini qo‘shish**
```typescript
class BSTNode {
  value: number;
  left: BSTNode | null;
  right: BSTNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(newValue: number): void {
    if (newValue < this.value) {
      if (this.left === null) {
        this.left = new BSTNode(newValue);
      } else {
        this.left.insert(newValue);
      }
    } else {
      if (this.right === null) {
        this.right = new BSTNode(newValue);
      } else {
        this.right.insert(newValue);
      }
    }
  }
}

const bst = new BSTNode(10);
bst.insert(5);
bst.insert(15);
console.log(bst);
```

---

##### **Misol 2: BST qiymatini qidirish**
```typescript
function search(node: BSTNode | null, value: number): boolean {
  if (node === null) return false;
  if (node.value === value) return true;

  return value < node.value
    ? search(node.left, value)
    : search(node.right, value);
}

console.log(search(bst, 15)); // true
console.log(search(bst, 20)); // false
```

---

### **Uyga vazifalar**

#### **Binary Tree**

1. **Masala:** Daraxtdagi barcha barg tugunlarning qiymatini toping.  
**Input:** Daraxt tuzilmasi.  
**Output:** Barcha barg tugunlar ro‘yxati.  

```typescript
function findLeaves(root: TreeNode): number[] {
  // Your code here
  return [];
}
```

**Pseudo Code:**  
1. Rekursiv ravishda har bir tugun bo‘ylab harakat qiling.  
2. Agar tugunning farzandlari bo‘lmasa, qiymatini natijaga qo‘shing.

---

2. **Masala:** Daraxtdagi barcha qiymatlar yig‘indisini hisoblang.  
**Input:** Daraxt tuzilmasi.  
**Output:** Tugunlarning umumiy yig‘indisi.  

```typescript
function sumTree(root: TreeNode): number {
  // Your code here
  return 0;
}
```

---

#### **Binary Search Tree**

3. **Masala:** BST-dagi eng kichik qiymatni toping.  
**Input:** BST tuzilmasi.  
**Output:** Eng kichik qiymat.  

```typescript
function findMin(node: BSTNode): number {
  // Your code here
  return 0;
}
```

**Pseudo Code:**  
1. Chap tugunga borishni davom ettiring.  
2. Chap tugun bo‘lmasa, hozirgi tugunni qaytaring.  

---

4. **Masala:** BST dan qiymatni o‘chiring.  
**Input:** BST va o‘chiriladigan qiymat.  
**Output:** O‘chirilgan qiymat bilan BST.  

```typescript
function deleteNode(root: BSTNode | null, value: number): BSTNode | null {
  // Your code here
  return null;
}
```

**Pseudo Code:**  
1. Qiymatni topish uchun daraxtni qidirib chiqing.  
2. Tugunning farzandlariga qarab o‘chirish qoidalarini qo‘llang.  

---

5. **Masala:** BST ni o‘qish (Traversal) natijalarini qaytaring.  
**Input:** BST.  
**Output:** Tugunlarni pre-order, in-order va post-order o‘qish natijalari.  

```typescript
function traverseBST(root: BSTNode | null): { preOrder: number[], inOrder: number[], postOrder: number[] } {
  // Your code here
  return { preOrder: [], inOrder: [], postOrder: [] };
}
```