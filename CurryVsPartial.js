//Add 3 numbers

let add = (a,b,c)=>a+b+c;

let curry = (add, first) => {
    return (secend) => {
        return (third) =>{
            return add(first , secend , third);
        }
    }
};

console.log(curry(1)(2)(3));




let partial = (add, first, second) =>{
    return (third) =>{
        return add(first , second , third);
    };
};

console.log(partial(1)(2,3));