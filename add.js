class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(data) {

        let node = new Node();
        node.data = data;


        if (this.head == null) {
            this.head = node;
            this.size++;
            
        } else {

            let curr = this.head;
            while (curr.next != null) {
                curr = curr.next;
            }
            this.size++;
            curr.next = node;
        }
    }
    printlist(){
        var traversal_node=this.head;
        while(traversal_node!=null){
            console.log(traversal_node.data);
            traversal_node=traversal_node.next;

        }
    }
}
const myList = new LinkedList();

// Call the add method to add data to the linked list
myList.add(10);
myList.add(20);
myList.add(30);

myList.printlist();