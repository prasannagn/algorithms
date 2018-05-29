let a = [8,9,5,3,2,1,4,11,15];



function leastMissingNumberInSequence(a) {

    if(a.length ===1){
        return null;
    }

    if(a.length ===2){
        let x = a[0] < a[1] ? a[0] :a[1];
        let y = a[0] > a[1] ? a[0] :a[1];
        if(x +1 === y){
            return null;
        }else{
            return x +1;
        }
    }

    let p = a[mid(a)];
    let left = a.filter(i => i<=p);
    let right = a.filter(i => i>p);
    return leastMissingNumberInSequence(left) || leastMissingNumberInSequence(right);
}
console.log(
leastMissingNumberInSequence(a)

);

function mid(a) {
    return Math.floor(a.length/2);
}