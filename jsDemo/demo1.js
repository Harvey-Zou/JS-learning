const nemo = ['nemo','nemo','nemo','nemo','nemo','nemo']
const nemo100 = new Array(10000).fill('nemo');
function findNemo(array){
    console.log(array);
    let t0 = performance.now();
    for(let i = 0;i < array.length;i++){
        if(array[i] === 'nemo'){
            console.log('Found NEMO');
        }
    }
    let t1 = performance.now();
    console.log('Call to find Nemo took ' + (t1-t0) +' milliseconds');
}

findNemo(nemo100); 