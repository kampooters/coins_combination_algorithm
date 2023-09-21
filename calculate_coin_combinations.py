import math
def cal_combs(notes, amount):
    combs = []
    cal_comb(notes, amount, combs, [])
    return combs

def cal_comb(notes, amount, combs, comb):
    i = 0
    for note in notes:
        if (amount < note): continue 
        q = math.floor(amount / note)
        # for (let j = q; j > 0; j--):
        for j in range(q, -1,-1):
            rm = amount - (j * note)
            combStr = str(note) + "," + str(j)
            clondComb = []
            for e in comb:
                clondComb.append(e)
            clondComb.append(combStr)
            if (rm == 0):
                combs.append(clondComb)
            else:
                cal_comb(notes[i + 1:len(notes)], rm, combs, clondComb)
        i = i+1

        
    


amount = 100
notes_coins = [500, 100, 50, 20, 10, 5, 2, 1]
combs = cal_combs(notes_coins, amount)
print(combs)
