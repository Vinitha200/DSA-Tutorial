function CircularQueue(maxCapacity) {
   let queue = new Array(maxCapacity);
   let front = -1;
   let rear = -1;
   let count = 0;

   function isEmpty() {
       return count === 0;
   }

   function isFull() {
       return count === maxCapacity;
   }

   function enqueue(item) {
       if (isFull()) {
           return "Queue is full";
       }

       if (isEmpty()) {
           front = 0;
       }
       rear = (rear + 1) % maxCapacity;
       queue[rear] = item;
       count++;
   }

   function dequeue() {
       if (isEmpty()) {
           return "Queue is empty";
       }

       let dequeuedItem = queue[front];
       queue[front] = null;

       if (front === rear) {
           front = -1;
           rear = -1;
       } else {
           front = (front + 1) % maxCapacity;
       }
       count--;
       return dequeuedItem;
   }

   function peek() {
       if (isEmpty()) {
           return "Queue is empty";
       }
       return queue[front];
   }

   function size() {
       return count;
   }

   function display() {
       let result = [];
       for (let i = 0; i < maxCapacity; i++) {
           result.push(queue[i]);
       }
       console.log(result);
   }

   return {
       enqueue,
       dequeue,
       peek,
       size,
       display
   };
}

// Example usage:
let cq = CircularQueue(5);
cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
cq.enqueue(40);
cq.enqueue(50);
console.log("Queue after enqueuing 5 elements:");
cq.display(); // [10, 20, 30, 40, 50]
cq.dequeue(); // Removes 10
cq.enqueue(60);
console.log("Queue after dequeuing one element:");
cq.display(); // [null, 20, 30, 40, 50]


function queue_circular(n){
  let arr = []
   function push(item){
      arr.push(item)
      return arr
   }

   return{
      push
   }
}

let q = queue_circular(5)
console.log(q.push(10))