class Heap {

    constructor(data) {
        this.data = data;
    }

    build() {
        for (let i = Math.floor(this.data.length / 2); i >= 0; i--) {
            this.heapify(i);
        }
    }

    heapify(i) {
        let data = this.data;
        let n = data.length;
        let left = Heap.left(i);
        let right = Heap.right(i);
        let smallest = i;

        if(left < n && data[smallest] > data[left]){
            smallest = left;
        }

        if(right < n && data[smallest] > data[right]){
            smallest = right;
        }

        if(smallest !== i){
            this.swap(i,smallest);
            this.heapify(smallest);
        }
    }

    insert(v){
        let data = this.data;
        let l = data.length;
        data[l] = v;
        while(l >=0 && data[Heap.parent(l)] > data[l]){
            this.swap(Heap.parent(l), l);
            l = Heap.parent(l);
        }
    }

    delete(i){
        let data = this.data;
        this.decreaseKey(i,-1);
        this.extractMin();

    }

    decreaseKey(i, number) {
        this.data[i] = number;
        while(i>=0 && this.data[Heap.parent(i)] > this.data[i]){
            this.swap(Heap.parent(i), i);
            i = Heap.parent(i);
        }
    }

    extractMin() {
        let root = this.data[0];
        this.data[0] = this.data[this.data.length -1];
        this.data.splice(this.data.length -1 , 1)
        this.heapify(0);
    }

    static left(i) {
        return i * 2 + 1;
    }

    static right(i) {
        return i * 2 + 2;
    }

    swap(x,y) {
        let data = this.data;
        let temp = data[x];
        data[x] = data[y];
        data[y] = temp;
    }

    static parent(l) {
        return Math.floor((l-1)/2);
    }
}

let heap = new Heap([20,38,67,34,78,26,89,1,23,4,28,97,53,22,11,7,87]);

console.log(heap.data);

heap.build();

console.log(heap.data);

heap.insert(0);

console.log(heap.data);

heap.delete(7);

console.log(heap.data);

heap.extractMin();

console.log(heap.data);
