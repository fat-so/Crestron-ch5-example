# ch5-test-example:pre-Process
add necessary function after import ch5

    import * as  CrComLib from "@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib.js";

    //necessary function
    window.bridgeReceiveIntegerFromNative=CrComLib.bridgeReceiveIntegerFromNative;
    window.bridgeReceiveBooleanFromNative=CrComLib.bridgeReceiveBooleanFromNative;
    window.bridgeReceiveStringFromNative=CrComLib.bridgeReceiveStringFromNative;
    window.bridgeReceiveObjectFromNative=CrComLib.bridgeReceiveObjectFromNative;
    //necessary function after import CrComLib

# ch5-test-example:send digital

    CrComLib.publishEvent('n','index.test1',5);
    

first  parameter : tell crestron data type n->number(analog)|s->string(serial)|b->boolean(digital) </br>
second parameter : 'index.test1'->is bulid by "ch5 contract edit" you can just use joinnumber </br>
third  parameter : the data u send ,analog use number , serial use "string" , digital use true/false </br></br>
BTW</br>
I not sure is has bug or not by use joinNumber , because crestron give us the "ch5 contract edit" ,</br>
I'm not sure is crestron enginner think "hay we can make ch5 like smart object" or "hay joinNumber has some bug on ch5" </br>
so use joinNumber be careful </br></br></br>

# ch5-test-example:receive data when signal change

    const test = CrComLib.subscribeState('s','index.OutLet_1_energy',(value) =>{
        $('#AQI').text(value);
    });
first  parameter : return data type </br>
second parameter : JoinNumber or JoinName </br>
third  parameter : Function(ReturnValue){} </br>
</br></br></br>
# ch5-test-example:receive data when you call - 1

    var s1=CrComLib.getState('n','index.test1_fb',0)
    
the third parameter is default number 
</br></br></br>
# ch5-test-example:receive data when you call - 2

    var s3=CrComLib.getStringSignalValue('1');
    var s4=CrComLib.getNumericSignalValue('index.test1_fb',0)
    var s4=CrComLib.getBooleanSignalValue('1',0)

U can just call back Serial or digital or analog Join ,</br>
I'm not sure why has those function , maybe it could make code more "readable" 😂?</br>
first  parameter : JoinName Or JoinNumber</br>
second parameter : default return number when is empty or not avarible </br></br></br>

# if you are first time use ch5 refer this is would be helpful:

GitHub</br>
https://github.com/CloudDrivenSolutions/CH5-Basic?fbclid=IwAR065A9K6H8gbog4DTdKM_LMej40YJKstLgpHxIh_l_glSiJe3b_ZeNCNv0
