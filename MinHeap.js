class minHeap{
    constructor(data){
        this.data = data;
    }

    build(){
        for(let i = Math.floor(this.data.length/2); i >=0; i--){
            this.heapify(i);
        }
    }

    heapify(i) {
        let smallest = i;
        let left = i*2 +1;
        let right = i*2 +2;
        let data = this.data;
        let n = data.length;

        if(left <n && data[smallest] > data[left]){
            smallest = left;
        }

        if(right <n && data[smallest] > data[right]){
            smallest = right;
        }

        if(i !== smallest){
            this.swap(i, smallest);
            this.heapify(smallest);
        }

    }

    swap(x, y) {
        let data = this.data;
        let temp = data[x];
        data[x] = data[y];
        data[y] = temp;
    }

    extractMin(){
        let data = this.data;
        let root = data[0];
        data[0] = data[data.length-1];
        data.splice(data.length-1, 1);
        this.heapify(0);
    }

    insert(k){
        let data = this.data;
        data[data.length] = k;
        let i = data.length-1;
        while(i >=0 && data[this.parent(i)] > data[i]){
            this.swap(this.parent(i), i);
            i = this.parent(i);
        }
    }

    delete(i){
        let data = this.data;
        this.decreaseKey(i,-1);
        this.extractMin();
    }

    parent(i){
        return Math.floor((i-1)/2);
    }

    decreaseKey(i, number) {
        let data = this.data;

        data[i] = number;

        while(i >=0 && data[this.parent(i)] > data[i]){
            this.swap(this.parent(i), i);
            i = this.parent(i);
        }
    }
}

let heap = new minHeap([20,38,67,34,78,26,89,1,23,4,28,97,53,22,11,7,87]);

console.log(heap.data);

heap.build();

console.log(heap.data);

heap.insert(0);

console.log(heap.data);

heap.delete(7);

console.log(heap.data);

heap.extractMin();

console.log(heap.data);