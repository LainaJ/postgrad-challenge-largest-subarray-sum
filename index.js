// let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]
//               i
let array = [-1, 2, 3]


function largestSubarraySum(array){
    //iterate over array
    //define temporary sum
    //if current element added to temporary sum would increase temp sum,
        //then update tempsum
    //if it would decrease it, tempsum will equal the current index
    //if temp num is higher than max
        //if yes, then it becomes new MAX sum 
        //if not, increment to the next one
    //return tempsum
    let tempSum = array[0]
    let maxSum = array[0]
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

    // let max = 0, currentMax = nums[0]
    // for (let i = 1; i < nums.length; i++) {
    //     currentMax = Math.max(currentMax + nums[i], nums[i])
    //     max = Math.max(currentMax, max)
    // }
    // return max
}




//reflection notes
//something that worked was after psuedocode, I walked through very simple example with the first iteration, and from there I corrected the logic of my loop
//I did have to clarify/correct that I was returning the sum NOT the subarray
//knowing why I created maxSum???