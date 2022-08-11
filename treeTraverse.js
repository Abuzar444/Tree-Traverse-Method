class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const preOrder = (root) => {
    let result = [];
    if (root == null) return result;
    let stack = [];
    stack.push(root);
    while (stack.length != 0) {
        let current = stack.pop();
        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left);
        result.push(current.val);
    }
    return result;
};

const postOrder = (root) => {
    let result = [];
    let stack = [];
    while (root != null || stack.length != 0) {
        while (root != null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        result.push(root.val);
        root = root.right;
    }
    return result;
};

const inOrder = (root) => {
    let result = [];
    if (root == null) return result;
    let stack = [];
    stack.push(root);
    while (stack.length != 0) {
        let current = stack.pop();
        result.push(current.val);
        if (current.left) stack.push(current.left);
        if (current.right) stack.push(current.right);
    }
    return result;
};

console.log(preOrder(a));
console.log(inOrder(a));
console.log(postOrder(a));