let a = [1,2,3,4,5,8,10,15,20,27];

const target = 20;

let results = [];

const sum = (list) => list.reduce((accum, item) => accum + item);

const subSetSum = (list, total) => {
    let first = list[0];
    if(total === first){
        return [first];
    }else if(first > total){
        return null;
    }

    let r = subSetSum(list.slice(1), (total-first));
    if(r){
        r.push(first);
        return r;
    }else{
        return subSetSum(list.slice(1), total);
    }
};

for(let i=0; i< a.length; i++){
    results.push(subSetSum(a.slice(i), target));
}

console.log(results);
