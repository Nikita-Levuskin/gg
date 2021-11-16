function checkeasy(num) {
	for (let i = 3; i <= Math.sqrt(num); i++){
		if ((num % i) == 0){
			return false
		}
	}
	return true
}

function isCoprime (a, b) {
	var num;
	while ( b ) {
		num = a % b;
		a = b;
		b = num;
	}
	if (Math.abs(a) == 1) {
		return true;
	}
	return false;
}

let p = 23
let q = 29
let n = q * p
let f = (p-1) * (q-1)
let r = false
let e
for (e = 2; r != true; e++){
  if(e < f){
    if(checkeasy(e) == true){
      if(isCoprime (e, f)){
        r = true
        e++
      }
    }
  }
}
let d = 1
while((d*e)%f != 1){
  d++
}
let str = 'Bom'
console.log(str)
let P = []
for(let i = 0; i < str.length; i++){
  P.push(str.codePointAt(i))
}
console.log(P)
let shifr = []
for(let i = 0; i < str.length; i++){
  shifr.push(P[i]**e%n)
}
console.log('shifr =',shifr)
console.log('d =',d)
console.log('n =',n)
