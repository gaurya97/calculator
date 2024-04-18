let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        e.preventDefault()
        console.log(string)
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else if(e.target.innerHTML == '%'){
            input.value=input.value*(1/100);
        }
        
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})

document.addEventListener('keydown',(e)=>{
 e.preventDefault()
    console.log(e.keyCode)
    // input.value=e.keyCode;
    switch(e.keyCode){
        case 96:
           
            string += 0;
            input.value=string;
        break
        case 97:
           
            string += 1;
            input.value=string;
        break
        case 98:
           
            string += 2;
            input.value=string;
        break
        case 99:
           
            string += 3;
            input.value=string;
        break
        case 100:
           
            string += 4;
            input.value=string;
        break
        case 101:
            
            string += 5;
            input.value=string;
        break
        case 102:
          
            string += 6;
            input.value=string;
        break
        case 103:
          
            string += 7;
            input.value=string;
        break
        case 104:
          
            string += 8;
            input.value=string;
        break
        case 105:
          
            string += 9;
            input.value=string;
        break
        case 106:
           
            string += '*';
            input.value=string;
        break
        case 111:
           
            string += '/';
            input.value=string;
        break
        case 109:
            
            string += '-';
            input.value=string;
        break
        case 107:
            
            string += '+';
            input.value=string;
        break
        case 13:
           console.log('enter')
           console.log(string)
           string = eval(string);
            input.value = string;
            console.log(input.value)
        break
        case 110:
           
            string += '.';
            input.value=string;
        break
        case 8:
            
            string = input.value.substring(0, input.value.length-1);
            input.value = string;
        break
        case 46:
            
            string = "";
            input.value = string;
        break
        case 53:
           
            input.value=input.value*(1/100);
        break
    }
},true)