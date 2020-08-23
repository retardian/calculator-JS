let unknown = ['a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y', 'z', 'Z'];

let globalArray = [''];

let result = 0;
  
let xArray = [];
  

  function start() {

    let choice = prompt(
  `пкпкепекпÂûáåðè äåéñòâèå, ñ êîòîðîãî õî÷åøü íà÷àòü:

  [+] èëè [-] èëè [*] èëè [/]
   
  
  [?] ÷òîáû ïîñìîòðåòü "èíñòðóêöèþ"`, '');


    if (choice == null) {

      let exit = confirm('Âûéòè?');

      if (exit == true) stop();
      else if (exit == false) start();

    }
    
    else if (choice == '?') info();

    else if (choice == '+') fplus(0);

    else if (choice == '-') fminus(0);

    else if (choice == '*') fmult(1);
    
    else if (choice == '/') fdiv(0);
    
    else if (choice == 1) linearEquation();

    else {

      alert('Ââåäè îäíî èç ïðåäëîæåííûõ çíà÷åíèé');

      start();

    }

}




  function fplus(Sum) {
    
    let pow = 1;
    let powValue = 0;
    let plus;
    let lastSumNumber = 0;
    
    let empty = true;

    while(true) {
    
      plus = prompt(
  `Äëÿ ñìåíû äåéñòâèÿ ââåäè [-], [*] èëè [/]
  
  Òâîÿ òåêóùàÿ çàïèñü:
  
  ${globalArray}... ÏËÞÑ...
  
  
  [=] ÷òîáû ïîêàçàòü ðåçóëüòàò` , '');

      if (plus == '=' || plus == '-' || plus == '*' || plus == '/' || plus == null) break;
      
      else if (plus.includes('^')) {  
      
      
        lastSumNumber = plus.slice(0, (plus.indexOf('^', 0) ));
        
        if (!isFinite(lastSumNumber)) continue;
        
        lastSumNumber = +lastSumNumber;
        
        pow = plus.slice(plus.indexOf('^', 0) + 1);
        
        if (!isFinite(pow)) continue;
        
        pow = +pow;
        
        if (lastSumNumber == 0 || pow == 0) continue;
        
        sumArray(plus);
 
        powValue += Math.pow(lastSumNumber, pow);
        
        empty = false;
        
        continue;
      
      }
      
      else if (!isFinite(plus) || plus == '' || plus == '+') continue;
      
      
        sumArray(plus);

        plus = +plus;

        Sum += plus;

        lastSumNumber = plus;
      
        pow = 1;
      
        empty = false;
      
      
    }    
    

    if (plus == null) {
    
      let exit = confirm('Íà÷àòü âñå çàíîâî?');
      
      if (exit == true) {
      
        result = 0;
        globalArray = [''];
        start();
      
      }
      else if (exit == false) fplus(Sum + powValue);
    }

    else if (plus == '-') {

      result += Sum + powValue;

      fminus(0);


    }

    else if (plus == '*') {

      result += Sum + powValue;

      fmult(1, Math.pow(lastSumNumber, pow), empty);


    }
      
    else if (plus == '/') {
    
      result += Sum + powValue;
     
      fdiv(Math.pow(lastSumNumber, pow), Math.pow(lastSumNumber, pow), empty);
    
    }


    else if (plus == '=') {

      result += Sum + powValue;

      showResult();


    }

  }


  function fminus(Dis) {
  
    let pow = 1;
    
    let powValue = 0;
    let minus;
    let lastDisNumber;
    
    let empty = true;

    while(true) {

      minus = prompt(
  `Äëÿ ñìåíû äåéñòâèÿ ââåäè [+], [*] èëè [/]
  
  Òâîÿ òåêóùàÿ çàïèñü:
  
  ${globalArray}... ÌÈÍÓÑ...
  
  
  [=] ÷òîáû ïîêàçàòü ðåçóëüòàò`, '');

      if (minus == '+' || minus == '*' || minus == '/' || minus == '=' || minus == null) break;
      
      else if (minus.includes('^')) {  
      
      
        lastDisNumber = minus.slice(0, (minus.indexOf('^', 0) ));
        
        if (!isFinite(lastDisNumber)) continue;
        
        lastDisNumber = +lastDisNumber;
        
        
        pow = minus.slice(minus.indexOf('^', 0) + 1);
        
        if (!isFinite(pow)) continue;
        
        pow = +pow;
        
        if (lastDisNumber == 0 || pow == 0) continue;
        
        disArray(minus);
        
        powValue -= Math.pow(lastDisNumber, pow);   
        
        empty = false;
              
        continue;
      }
      
      else if (!isFinite(minus) || minus == '' || minus =='-') continue;
      
      disArray(minus);
      
      minus = +minus;
      
      Dis -= minus;      
      
      lastDisNumber = minus;     
      
      pow = 1;
      
      empty = false;

    }
    

    if (minus == null) {
    
      
      let exit = confirm('Íà÷àòü âñå çàíîâî?');
      
      if (exit == true) {
      
        result = 0;
        globalArray = [''];
        start();
      
      }
      else if (exit == false) fminus(Dis + powValue);
    
    }


    else if (minus == '+') {

      result += Dis + powValue;  

      fplus(0);


} 

    else if (minus == '*') {

      result += Dis + powValue;

      fmult(1, -Math.pow(lastDisNumber, pow), empty);


    }
    
    else if (minus == '/') {
    
      result += Dis + powValue; 
            
      fdiv(-Math.pow(lastDisNumber, pow), -Math.pow(lastDisNumber, pow), empty);
    
    }

    else if (minus == '=') {

      result += Dis + powValue;

      showResult();

   }


  }


  




function fmult(multValue, lastNumber, empty) {    
    
    let mult;
    let lastMultNumber;

    while(true) {
      mult = prompt(
`Äëÿ ñìåíû äåéñòâèÿ ââåäè [-], [+] èëè [/]
  
  Òâîÿ òåêóùàÿ çàïèñü:
  
  ${globalArray}... ÓÌÍÎÆÈÒÜ...
  
  
  [=] ÷òîáû ïîêàçàòü ðåçóëüòàò`, '');

      if (mult == '=' || mult == '-' || mult == '+' || mult == '/' || mult == null) break;
      
      else if (mult.includes('^')) {  
      
      
        lastMultNumber = mult.slice(0, (mult.indexOf('^', 0) ));
        
        if (!isFinite(lastMultNumber)) continue;
        
        lastMultNumber = +lastMultNumber;
        
        let pow = mult.slice(mult.indexOf('^', 0) + 1);
        
        if (!isFinite(pow)) continue;
        
        pow = +pow;
        
        if (lastMultNumber == 0 || pow == 0) continue;
        
        multiplicationArr(mult);    
        
        multValue *= Math.pow(lastMultNumber, pow);        
        
        continue;
      
      }
      
      else if (!isFinite(mult) || mult == '' || mult == '*') continue;

      multiplicationArr(mult);
      
      mult = +mult;

      multValue *= mult;

    }

    if (mult == null) {
    
      let exit = confirm('Íà÷àòü âñå çàíîâî?');
      
      if (exit == true) {
      
        result = 0;
        globalArray = [''];
        start();
      
      }
      else if (exit == false) fmult(multValue);
    
    }

    else if (mult == '-') {
    
      if (empty == false) {
      
        result -= lastNumber;
        result += multValue * lastNumber;
      
      }
      else result += multValue;
      
      fminus(0);


    }

    else if (mult == '+') {
    
      if (empty == false) {
      
        result -= lastNumber;
        result += multValue * lastNumber;
      
      }
      else result += multValue;
      
      fplus(0);

    }
    
    else if (mult == '/') {
      
      if (empty == false) {
      
        result -= lastNumber;
        fdiv(multValue * lastNumber);
      
      }
      else fdiv(multValue);
    
    }


    else if (mult == '=') {
    
      if (empty == false) {
      
        result -= lastNumber;
       
        result += multValue * lastNumber;
      
      }
      else result += multValue;
      
      showResult();

    }

  }
  
  
  
  
function fdiv(division, lastNumber, empty) {    
    
    let powValue = 1;
    let lastDivNumber;
    let divArray = [];
    let entry;
    
    
    while (true) {
    
      entry = prompt(
`Äëÿ ñìåíû äåéñòâèÿ ââåäè [-], [+] èëè [*]
  
  Òâîÿ òåêóùàÿ çàïèñü:
  
  ${globalArray}... ÐÀÇÄÅËÈÒÜ...
  
  
  [=] ÷òîáû ïîêàçàòü ðåçóëüòàò`, '');  
      

      if (divArray[0] != 'not empty' && isFinite(entry) && division == 0 && entry != null) {
      
        divisionArr(entry);
        division += +entry;
        continue;       
      
      }
      
      else if (entry == null || entry == '+' || entry == '-' || entry == '*' || entry == '=') break;
      
      else if (entry.includes('^')) {  
      
      
        lastDivNumber = entry.slice(0, (entry.indexOf('^', 0) ));
        
        if (!isFinite(lastDivNumber)) continue;
        
        lastDivNumber = +lastDivNumber;
        
        let pow = entry.slice(entry.indexOf('^', 0) + 1);
        
        if (!isFinite(lastDivNumber)) continue;
        
        pow = +pow;
        
        if (lastDivNumber == 0 || pow == 0) continue;
        
        divisionArr(entry);  
        
        if (divArray[0] != 'not empty' && division == 0) division += Math.pow(lastDivNumber, pow);
        
        else division /= Math.pow(lastDivNumber, pow);        
        
        continue;
      
      }
      
      else if (!isFinite(entry) || entry == '/' || entry == '') continue;
      
      divisionArr(entry);
      
      entry = +entry;
      
      division /= entry;
      
      divArray[0] = 'not empty'; 
    
    }
    
    if (entry == null) {
  
    
      let exit = confirm('Íà÷àòü âñå çàíîâî?');
      
      if (exit == true) {
      
        result = 0;
        globalArray = [''];
        start();
      
      }
      else if (exit == false) fdiv(division, lastNumber);
    
    }
    
    else if (entry == '+') {
    
      if (empty == false) {
      
        result -= lastNumber;
        result += division;
        
      
      }
      else result += division;
      
      fplus(0);
    
    }
    
    else if (entry == '-') {
    
      if (empty == false) {
      
        result -= lastNumber;
        result += division;
        
      
      }
      else result += division;   
      
   
      
      fminus(0);
    
    }
    
    else if (entry == '*') {
      
      if (empty == false) {
      
        result -= lastNumber;
        fmult(division);
        
      
      }
      else fmult(division);
          
    }
    
    else if (entry == '=') {
    
      if (empty == false) {
      
        result -= lastNumber;
        result += division;
        
      
      }
      else result += division;
      
      showResult();
    
    }
  
  }
  
  
  
  
function linearEquation() {

let xResult = 0;
 
let xValue = 0;

let xNum = 1;

let firstResult = 0;



  let choice = prompt(
  `Çäåñü ìîæíî ðåøàòü ëèíåéíûå óðàâíåíèÿ âèäà:
  
    "2x + 3x + ... + Nx + b = 0" èëè "2x + 3x + ... + Nx = b"
    
  [+] èëè [-]
  
  [?] - èíôî
  [Esc] - â íà÷àëüíîå ìåíþ`);


if (choice == null) {

      let exit = confirm('Âåðíóòüñÿ â íà÷àëüíîå ìåíþ?');

      if (exit == true) start();
      else if (exit == false) linearEquation();

    }
    
    else if (choice == '?') {
    
      alert('dsvsvsv');
      linearEquation();
    
    }

    else if (choice == '+') fplus(0);

    else if (choice == '-') fminus(0);


  function fplus(Sum) {
    
    let pow = 1;
    let powValue = 0;
    let plus;
    let lastSumNumber = 0;
    
    let empty = true;

    while(true) {
    
      plus = prompt(
  `Äëÿ ñìåíû äåéñòâèÿ ââåäè [-], [*] èëè [/]
  
  Òâîÿ òåêóùàÿ çàïèñü:
  
  ${globalArray}... ÏËÞÑ... = 0
  
  
  [=] ÷òîáû ïîêàçàòü ðåçóëüòàò` , '');

      if (plus == '=' || plus == '-' || plus == null || plus == '==') break;
      
      
      else if (plus.includes('x')) {
              
        if (plus.length == 1) {        
          unknownArray(plus, '+');
          xValue += xNum;
          
          continue;
        }
        
        else if (plus.length > 1) {
        
          if ( (plus.length > plus.indexOf('x') + 1) && plus[0] != 'x') continue;
        
        
          xNum = plus.slice(0, plus.indexOf('x'));
          
          if (xNum == '-') xNum = -1;
          
          else if (!isFinite(xNum) || xNum == 0) continue;
          
          xNum = +xNum;
          
          unknownArray(plus, '+', xNum);
          
          xValue += xNum;
          
          xNum = 1;
          
          continue;
        
        }
        
      }
      
      else if (plus.includes('^') && !plus.includes('x')) {  
      
      
        lastSumNumber = plus.slice(0, (plus.indexOf('^', 0) ));
        
        if (!isFinite(lastSumNumber)) continue;
        
        lastSumNumber = +lastSumNumber;
        
        pow = plus.slice(plus.indexOf('^', 0) + 1);
        
        if (!isFinite(pow)) continue;
        
        pow = +pow;
        
        if (lastSumNumber == 0 || pow == 0) continue;
        
        sumArray(plus);
 
        powValue += Math.pow(lastSumNumber, pow);
        
        empty = false;
        
        continue;
      
      }
      
      else if (!isFinite(plus) || plus == '' || plus == '+') continue;
      
      
        sumArray(plus);

        plus = +plus;

        Sum += plus;

        lastSumNumber = plus;
      
        pow = 1;
      
        empty = false;
      
      
    }    
    

    if (plus == null) {
    
      let exit = confirm('Íà÷àòü âñå çàíîâî?');
      
      if (exit == true) {
      
        result = 0;
        globalArray = [''];
        start();
      
      }
      else if (exit == false) fplus(Sum + powValue);
    }
    
    else if (plus == '==') {
    
      result += Sum + powValue;
      
      xArray += globalArray;
      
      firstResult += result;
      
      result = 0;
      
      globalArray = [''];
      
      otherSide(xResult, xValue, '+', xArray, firstResult);
    
    }

    else if (plus == '-') {

      result += Sum + powValue;

      fminus(0);


    }

    else if (plus == '=') {

      result += Sum + powValue;
      
      xResult += -result / xValue

      showEquationResult(xResult, undefined, xNum);


    }

  }


  function fminus(Dis) {
  
    let pow = 1;
    
    let powValue = 0;
    let minus;
    let lastDisNumber;
    
    let empty = true;

    while(true) {

      minus = prompt(
  `Äëÿ ñìåíû äåéñòâèÿ ââåäè [+], [*] èëè [/]
  
  Òâîÿ òåêóùàÿ çàïèñü:
  
  ${globalArray}... ÌÈÍÓÑ... = 0
  
  
  [=] ÷òîáû ïîêàçàòü ðåçóëüòàò`, '');

      if (minus == '+' || minus == '=' || minus == null || minus == '==') break;
      
      else if (minus.includes('x')) {
              
        if (minus.length == 1) {        
          unknownArray(minus, '-');
          xValue += xNum;
          continue;
        }
        
        else if (minus.length > 1) {
        
          if ( (minus.length > minus.indexOf('x') + 1) && minus[0] != 'x') continue;
        
        
          xNum = minus.slice(0, minus.indexOf('x'));
          
          if (xNum == '-') xNum = -1;
          
          else if (!isFinite(xNum) || xNum == 0) continue;
          
          xNum = +xNum;
          
          unknownArray(minus, '-', xNum);
          
          xValue -= xNum;
          
          xNum = 1;
          
          continue;
        
        }
        
      }

      
      else if (minus.includes('^')) {  
      
      
        lastDisNumber = minus.slice(0, (minus.indexOf('^', 0) ));
        lastDisNumber = +lastDisNumber;
        
        
        pow = minus.slice(minus.indexOf('^', 0) + 1);
        pow = +pow;
        
        if (lastDisNumber == 0 || pow == 0) continue;
        
        disArray(minus);
        
        powValue -= Math.pow(lastDisNumber, pow);   
        
        empty = false;
              
        continue;
      }
      
      else if (!isFinite(minus) || minus == '' || minus =='-') continue;
      
      disArray(minus);
      
      minus = +minus;
      
      Dis -= minus;      
      
      lastDisNumber = minus;     
      
      pow = 1;
      
      empty = false;

    }
    

    if (minus == null) {
    
      
      let exit = confirm('Íà÷àòü âñå çàíîâî?');
      
      if (exit == true) {
      
        result = 0;
        globalArray = [''];
        start();
      
      }
      else if (exit == false) fminus(Dis + powValue);
    
    }
    
    else if (minus == '==') {
    
      result += Dis + powValue;
      
      xArray += globalArray;
      
      firstResult += result;
      
      result = 0;
      
      globalArray = [''];
      
      otherSide(xResult, xValue, '-', xArray, firstResult);
    
    }


    else if (minus == '+') {

      result += Dis + powValue;  

      fplus(0);


    } 

    else if (minus == '=') {

      result += Dis + powValue;
      
      xResult += -result / xValue;

      showEquationResult(xResult, undefined, xNum);

   }


  }


}



function otherSide(xResult, prevX, sign, xArray, firstResult) {

  let xNum = 1;
  

  if (sign == '+') fplus(0);
  else if (sign == '-') fminus(0);
  
  

  function fplus(Sum) {
    
    let pow = 1;
    let powValue = 0;
    let plus;
    let lastSumNumber = 0;
    
    let empty = true;

    while(true) {
    
      plus = prompt(
  `Äëÿ ñìåíû äåéñòâèÿ ââåäè [-], [*] èëè [/]
  
  Òâîÿ òåêóùàÿ çàïèñü:
  
  ${xArray} = ${globalArray}... ÏËÞÑ...
  
  
  [=] ÷òîáû ïîêàçàòü ðåçóëüòàò` , '');

      if (plus == '=' || plus == '-' || plus == null) break;
      
      
      else if (plus.includes('x')) {
              
        if (plus.length == 1) {        
          unknownArray(plus, '+');
          prevX -= xNum;
          continue;
        }
        
        else if (plus.length > 1) {
        
          if ( (plus.length > plus.indexOf('x') + 1) && plus[0] != 'x') continue;
        
        
          xNum = plus.slice(0, plus.indexOf('x'));
          
          if (xNum == '-') xNum = -1;
          
          else if (!isFinite(xNum) || xNum == 0) continue;
          
          xNum = +xNum;
          
          unknownArray(plus, '+', xNum);
          
          prevX -= xNum;
          
          xNum = 1;
          
          continue;
        
        }
        
      }
      
      else if (plus.includes('^') && !plus.includes('x')) {  
      
      
        lastSumNumber = plus.slice(0, (plus.indexOf('^', 0) ));
        
        if (!isFinite(lastSumNumber)) continue;
        
        lastSumNumber = +lastSumNumber;
        
        pow = plus.slice(plus.indexOf('^', 0) + 1);
        
        if (!isFinite(pow)) continue;
        
        pow = +pow;
        
        if (lastSumNumber == 0 || pow == 0) continue;
        
        sumArray(plus);
 
        powValue += Math.pow(lastSumNumber, pow);
        
        empty = false;
        
        continue;
      
      }
      
      else if (!isFinite(plus) || plus == '' || plus == '+') continue;
      
      
        sumArray(plus);

        plus = +plus;

        Sum += plus;

        lastSumNumber = plus;
      
        pow = 1;
      
        empty = false;
      
      
    }    
    

    if (plus == null) {
    
      let exit = confirm('Íà÷àòü âñå çàíîâî?');
      
      if (exit == true) {
      
        result = 0;
        globalArray = [''];
        start();
      
      }
      else if (exit == false) fplus(Sum + powValue);
    }
    

    else if (plus == '-') {

      result += Sum + powValue;

      fminus(0);


    }

    else if (plus == '=') {

      result += Sum + powValue;
      
      firstResult -= result;
      
      xResult += -firstResult / prevX

      showEquationResult(xResult, '==', prevX);


    }

  }


  function fminus(Dis) {
  
    let pow = 1;
    
    let powValue = 0;
    let minus;
    let lastDisNumber;
    
    let empty = true;

    while(true) {

      minus = prompt(
  `Äëÿ ñìåíû äåéñòâèÿ ââåäè [+], [*] èëè [/]
  
  Òâîÿ òåêóùàÿ çàïèñü:
  
  ${xArray} = ${globalArray}... ÌÈÍÓÑ...
  
  
  [=] ÷òîáû ïîêàçàòü ðåçóëüòàò`, '');

      if (minus == '+' || minus == '=' || minus == null) break;
      
      else if (minus.includes('x')) {
              
        if (minus.length == 1) {        
          unknownArray(minus, '-');
          prevX += xNum;
          continue;
        }
        
        else if (minus.length > 1) {
        
          if ( (minus.length > minus.indexOf('x') + 1) && minus[0] != 'x') continue;
        
        
          xNum = minus.slice(0, minus.indexOf('x'));
          
          if (xNum == '-') xNum = -1;
          
          else if (!isFinite(xNum) || xNum == 0) continue;
          
          xNum = +xNum;
          
          unknownArray(minus, '-', xNum);
          
          prevX += xNum;
          
          xNum = 1;
          
          continue;
        
        }
        
      }

      
      else if (minus.includes('^')) {  
      
      
        lastDisNumber = minus.slice(0, (minus.indexOf('^', 0) ));
        lastDisNumber = +lastDisNumber;
        
        
        pow = minus.slice(minus.indexOf('^', 0) + 1);
        pow = +pow;
        
        if (lastDisNumber == 0 || pow == 0) continue;
        
        disArray(minus);
        
        powValue -= Math.pow(lastDisNumber, pow);   
        
        empty = false;
              
        continue;
      }
      
      else if (!isFinite(minus) || minus == '' || minus =='-') continue;
      
      disArray(minus);
      
      minus = +minus;
      
      Dis -= minus;      
      
      lastDisNumber = minus;     
      
      pow = 1;
      
      empty = false;

    }
    

    if (minus == null) {
    
      
      let exit = confirm('Íà÷àòü âñå çàíîâî?');
      
      if (exit == true) {
      
        result = 0;
        globalArray = [''];
        start();
      
      }
      else if (exit == false) fminus(Dis + powValue);
    
    }


    else if (minus == '+') {

      result += Dis + powValue;  

      fplus(0);


    } 

    else if (minus == '=') {

      result += Dis + powValue;
      
      firstResult -= result;
      
      xResult += -firstResult / prevX;

      showEquationResult(xResult, '==', prevX);

   }


  }



}







  function sumArray(plus) {
  
    if (plus.includes('^') && globalArray[0] == '') globalArray += `(${plus})`;
    
    else if (plus.includes('^') && globalArray[0] != '') globalArray += ` + (${plus})`;

    else if (globalArray[0] == '' && !plus.includes('^')) globalArray += plus;

    else if (globalArray[0] != '' && !plus.includes('^')) globalArray += ` + ${plus}`;

  }


  function disArray(minus) {
  
    if (minus.includes('^') && globalArray[0] == '') globalArray += `-(${minus})`;
    
    else if (minus.includes('^') && globalArray[0] != '') globalArray += ` - (${minus})`;

    else if (globalArray[0] == '' && !minus.includes('^')) globalArray += `-${minus}`;

    else if (globalArray[0] != '' && !minus.includes('^')) globalArray += ` - ${minus}`;

  }


  function multiplicationArr(mult) {

    if (mult.includes('^') && globalArray[0] == '') globalArray += `(${mult})`;
    
    else if (mult.includes('^') && globalArray[0] != '') globalArray += ` * (${mult})`;

    else if (globalArray[0] == '' && !mult.includes('^')) globalArray += mult;

    else if (globalArray[0] != '' && !mult.includes('^')) globalArray += ` * ${mult}`;

  }
  
  
  function divisionArr(entry) {
  
    if (entry.includes('^') && globalArray[0] == '') globalArray += `(${entry})`;
    
    else if (entry.includes('^') && globalArray[0] != '') globalArray += ` / (${entry})`;

    else if (globalArray[0] == '' && !entry.includes('^')) globalArray += entry;

    else if (globalArray[0] != '' && !entry.includes('^')) globalArray += ` / ${entry}`;
  
  }
  


function unknownArray(entry, sign, xNum) {

  if (sign == '+') {
  
    if (globalArray[0] == '') globalArray += entry;
    
    else if (entry.length == 1 && globalArray.length > 0) globalArray += ` + ${entry}`;
    
    else if (xNum < 0 && globalArray.length > 0) globalArray += ` + (${entry})`;
    
    else if (xNum > 0 && globalArray.length > 0) globalArray += ` + ${entry}`;
   
  
  }
  
  else if (sign == '-') {
  
    if (globalArray[0] == '') globalArray += `-${entry}`;
    
    else if (entry.length == 1 && globalArray.length > 0) globalArray += ` - ${entry}`;
    
    else if (xNum < 0 && globalArray.length > 0) globalArray += ` - (${entry})`;
    
    else if (xNum > 0 && globalArray.length > 0) globalArray += ` - ${entry}`;
  
  }

}


  
function stop() {

  alert('Äîñâèäàíüÿ')

}


function info() {

  let info = prompt(
`Âñå çíà÷åíèÿ íóæíî ââîäèòü â ñòðîêó áåç êâàäðàòíûõ ñêîáîê èëè êàâû÷åê. Ââåäåíèå ïîäòâåðæäàòü Enter'îì.
Â ïðåäûäóùåì îêíå íóæíî ââåñòè  "+"  "-"  "*" èëè "/" (ñëîæåíèå, âû÷èòàíèå, óìíîæåíèå è äåëåíèå ñîîòâåòñòâåííî) â çàâèñèñìîñòè îò íóæíîãî äåéñòâèÿ. ÍÅ íóæíî ââîäèòü çíà÷åíèÿ âèäà "2 + 2 * 3 / 6". Ïðàâèëüíî ââîäèòü ÷èñëà ÏÎ ÎÄÍÎÌÓ. Ò.å ââåë ÷èñëî - íàæàë Enter - ÷èëî çàïèñàëîñü, ïðèìåð îáíîâèëñÿ - ââåë ñëåäóþùåå ÷èñëî è ò.ä.
×òîáû ïåðåêëþ÷èòüñÿ íà äðóãîå äåéñòâèå, ââåäè ñîîòâåòñòâóþùåå ýòîìó äåéñòâèþ çíà÷åíèå. Ïåðåêëþ÷àòüñÿ òàêèì îáðàçîì ìîæíî ñêîëüêî óãîäíî ðàç.
Âñå ââåäåííûå "ïîñòîðîííèå" çíà÷åíèÿ ê îøèáêå íå ïðèâåäóò, íî áóäóò ïðîèãíîðèðîâàíû.
×òîáû âîçâåñòè ÷èñëî â ñòåïåíü èñðîëüçóé çàïèñü âèäà "2^4", ãäå "4" - ñòåïåíü.
Äðîáíûå ÷èñëà âèäà "1.242325" òàê æå ìîæíî ââîäèòü.
Äîïóñêàåòñÿ çàïèñü ÷èñëà âèäà "-5" ò.å ñ ïðîòèâîïîëîæíûì çíàêîì. Íî ñòîèò ó÷èòûâàòü ÷òî ïðè ââåäåíèè òàêîãî ÷èñëà, íàïðèìåð, â "îêíå âû÷èòàíèÿ" îíî áóäåò âîñïðèíÿòî êàê "--5", ÷òî áóäåò ðàâíî "5".
Äëÿ ïðîñìîòðà ðåçóëüòàòà íóæíî ââåñòè "=".

Íàæìè Esc, Enter èëè ââåäè ÷òî-ëèáî â ñòðîêó, ÷òîáû âåðíóòüñÿ â ïðåäûäóùåå ìåíþ.`);

  start();

}


  function showResult() {

    let show = confirm(
  `
  ${globalArray} = ${result}
  
  Åùå ðàç?`);
  
    if (show == true) {
    
      result = 0;
      
      globalArray = [''];
      
      start();
      
    } else if (show == false) {
    
      stop();
    }  

  }
  
  
  function showEquationResult(xResult, sign, prevX) {
  
    if (result == 0) xResult = 0;
    
    if (prevX == 0) xResult = 0;
    
    
    if (sign == '==') {
    
      let show = confirm(
  `Òâîå óðàâíåíèå:
    
    ${xArray} = ${globalArray}
    
    x = ${xResult}
  
  Åùå ðàç?`);
  
    if (show == true) {
    
      xResult = 0;
      
      xNum = 1;
    
      result = 0;
      
      globalArray = [''];
      
      linearEquation();
      
    } else if (show == false) {
    
      stop();
    }  
    
    }
    
    
  else {  
  
    let show = confirm(
  `Òâîå óðàâíåíèå:
    
    ${globalArray} = 0
    
    x = ${xResult}
  
  Åùå ðàç?`);
  
    if (show == true) {
    
      xResult = 0;
      
      xNum = 1;
    
      result = 0;
      
      globalArray = [''];
      
      linearEquation();
      
    } else if (show == false) {
    
      stop();
    } 
    
  }
  
}


linearEquation();

