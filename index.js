// let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]
//               i
let array = [-1, 2, 3]


function largestSubarraySum(array){
    //iterate over array
    //if current element added to temporary sum would increase temp sum,
        //then update tempsum
    //if it would decrease it, tempSum will equal the value at current index(start over a new subarray)
    //compare tempSum and maxSum
        //if yes, then it becomes new maxSum 
        //if not, increment to the next one
    //return maxSum
    if(!array.length > 0){
        return 0
    }

    let tempSum = array[0]
    let maxSum = 0
    for(let i = 1; i < array.length; i++){
 
        if(tempSum + array[i] > array[i]){
            tempSum += array[i]
        }
        else{
            tempSum = array[i]
        }
        if(tempSum > maxSum){
            maxSum = tempSum
        }
    }
    return maxSum

}
