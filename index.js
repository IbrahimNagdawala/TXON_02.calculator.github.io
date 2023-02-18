function myFunction(event) {
    let key = event.key;
}
//Button's functions
document.getElementById('AC').addEventListener('click', Clear);
document.getElementById('0').addEventListener('click', Zero);
document.getElementById('1').addEventListener('click', One);
document.getElementById('2').addEventListener('click', Two);
document.getElementById('3').addEventListener('click', Three);
document.getElementById('4').addEventListener('click', Four);
document.getElementById('5').addEventListener('click', Five);
document.getElementById('6').addEventListener('click', Six);
document.getElementById('7').addEventListener('click', Seven);
document.getElementById('8').addEventListener('click', Eight);
document.getElementById('9').addEventListener('click', Nine);

$(document).on("DOMSubtreeModified", "#number", function () {
    CheckLength();
});

function CheckLength() {
    var display = document.getElementById('number').innerHTML;

    if (display.length > 7 && display.length < 11) {
        document.getElementById('number').style.fontSize = '40px';
    } else if (display.length >= 11) {
        document.getElementById('number').style.fontSize = '30px';
    } else {
        document.getElementById('number').style.fontSize = '55px';
    }

}

function Clear() {
    document.getElementById('number').innerHTML = 0;
    document.getElementById('ibbu').style.display = '';
}

function One() {
    var display = document.getElementById('number').innerHTML;

    if (display == 0) {
        document.getElementById('number').innerHTML = '';
        document.getElementById('number').innerHTML = 1;
    } else if (display.length < 14) {
        document.getElementById('number').innerHTML += 1;
    }
}

function Two() {
    var display = document.getElementById('number').innerHTML;

    if (display == 0) {
        document.getElementById('number').innerHTML = '';
        document.getElementById('number').innerHTML = 2;
    } else if (display.length < 14) {
        document.getElementById('number').innerHTML += 2;
    }
}

function Three() {
    var display = document.getElementById('number').innerHTML;

    if (display == 0) {
        document.getElementById('number').innerHTML = '';
        document.getElementById('number').innerHTML = 3;
    } else if (display.length < 14) {
        document.getElementById('number').innerHTML += 3;
    }
}

function Four() {
    var display = document.getElementById('number').innerHTML;

    if (display == 0) {
        document.getElementById('number').innerHTML = '';
        document.getElementById('number').innerHTML = 4;
    } else if (display.length < 14) {
        document.getElementById('number').innerHTML += 4;
    }
}

function Five() {
    var display = document.getElementById('number').innerHTML;

    if (display == 0) {
        document.getElementById('number').innerHTML = '';
        document.getElementById('number').innerHTML = 5;
    } else if (display.length < 14) {
        document.getElementById('number').innerHTML += 5;
    }
}

function Six() {
    var display = document.getElementById('number').innerHTML;

    if (display == 0) {
        document.getElementById('number').innerHTML = '';
        document.getElementById('number').innerHTML = 6;
    } else if (display.length < 14) {
        document.getElementById('number').innerHTML += 6;
    }
}

function Seven() {
    var display = document.getElementById('number').innerHTML;

    if (display == 0) {
        document.getElementById('number').innerHTML = '';
        document.getElementById('number').innerHTML = 7;
    } else if (display.length < 14) {
        document.getElementById('number').innerHTML += 7;
    }
}

function Eight() {
    var display = document.getElementById('number').innerHTML;

    if (display == 0) {
        document.getElementById('number').innerHTML = '';
        document.getElementById('number').innerHTML = 8;
    } else if (display.length < 14) {
        document.getElementById('number').innerHTML += 8;
    }
}

function Nine() {
    var display = document.getElementById('number').innerHTML;

    if (display == 0) {
        document.getElementById('number').innerHTML = '';
        document.getElementById('number').innerHTML = 9;
    } else if (display.length < 14) {
        document.getElementById('number').innerHTML += 9;
    }
}

function Zero() {
    var display = document.getElementById('number').innerHTML;

    if (display == 0) {
        document.getElementById('number').innerHTML = 0;
    } else if (display.length < 14) {
        document.getElementById('number').innerHTML += 0;
    }
}


//Symbols 
document.getElementById('/').addEventListener('click', Divide);
document.getElementById('x').addEventListener('click', Multiply);
document.getElementById('+').addEventListener('click', Add);
document.getElementById('-').addEventListener('click', Minus);
document.getElementById('%').addEventListener('click', Percentage)

function Percentage() {
    var display = document.getElementById('number').innerHTML;

    if (display == 0) {
        document.getElementById('number').innerHTML = 0;
    } else if (!(display.includes('+')) && !(display.includes('-')) && !(display.includes('×')) && !(display.includes('÷')) && !(display.includes('%'))) {
        document.getElementById('number').innerHTML += '%';
    }
}

function Divide() {
    var display = document.getElementById('number').innerHTML;
    if (display == 0) {
        document.getElementById('number').innerHTML = 0;
    } else if (!(display.includes('+')) && !(display.includes('-')) && !(display.includes('×')) && !(display.includes('÷')) && !(display.includes('%'))) {
        document.getElementById('number').innerHTML += '÷';
    }
}

function Multiply() {
    var display = document.getElementById('number').innerHTML;

    if (display == 0) {
        document.getElementById('number').innerHTML = 0;
    } else if (!(display.includes('+')) && !(display.includes('-')) && !(display.includes('×')) && !(display.includes('÷')) && !(display.includes('%'))) {
        document.getElementById('number').innerHTML += '×';
    }
}

function Add() {
    var display = document.getElementById('number').innerHTML;

    if (display == 0) {
        document.getElementById('number').innerHTML = 0;
    } else if (!(display.includes('+')) && !(display.includes('-')) && !(display.includes('×')) && !(display.includes('÷')) && !(display.includes('%'))) {
        document.getElementById('number').innerHTML += '+';
    }
}

function Minus() {
    var display = document.getElementById('number').innerHTML;
    
    if (display == 0) {
        document.getElementById('number').innerHTML = 0;
    } else if (!(display.includes('+')) && !(display.includes('-')) && !(display.includes('×')) && !(display.includes('÷')) && !(display.includes('%'))) {
        document.getElementById('number').innerHTML += '-';
    } 
}

//Calculation 
document.getElementById('=').addEventListener('click', Result);

function Result() {
    var toCalculate = document.getElementById('number').innerHTML;
    var before;
    var after;
    var result;

    if (toCalculate.includes('+')) {
        var splited = toCalculate.split('+');
        before = splited[0];
        after = splited[1];

        if (before.includes('.')) {
            checkbefore = parseFloat(before);
        } else {
            checkbefore = parseInt(before);
        }

        if (after.includes('.')) {
            checkafter = parseFloat(after);
        } else {
            checkafter = parseInt(after);
        }

        result = checkbefore + checkafter;
        if (result % 1 !== 0) {
            document.getElementById('number').innerHTML = result.toFixed(5);
            document.getElementById('ibbu').style.display = 'flex';
            document.getElementById('previous').innerHTML = toCalculate + "=";
        } else {
            document.getElementById('number').innerHTML = result;
            document.getElementById('ibbu').style.display = 'flex';
            document.getElementById('previous').innerHTML = toCalculate + "=";
        }

        //Append to list
        var item = document.createElement('li');
        var list = document.getElementById('item-list');
        item.innerHTML += toCalculate + " = " + result;
        document.querySelector('ul').appendChild(item);

    } else if (toCalculate.includes('-')) {
        var display = document.getElementById('number').innerHTML;
        var countMinus = (display.match(/-/g) || []).length;

        splited = toCalculate.split('-');
        before = splited[0];
        after = splited[1];
        console.log("Before = " + before);
        console.log("After = " + after);

        if (before.includes('.')) {
            checkbefore = parseFloat(before);
        } else {
            checkbefore = parseInt(before);
        }

        if (after.includes('.')) {
            checkafter = parseFloat(after);
        } else {
            checkafter = parseInt(after);
        }

        result = checkbefore - checkafter;
        //Decimal place 
        if (result % 1 !== 0) {
            document.getElementById('number').innerHTML = result.toFixed(5);
            document.getElementById('ibbu').style.display = 'flex';
            document.getElementById('previous').innerHTML = toCalculate + "=";
        } else {
            document.getElementById('number').innerHTML = result;
            document.getElementById('ibbu').style.display = 'flex';
            document.getElementById('previous').innerHTML = toCalculate + "=";
        }

        //Append to list
        var item = document.createElement('li');
        var list = document.getElementById('item-list');
        item.innerHTML += toCalculate + " = " + result;
        document.querySelector('ul').appendChild(item);

    } else if (toCalculate.includes('×')) {
        splited = toCalculate.split('×');
        before = splited[0];
        after = splited[1];

        if (before.includes('.')) {
            checkbefore = parseFloat(before);
        } else {
            checkbefore = parseInt(before);
        }

        if (after.includes('.')) {
            checkafter = parseFloat(after);
        } else {
            checkafter = parseInt(after);
        }

        result = checkbefore * checkafter;
        if (result % 1 !== 0) {
            document.getElementById('number').innerHTML = result.toFixed(5);
            document.getElementById('ibbu').style.display = 'flex';
            document.getElementById('previous').innerHTML = toCalculate + "=";
        } else {
            document.getElementById('number').innerHTML = result;
            document.getElementById('ibbu').style.display = 'flex';
            document.getElementById('previous').innerHTML = toCalculate + "=";
        }

        //Append to list
        var item = document.createElement('li');
        var list = document.getElementById('item-list');
        item.innerHTML += toCalculate + " = " + result;
        document.querySelector('ul').appendChild(item);

    } else if (toCalculate.includes('÷')) {
        splited = toCalculate.split('÷');
        before = splited[0];
        after = splited[1];

        if (before.includes('.')) {
            checkbefore = parseFloat(before);
        } else {
            checkbefore = parseInt(before);
        }

        if (after.includes('.')) {
            checkafter = parseFloat(after);
        } else {
            checkafter = parseInt(after);
        }

        result = checkbefore / checkafter;

        if (result % 1 !== 0) {
            document.getElementById('number').innerHTML = result.toFixed(5);
            document.getElementById('ibbu').style.display = 'flex';
            document.getElementById('previous').innerHTML = toCalculate + "=";
        } else {
            document.getElementById('number').innerHTML = result;
            document.getElementById('ibbu').style.display = 'flex';
            document.getElementById('previous').innerHTML = toCalculate + "=";
        }

        //Append to list
        var item = document.createElement('li');
        var list = document.getElementById('item-list');
        item.innerHTML += toCalculate + " = " + result;
        document.querySelector('ul').appendChild(item);

    } else if (toCalculate.includes('%')) {
        splited = toCalculate.split('%');
        before = splited[0];
        after = splited[1];

        if (before.includes('.')) {
            checkbefore = parseFloat(before);
        } else {
            checkbefore = parseInt(before);
        }

        if (after !== "") {
            if (after.includes('.')) {
                checkafter = parseFloat(after);
            } else {
                checkafter = parseInt(after);
            }
        }

        if (after === "") {
            result = checkbefore / 100;
        } else {
            result = (checkbefore / 100) * checkafter;
        }


        if (result % 1 !== 0) {
            document.getElementById('number').innerHTML = result.toFixed(5);
            document.getElementById('ibbu').style.display = 'flex';
            document.getElementById('previous').innerHTML = toCalculate + "=";
        } else {
            document.getElementById('number').innerHTML = result;
            document.getElementById('ibbu').style.display = 'flex';
            document.getElementById('previous').innerHTML = toCalculate + "=";
        }

        //Append to list
        var item = document.createElement('li');
        var list = document.getElementById('item-list');
        item.innerHTML += toCalculate + " = " + result;
        document.querySelector('ul').appendChild(item);
    }
}

//Minor Enhancement
document.getElementById('.').addEventListener('click', Dot);

function Dot() {
    var display = document.getElementById('number').innerHTML;

    if (display == 0) {
        document.getElementById('number').innerHTML = '';
        document.getElementById('number').innerHTML = '.';
    } else if (display.length < 14) {
        document.getElementById('number').innerHTML += '.';
    }
}


document.getElementById('CE').addEventListener('click', ClearRecent);

function ClearRecent() {
    var display = document.getElementById('number').innerHTML;
    let remove = display;

    if (display !== "" && display.length > 0) {
        remove = display.slice(0, -1);
    } else {
        remove = 0;
    }

    document.getElementById('number').innerHTML = remove;
}


//Change view between history and calculator
document.getElementById('icon2').addEventListener('click', Show);
document.getElementById('icon1').addEventListener('click', Hide);

function Show() {
    document.getElementById('HistoryView').style.display = 'block';
    document.getElementById('root').style.display = 'none';
}

function Hide() {
    document.getElementById('HistoryView').style.display = 'none';
    document.getElementById('root').style.display = 'block';
}


//Key event
document.addEventListener('keypress', (event) => {
    var no = event.key;
    var code = event.code;

    if (no == 1) {
        One();
    } else if (no == 2) {
        Two();
    } else if (no == 3) {
        Three();
    } else if (no == 4) {
        Four();
    } else if (no == 5) {
        Five();
    } else if (no == 6) {
        Six();
    } else if (no == 7) {
        Seven();
    } else if (no == 8) {
        Eight();
    } else if (no == 9) {
        Nine();
    } else if (no == 0) {
        Zero();
    } else if (no == '-') {
        Minus();
    } else if (no == '+') {
        Add();
    } else if (no == '*') {
        Multiply();
    } else if (no == '/') {
        Divide();
    } else if (no == '.') {
        Dot();
    } else if (no == '%') {
        Percentage();
    }

    if (code === "Enter") {
        Result();
    }


}, false);


document.addEventListener('keydown', (event) => {
    var code = event.code;

    if (code === 'Backspace') {
        ClearRecent();
    } else if (code === 'Delete') {
        Clear();
    }
}, false);