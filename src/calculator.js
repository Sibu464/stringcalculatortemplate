class Calculator{
    add(numbers){
        if(numbers==""){
            return 0;
        }else{
            if(numbers[0]=="/"){
                numbers=numbers.slice(2);
                let myArr=[1,2,3,4,5,6,7,8,9,0];
            let nums=numbers.split(/[\n;]/);//regex for newline and semicolon
            let len=nums.length;
            let sum=0;
            for(let index=0;index<len;index++){
                if(myArr.includes(parseInt(nums[index]))){
                    sum+=parseInt(nums[index]);
                }
             
            }
            return sum;
             
            }
            else{
                let nums=numbers.split(',');//regex for newline and semicolon
            let len=nums.length;
            let sum=0; 
            for(let index=0;index<len;index++){
                sum+=parseInt(nums[index]);
            }
            return sum;
        }
           
        }
    }
}

module.exports = Calculator