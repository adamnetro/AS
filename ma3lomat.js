let frmt = ["تقع جبال الألب في قلب أوروبا وتمتد عبر 8 دول من فرنسا حتى النمسا.",
 "يعد المحيط الهادئ أكبر مساحة من المحيطات في العالم، حيث يغطي ما يقرب من ثلثي مساحة الأرض.",
 "يحتوي جسم الإنسان على ما يقرب من 206 عظمًا، وتشكل الجلدة الأكبر منها عظم الفخذ.",
 "يتمتع الحمام بقدرة فائقة على العودة إلى موطنه بعد أن يتركه بمئات الأميال، ويستخدمون خلايا مغناطيسية في منقارهم للتوجه باتجاه المغناطيس الأرضي.",
 "يبلغ طول نهر النيل ما يقرب من 6650 كيلومتراً، مما يجعله أطول نهر في العالم، ويمثل المصدر الرئيسي للمياه في مصر والسودان وإثيوبيا وعدد من الدول الأخرى في شمال وشرق أفريقيا.",
 "تُعدّ الأرض الخضراء هي الرئة الخضراء للكوكب حيث تقوم بتنقية الهواء من ثاني أكسيد الكربون وتنتج الأكسجين.", 
 "يُعدّ المحار من الحيوانات البحرية الذي يعتمد عليه البشر كمصدر غذاء، ويتميز بأنه يحتوي على نسبة عالية من البروتين ومنخفضة السعرات الحرارية.",
 "تحتوي العناصر الكيميائية في الجدول الدوري على 118 عنصرًا، ومن بينها الكربون والهيدروجين والأكسجين والنيتروجين هي العناصر الأكثر وفرة في الكون.",
 "يعتبر الطَّيران الزَّراعي هو أحد أهم أساليب الزراعة الحديثة، حيث يتم استخدام طائرات صغيرة مجهزة بمعدات خاصة لرش المبيدات والأسمدة على المحاصيل الزراعية."]

 let err = ["وا خونا كايبلي فحل لي راه نفس سؤال.......", "و شتي دب على تبرهيش و بدل سؤال", "هذا المكلخ بدل سؤال"]
 
 let tar7ib = ["hello", "hey", "slm", "hi", "cv", "salam", "labas", "kif",]

 let jwbtar7ib = ["مرحبا كيف يمكنني مساعدتك", "مرحبا !", "هل تحتاج للمساعدة ؟"]
 
 let sab = ["wtf", "fuck you", "fuck", "motherfuck","mother fuck", "bitch", "dick"]

let btn = document.querySelector('a')
let inpt = document.querySelector('input')
let rslt = document.querySelector('textarea')


let a5irInput = ''

btn.addEventListener('click', () => {
    if(inpt.value){
        if(inpt.value === a5irInput){
            errrndm = Math.floor(Math.random() * err.length)
            rslt.value = err[errrndm]
            rslt.style.color = "red"
        }else{            
            randomdd = Math.floor(Math.random() * frmt.length)
            rslt.value = frmt[randomdd]
            a5irInput = inpt.value
            rslt.style.color = "black"
        }
        let kalimat = inpt.value.toLocaleLowerCase().replace(/\s/g,'');
        for(i=0 ; i<tar7ib.length ; i++){
            if(kalimat.includes(tar7ib[i])){
                jwtr7b = Math.floor(Math.random() * err.length)
                rslt.value = jwbtar7ib[jwtr7b]
                rslt.style.color = "black"
            }
        
        }
        let kalimat2 = input.value.toLocaleLowerCase().split("");
        for(i = 0; i<sab.length ; i++){
            if(kalimat2.includes(sab[i])){
                inpt.value = "gg"
            }
        }
    }
});

btn.addEventListener('click', () => {
    let kalimat2 = inpt.value.toLocaleLowerCase().split(" ");
    for(i = 0; i<kalimat2.length ; i++){
        if(sab.includes(kalimat2[i])){
            let audio = new Audio("audio.mp3")
            audio.play()
            rslt.value = "😐"
            setTimeout( function(){
                window.close()
            },11000)
        }
    }
})



