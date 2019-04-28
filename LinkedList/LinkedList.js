const Node = require("Node.js");

module.exports = class LinkedList {

    constructor() {

        this.head = null;
        this.nodes = [];

    }

    append(value){//Puts a value at the end of our list

        if(!this.head){

            this.head = new Node(value);
            return true;

        }

        let traveler = this.head;

        while(traveler.next){

            traveler = traveler.next;

        }

        traveler.next = new Node(value);
        return true;

    }

    prepend(value){//Puts a value at the front of the list.

        if(this.head){

            this.head = new Node(value);
            return true;

        }

        let tempNode = this.head;
        this.head = new Node(value);
        this.head.next = tempNode;
        return true;

    }

    print(){//Lists contents of list first to last.

        let traveler = this.head;

        while(traveler.next){

            console.log(traveler.value);

        }

    }

    getFirst(){//Returns first value in linked list.

       return this.head;

    }

    getLast(){//Returns the last value in the list.

        if(!this.head){

            return false;

        }

        let traveler = this.head;

        while(traveler.next){

            traveler = traveler.next;]

        }

        return traveler.value;

    }

    removeFirst(){//Delete the first node in the list.

        if(!this.head){

            return false;

        }

        let tempNode = this.head.next;

        delete this.head;

        this.head = tempNode;

        return true;

    }

    removeLast(){//Deletes the last node on the list.

        if(!this.head){

            return false;

        }

        let traveler = this.head;

        while(traveler.next){

            traveler = traveler.next;

        }

        delete traveler.next;
        return true;

    }

    contains(value){//Checks to see if the list contains a given value.

        if(!this.head){

            return false;

        }

        let traveler = this.head;

        while(traveler.next){

            if(traveler.value == value){

                return true;

            }

            traveler = traveler.next;

        }

        return false;

    }

    get(index){//Returns a value stored at a certain index.

        if(!this.head){

            return false;

        }

        let counter = 0;
        let traveler = this.head;

        while(traveler.next){

            if(counter == index){

                return traveler.value;

            }
        }

        return false;

    }

    isEmpty(){//Checks to see if the list is empty.

        if(!this.head){

            return true;

        }

        return false;

    }

    getSize(){//returns the size of the list.

        if(!this.head){

        return false;

        }

        let counter = 0;
        let traveler = this.head;

        while(traveler.next){

            traveler = traveler.next;
            counter++;

        }

        return (counter+1);

    }

}