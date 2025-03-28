### **Graphs**

Graf — tugunlar (nodes) va ular orasidagi bog‘lanishlardan (edges) tashkil topgan ma’lumot tuzilmasi.

---

### **1. Adjacency Matrix**

#### **Mavzuni tushuntirish**  
Adjacency Matrix — grafni 2D massiv (matritsa) orqali ifodalaydigan usul. Matritsaning har bir elementi ikkita tugun orasidagi bog‘lanishni bildiradi.  
- **`matrix[i][j] = 1`** — `i` va `j` tugunlari bog‘langan.  
- **`matrix[i][j] = 0`** — `i` va `j` tugunlari bog‘lanmagan.  

#### **Afzalliklar:**  
- Bog‘lanishlarni tekshirish tez (O(1)).  
#### **Kamchiliklar:**  
- Katta hajmdagi graf uchun ko‘p xotira talab qiladi.

---

#### **Misollar bilan tushuntirish**

##### **Misol: Adjacency Matrix-ni yaratish va ishlatish**
```typescript
function createAdjacencyMatrix(n: number, edges: [number, number][]): number[][] {
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));

  for (const [u, v] of edges) {
    matrix[u][v] = 1;
    matrix[v][u] = 1; // Undirected graph
  }

  return matrix;
}

const matrix = createAdjacencyMatrix(4, [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 0],
]);

console.log(matrix);
```

---

### **2. Adjacency List**

#### **Mavzuni tushuntirish**  
Adjacency List — har bir tugun uchun bog‘langan tugunlar ro‘yxatini saqlaydi.  
Masalan: `{ 0: [1, 3], 1: [0, 2], ... }`.

#### **Afzalliklar:**  
- Kamroq xotira talab qiladi.  
#### **Kamchiliklar:**  
- Bog‘lanishlarni tekshirish uchun ko‘proq vaqt talab etiladi.

---

#### **Misollar bilan tushuntirish**

##### **Misol: Adjacency List-ni yaratish va ishlatish**
```typescript
function createAdjacencyList(n: number, edges: [number, number][]): Map<number, number[]> {
  const adjList = new Map<number, number[]>();

  for (let i = 0; i < n; i++) {
    adjList.set(i, []);
  }

  for (const [u, v] of edges) {
    adjList.get(u)!.push(v);
    adjList.get(v)!.push(u); // Undirected graph
  }

  return adjList;
}

const adjList = createAdjacencyList(4, [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 0],
]);

console.log(adjList);
```

---

### **3. Directed and Undirected Graphs**

#### **Mavzuni tushuntirish**  
- **Directed Graph:** Bog‘lanishlar yo‘nalishga ega. (`A -> B`).  
- **Undirected Graph:** Bog‘lanishlar yo‘nalishsiz. (`A - B`).  

---

#### **Misollar bilan tushuntirish**

##### **Misol: Directed Graph uchun Adjacency List**
```typescript
const directedEdges: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
];

const directedAdjList = createAdjacencyList(4, directedEdges); // Yo‘nalish e'tiborga olinadi
console.log(directedAdjList);
```

---

### **4. Weighted Graphs**

#### **Mavzuni tushuntirish**  
Weighted Graph — har bir bog‘lanish (edge) og‘irlik qiymatiga ega bo‘lgan graf.  
Masalan: `{ 0: [[1, 5], [3, 2]], ... }` (5 va 2 — og‘irliklar).

---

#### **Misollar bilan tushuntirish**

##### **Misol: Weighted Graph uchun Adjacency List**
```typescript
function createWeightedAdjList(
  n: number,
  edges: [number, number, number][]
): Map<number, [number, number][]> {
  const adjList = new Map<number, [number, number][]>();

  for (let i = 0; i < n; i++) {
    adjList.set(i, []);
  }

  for (const [u, v, w] of edges) {
    adjList.get(u)!.push([v, w]);
    adjList.get(v)!.push([u, w]); // Undirected graph
  }

  return adjList;
}

const weightedAdjList = createWeightedAdjList(4, [
  [0, 1, 5],
  [1, 2, 3],
  [2, 3, 1],
  [3, 0, 4],
]);

console.log(weightedAdjList);
```

---

## **5. Trees as Special Graphs**

### **1. Mavzuni tushuntirish**

Tree — tsikllarsiz bog‘langan grafning maxsus turi. Daraxtda quyidagi xususiyatlar mavjud:  
1. Daraxtda **N ta tugun (node)** va **N-1 ta bog‘lanish (edge)** mavjud.
2. Daraxtda faqat bitta ildiz (root) mavjud.
3. Har bir tugunga faqat bitta yo‘l orqali borish mumkin (tsikllar mavjud emas).  
4. Daraxtni quyidagicha tashkil qilish mumkin:
   - **Binary Tree**: Har bir tugunning eng ko‘pi bilan ikki farzandi bor.
   - **Binary Search Tree (BST)**: Har bir tugun qiymati chapdagi farzandidan katta yoki teng va o‘ngdagi farzandidan kichik yoki teng.

---

### **2. Misollar bilan tushuntirish (Typescript)**

#### **Misol 1: Daraxtni yaratish (Tree Representation)**

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

// Daraxtni yaratish
const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(7);

console.log(root);
```

---

#### **Misol 2: Daraxtni DFS orqali bosib o‘tish**

```typescript
function dfsInOrder(node: TreeNode | null, result: number[] = []): number[] {
  if (node) {
    dfsInOrder(node.left, result); // Chap farzandni o‘tkazish
    result.push(node.value);      // Hozirgi tugunni qo‘shish
    dfsInOrder(node.right, result); // O‘ng farzandni o‘tkazish
  }
  return result;
}

const values = dfsInOrder(root); // Daraxtni ildizdan boshlab o‘tkazish
console.log(values); // [3, 5, 7, 10, 15]
```

---

#### **Misol 3: Daraxtga yangi tugun qo‘shish (Binary Search Tree)**

```typescript
function insertNode(root: TreeNode | null, value: number): TreeNode {
  if (!root) return new TreeNode(value);
  
  if (value < root.value) {
    root.left = insertNode(root.left, value);
  } else {
    root.right = insertNode(root.right, value);
  }

  return root;
}

// Daraxtga yangi tugun qo‘shish
const newTree = insertNode(root, 8);
console.log(dfsInOrder(newTree)); // [3, 5, 7, 8, 10, 15]
```

---

#### **Misol 4: Daraxtdagi tugunni qidirish**

```typescript
function searchNode(root: TreeNode | null, value: number): boolean {
  if (!root) return false;
  if (root.value === value) return true;

  if (value < root.value) {
    return searchNode(root.left, value);
  } else {
    return searchNode(root.right, value);
  }
}

console.log(searchNode(root, 7)); // true
console.log(searchNode(root, 20)); // false
```

---

#### **Misol 5: Daraxtdagi maksimal chuqurlikni topish**

```typescript
function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
}

console.log(maxDepth(root)); // 3
```

---

### **Uyga vazifalar**

#### **1. Adjacency Matrix**

**Masala:** Adjacency Matrix yordamida grafda ikki tugun bog‘langanligini aniqlang.  
**Input:** `matrix`, `u`, `v`.  
**Output:** `true` yoki `false`.  

```typescript
function areNodesConnected(matrix: number[][], u: number, v: number): boolean {
  // Your code here
  return false;
}
```

```pseudo
function areNodesConnected(matrix, u, v):
    return matrix[u][v] == 1
```

---

#### **2. Adjacency List**

**Masala:** Adjacency List yordamida berilgan tugunning barcha qo‘shnilarini qaytaring.  
**Input:** `adjList`, `node`.  
**Output:** Qo‘shnilar ro‘yxati.  

```typescript
function getNeighbors(adjList: Map<number, number[]>, node: number): number[] {
  // Your code here
  return [];
}
```

```pseudo
function getNeighbors(adjList, node):
    return adjList[node]
```

---

#### **3. Weighted Graph**

**Masala:** Weighted Graph yordamida eng qisqa yo‘lni hisoblang.  
**Input:** `graph`, `start`, `end`.  
**Output:** Eng qisqa yo‘l uzunligi.  

```typescript
function shortestPath(graph: Map<number, [number, number][]>, start: number, end: number): number {
  // Your code here
  return 0;
}
```

```pseudo
function shortestPath(graph, start, end):
    initialize distances and visited nodes
    while there are unvisited nodes:
        select the node with the smallest distance
        update distances for its neighbors
        mark the node as visited
    return distance[end]
```

#### **1. Daraxtda DFS orqali qiymatlarni o‘tkazish**

**Masala:** Daraxtni DFS orqali o‘tkazing va tugunlar qiymatini qaytaring.  
**Input:** Daraxt ildizi.  
**Output:** Tugunlar qiymati ketma-ketligi.  

```typescript
function dfsPreOrder(node: TreeNode | null, result: number[] = []): number[] {
  // Your code here
  return result;
}
```

```pseudo
function dfsPreOrder(node, result):
    if node is null:
        return result
    append node.value to result
    dfsPreOrder(node.left, result)
    dfsPreOrder(node.right, result)
    return result
```

---

#### **2. Daraxtda tugun qiymatini topish**

**Masala:** Daraxtda berilgan qiymat mavjudligini aniqlang.  
**Input:** Daraxt ildizi va qiymat.  
**Output:** `true` yoki `false`.  

```typescript
function findValueInTree(root: TreeNode | null, value: number): boolean {
  // Your code here
  return false;
}
```

```pseudo
function findValueInTree(root, value):
    if root is null:
        return false
    if root.value == value:
        return true
    if value < root.value:
        return findValueInTree(root.left, value)
    else:
        return findValueInTree(root.right, value)
```

---

#### **3. Trees as Special Graphs. Daraxtdagi eng kichik qiymatni topish**

**Masala:** Daraxtdagi eng kichik tugun qiymatini qaytaring.  
**Input:** Daraxt ildizi.  
**Output:** Eng kichik tugun qiymati.  

```typescript
function findMinValue(root: TreeNode | null): number {
  // Your code here
  return -1;
}
```

```pseudo
function findMinValue(root):
    while root.left is not null:
        root = root.left
    return root.value
```