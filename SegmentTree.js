//Segment Tree

class SegmentTree {
    constructor(fun, a) {
        this.a = a;
        this.fun = fun;
        this.n = a.length;
        this.st = [];
        this.build(0, this.n - 1, 0);
    }

    build(start, end, si) {
        if (start === end) {
            this.st[si] = this.a[start];
        } else {
            let m = SegmentTree.mid(start, end);
            this.st[si] = this.fun(
                this.build(start, m, si * 2 + 1),
                this.build(m + 1, end, si * 2 + 2)
            );
        }
        return this.st[si];
    }

    get(start, end) {
        return this.getUtil(0, this.n - 1, start, end, 0);
    }

    getUtil(sStart, sEnd, start, end, si) {
        if (sStart >= start && sEnd <= end) {
            return this.st[si];
        }

        if (sStart > end || sEnd < start) {
            return 0;
        }

        let m = SegmentTree.mid(sStart, sEnd);
        return this.fun(
            this.getUtil(sStart, m, start, end, si * 2 + 1),
            this.getUtil(m + 1, sEnd, start, end, si * 2 + 2)
        );
    }

    static mid(s, e) {
        return Math.floor(s + (e - s) / 2);
    }
}

let st = new SegmentTree((a, b) => {
    return a + b
}, [2, 7, 4, 9, 4, 7, 1, 10, 7]);

console.log(2 === st.get(0, 0));
console.log(9 === st.get(3, 3));
console.log(7 === st.get(8, 8));
console.log(13 === st.get(0, 2));
console.log(11 === st.get(1, 2));
console.log(51 === st.get(0, 8));
console.log(4 === st.get(4, 4));
console.log(11 === st.get(4, 5));
console.log(13 === st.get(3, 4));
console.log(20 === st.get(3, 5));
console.log(17 === st.get(7, 8));

console.log(18 === st.get(6, 8));

