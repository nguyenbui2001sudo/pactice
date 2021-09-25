// var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// var d = new Date('10/12/2009');
// console.log(d.getDay());

console.log("Luy thua nhanh")
const modexp =(a, x, n)=>{
    var r = 1;
    while(x > 0){
        if(x % 2 == 1)
            r = (r*a) % n;
            console.log(r)
        a = (a*a) % n;
        x/= 2;
    }
    return r;
}

console.log('luy thua nhanh: ',modexp(31, 101, 1024));