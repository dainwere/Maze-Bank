let bl;

let balanceObject = document.getElementById('balance')

function startBalance() {
    balanceObject.innerHTML = prompt('Write the amount of your balance')
    bl = parseInt(balanceObject.innerHTML)
    console.log(bl)
}

// Пополнение

function plusFifty() {
    balanceObject.innerHTML = bl + 50;
    bl = parseInt(balanceObject.innerHTML)
    console.log(balanceObject.innerHTML)
    return
}

function plusFiveHun() {
    balanceObject.innerHTML = bl + 500
    bl = parseInt(balanceObject.innerHTML)
    console.log(balanceObject.innerHTML)
    return
}

function plusTwentyFiveThous() {
    balanceObject.innerHTML = bl + 25000;
    bl = parseInt(balanceObject.innerHTML)
    console.log(balanceObject.innerHTML)
    return
}

function plusTwoThous() {
    balanceObject.innerHTML = bl + 2500;
    bl = parseInt(balanceObject.innerHTML)
    console.log(balanceObject.innerHTML)
    return
}

function plusTenThous() {
    balanceObject.innerHTML = bl + 10000;
    bl = parseInt(balanceObject.innerHTML)
    console.log(balanceObject.innerHTML)
    return
}

// Снятие наличных

function minusFifty() {
    balanceObject.innerHTML = bl - 50;
    bl = parseInt(balanceObject.innerHTML)
    console.log(balanceObject.innerHTML)
    return
}

function minusFiveHun() {
    balanceObject.innerHTML = bl - 500
    bl = parseInt(balanceObject.innerHTML)
    console.log(balanceObject.innerHTML)
    return
}

function minusTwentyFiveThous() {
    balanceObject.innerHTML = bl - 25000;
    bl = parseInt(balanceObject.innerHTML)
    console.log(balanceObject.innerHTML)
    return
}

function minusTwoThous() {
    balanceObject.innerHTML = bl - 2500;
    bl = parseInt(balanceObject.innerHTML)
    console.log(balanceObject.innerHTML)
    return
}

function minusTenThous() {
    balanceObject.innerHTML = bl - 10000;
    bl = parseInt(balanceObject.innerHTML)
    console.log(balanceObject.innerHTML)
    return
}




