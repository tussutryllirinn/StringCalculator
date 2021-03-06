//Calculator
function add(number){
    //If there is a negative number
    if(number.includes("-")){
        var numberArray = number.split(/[,\n;]/);
        var negaNumberArray = [];
        for(var i = 0; i < numberArray.length; i++){
            var counter = 0;
            if(parseInt(numberArray[i]) < 0){
                negaNumberArray.push(parseInt(numberArray[i]));
            }
        }
        throw ("Negatives not allowed" + negaNumberArray);
    }
    //If there is an empty string return 0.
    if(number == "")
    return 0;

    //Adds the numbers together and returns the total
    if(number.includes(",") | number.includes("\n"))
    {
        var total = 0;
        //Custom made delimeter 
        if(number.startsWith("//")){
            var delimeter = number.substring(2,3);
            number = number.replace(new RegExp(delimeter, 'g'), ",");//replaces the original number array with
        }                                                             // new one replacing all delimeters with
                                                                      // with ","

        var numberArray = number.split(/[,\n]/);
        
        for(var i = 0; i < numberArray.length; i++){
           //If the number is larger than 1000 it ignores it.
            if(parseInt(numberArray[i]) < 1000){
                total += parseInt(numberArray[i]);
            }
        }
        return total; 
    }
    
    return parseInt(number);

}

module.exports = add;