class Linkedlist{
    constructor(){
        this.head = null;
        this.length = 0;
    }

    append(value){
        let newNode = new Node(value);
        if(this.head == null){
            this.head = newNode;
        }  
        else {
            let current = this.head;
            while(current.next){
                current = current.next;
                
            }
            current.next = newNode;
        }
        this.length++;  
    }

    prepend(value){
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    size(){
        return this.length;
    }

    getHead(){
        return this.head;
    }

    getTail(){
        let current = this.head;
        if(!current){
            return null;
        }
        while(current.next){
            current = current.next;
        }
        return current;
    }

    at(index){
        if (index < 0 || index >= this.length){
            return null;
        }
        let current = this.head;
        for(let i = 0; i < index; i++){
            current = current.next;
        }
        return current;
    }

    pop(){
        if(!this.head){
            return;
        }
        if(!this.head.next){
            this.head = null;
        } else{
        let current = this.head;
        while(current.next.next){
            current = current.next;
        }
        current.next = null;
        } 
        this.length--;  
    }
    
    contains(value){
        let current = this.head;
        while(current){
            if(value == current.value){
                return true;
            }
            current = current.next;
        }
        return false;
    }

    find(value){
        let current = this.head;
        let index = 0;
        while(current){
            if(value == current.value){
                return index;
            }
            index++;
            current = current.next;
        }
        return null;
    }

    toString(){
        let current = this.head;
        let resultString = '';

        while(current){
            resultString += `( ${current.value} ) -> `;
            current = current.next;
        }
        resultString += 'null';
        return resultString;
    }

}

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
