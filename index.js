import * as CrCombLib from "@crestron/ch5-crcomlib";
//import { getState } from "@crestron/ch5-crcomlib";
//const ch5 = require("@crestron/ch5-crcomlib")
var $ = require('jquery')
const test = CrCombLib.subscribeState('n','1',(value) =>{
    //subscribeState get sned value
    $('#number').text(value);
});

const button = document.querySelector('.sources');
$('#tile').text('title');
$("body").append("<div>TEST</div>");
button.addEventListener('click',clicks);






function GetEnergy(e){
    $('#number').text(e);
}

function clicks(event){
    if(event.target.tagName==="BUTTON"){
        handleSourcePress(event.target.value);
    }
    //CrCombLib.publishEvent("b","1",true);
    //setTimeout(()=>CrCombLib.publishEvent("b","1",false),200)
    //console.log(event)
    event.stopPropagation();
}
function handleSourcePress(SourceNumber){
    
    const value= parseInt(SourceNumber,10);

    CrCombLib.publishEvent("n","1",value);//n analog
    //publishEvent send by join number


    //CrCombLib.publishEvent("s","1",'value');//n analog
    //CrCombLib.publishEvent("d","1",true);//n analog
    //$('#number').text(CrCombLib.getState('s','1'));
    //$('#tile').text(SourceNumber);
    var test_Number=CrCombLib.getStringSignalValue(SourceNumber);
    $('#number').text(test_Number);
    console.log(SourceNumber)
    var els=document.getElementsByClassName('demmoActive');
    Array.from(els).forEach((el)=>{
        document.getElementById(el.id).className='demo'
    });
    document.getElementById(SourceNumber).className="demmoActive";
}