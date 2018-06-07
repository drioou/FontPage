function Stack() {
    let items = [];
    this.push = function (element) {
        items.push(element);
    }
    this.pop = function () {
        return items.pop();
    }
    this.peek = function () {
        return items[items.length - 1]
    }
    this.isEmpty = function () {
        return items.length === 0;
    }
    this.size = function () {
        return items.length;
    }
    this.clear = function () {
        items = [];
    }
    this.print = function () {
        console.log(items.toString());
    }
    this.toString = function () {
        return items.toString();
    }
}

function divideBy2(decNumber) {
    let remStack = new Stack(),
        rem,
        binaryString = '';
    while (decNumber > 0) {
        rem = Math.floor(decNumber % 2);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / 2);
    }
    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }
    return binaryString;

}

console.log(divideBy2(2));

function Queue() {
    let items = [];
    this.enqueue = function (element) {
        items.push(element);
    };
    this.dequeue = function () {
        return items.shift();

    }
    this.front = function () {
        return items[0]
    }
    this.isEmpty = function () {
        return items.length === 0;
    }
    this.clear = function () {
        items = []
    }
    this.size = function () {
        return items.length;

    }
    this.print = function () {
        console.log(items.toString())
    }
}

// 优先队列
function PriorityQueue() {
    let items = [];

    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }

    this.enqueue = function (element, priority) {
        let queueElement = new QueueElement(element, priority);
        if (this.isEmpty()) {
            items.push(queueElement);
        }
        else {
            var added = false;
            for (var i = 0; i < items.length; i++) {
                if (QueueElement.priority < items[i].priority) {
                    items.slice(i, 0, queueElement);
                    added = true;
                    break;
                }
            }
            if (!added) {
                items.push(queueElement);
            }
        }
    }
    this.dequeue = function () {
        return items.shift();

    }

}

function hotPotato(namelist, num) {
    var queue = new Queue();
    for (var i = 0; i < namelist.length; i++) {
        queue.enqueue(namelist[i]);
    }
    var eliminated = '';
    while (queue.size() > 1) {
        for (var i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        eliminated = queue.dequeue();
        console.log(eliminated + "被淘汰了");
    }
    return queue.dequeue();
}

var names = ['a', 'b', 'c', 'd', 'e'];
var winner = hotPotato(names, 7);
console.log(winner + ' is winner');
