# ch5-test-example:pre-Process
add necessary function after import

    import * as  CrComLib from "@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib.js";

    //necessary function
    window.bridgeReceiveIntegerFromNative=CrComLib.bridgeReceiveIntegerFromNative;
    window.bridgeReceiveBooleanFromNative=CrComLib.bridgeReceiveBooleanFromNative;
    window.bridgeReceiveStringFromNative=CrComLib.bridgeReceiveStringFromNative;
    window.bridgeReceiveObjectFromNative=CrComLib.bridgeReceiveObjectFromNative;
    //necessary function after import CrComLib

# ch5-test-example:send digital

    CrComLib.publishEvent('n','index.test1',5);
    
n->number(analog)|s->string(serial)|b->boolean(digital) </br>
'index.test1'->is bulid by "ch5 contract edit" you can just use joinnumber </br>
5->the digital u send , serial use "5" , digital use true/false</br></br></br>

# ch5-test-example:receive data when signal change

    const test = CrComLib.subscribeState('s','index.OutLet_1_energy',(value) =>{
        $('#AQI').text(value);
    });
    
</br></br></br>
# ch5-test-example:receive data when you call - 1

    var s1=CrComLib.getState('n','index.test1_fb',0)
    
the third parameter is default number 
</br></br></br>
# ch5-test-example:receive data when you call - 2

    var s3=CrComLib.getStringSignalValue('1');
    var s4=CrComLib.getNumericSignalValue('index.test1_fb',0)
    var s4=CrComLib.getBooleanSignalValue('1',0)

the 2nd parameter is default number 
</br></br></br>

# if you are first time use ch5 refer this :

GitHub</br>
https://github.com/CloudDrivenSolutions/CH5-Basic?fbclid=IwAR065A9K6H8gbog4DTdKM_LMej40YJKstLgpHxIh_l_glSiJe3b_ZeNCNv0
