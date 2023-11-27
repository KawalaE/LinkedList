class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value = 0){
        const newNode = new Node(value);
        this.head = newNode;
    }
    append(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
        }
        let temp = this.head;
        while(temp.next){
            temp = temp.next;
        }
        temp.next = newNode;
    }
    prepend(value){
        if(!this.head){
            this.head = newNode;
        }
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }
    size(){
        let nodesCount = 0;
        if(!this.head) return nodesCount;
        let temp = this.head;
        while(temp){
            nodesCount++;
            temp = temp.next;
        }
        return nodesCount;
    }
    headNode(){
        if(!this.head) return null;
        return this.head;
    }
    tailNode(){
        if(!this.head) return null;
        let temp = this.head;

        while(temp.next){
            temp = temp.next;
        }
        return temp;
    }
    at(index){
        if(!this.head) return undefined;
        if(index === 0) return this.headNode();
        if(index < 0) return null;

        let temp = this.head;

        for(let i = 0; i < index; i++){
            temp = temp.next;
            if(temp === null){
                return null;
            }
        }
        return temp;
    }
    pop(){
        if(!this.head) return null;
        let temp = this.head;

        while(temp.next.next){
            temp = temp.next;
        }
        let removedNode = temp.next;
        temp.next = null;
        return removedNode;
    }
    contains(value){
        if(!this.head) return false;
        let temp = this.head;

        while(temp){
            if(temp.value === value){
                return true;
            }
            temp = temp.next;
        } 
        return false;
    }
    find(value){
        if(!this.head) return null;
        let temp = this.head;

        let index = 0;
        while(temp){
            if(temp.value === value){
                return index; 
            }
            temp = temp.next;
            index++;
        } return null;
    }
    toString(){
        if(!this.head) return null;
        let string = "";
        let temp = this.head;

        while(temp){
            if(temp.next){
                string += `(${temp.value}) -> `
            } else {
                string += `(${temp.value}) -> null`
            }
            temp = temp.next;
        }
        return string;

    }
    insertAt(value, index){
        if(index === 0) return this.prepend(value);
        if(index < 0) return null;
        const newNode = new Node(value);
        let temp = this.head;

        for(let i = 0; i< index-1; i++){
            temp = temp.next;
            if(temp === null){
                return null;
            }
        }
        let next = temp.next;
        temp.next = newNode;
        newNode.next = next;
        return "Node has been inserted"

    }
    removeAt(index){
        if(index < 0) return null;

        let prev = this.at(index-1);
        let next = this.at(index+1);
        if(next === null){
            return this.pop();
        } else if (prev === null && next){
            this.head = next;  
        }else if(prev && next){
            prev.next = next;
        }
    }
}
let myLinkedList = new LinkedList(3);
myLinkedList.append(6);
myLinkedList.append(9);
myLinkedList.prepend(21);
console.log(myLinkedList)
console.log(myLinkedList.insertAt(5,5));
console.log(myLinkedList.toString())
