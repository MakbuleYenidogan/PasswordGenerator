const passwordButton = document.querySelector('.passwordButton');
//passwordButton u çekiyoruz
const input = document.querySelector('input');
//inpua aşağıdaki consola bastığımız işlemi inputa basmak için çekiyorum
const faCopy = document.querySelector('.fa-copy');
//iconumuzu çektik
const alertContainer = document.querySelector('.alertContainer');


passwordButton.addEventListener('click',createPassword);
//tıkladığımda  demek için 'click' eventiğini çağırıyorum 
//tıkladığımda demek için ()=> arrow functionumu açıyorum /bunun yerine createPassword ekleyer bunu çalıştır diyebiliriz
//create eticez burda bişeyleri createPassword adında bir fonksiyon ataması yaptık
faCopy.addEventListener('click', copyPassword);
//bunu da clickliyoruz


function createPassword(){
    const passwordLength=14;
    const characters=
    '0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXTZ';
//console.log(characters[13]); 13 karakteri basıyodu basıyodu

let password='';
for(let index=0;index<passwordLength; index++)
{
    const randomNum=Math.floor(Math.random()*characters.length);
    password += characters[randomNum];

}
    input.value = password;
    alertContainer.textContent=password + '  kopyalandı';
    //console.log(password); 
    //randomNum u basıcak rastgele sayı yani
    //alerte neyi kopyaladığımızı veriyoruz
}
//createPassword funstionumuzu tanımlayıp içine giriyoruz
//passwordLength=14; ile şifremin kaç karakterli olucağını belirliyoruz
//const characters şifrede kullanabileceğimiz karakterleri tanımlıyoruz
//rasgele sayı üretmek için randomNum verdik ismini /sonrasında bu işlemi yapması için Math.random dedik
//* çarpı characters.length
//Math.floor ile tabana yuvarlıyoruz örn 44 tane değer mi var random bir şekilde randomNum a atanmış olucak
//rastgele 14 tane sayı basabilmesi için for döngüsü açıyorum ve index<passwordLength
//diyorum çünkü 14 ten küçük olmalı (passwordLength=14) 
//index++ index sıfırıncı indexten başlıcak 14 defa dönücek rastgele sayı çıkarıcak
//fordan gelen değeri let password=''; sürekli buna eklicez
//password += diyerek sürekli ekleme işlemi yapıcaz / characters[randomNum] buna eklicem
//bu sefer consola password u basıyoruz yukarıdaki işlemden sonra
//inpuda basıcaz consola bastık
//input.value = password; inputa basıcaz consoldan kaldırdık comente alıp


function copyPassword() {
    if(input.value){
        input.select();
        navigator.clipboard.writeText(input.value);  
        alertContainer.classList.remove('active');
        setTimeout(()=>{
            alertContainer.classList.add('active');
        },2000)
    }
  }
//copyPassword e de function tanımlıyoruz  inputtaki şifreyi kopyalıcak
//input seçme işlemini select ile yapabiliyorum
//kopyalama işleminde navigator.clipboard.writeText 
//writeTexte neyi yazıcam inputun içerisinde hangi değer varsa kopyalıcam
//alet i çıkarmak için if koşulumu açıyorum 
//inputun içerisinde bir value(değer) varsa
//alertContainer ın içerisndeki active kaldırmam lazım
//.classList.remove('active'); claslisterden remove (kaldırma) active kaldır
//belirli bi saniye sonra aletin kaldırılması gerekiyo
//setTimeout açıyorum arrow functionumu veriyorum 2sn sonra demek için 2000 veriyorum
//.add  i ekleyerek activeyi geri getirip alertin kaybolmasını sağlıyorum