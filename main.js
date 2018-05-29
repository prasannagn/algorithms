    function almostSorted(arr) {
        // Complete this function
        var l = null;
        var r = null;
        var solution = true;
        for(i =0; i< arr.length -1 ;i++){

            if(arr[i] > arr[i+1]){
                if(null === l){
                    l = i;
                }else if(null !== r && r != i ){
                    solution = false;
                    break;
                }

                r = i+1;

            }else if(arr[i] < arr[i+1]){
                if(null !== l){
                    if(!r || arr[l] > arr[i+1]){
                        solution = false;
                        break;
                    }
                }
            }

        }

        if (l){
            if( arr[l-1] > arr[r]){
                solution = false;
            }
        }
        if (solution && l !== null && r !== null){
            console.log("yes");
            if(r-l == 1){
                console.log("swap", l +1 , r +1);
            }else{
                console.log("reverse", l+1 , r+1);
            }
        }else if (solution) {
            console.log("yes");
        }else{
            console.log("no");
        }

    }


/*almostSorted([1]);
    almostSorted([1,2,3]);
   almostSorted([1,2]);

    almostSorted([5,2,1]);



    almostSorted([5,2,1,3]);

    almostSorted([5,2,1,6]);

    almostSorted([1,2,3,8,7,4,9,10]);*/

    almostSorted([1 ,2 ,5 ,3, 5]);
