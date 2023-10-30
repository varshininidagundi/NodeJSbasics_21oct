var head=null;
class Node{
    constructor(val){
    this.data=val;
    this.next=null;
    }
}
//var new_node=new Node(78);
//console.log(new_node);
function display() {
    var traversal_node = head;
    var result = "";
    while (traversal_node != null) {
        result += traversal_node.data + " ";
        traversal_node = traversal_node.next;
    }

    return result;
}
function insert_at_front(new_data){
    var new_node = new Node(new_data);
    if(head == null){
        head =new_node;
        new_node.next=null;
        return;
    }
    new_node.next=head;
    head=new_node;
    //display();
}
function insert_at_end(new_data){
    var new_node = new Node(new_data);
    // First node
    if (head == null) {
        head = new Node(new_data);
        return;
    }
    
    new_node.next = null;
    var last = head;

    while (last.next != null) {
        last = last.next;
    }

    last.next = new_node;
    //display();
}

function insert_after(data_to_insert_after, new_data) {
    var new_node = new Node(new_data);
    var current = head;

    while (current) {
        if (current.data === data_to_insert_after) {
            new_node.next = current.next;
            current.next = new_node;
            return;
        }
        current = current.next;
    }

    console.log("Node with data " + data_to_insert_after + " not found in the list.");
}

function insert_mid(new_data) {
    if (head == null) {
        head = new Node(new_data);
        return;
    }

    var new_node = new Node(new_data);
    var ptr_mid = head;
    var length = 0;

    while (ptr_mid != null) {
        ptr_mid = ptr_mid.next;
        length += 1;
    }

    var mid = Math.floor(length / 2); // Calculate the actual middle

    ptr_mid = head;

    if (mid === 0) {
        // If the list has only one element
        new_node.next = head;
        head = new_node;
    } else {
        while (mid > 1) {
            ptr_mid = ptr_mid.next;
            mid--;
        }
        new_node.next = ptr_mid.next;
        ptr_mid.next = new_node;
    }
}
function deleteFirst() {
    if (head == null) {
        console.log("List is empty");
        return;
    }

    head = head.next;
}
function deleteNode(position)
{   //if empty
    if (head == null){console.log("empty");
        return;}
    var temp = head;
    //if correct index
    if (position == 0) 
    {
        head = temp.next; 
        return;
    }
    for(i = 0; temp != null && i < position - 1; i++)
        temp = temp.next;
     
    //more than number of nodes
    if (temp == null || temp.next == null)
    return;
    var next = temp.next.next;
    temp.next = next; 
}

// ... (your existing code)

function pop() {
    if (head === null) {
        console.log("List is empty");
        return;
    }

    if (head.next === null) {
        // If there's only one element in the list
        var removedData = head.data;
        head = null;
        return removedData;
    }

    var temp = head;
    while (temp.next.next !== null) {
        temp = temp.next;
    }

    var removedData = temp.next.data;
    temp.next = null;
    return removedData;
}

// ... (your existing code)


//insert_at_end(78);
//insert_at_end(5);
//display();
//insert_mid(90);
//display();
module.exports={insert_at_end,insert_at_front,insert_mid,insert_after,deleteFirst,deleteNode,pop,display};
/*insert_at_end(7);
//display();
insert_at_end(89);
insert_at_mid(head,567);
insert_at_front(9);
insert_at_front(20);
display();*/





































