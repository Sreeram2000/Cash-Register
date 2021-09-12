const billAmount = document.querySelector("#BillAmount")
const cashAmount = document.querySelector("#CashAmount")
const checkButton = document.querySelector("#CheckButton")
const cashDeno = ['2000','500','100','20','10','1']
const notes = document.querySelectorAll(".notes-calculate")

checkButton.addEventListener("click",function() {
    let cashReq = cashAmount.value - billAmount.value
    for(let i=0;i<cashDeno.length;i++) {
        const notesReq = Math.trunc(cashReq/cashDeno[i])
        cashReq = cashReq%cashDeno[i]
        if(notesReq == 0) {
            notes[i].innerText = ""
        } else {
            notes[i].innerText = notesReq
        }
        
    }   
})
