
/** Node: node for a queue. */
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    /** enqueue(val): add new value to end of the queue. Returns undefined. */
    enqueue(val) {
        const node = new Node(val);

        if (!this.size) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }

        this.size++;
    }

    /** dequeue(): remove the node from the start of the queue
     * and return its value. Should throw an error if the queue is empty. */
    dequeue() {
        if (!this.size) {
            throw new Error("Cannot remove item - queue is empty!");
        }

        const toRemove = this.first;
        this.first = toRemove.next;

        if (this.size === 1) {
            this.last = null;
        }

        toRemove.next = null;
        this.size--;

        return toRemove.val;
    }

    /** peek(): return the value of the first node in the queue. */
    peek() {
        if (!this.first) return null;
        return this.first.val;
    }

    /** isEmpty(): return true if the queue is empty, otherwise false */
    isEmpty() {
        return !this.size;
    }
}


module.exports = Queue;
