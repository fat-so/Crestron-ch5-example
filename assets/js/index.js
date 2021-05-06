import * as  CrComLib from "@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib.js";

//necessary function
window.bridgeReceiveIntegerFromNative=CrComLib.bridgeReceiveIntegerFromNative;
window.bridgeReceiveBooleanFromNative=CrComLib.bridgeReceiveBooleanFromNative;
window.bridgeReceiveStringFromNative=CrComLib.bridgeReceiveStringFromNative;
window.bridgeReceiveObjectFromNative=CrComLib.bridgeReceiveObjectFromNative;
//necessary function after import CrComLib

var $ = require('jquery')//import jquery


const test = CrComLib.subscribeState('s','index.OutLet_1_energy',(value) =>{
    //n->analog(number)||s->serial(string)||b->digital(boolean)
    //subscribeState get signal
    $('#AQI').text(value);
});



document.getElementById('test_button').addEventListener('click',test1);
getWeatherInfo();

GetTime();
setInterval(function(){
    GetTime();
},1000);
$('.date .week').text();




function GetTime(){
    //reflesh js display time
    //時間更新
    //var value = CrComLib.getState('s','index.OutLet_1_energy');
    //$('#AQI').text(value);
    var num = Date.now();
    var dd = new Date(num);

    //console.log(dd.toString() + "<br />");
    //var months = "一月,二月,三月,四月,五月,六月,七月,八月,九月,十月,十一月,十二月".split(",");
    var weekdays = "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(",");
    var Mouth = dd.getMonth()+1;
    var Year = dd.getFullYear();
    var day = dd.getDate();
    //console.log( dd.getMinutes() );
    $('.date .week').text(weekdays[dd.getDay()]);
    $('.date .dates').text(Year+"/"+Mouth+"/"+day);
    $('.date .hour').text(dd.getHours());
    $('.date .min').text(dd.getMinutes());
    //https://data.epa.gov.tw/api/v1/aqx_p_432?limit=1000&api_key=9be7b239-557b-4c10-9775-78cadfc555e9&format=json
    //空汙

}
function getEnegryInfo(){

}
function getWeatherInfo(){
    //get Central Weather Bureau Weather API info
    var API="https://data.epa.gov.tw/api/v1/aqx_p_432?limit=1000&api_key=9be7b239-557b-4c10-9775-78cadfc555e9&format=json"
    $.getJSON({
        url : API,
        success : function(data){
            var AQI;
            for(var i=0;i<=data.records.length;i++){
                if(data.records[i].County=='臺中市'){
                    AQI = data.records[i].AQI
                    break;
                }
                
            }
            console.log(AQI)
            //$('#AQI').text(AQI);

        }
    });
}

function test1(){
    var s1=0;
    var s2=0;
    var s3=0;
    var s4=0;
    var s5=0;
    var s6=0;
    CrComLib.publishEvent('n','index.test1',5);
    var s1=CrComLib.getState('n','index.test1_fb',0)
    var s2=CrComLib.getState('s','1',0)
    var s3=CrComLib.getStringSignalValue('1');
    var s4=CrComLib.getNumericSignalValue('index.test1_fb',0)
    var s4=CrComLib.getBooleanSignalValue('1',0)
    //CrComLib.subscribeState('s','index.test1_fb',function (getValue){ $('#AQI').text(getValue);} );
    $('#s1').text(s1);
    $('#s2').text(s2);
    $('#s3').text(s3);
    $('#s4').text(s4);
   // $('#s5').text(s5);
    //$('#s6').text(s6);
    //$('#AQI').text(getValue);
}


