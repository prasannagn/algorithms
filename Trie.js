
class Tire{

    constructor(){
        this.root = [];
    }

    insert(key){
        let chars = key.split("");
        let node = this.root;
        for(let i =0; i< chars.length; i++){
            let char = chars[i].charCodeAt(0) - 'a'.charCodeAt(0);
            if(node[char] === undefined){
                node[char] = [];
            }
            node = node[char];
        }
    }

    search(key){
        let chars = key.split("");
        let node = this.root;
        for(let i =0; i< chars.length; i++){
            let char = chars[i].charCodeAt(0) - 'a'.charCodeAt(0);
            if(node[char] === undefined){
                return false;
            }
            node = node[char];
        }
        return true;
    }
}

let t = new Tire();
t.insert("hello");
t.insert("world");
t.insert("aithal");
t.insert("prasanna");

console.log(
    t.search("prasanna"),
    t.search("GN"),
    t.search("hello"),
    t.search("Aithal"),
    t.search("aithal"),
    t.search("world"),
    t.search("123")
)