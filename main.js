let p = 19
let q = 17
let n = q * p
let d = 5
let r
let i
let e = 1
let str = 'Gachi'

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
for (d = 2; r != true; d++){
    if (isCoprime(d, (p-1)*(q-1)) == true){
	    r = true
    }
}
d -= 1
r = false
while((e*d) % ((p-1)*(q-1))!=1){
	e++
	}
function strToNums(str) {
	let u = []
	for (let i = 0; i < str.lenght; i++) {
		u[i] = i 
	}
	return u
}
let strs = strToNums(str)
console.log(strs)
