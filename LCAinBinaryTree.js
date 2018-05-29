//Lowest Common Ancestor (LCA)
//Find LCA in Binary Tree using RMQ

var ancestor = [999];
var st = [];

function computeAncestor(tree) {
    for(var i =1; i<tree.length; i++){
        ancestor[i] = (i - (i %2 == 0 ? 2:1))/2;
    }
}

function constructSegmentTree( start, end, si) {

    if(start == end){
        st[si] = ancestor[start];
        return st[si];
    }
    var m = mid(start,end);


    st[si] = min (constructSegmentTree(start, m, si * 2 + 1) , constructSegmentTree(m + 1, end, si * 2 + 2));
    return st[si];
}

function mid(s, e) {
    return Math.floor(s + (e - s) / 2);
}

function min(s, e) {
    return s>e ? s:e;
}

function lca(tree, start, end){
    computeAncestor(tree);
    constructSegmentTree(1, tree.length-1,0);
    computeLCA(0, tree.length-1, start,end,0);

}

function computeLCA(sStart,sEnd,start,end,si) {
    if(start <=sStart && end >=sEnd){
        return st[si];
    }

    if(end < sStart || start > sEnd){
        return 0;
    }

    var m = mid(sStart,sEnd);
    return min(computeLCA(sStart,m,start,end,si*2+1),computeLCA(m+1, sEnd,start,end,si*2+2));
}

var tree = [1,2,3,4,5,6,7,,,8,9];

console.log(lca(tree,3,10));
