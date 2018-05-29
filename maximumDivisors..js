//queries of finding a number with maximum divisors.
var smallestPrimes = [];
var divisorsArray = [];
var segtmentTree = [];

function findSmallestPrimeFactors(max) {
    for (i = 2; i <= max; i++) {
        if (smallestPrimes[i] === undefined) {
            smallestPrimes[i] = i;
            for (j = i * i; j <= max; j += i) {
                if (smallestPrimes[j] === undefined || smallestPrimes[j] > i) {
                    smallestPrimes[j] = i;
                }
            }
        }
    }
}


function buildDivisorsArray(max) {
    for (i = 1; i <= max; i++) {
        divisorsArray[i] = 1;
        k = 0;
        p = smallestPrimes[i];
        n = i;

        while (n > 1) {
            k++;
            n = n / p;

            if (smallestPrimes[n] != p) {
                divisorsArray[i] = divisorsArray[i] * (k + 1);
                k = 0;
            }

            p = smallestPrimes[n];
        }
    }
}

function buildSegtmentTree(start, end, si) {

    if (start == end) {
        segtmentTree[si] = divisorsArray[start];
        return divisorsArray[start];
    }
    var m = mid(start, end);
    segtmentTree[si] = max (buildSegtmentTree(start, m, si * 2 + 1) , buildSegtmentTree(m + 1, end, si * 2 + 2));
    return segtmentTree[si];

}

function mid(s, e) {
    return Math.floor(s + (e - s) / 2);
}

function max(a, b) {
    return a >= b ? a : b;
}

function getMax(sStart,sEnd, start, end, si) {

    if(start <= sStart && end >=sEnd){
        return  segtmentTree[si];
    }

    if(sEnd < start || sStart>end){
        return 0;
    }

    m = mid(sStart, sEnd);

    return max(getMax(sStart, m, start,end,si*2+1), getMax(m+1, sEnd, start,end,si*2+2));

}
num = 100;
findSmallestPrimeFactors(num);
buildDivisorsArray(num);
buildSegtmentTree(0,num,0);
console.log(getMax(0,num, 1,10,0));
