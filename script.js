
window.onload = function(){
  document.getElementById("reset-button").style.display='none';
}

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
        ["20990121", "geden", "jord"],
        ["20980201", "hesten"],
        ["20970212", "slangen"],
        ["20960125", "dragen"],
        ["20950205", "kaninen"],
        ["20940215", "tigeren", "træ"],
        ["20930127", "oksen", "vand"],
        ["20920207", "rotten", "vand"],
        ["20910218", "grisen", "metal"],
        ["20900130", "hunden", "metal"],
        ["20890210", "hanen", "jord"],
        ["20880124", "aben", "jord"],
        ["20870203", "geden", "ild"],
        ["20860214", "hesten", "ild"],
        ["20850126", "slangen", "træ"],
        ["20840206", "dragen", "træ"],
        ["20830217", "kaninen", "vand"],
        ["20820129", "tigeren", "vand"],
        ["20810209", "oksen", "metal"],
        ["20800122", "rotten", "metal"],
        ["20790202", "grisen", "jord"],
        ["20780212", "hunden", "jord"],
        ["20770124", "hanen", "ild"],
        ["20760205", "aben", "ild"],
        ["20750215", "geden", "træ"],
        ["20740127", "hesten", "træ"],
        ["20730207", "slangen", "vand"],
        ["20720219", "dragen", "vand"],
        ["20710131", "kaninen", "metal"],
        ["20700211", "tigeren", "metal"],
        ["20690123", "oksen", "jord"],
        ["20680203", "rotten", "jord"],
        ["20670214", "grisen", "ild"],
        ["20660126", "hunden", "ild"],
        ["20650205", "hanen", "træ"],
        ["20640217", "aben", "træ"],
        ["20630129", "geden", "vand"],
        ["20620209", "hesten", "vand"],
        ["20610121", "slangen", "metal"],
        ["20600202", "dragen", "metal"],
        ["20590212", "kaninen", "jord"],
        ["20580124", "tigeren", "jord"],
        ["20570204", "oksen", "fire"],
        ["20560215", "rotten", "fire"],
        ["20550128", "grisen", "wood"],
        ["20540208", "hunden", "wood"],
        ["20530219", "hanen", "water"],
        ["20520201", "aben", "water"],
        ["20510211", "geden", "metal"],
        ["20500123", "hesten", "metal"],
        ["20490202", "slangen", "earth"],
        ["20480214", "dragen", "earth"],
        ["20470126", "kaninen", "fire"],
        ["20460206", "tigeren", "fire"],
        ["20450217", "oksen", "wood"],
        ["20440130", "rotten", "wood"],
        ["20430210", "grisen", "water"],
        ["20420122", "hunden", "water"],
        ["20410201", "hanen", "metal"],
        ["20400212", "aben", "metal"],
        ["20390124", "geden", "earth"],
        ["20380204", "hesten", "earth"],
        ["20370215", "slangen", "fire"],
        ["20360128", "dragen", "fire"],
        ["20350208", "kaninen", "wood"],
        ["20340219", "tigeren", "wood"],
        ["20330131", "oksen", "water"],
        ["20320211", "rotten", "water"],
        ["20310123", "grisen", "metal"],
        ["20300203", "hunden", "metal"],
        ["20290213", "hanen", "earth"],
        ["20280126", "aben", "earth"],
        ["20270206", "geden", "fire"],
        ["20260217", "hesten", "fire"],
        ["20250129", "slangen", "wood"],
        ["20240210", "dragen", "wood"],
        ["20230122", "kaninen", "water"],
        ["20220201", "tigeren", "water"],
        ["20210212", "oksen", "metal"],
        ["20200125", "rotten", "metal"],
        ["20190205", "grisen", "earth"],
        ["20180216", "hunden", "earth"],
        ["20170128", "hanen", "fire"],
        ["20160208", "aben", "fire"],
        ["20150219", "geden", "wood"],
        ["20140131", "hesten", "wood"],
        ["20130210", "slangen", "water"],
        ["20120123", "dragen", "water"],
        ["20110203", "kaninen", "metal"],
        ["20100214", "tigeren", "metal"],
        ["20090126", "oksen", "earth"],
        ["20080207", "rotten", "earth"],
        ["20070218", "grisen", "fire"],
        ["20060129", "hunden", "fire"],
        ["20050209", "hanen", "wood"],
        ["20040122", "aben", "wood"],
        ["20030201", "geden", "water"],
        ["20020212", "hesten", "water"],
        ["20010124", "slangen", "metal"],
        ["20000205", "dragen", "metal"],
        ["19990216", "kaninen", "earth"],
        ["19980128", "tigeren", "earth"],
        ["19970207", "oksen", "fire"],
        ["19960219", "rotten", "fire"],
        ["19950131", "grisen", "wood"],
        ["19940210", "hunden", "wood"],
        ["19930123", "hanen", "water"],
        ["19920204", "aben", "water"],
        ["19910215", "geden", "metal"],
        ["19900127", "hesten", "metal"],
        ["19890206", "slangen", "earth"],
        ["19880217", "dragen", "earth"],
        ["19870129", "kaninen", "fire"],
        ["19860209", "tigeren", "fire"],
        ["19850220", "oksen", "wood"],
        ["19840202", "rotten", "wood"],
        ["19830213", "grisen", "water"],
        ["19820125", "hunden", "water"],
        ["19810205", "hanen", "metal"],
        ["19800216", "aben", "metal"],
        ["19790128", "geden", "earth"],
        ["19780207", "hesten", "earth"],
        ["19770218", "slangen", "fire"],
        ["19760131", "dragen", "fire"],
        ["19750211", "kaninen", "wood"],
        ["19740123", "tigeren", "wood"],
        ["19730203", "oksen", "water"],
        ["19720215", "rotten", "water"],
        ["19710127", "grisen", "metal"],
        ["19700206", "hunden", "metal"],
        ["19690217", "hanen", "earth"],
        ["19680130", "aben", "earth"],
        ["19670209", "geden", "fire"],
        ["19660121", "hesten", "fire"],
        ["19650202", "slangen", "wood"],
        ["19640213", "dragen", "wood"],
        ["19630125", "kaninen", "water"],
        ["19620205", "tigeren", "water"],
        ["19610215", "oksen", "metal"],
        ["19600128", "rotten", "metal"],
        ["19590208", "grisen", "earth"],
        ["19580218", "hunden", "earth"],
        ["19570131", "hanen", "fire"],
        ["19560212", "aben", "fire"],
        ["19550124", "geden", "wood"],
        ["19540203", "hesten", "wood"],
        ["19530214", "slangen", "water"],
        ["19520127", "dragen", "water"],
        ["19510206", "kaninen", "metal"],
        ["19500217", "tigeren", "metal"],
        ["19490129", "oksen", "earth"],
        ["19480210", "rotten", "earth"],
        ["19470122", "grisen", "fire"],
        ["19460202", "hunden", "fire"],
        ["19450213", "hanen", "wood"],
        ["19440125", "aben", "wood"],
        ["19430205", "geden", "water"],
        ["19420215", "hesten", "water"],
        ["19410127", "slangen", "metal"],
        ["19400208", "dragen", "metal"],
        ["19390219", "kaninen", "earth"],
        ["19380131", "tigeren", "earth"],
        ["19370211", "oksen", "fire"],
        ["19360124", "rotten", "fire"],
        ["19350204", "grisen", "wood"],
        ["19340214", "hunden", "wood"],
        ["19330126", "hanen", "water"],
        ["19320206", "aben", "water"],
        ["19310217", "geden", "metal"],
        ["19300130", "hesten", "metal"],
        ["19290210", "slangen", "earth"],
        ["19280123", "dragen", "earth"],
        ["19270202", "kaninen", "fire"],
        ["19260213", "tigeren", "fire"],
        ["19250124", "oksen", "wood"],
        ["19240205", "rotten", "wood"],
        ["19230216", "grisen", "water"],
        ["19220128", "hunden", "water"],
        ["19210208", "hanen", "metal"],
        ["19200220", "aben", "metal"],
        ["19190201", "geden", "earth"],
        ["19180211", "hesten", "earth"],
        ["19170123", "slangen", "fire"],
        ["19160203", "dragen", "fire"],
        ["19150214", "kaninen", "wood"],
        ["19140126", "tigeren", "wood"],
        ["19130206", "oksen", "water"],
        ["19120218", "rotten", "water"],
        ["19110130", "grisen", "metal"],
        ["19100210", "hunden", "metal"],
        ["19090122", "hanen", "earth"],
        ["19080202", "aben", "earth"],
        ["19070213", "geden", "fire"],
        ["19060125", "hesten", "fire"],
        ["19050204", "slangen", "wood"],
        ["19040216", "dragen", "wood"],
        ["19030129", "kaninen", "water"],
        ["19020208", "tigeren", "water"],
        ["19010219", "oksen", "metal"],
        ["19000131", "rotten", "metal"],
        ["19000000", "grisen", "earth"],
    ];

    let birthdaySign = "";
    let birthdayElement = "";
    let birthdayImage = "";

    for (let i = 0; i < signs.length; i++) {
        if (birthday >= signs[i][0]) {
            birthdaySign = signs[i][1];
            birthdayElement = signs[i][2];
            birthdayImage = signImages[birthdaySign] || "";
            break;
        }
    }

    let resultHTML = `
        <h3>${birthdaySign}</h3>
        <p>Dit kinesiske stjernetegn er <strong>${birthdaySign}</strong> og dit element er <strong>${birthdayElement}</strong>.</p>
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