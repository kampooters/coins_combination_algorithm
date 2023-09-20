function cal_combs(notes, amount){
        let note = notes[0]
        let combs = []
        cal_comb(notes, amount, combs, [])
        return combs
}

function cal_comb(notes, amount, combs, comb){
    for (var i=0; i<notes.length; i++){
        let note = notes[i]
        if (amount < note){ continue}
        let q =  Math.floor(amount/note)
       for (var j=q; j>0; j--){
            let rm = amount - (j * note) 
            let combStr  = note +","+j

             let clondComb = JSON.parse(JSON.stringify(comb))
            clondComb.push(combStr)
            if (rm == 0){
                combs.push(clondComb)
            }else{
                cal_comb(notes.slice(i+1, notes.length), rm, combs, clondComb)
            }
       }
    }
}


console.log(" \n Test Criteria \n You can give any number of amount and array of n number of notes/coins \n \n")
let amount = 71
let notes_coins = [50,5,2, 1]
let combs = cal_combs(notes_coins, amount)

console.log("Output Details: The output will be array of arrays where \n 1. Each nested array is array of possible coins/notes combination for given currency \n"+
            " 2. Each combination like '5,2' represents 'Note/Coin, Count of Note/Coin'")
console.log(combs)
