const names = [

["الرَّحْمَنُ","Ar-Rahman","The Most Merciful","نہایت مہربان"],
["الرَّحِيمُ","Ar-Raheem","The Most Compassionate","نہایت رحم فرمانے والا"],
["الْمَلِكُ","Al-Malik","The King","بادشاہ"],
["الْقُدُّوسُ","Al-Quddus","The Most Holy","نہایت پاک"],
["السَّلَامُ","As-Salam","The Source of Peace","سلامتی دینے والا"],
["الْمُؤْمِنُ","Al-Mu'min","The Giver of Faith","امن دینے والا"],
["الْمُهَيْمِنُ","Al-Muhaymin","The Guardian","نگہبان"],
["الْعَزِيزُ","Al-Aziz","The Almighty","زبردست"],
["الْجَبَّارُ","Al-Jabbar","The Compeller","جبار"],
["الْمُتَكَبِّرُ","Al-Mutakabbir","The Majestic","بڑائی والا"],
["الْخَالِقُ","Al-Khaliq","The Creator","پیدا کرنے والا"],
["الْبَارِئُ","Al-Bari","The Originator","وجود میں لانے والا"],
["الْمُصَوِّرُ","Al-Musawwir","The Fashioner","صورت بنانے والا"],
["الْغَفَّارُ","Al-Ghaffar","The Constant Forgiver","بار بار بخشنے والا"],
["الْقَهَّارُ","Al-Qahhar","The All-Subduer","سب پر غالب"],
["الْوَهَّابُ","Al-Wahhab","The Bestower","بہت عطا کرنے والا"],
["الرَّزَّاقُ","Ar-Razzaq","The Provider","رزق دینے والا"],
["الْفَتَّاحُ","Al-Fattah","The Opener","راستے کھولنے والا"],
["الْعَلِيمُ","Al-Alim","The All-Knowing","سب کچھ جاننے والا"],
["الْقَابِضُ","Al-Qabid","The Withholder","روکنے والا"],
["الْبَاسِطُ","Al-Basit","The Expander","کشادگی دینے والا"],
["الْخَافِضُ","Al-Khafid","The Abaser","پست کرنے والا"],
["الرَّافِعُ","Ar-Rafi","The Exalter","بلند کرنے والا"],
["الْمُعِزُّ","Al-Mu'izz","The Honourer","عزت دینے والا"],
["الْمُذِلُّ","Al-Mudhill","The Humiliator","ذلت دینے والا"],
["السَّمِيعُ","As-Sami","The All-Hearing","سب سننے والا"],
["الْبَصِيرُ","Al-Basir","The All-Seeing","سب دیکھنے والا"],
["الْحَكَمُ","Al-Hakam","The Judge","فیصلہ کرنے والا"],
["الْعَدْلُ","Al-Adl","The Utterly Just","نہایت انصاف والا"],
["اللَّطِيفُ","Al-Latif","The Subtle","نہایت لطیف"],
["الْخَبِيرُ","Al-Khabir","The All-Aware","باخبر"],
["الْحَلِيمُ","Al-Halim","The Forbearing","بردبار"],
["الْعَظِيمُ","Al-Azim","The Magnificent","عظمت والا"],
["الْغَفُورُ","Al-Ghafur","The Forgiving","بخشنے والا"],
["الشَّكُورُ","Ash-Shakur","The Appreciative","قدردان"],
["الْعَلِيُّ","Al-Ali","The Most High","سب سے بلند"],
["الْكَبِيرُ","Al-Kabir","The Most Great","سب سے بڑا"],
["الْحَفِيظُ","Al-Hafiz","The Preserver","حفاظت کرنے والا"],
["الْمُقِيتُ","Al-Muqit","The Sustainer","روزی پہنچانے والا"],
["الْحَسِيبُ","Al-Hasib","The Reckoner","حساب لینے والا"],
["الْجَلِيلُ","Al-Jalil","The Majestic","جلال والا"],
["الْكَرِيمُ","Al-Karim","The Generous","کرم فرمانے والا"],
["الرَّقِيبُ","Ar-Raqib","The Watchful","نگہبان"],
["الْمُجِيبُ","Al-Mujib","The Responsive","دعا قبول کرنے والا"],
["الْوَاسِعُ","Al-Wasi","The All-Encompassing","وسعت والا"],
["الْحَكِيمُ","Al-Hakim","The All-Wise","حکمت والا"],
["الْوَدُودُ","Al-Wadud","The Most Loving","محبت کرنے والا"],
["الْمَجِيدُ","Al-Majid","The Glorious","بزرگی والا"],
["الْبَاعِثُ","Al-Ba'ith","The Resurrector","اٹھانے والا"],
["الشَّهِيدُ","Ash-Shahid","The Witness","گواہ"],
["الْحَقُّ","Al-Haqq","The Truth","حق"],
["الْوَكِيلُ","Al-Wakil","The Trustee","کارساز"],
["الْقَوِيُّ","Al-Qawiyy","The All-Strong","نہایت طاقتور"],
["الْمَتِينُ","Al-Matin","The Firm","مضبوط"],
["الْوَلِيُّ","Al-Wali","The Protecting Friend","مددگار"],
["الْحَمِيدُ","Al-Hamid","The Praiseworthy","قابلِ حمد"],
["الْمُحْصِي","Al-Muhsi","The Counter","شمار کرنے والا"],
["الْمُبْدِئُ","Al-Mubdi","The Originator","پہلی بار پیدا کرنے والا"],
["الْمُعِيدُ","Al-Muid","The Restorer","دوبارہ پیدا کرنے والا"],
["الْمُحْيِي","Al-Muhyi","The Giver of Life","زندگی دینے والا"],
["الْمُمِيتُ","Al-Mumit","The Bringer of Death","موت دینے والا"],
["الْحَيُّ","Al-Hayy","The Ever-Living","ہمیشہ زندہ"],
["الْقَيُّومُ","Al-Qayyum","The Sustainer","سب کو قائم رکھنے والا"],
["الْوَاجِدُ","Al-Wajid","The Finder","پانے والا"],
["الْمَاجِدُ","Al-Majid","The Noble","بزرگی والا"],
["الْوَاحِدُ","Al-Wahid","The One","ایک"],
["الْأَحَدُ","Al-Ahad","The Unique One","یکتا"],
["الصَّمَدُ","As-Samad","The Eternal Refuge","بے نیاز"],
["الْقَادِرُ","Al-Qadir","The Capable","قدرت رکھنے والا"],
["الْمُقْتَدِرُ","Al-Muqtadir","The Powerful","بڑی قدرت والا"],
["الْمُقَدِّمُ","Al-Muqaddim","The Expediter","آگے کرنے والا"],
["الْمُؤَخِّرُ","Al-Mu'akhkhir","The Delayer","پیچھے کرنے والا"],
["الْأَوَّلُ","Al-Awwal","The First","سب سے پہلا"],
["الْآخِرُ","Al-Akhir","The Last","سب سے آخر"],
["الظَّاهِرُ","Az-Zahir","The Manifest","ظاہر"],
["الْبَاطِنُ","Al-Batin","The Hidden","پوشیدہ"],
["الْوَالِي","Al-Wali","The Governor","حاکم"],
["الْمُتَعَالِي","Al-Muta'ali","The Most Exalted","نہایت بلند"],
["الْبَرُّ","Al-Barr","The Source of Goodness","نیکی کا سرچشمہ"],
["التَّوَابُ","At-Tawwab","The Ever-Returning","توبہ قبول کرنے والا"],
["الْمُنْتَقِمُ","Al-Muntaqim","The Avenger","بدلہ لینے والا"],
["الْعَفُوُّ","Al-Afuww","The Pardoner","معاف کرنے والا"],
["الرَّؤُوفُ","Ar-Ra'uf","The Most Kind","نہایت شفقت والا"],
["مَالِكُ الْمُلْكِ","Malik-ul-Mulk","Owner of All Sovereignty","بادشاہی کا مالک"],
["ذُو الْجَلَالِ وَالْإِكْرَامِ","Dhul-Jalali wal-Ikram","Lord of Majesty and Honour","جلال و اکرام والا"],
["الْمُقْسِطُ","Al-Muqsit","The Equitable","انصاف قائم کرنے والا"],
["الْجَامِعُ","Al-Jami","The Gatherer","جمع کرنے والا"],
["الْغَنِيُّ","Al-Ghani","The Self-Sufficient","بے نیاز"],
["الْمُغْنِي","Al-Mughni","The Enricher","غنی کرنے والا"],
["الْمَانِعُ","Al-Mani","The Preventer","روکنے والا"],
["الضَّارُّ","Ad-Darr","The Distresser","نقصان پہنچانے والا"],
["النَّافِعُ","An-Nafi","The Benefactor","نفع پہنچانے والا"],
["النُّورُ","An-Nur","The Light","نور"],
["الْهَادِي","Al-Hadi","The Guide","ہدایت دینے والا"],
["الْبَدِيعُ","Al-Badi","The Incomparable Originator","بے مثال پیدا کرنے والا"],
["الْبَاقِي","Al-Baqi","The Everlasting","ہمیشہ باقی رہنے والا"],
["الْوَارِثُ","Al-Warith","The Inheritor","وارث"],
["الرَّشِيدُ","Ar-Rashid","The Guide to the Right Path","راہِ راست دکھانے والا"],
["الصَّبُورُ","As-Sabur","The Most Patient","نہایت صبر والا"]

];

let i = 0;
let auto = false;

const $ = id => document.getElementById(id);

function render(){

  const n = names[i];

  $("number").textContent =
    String(i + 1).padStart(2,"0") + " / 99";

  $("arabic").textContent = n[0];
  $("trans").textContent = n[1];
  $("meaning").textContent = n[2];
  $("urdu").textContent = n[3];

  $("bar").style.width =
    ((i + 1) / 99 * 100) + "%";
}


function getVoices(){

  if(!("speechSynthesis" in window)){
    return;
  }

  const select = $("voiceSelect");

  const voices = speechSynthesis.getVoices();

  select.innerHTML = "";

  const preferred =
    voices.filter(v =>
      /ar|ur|en/i.test(v.lang)
    );

  const list =
    preferred.length ? preferred : voices;

  list.forEach(v => {

    const option =
      document.createElement("option");

    option.value = v.name;

    option.textContent =
      v.name + " — " + v.lang;

    select.appendChild(option);

  });

}


function speak(){

  if(!("speechSynthesis" in window)){

    alert(
      "Your browser does not support voice."
    );

    return;
  }

  speechSynthesis.cancel();

  const n = names[i];

  const text =
    n[0] +
    " . " +
    n[1] +
    " . " +
    n[2] +
    " . " +
    n[3];

  const speech =
    new SpeechSynthesisUtterance(text);

  const voices =
    speechSynthesis.getVoices();

  const selected =
    voices.find(
      v =>
        v.name === $("voiceSelect").value
    );

  if(selected){

    speech.voice = selected;
    speech.lang = selected.lang;

  }else{

    speech.lang = "ar-SA";

  }

  speech.rate = 0.78;
  speech.pitch = 1;

  speech.onend = function(){

    if(auto){

      next(true);

    }

  };

  speechSynthesis.speak(speech);

}


function next(fromAuto = false){

  i++;

  if(i >= names.length){

    i = 0;

    // 99 ke baad dobara 1 se start
  }

  render();

  if(auto || fromAuto){

    speak();

  }

}


function prev(){

  i--;

  if(i < 0){

    i = names.length - 1;

  }

  render();

}


function toggleAuto(){

  auto = !auto;

  $("autoBtn").textContent =
    auto
      ? "⏸ Stop Voice"
      : "▶ Start Voice";

  if(auto){

    // User ka button click speech ko unlock karta hai
    speak();

  }else{

    speechSynthesis.cancel();

  }

}


if("speechSynthesis" in window){

  speechSynthesis.onvoiceschanged =
    getVoices;

  getVoices();

}


render();


// Kuch phones mein voices late load hoti hain
setTimeout(getVoices,500);
setTimeout(getVoices,1500);
