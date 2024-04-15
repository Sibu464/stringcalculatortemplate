class Calculator{
    add(numbers){
        if(numbers==""){
            return 0;
        }else{
            let nums=numbers.split(',');
            let len=nums.length;
            let sum=0
            for(let index=0;index<len;index++){
                sum+=parseInt(nums[index]);
            }
            return sum;
        }
    }
}

module.exports = Calculator