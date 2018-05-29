//Binary Index Tree

class BinaryIndexTree {

    constructor(a) {
        this.a = a;
        this.n = a.length;
        this.bi = [];
        this.build();
    }

    build() {
        for (let i = 1; i <= this.n; i++) {
            this.bi[i] = 0;
        }
        for (let i = 1; i <= this.n; i++) {
            this.add(i , this.a[i - 1]);
        }

    }

    add(i, value){
        while(i<=this.n){
            this.bi[i] += value;
             i += i & -i;
        }
    }

    get(n){
        let sum =0;
        while(n>0){
            sum += this.bi[n];
            n -= n & -n;
        }
        return sum
    }

}

let bit = new BinaryIndexTree([2, 7, 4, 9, 4, 7, 1, 10, 7]);

console.log(2 === bit.get(1));
console.log(9 === bit.get(2));
console.log(13 === bit.get(3));
console.log(22 === bit.get(4));
console.log(26 === bit.get(5));
console.log(33 === bit.get(6));
console.log(34 === bit.get(7));
console.log(44 === bit.get(8));
console.log(51 === bit.get(9));