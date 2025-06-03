
// Skjuler reset-knap i stjernetegnsberegneren, når siden loades:
window.onload = function(){
  document.getElementById("reset-button").style.display='none';
}

// Back to top-knap:
// Finder knappen i HTML-koden:
let mybutton = document.getElementById("topBtn");

// Viser knappen, når brugeren scroller 20px ned fra toppen: 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// Scroller til toppen af siden, når der klikkes på knappen:
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



// Stjernetegnsberegneren:
function scriptButton() {
    var birthdayM = document.getElementById("month").value;
    var birthdayD = document.getElementById("day").value;
    var birthdayY = document.getElementById("year").value;

    // Formater datoen til YYYYMMDD:
    if (birthdayM < 10) birthdayM = "0" + birthdayM;
    if (birthdayD < 10) birthdayD = "0" + birthdayD;
    var birthday = birthdayY + birthdayM + birthdayD;
    
// Mapping af billeder til hvert stjernetegn
    const signImages = {
        rotten: "img/Mus-m-baggrund.png",
        oksen: "img/Ko-m-baggrund.png",
        tigeren: "img/Tiger-m-baggrund.png",
        kaninen: "img/Kanin-m-baggrund.png",
        dragen: "img/Drage-m-baggrund.png",
        slangen: "img/Slange-m-baggrund.png",
        hesten: "img/Hest-m-baggrund.png",
        geden: "img/Ged-m-baggrund.png",
        aben: "img/Abe-m-baggrund.png",
        hanen: "img/Hane-m-baggrund.png",
        hunden: "img/Hund-m-baggrund.png",
        grisen: "img/Gris-m-baggrund.png"
    };

    // Forkortet signs array til eksempel — indsæt dit fulde array her
    const signs = [
        ["20990121", "geden"],
        ["20980201", "hesten"],
        ["20970212", "slangen"],
        ["20960125", "dragen"],
        ["20950205", "kaninen"],
        ["20940215", "tigeren"],
        ["20930127", "oksen"],
        ["20920207", "rotten"],
        ["20910218", "grisen"],
        ["20900130", "hunden"],
        ["20890210", "hanen"],
        ["20880124", "aben"],
        ["20870203", "geden"],
        ["20860214", "hesten"],
        ["20850126", "slangen"],
        ["20840206", "dragen"],
        ["20830217", "kaninen"],
        ["20820129", "tigeren"],
        ["20810209", "oksen"],
        ["20800122", "rotten"],
        ["20790202", "grisen"],
        ["20780212", "hunden"],
        ["20770124", "hanen"],
        ["20760205", "aben"],
        ["20750215", "geden"],
        ["20740127", "hesten"],
        ["20730207", "slangen"],
        ["20720219", "dragen"],
        ["20710131", "kaninen"],
        ["20700211", "tigeren"],
        ["20690123", "oksen"],
        ["20680203", "rotten"],
        ["20670214", "grisen"],
        ["20660126", "hunden"],
        ["20650205", "hanen"],
        ["20640217", "aben"],
        ["20630129", "geden"],
        ["20620209", "hesten"],
        ["20610121", "slangen"],
        ["20600202", "dragen"],
        ["20590212", "kaninen"],
        ["20580124", "tigeren"],
        ["20570204", "oksen"],
        ["20560215", "rotten"],
        ["20550128", "grisen"],
        ["20540208", "hunden"],
        ["20530219", "hanen"],
        ["20520201", "aben"],
        ["20510211", "geden"],
        ["20500123", "hesten"],
        ["20490202", "slangen"],
        ["20480214", "dragen"],
        ["20470126", "kaninen"],
        ["20460206", "tigeren"],
        ["20450217", "oksen"],
        ["20440130", "rotten"],
        ["20430210", "grisen"],
        ["20420122", "hunden"],
        ["20410201", "hanen"],
        ["20400212", "aben"],
        ["20390124", "geden"],
        ["20380204", "hesten"],
        ["20370215", "slangen"],
        ["20360128", "dragen"],
        ["20350208", "kaninen"],
        ["20340219", "tigeren"],
        ["20330131", "oksen"],
        ["20320211", "rotten"],
        ["20310123", "grisen"],
        ["20300203", "hunden"],
        ["20290213", "hanen"],
        ["20280126", "aben"],
        ["20270206", "geden"],
        ["20260217", "hesten"],
        ["20250129", "slangen"],
        ["20240210", "dragen"],
        ["20230122", "kaninen"],
        ["20220201", "tigeren"],
        ["20210212", "oksen"],
        ["20200125", "rotten"],
        ["20190205", "grisen"],
        ["20180216", "hunden"],
        ["20170128", "hanen"],
        ["20160208", "aben"],
        ["20150219", "geden"],
        ["20140131", "hesten"],
        ["20130210", "slangen"],
        ["20120123", "dragen"],
        ["20110203", "kaninen"],
        ["20100214", "tigeren"],
        ["20090126", "oksen"],
        ["20080207", "rotten"],
        ["20070218", "grisen"],
        ["20060129", "hunden"],
        ["20050209", "hanen"],
        ["20040122", "aben"],
        ["20030201", "geden"],
        ["20020212", "hesten"],
        ["20010124", "slangen"],
        ["20000205", "dragen"],
        ["19990216", "kaninen"],
        ["19980128", "tigeren"],
        ["19970207", "oksen"],
        ["19960219", "rotten"],
        ["19950131", "grisen"],
        ["19940210", "hunden"],
        ["19930123", "hanen"],
        ["19920204", "aben"],
        ["19910215", "geden"],
        ["19900127", "hesten"],
        ["19890206", "slangen"],
        ["19880217", "dragen"],
        ["19870129", "kaninen"],
        ["19860209", "tigeren"],
        ["19850220", "oksen"],
        ["19840202", "rotten"],
        ["19830213", "grisen"],
        ["19820125", "hunden"],
        ["19810205", "hanen"],
        ["19800216", "aben"],
        ["19790128", "geden"],
        ["19780207", "hesten"],
        ["19770218", "slangen"],
        ["19760131", "dragen"],
        ["19750211", "kaninen"],
        ["19740123", "tigeren"],
        ["19730203", "oksen"],
        ["19720215", "rotten"],
        ["19710127", "grisen"],
        ["19700206", "hunden"],
        ["19690217", "hanen"],
        ["19680130", "aben"],
        ["19670209", "geden"],
        ["19660121", "hesten"],
        ["19650202", "slangen"],
        ["19640213", "dragen"],
        ["19630125", "kaninen"],
        ["19620205", "tigeren"],
        ["19610215", "oksen"],
        ["19600128", "rotten"],
        ["19590208", "grisen"],
        ["19580218", "hunden"],
        ["19570131", "hanen"],
        ["19560212", "aben"],
        ["19550124", "geden"],
        ["19540203", "hesten"],
        ["19530214", "slangen"],
        ["19520127", "dragen"],
        ["19510206", "kaninen"],
        ["19500217", "tigeren"],
        ["19490129", "oksen"],
        ["19480210", "rotten"],
        ["19470122", "grisen"],
        ["19460202", "hunden"],
        ["19450213", "hanen"],
        ["19440125", "aben"],
        ["19430205", "geden"],
        ["19420215", "hesten"],
        ["19410127", "slangen"],
        ["19400208", "dragen"],
        ["19390219", "kaninen"],
        ["19380131", "tigeren"],
        ["19370211", "oksen"],
        ["19360124", "rotten"],
        ["19350204", "grisen"],
        ["19340214", "hunden"],
        ["19330126", "hanen"],
        ["19320206", "aben"],
        ["19310217", "geden"],
        ["19300130", "hesten"],
        ["19290210", "slangen"],
        ["19280123", "dragen"],
        ["19270202", "kaninen"],
        ["19260213", "tigeren"],
        ["19250124", "oksen"],
        ["19240205", "rotten"],
        ["19230216", "grisen"],
        ["19220128", "hunden"],
        ["19210208", "hanen"],
        ["19200220", "aben"],
        ["19190201", "geden"],
        ["19180211", "hesten"],
        ["19170123", "slangen"],
        ["19160203", "dragen"],
        ["19150214", "kaninen"],
        ["19140126", "tigeren"],
        ["19130206", "oksen"],
        ["19120218", "rotten"],
        ["19110130", "grisen"],
        ["19100210", "hunden"],
        ["19090122", "hanen"],
        ["19080202", "aben"],
        ["19070213", "geden"],
        ["19060125", "hesten"],
        ["19050204", "slangen"],
        ["19040216", "dragen"],
        ["19030129", "kaninen"],
        ["19020208", "tigeren"],
        ["19010219", "oksen"],
        ["19000131", "rotten"],
        ["19000000", "grisen"],
    ];

    let birthdaySign = "";
    let birthdayImage = "";

    for (let i = 0; i < signs.length; i++) {
        if (birthday >= signs[i][0]) {
            birthdaySign = signs[i][1];
            birthdayImage = signImages[birthdaySign] || "";
            break;
        }
    }

    let resultHTML = `
        <h2 style="text-transform: capitalize;">${birthdaySign}</h2>
        <p>Dit kinesiske stjernetegn er <strong>${birthdaySign}</strong>.</p>
        <button><a href="${birthdaySign}.html">Læs mere</a></button>
    `;

    if (birthdayImage) {
        resultHTML += `<img src="${birthdayImage}" alt="${birthdaySign}" style="max-width:300px;margin:0 auto; display:block;">`;
    }

    document.getElementById("answer").innerHTML = resultHTML;
    document.getElementById("reset-button").style.display='inline';
}
function resetSign() {
    document.getElementById("answer").innerHTML = "";
    document.getElementById("reset-button").style.display='none';
}