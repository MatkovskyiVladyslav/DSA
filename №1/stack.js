class Book {
    constructor(title, numberofpages) {
        this.title = title;
        this.numberofpages = numberofpages;
    }
}
class StackReal {
    constructor() {
        this.items = [];
    }
    // Функція для перегляду даних стеку
    ShowStack() {
        console.log("Книги:");
        for (var dog = this.items.length - 1; dog >= 0; dog--) {
            console.log(`${this.items.length - dog}."${this.items[dog].title}", кількість сторінок: ${this.items[dog].numberofpages};`);
        }
    }
    // Функція для додавання нової книги у стек
    addToStack(book) {
        this.items.push(book);
    }
    //Функція видалення книги
    removeFromStack(){
        if (this.items.length == 0){
            return 'Список вже порожній'
        }
        const removedBook = this.items.pop();
        return `Книга "${removedBook.title}" була видалена зі списку`;
    }
    // Функція для визначення кількості книг у стеку
    getnumberofbooks() {
        return this.items.length;
    }
    //Функція очищення всього стека
    ClearStack(){
        this.items = [];
   }
}
function main() {
    // Ініціалізуємо стек
    const stack = new StackReal();
    // Додаємо книги у стек
    stack.addToStack(new Book("Зелений промінь", 137));
    stack.addToStack(new Book("Архіпелаг у вогні", 289));
    stack.addToStack(new Book("Двадцять тисяч льє під водою", 478));
    stack.addToStack(new Book("Один в океані", 358));
    stack.addToStack(new Book("Володар світу", 294));
    stack.addToStack(new Book("Бонні та клайд", 148));
    stack.addToStack(new Book("Аліса в Країні Чудес", 734));
    stack.addToStack(new Book("Латинська Америка", 699));
    stack.addToStack(new Book("Око світу", 784));
    stack.addToStack(new Book("В погоні за метеором", 364));
    stack.addToStack(new Book("Сім'я без імені", 341));
    stack.addToStack(new Book("Економіка", 169));
    // Перегляд даних стеку
    stack.ShowStack();
     // Визначаємо кількість книг у стеку
    var numberofbooks = stack.getnumberofbooks();
    console.log(`Кількість книг у списку: ${numberofbooks}`);
    //Тестуємо видалення книг зі стека
    console.log(stack.removeFromStack());
    console.log(stack.removeFromStack());
    console.log(stack.removeFromStack());
    console.log(stack.removeFromStack());
    var numberofbooks = stack.getnumberofbooks();
    console.log(`Кількість книг у списку: ${numberofbooks}`);
    //Очищаємо увесь стек
    stack.ClearStack();
    console.log('Список очищено')
    var numberofbooks = stack.getnumberofbooks();
    console.log(`Кількість книг у списку: ${numberofbooks}`);
}
main();
