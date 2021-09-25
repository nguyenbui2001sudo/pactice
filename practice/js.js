const arrray = [2, 3 , 6 ,12 , 9, 5, 11, 22, 31, 61,15 ];
console.log(arrray);
const sum = (a) => {
    for(let i = 0; i < arrray.length-1; i++) {
        for(let j = i+1; j < arrray.length-1; j++) {
            var arrayResult = [];
            arrayResult.push(arrray[i]);
            arrayResult.push(arrray[j]);
            arrayResult.push(arrray[j+1]);
            const sumThree = arrayResult.reduce((total, value)=> total + value)
            console.log(arrayResult, 'sum ', sumThree);
            if(a === sumThree) 
            {
                return arrayResult;
            }
        }
    } 
    return 'not found'
}
console.log("Kết quả",sum(82))