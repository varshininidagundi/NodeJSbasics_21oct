var readlineSync = require('readline-sync');
let {insert_at_end,insert_at_front,insert_mid,insert_after,deleteFirst,deleteNode,pop,display} = require("./utility.js");
let choice;
do{
    choice = readlineSync.question('enter input\n1 for insert_at_end\n2 for insert_at_front\n3 for insert_at_mid\n4 for insertion after\n5 for deleting first node\n6 for deleting element at perticular index\n7 for poping last node element\n8 for exit\n------');
    switch(choice){
    case '1':
        var element=readlineSync.question("enter element you want to enterto add at end");
        insert_at_end(element);
        console.log("Updated list: " + display());
        break;4
    case '2':
        var element=readlineSync.question("enter element you want to enter at front");
        insert_at_front(element);
        console.log("Updated list: " + display());
        break;
    case '3':
        var element=readlineSync.question("enter element you want to enter at mid");
        insert_mid(element);
        console.log("Updated list: " + display());
        break;
    case '4':
            var element=readlineSync.question("enter element you want to enter ");
            var prev_node=readlineSync.question("enter data after which u want to add");
            insert_after(prev_node,element);
            console.log("Updated list: " + display());
            break;
    case '5':
            readlineSync.question("first element gets deleted");
            deleteFirst();
            console.log("Updated list: " + display());
            break;
    case '6':
            var element=readlineSync.question("enter the index of the element you want to delete");
            deleteNode(element);
            console.log("Updated list: " + display());
            break;
    case '7':
            readlineSync.question("results after poping the last elemnt");
            pop();
            console.log("Updated list: " + display());
            break;
    case '8':
        break;
    default:
        console.log("invalide");
}
}
while(choice !== '8')
display();