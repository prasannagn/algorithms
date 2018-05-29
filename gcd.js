//GCDs of given index ranges in an array


class segmentTree {

    constructor(arr, computeFunction) {
        this.computeFunction = computeFunction;
        this.arr = arr;
        this.st = [];
        this.buildSegmentTree(0, this.arr.length - 1, 0)
    }

    buildSegmentTree(left, right, si) {
        if (left === right) {
            this.st[si] = this.arr[left];
        } else {
            let mid = segmentTree.mid(left, right);
            this.st[si] =  this.computeFunction(
                this.buildSegmentTree(left, mid, si * 2 + 1) ,
                this.buildSegmentTree(mid + 1, right, si * 2 + 2)
            );
        }
        return this.st[si];
    }

    static mid(start, end) {
        return Math.floor(start + (end - start) / 2);
    }

    get(start, end) {
        return this.getUtil(0, this.arr.length - 1, start, end, 0);
    }

    getUtil(sStart, sEnd, start, end, si) {
        if (start <= sStart && end >= sEnd) {
            return this.st[si];
        }

        if (sEnd < start || sStart > end) {
            return 0;
        }

        let m = segmentTree.mid(sStart, sEnd);
        return this.computeFunction(
            this.getUtil(sStart, m, start, end, si * 2 + 1),
            this.getUtil(m + 1, sEnd, start, end, si * 2 + 2)
        )
    }

}

function gcd(a, b) {
    if (a < b) {
        let t = a;
        a = b;
        b = t;
    }
    if (b === 0){
        return a;
    }
    return gcd(b, a % b);
}

let a = [2, 3, 6, 9, 5];

let s = new segmentTree(a, gcd);

console.log(s.get(2,3));