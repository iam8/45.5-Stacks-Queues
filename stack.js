
/** Node: node for a stack. */
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */
class Stack {
    constructor() {
        this.first = null; // top of stack
        this.last = null; // bottom of stack
        this.size = 0;
    }

    /** push(val): add new value to end of the stack. Returns undefined. */
    push(val) {
        const node = new Node(val);

        // Pushed value becomes the new 'head' or 'first'
        if (!this.size) {
            this.first = node;
            this.last = node;
        } else {
            node.next = this.first;
            this.first = node;
        }

        this.size++;
    }

    /** pop(): remove the node from the top of the stack
     * and return its value. Should throw an error if the stack is empty. */
    pop() {
        if (!this.size) {
            throw new Error("Cannot remove item - stack is empty!");
        }

        // Top of stack: the 'first' item
        const toRemove = this.first;
        this.first = toRemove.next;
        toRemove.next = null;

        if (this.size === 1) {
            this.last = null;
        }

        this.size--;
        return toRemove.val;
    }

    /** peek(): return the value of the first node in the stack. */
    peek() {
        if (!this.first) return null;
        return this.first.val;
    }

    /** isEmpty(): return true if the stack is empty, otherwise false */
    isEmpty() {
        return !this.size;
    }
}


module.exports = Stack;
