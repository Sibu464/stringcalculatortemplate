class Calculator{
    add(numbers){
       if(numbers==""){
            return 0;
       }else{
        let numArr=['1','2','3','4','5','6','7','8','9','0'];
        let delims=['\n',','];
        // if(numArr.includes(numbers[0])){
        //     console.log('runs');
        //     let num=numbers.split(',');
        //     let sum=0;
        //     let len=num.length;
        //     for(let index=0;index<len;index++){
        //         sum+=parseInt(num[index]);
        //     }
            
        //     return sum;
        // }
        var test=[];
        var len=numbers.length;
        console.log(`len: ${len}`);
        numbers=numbers.replace(/\n/g,',');
        for(let i=0;i<len;i++){
         
            if(numArr.includes(numbers[i])){
              test.push(numbers[i]);
               
            }
           

        }
 
        console.log(test);
     
        if(numbers.includes('\n')){
         
            let num=numbers.split(/[\n,]/);
            let sum=0;
            let len=num.length;
          
            for(let index=0;index<len;index++){
                sum+=parseInt(num[index]);
            }
            return sum;
        }
        
        
       }
    }
 
}

module.exports = Calculator