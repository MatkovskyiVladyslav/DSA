class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
class SingleLinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    addToList(value) {
        var node = new Node(value);
        //Якщо голова пуста присвоюємо їй ноду
        if (!this.head) {
            this.head = node;
        }
        //Якщо ні, то перебираємо елементи, допоки не доходимо до останнього елемента
        else {
            var current = this.head;
            while (current.next) {
            current = current.next;
        }
        //Коли доходимо, присвоюємо йому ноду
        current.next = node;
      }
      this.size++;
    }

  //Нам необхідно додати всі елементи, які менші/рівні 15 і поділити на їх кількість; a - це сума елементів, b - їхня кількість
    calculateAverage() {
      let a = 0, b = 0;
      let current = this.head;
      while (current) {
        if (current.value <= 15) {
          a += current.value;
          b++;
        }
        current = current.next;
      }
      return b > 0 ? a / b : 0;
    }
  
    removeFromList() {
      while (this.head && this.head.value > 25) {
        this.head = this.head.next;
      }
      let current = this.head;
      while (current && current.next) {
        if (current.next.value > 25) {
          current.next = current.next.next;
        }
        else {
          current = current.next;
        }
      }
    }

    printList() {
      let current = this.head;
      let result = '';
      while (current) {
        result += current.value + " ";
        current = current.next;
      }
      return result.trim();
    }
  }
  
  function main() {
    const list = new SingleLinkedList();
    let inputData = [26, 26, 26, -8, 15.4, 9, 11, 78.57, -4, 201];
    inputData.forEach(i => list.addToList(i));
    console.log("Початковий список елементів:", list.printList());
    console.log("Середнє значення елементів, які мають значення менше або дорівнює 15:", list.calculateAverage());
    list.removeFromList();
    console.log("Список після видалення елементів більше за 25:", list.printList());
  }
  
  main();  