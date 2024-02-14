 let txt = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month'
let txt_num=txt.match(/\d+/g)
let total=0;
for(let i=0;i<txt_num.length;i++){
     total+=parseInt(txt_num[i])
}
console.log(total)