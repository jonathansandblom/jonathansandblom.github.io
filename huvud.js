function calc(){
    var vHPoang = parseInt(document.getElementById('vHPoang').value);
    var pKPoang = parseInt(document.getElementById('pKPoang').value);
    var vanHogKamNorraNorrland = parseInt(document.getElementById('vanHogKamNorraNorrland').value);
    var proKonKamNorraNorrland = parseInt(document.getElementById('proKonKamNorraNorrland').value);
    var partBonNorraNorrland = parseInt(document.getElementById('partBonNorraNorrland').value);
    
    const vHNN ="-5";
    const pKNN ="-2";

    document.getElementById('result').value = 60000+400*((pKPoang*pKNN)+(vHPoang*vHNN)+((vHNN*vHPoang)*(vHPoang*vanHogKamNorraNorrland))+((pKNN*pKPoang)*(pKPoang*proKonKamNorraNorrland))+(partBonNorraNorrland*100));
}

function calc2(){
    var vHPoang = parseInt(document.getElementById('vHPoang').value);
    var pKPoang = parseInt(document.getElementById('pKPoang').value);
    var vanHogKamSodraNorrland = parseInt(document.getElementById('vanHogKamSodraNorrland').value);
    var proKonKamSodraNorrland = parseInt(document.getElementById('proKonKamSodraNorrland').value);
    var partBonSodraNorrland = parseInt(document.getElementById('partBonSodraNorrland').value);
    
    const vHSN ="-4";
    const pKSN ="-1";

    document.getElementById('result2').value = 80000+1000*((pKPoang*pKSN)+(vHPoang*vHSN)+((vHSN*vHPoang)*(vHPoang*vanHogKamSodraNorrland))+((pKSN*pKPoang)*(pKPoang*proKonKamSodraNorrland))+(partBonSodraNorrland*100));
}

function calc3(){
    var vHPoang = parseInt(document.getElementById('vHPoang').value);
    var pKPoang = parseInt(document.getElementById('pKPoang').value);
    var vanHogKamVastraSvealand = parseInt(document.getElementById('vanHogKamVastraSvealand').value);
    var proKonKamVastraSvealand = parseInt(document.getElementById('proKonKamVastraSvealand').value);
    var partBonVastraSvealand = parseInt(document.getElementById('partBonVastraSvealand').value);
    
    const vHVS ="-3";
    const pKVS ="1";

    document.getElementById('result3').value = 110000+2200*((pKPoang*pKVS)+(vHPoang*vHVS)+((vHVS*vHPoang)*(vHPoang*vanHogKamVastraSvealand))+((pKVS*pKPoang)*(pKPoang*proKonKamVastraSvealand))+(partBonVastraSvealand*100));
}

function calc4(){
    var vHPoang = parseInt(document.getElementById('vHPoang').value);
    var pKPoang = parseInt(document.getElementById('pKPoang').value);
    var vanHogKamOstraSvealand = parseInt(document.getElementById('vanHogKamOstraSvealand').value);
    var proKonKamOstraSvealand = parseInt(document.getElementById('proKonKamOstraSvealand').value);
    var partBonOstraSvealand = parseInt(document.getElementById('partBonOstraSvealand').value);
    
    const vHOS ="-2";
    const pKOS ="3";

    document.getElementById('result4').value = 120000+1500*((pKPoang*pKOS)+(vHPoang*vHOS)+((vHOS*vHPoang)*(vHPoang*vanHogKamOstraSvealand))+((pKOS*pKPoang)*(pKPoang*proKonKamOstraSvealand))+(partBonOstraSvealand*100));
}


function calc5(){
    var vHPoang = parseInt(document.getElementById('vHPoang').value);
    var pKPoang = parseInt(document.getElementById('pKPoang').value);
    var vanHogKamStockholm = parseInt(document.getElementById('vanHogKamStockholm').value);
    var proKonKamStockholm = parseInt(document.getElementById('proKonKamStockholm').value);
    var partBonStockholm = parseInt(document.getElementById('partBonStockholm').value);
    
    const vHSt ="+4";
    const pKSt ="+4";

    document.getElementById('result5').value = 270000+1300*((pKPoang*pKSt)+(vHPoang*vHSt)+((vHSt*vHPoang)*(vHPoang*vanHogKamStockholm))+((pKSt*vHPoang)*(pKPoang*proKonKamStockholm))+(partBonStockholm*100));
}


function calc6(){
    var vHPoang = parseInt(document.getElementById('vHPoang').value);
    var pKPoang = parseInt(document.getElementById('pKPoang').value);
    var vanHogKamVastraGotaland = parseInt(document.getElementById('vanHogKamVastraGotaland').value);
    var proKonKamVastraGotaland = parseInt(document.getElementById('proKonKamVastraGotaland').value);
    var partBonVastraGotaland = parseInt(document.getElementById('partBonVastraGotaland').value);
    
    const vHVG ="-1";
    const pKVG ="2";

    document.getElementById('result6').value = 260000+2800*((pKPoang*pKVG)+(vHPoang*vHVG)+((vHVG*vHPoang)*(vHPoang*vanHogKamVastraGotaland))+((pKVG*pKPoang)*(pKPoang*proKonKamVastraGotaland))+(partBonVastraGotaland*100));
}

function calc7(){
    var vHPoang = parseInt(document.getElementById('vHPoang').value);
    var pKPoang = parseInt(document.getElementById('pKPoang').value);
    var vanHogKamOstraGotaland = parseInt(document.getElementById('vanHogKamOstraGotaland').value);
    var proKonKamOstraGotaland = parseInt(document.getElementById('proKonKamOstraGotaland').value);
    var partBonOstraGotaland = parseInt(document.getElementById('partBonOstraGotaland').value);
    
    const vHOG ="1";
    const pKOG ="-3";

    document.getElementById('result7').value = 180000+1200*((pKPoang*pKOG)+(vHPoang*vHOG)+((vHOG+vanHogKamOstraGotaland)*(vHPoang))+((pKOG*pKPoang)*(pKPoang*proKonKamOstraGotaland))+(partBonOstraGotaland*100));
}


function calc8(){
    var vHPoang = parseInt(document.getElementById('vHPoang').value);
    var pKPoang = parseInt(document.getElementById('pKPoang').value);
    var vanHogKamSkane = parseInt(document.getElementById('vanHogKamSkane').value);
    var proKonKamSkane = parseInt(document.getElementById('proKonKamSkane').value);
    var partBonSkane = parseInt(document.getElementById('partBonSkane').value);
    
    const vHSk ="+2";
    const pKSk ="-4";

    document.getElementById('result8').value = 170000+600*((pKPoang*pKSk)+(vHPoang*vHSk)+((vHSk+vanHogKamSkane)*(vHPoang))+((pKSk*pKPoang)*(pKPoang*proKonKamSkane))+(partBonSkane*100));
}
/**/