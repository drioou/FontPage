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