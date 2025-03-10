class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addElements(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
    }

    removeElements() {
        if (!this.head) return;
        this.head = this.head.next;
        this.head.prev = null;
        let current = this.head;
        while (current && current.next) {
            current.next = current.next.next;
            if (current.next) current.next.prev = current;
            current = current.next;
        }
    }

    printList() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.data + " ";
            current = current.next;
        }
        return result.trim();
    }
}

function main() {
    const list = new DoublyLinkedList();
    [10, 15, 18, 10, 7, -4, 20].forEach(i => list.addElements(i));
    console.log("Список:", list.printList());
    list.removeElements();
    console.log("Видалено елементи з непарними номерами:", list.printList());
    list.head;
    console.log("Покажчик виведено на перший елемент перетвореного списку");
}

main();
