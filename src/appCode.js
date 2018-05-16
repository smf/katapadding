
// var str = "hola";
// var space = 8;
// var padding = "x" 


function paddingLeft(str, space, padding) {
    var finalSentence = [];
    if(!padding) {
        padding = " ";
    }

    if(space > str.length) {
        for(var i = 0; i < space - str.length; i++) {
            finalSentence.unshift(padding);
        }
       
       return (finalSentence.join('') + str); 
    }
    else {
        return str;
    }

}