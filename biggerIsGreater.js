require("./SegmentTree");

let st = new SegmentTree((a,b)=>{
    return a.charCodeAt(0) > b.charCodeAt(0) ? a :b;
}, "dxbca".split(""));



/*
function biggerIsGreater(w) {
    var chars = w.split("");
    var result;

    if(chars.length <=1){
        return "no answer";
    }
    for(var i=chars.length-1; i>1;i--){
        if(chars[i] > chars[i-1]){
            chars = swap(i,i-1,chars);
            return chars.join("");
        }
    }

    if(chars[1] > chars[0]){

        for(var j=chars.length-1; j>1;j--){
            if(chars[j] > chars[0]){
                break;
            }
        }
        result = chars[j];
        result += chars.slice(j+1).reverse().join("");
        result += chars[0];
        result += chars.slice(1, j).reverse().join("");
        console.log(result);
        return result;

    }else {
        return "no answer";
    }
}

function swap(i,j,c){
    var t = c[i];
    c[i] = c[j];
    c[j] = t;
    return c;
}

biggerIsGreater("a");*/
