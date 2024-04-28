let numofadminarr = [];
let numofmarkarr = [];
let numofdevarr = [];
let numoffinarr = [];


let allsalarr = [];

/*******local storage function */
function loadEmployees() {
    const data = localStorage.getItem('AllEmployee');
    return data ? JSON.parse(data) : [];
}
let mystorage = loadEmployees();
////********************number functions */
function numofadminFun() {
    mystorage.forEach(element => {
        if (element.department === 'Administration') {
            numofadminarr.push(element.salary)
        }
    });
}
function numofmarkFun() {
    mystorage.forEach(element => {
        if (element.department === 'Marketing') {
            numofmarkarr.push(element.salary)
        }
    });
}
function numofdevFun() {
    mystorage.forEach(element => {
        if (element.department === 'Development') {
            numofdevarr.push(element.salary)
        }
    });
}
function numoffinFun() {
    mystorage.forEach(element => {
        if (element.department === 'Finance') {
            numoffinarr.push(element.salary)
        }
    });
}


numofadminFun();
numofmarkFun();
numofdevFun();
numoffinFun();
/*************************total salary function */
function totaladminFun() {
    let sum = 0;
    let salary;
    for (let i = 0; i < numofadminarr.length; i++) {
        salary = numofadminarr[i];
        sum += salary;
    }
    return sum;
}

let totaladminInt = totaladminFun();
allsalarr.push(totaladminInt);






function totalmarkFun() {
    let sum = 0;
    let salary;
    for (let i = 0; i < numofmarkarr.length; i++) {
        salary = numofmarkarr[i];
        sum += salary;
    }
    return sum;
}

let totalmarkInt = totalmarkFun();
allsalarr.push(totalmarkInt);





function totaldevFun() {
    let sum = 0;
    let salary;
    for (let i = 0; i < numofdevarr.length; i++) {
        salary = numofdevarr[i];
        sum += salary;
    }
    return sum;
}

let totaldevInt = totaldevFun();
allsalarr.push(totaldevInt);



function totalfinFun() {
    let sum = 0;
    let salary;
    for (let i = 0; i < numoffinarr.length; i++) {
        salary = numoffinarr[i];
        sum += salary;
    }
    return sum;
}


let totalfinInt = totalfinFun();
allsalarr.push(totalfinInt);

/*******************the average functions */

function avadminFun() {

    let sum = totaladminInt;
    return sum / numofadminarr.length;

}

function avmarkFun() {

    let sum = totalmarkInt;
    return sum / numofmarkarr.length;

}
function avdevFun() {

    let sum = totaldevInt;
    return sum / numofdevarr.length;

}
function avfinFun() {

    let sum = totalfinInt;
    return sum / numoffinarr.length;

}

/***********************all total functions */


function allsalFun() {
    let allsalInt = 0;
    for (let i = 0; i < allsalarr.length; i++) {
        let salary = allsalarr[i];
        allsalInt += salary;
    }
    return allsalInt;
}



function allavFun() {

    let sum = allsalFun();
    return sum / mystorage.length;

}


/***********************the table */

function totalTable() {
    const numofadmin = document.getElementById('numofadmin');
    const numofmark = document.getElementById('numofmark');
    const numofdev = document.getElementById('numofdev');
    const numoffin = document.getElementById('numoffin');

    numofadmin.innerHTML = numofadminarr.length;
    numofmark.innerHTML = numofmarkarr.length;
    numofdev.innerHTML = numofdevarr.length;
    numoffin.innerHTML = numoffinarr.length;


    const totaladmin = document.getElementById('totaladmin');
    const totalmark = document.getElementById('totalmark');
    const totaldev = document.getElementById('totaldev');
    const totalfin = document.getElementById('totalfin');

    totaladmin.innerHTML = totaladminFun();
    totalmark.innerHTML = totalmarkFun();
    totaldev.innerHTML = totaldevFun();
    totalfin.innerHTML = totalfinFun();


    const avadmin = document.getElementById('avadmin');
    const avmark = document.getElementById('avmark');
    const avdev = document.getElementById('avdev');
    const avfin = document.getElementById('avfin');

    avadmin.innerHTML = avadminFun();
    avmark.innerHTML = avmarkFun();
    avdev.innerHTML = avdevFun();
    avfin.innerHTML = avfinFun();

    const allnum = document.getElementById('allnum');
    allnum.innerHTML = mystorage.length;

    const allsal = document.getElementById('allsal');
    allsal.innerHTML = allsalFun();

    const allav = document.getElementById('allav');
    allav.innerHTML = allavFun();

}

totalTable()


