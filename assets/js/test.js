import * as CrCombLib from "@crestron/ch5-crcomlib";
var $ = require('jquery')
setInterval(function(){
    $('#test'.text($('#receive1').text()))
},1000);