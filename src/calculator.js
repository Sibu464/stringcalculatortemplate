class Calculator{
    add(numbers){
       if(numbers==""){
            return 0;
       }else{
        let numArr=['1','2','3','4','5','6','7','8','9','0'];
        var test=[];
        var len=numbers.length;
        var sum=0;
        var len2=0;
        var currentVal=0;
        
        //negative numbers
        if(numbers.includes("-")){
            
        }
        for(let i=0;i<len;i++){ 
            if(numArr.includes(numbers[i])){
              test.push(numbers[i]);
               
            }
        }
        var len2=test.length;
  //console.log(typeof(parseInt(test[0])));     
        for(let index=0;index<len2;index++){
            currentVal=parseInt(test[index]);
            if(currentVal<1001){
                sum+=currentVal;
            }
        }
        return sum;
        
       }
    }
 
}

module.exports = Calculator