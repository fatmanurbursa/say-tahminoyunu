const butontas=document.querySelector("#tas");
const butonkagit=document.querySelector("#kagit");
const butonmakas=document.querySelector("#makas");
const text1=document.querySelector("#text1");
const text2=document.querySelector("#text2");
const sonuc=document.querySelector("#sonuc");




var bilgisayarsecimi=Math.round(Math.random()*3+1);


butontas.addEventListener("click",function(e){

    

text1.innerHTML="Senin seçimin : TAŞ ";

if(bilgisayarsecimi==1){
    text2.innerHTML="Bilgisayarın seçimi : TAŞ";
    sonuc.innerHTML="BERABERE";
}else if(bilgisayarsecimi==2){
    text2.innerHTML="Bilgisayarın seçimi : KAĞIT";
    sonuc.innerHTML="KAYBETTİNİZ :(";
}else if(bilgisayarsecimi==3){
    text2.innerHTML="Bilgisayarın seçimi : MAKAS";
    sonuc.innerHTML="TEBRİKLER!! KAZANDINIZ :)";
    sonuc.style.color="darkmagenta";
    alert("KAZANDINIZ!")
}

})

butonkagit.addEventListener("click",function(){
    

    text1.innerHTML="Senin seçimin : KAĞIT";
if(bilgisayarsecimi==1){
    text2.innerHTML="Bilgisayarın seçimi : TAŞ";
    sonuc.innerHTML="TEBRİKLER!! KAZANDINIZ :)";
    sonuc.style.color="darkmagenta";
    alert("KAZANDINIZ!");
}else if(bilgisayarsecimi==2){
    text2.innerHTML="Bilgisayarın seçimi : KAĞIT";
    sonuc.innerHTML="BERABERE.";
}else if(bilgisayarsecimi==3){
    text2.innerHTML="Bilgisayarın seçimi : MAKAS";
    sonuc.innerHTML="KAYBETTİNİZ :(";   
}     })



butonmakas.addEventListener("click",function(){



    text1.innerHTML="Senin seçimin : MAKAS"; 
    
    
    if(bilgisayarsecimi==1){
        text2.innerHTML="Bilgisayarın seçimi : TAŞ";
        sonuc.innerHTML="KAYBETTİNİZ :(";
    }else if(bilgisayarsecimi==2){
        text2.innerHTML="Bilgisayarın seçimi : KAĞIT";
        sonuc.innerHTML="TEBRİKLER!! KAZANDINIZ :)";
        sonuc.style.color="darkmagenta";
        alert("KAZANDINIZ!")
    }else if(bilgisayarsecimi==3){
        text2.innerHTML="Bilgisayarın seçimi : MAKAS";
         
        sonuc.innerHTML="BERABERE.";
         
        
    }
    
    
    
    });
    