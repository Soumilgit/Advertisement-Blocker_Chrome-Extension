class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(value) {
        this.items.push(value);
    }

    dequeue() {
        if(this.items.length > 0)
            return this.items.shift();
    }

    peek() {
        if(this.items.length > 0)
            return this.items[0];
    }

    print() {
        let index = 0;
        while(index < this.items.length) {
            console.log(this.items[index]);
            index++;
        }
    }
}

const q = new Queue();

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

console.log(q.dequeue()); 

console.log(q.peek());

q.print();

// Error handling
try {
    const nonExistentValue = q.dequeue();
    console.log(nonExistentValue); //Throws an error
} catch (error) {
    console.error('Error:', error.message);
}
