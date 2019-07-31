
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Alex',
            aeg: 31
        });
        //reject('Something went wrong!');
    }, 1500)
    
});

console.log('before');

promise
.then((data) => {
    console.log('1',data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('mesage promise');

        }, 5000)
        
    });

})
.then((str) => {
    console.log('does this run?');
    console.log(str);
})
.catch((error) => {
    console.log('ERROR!!!', error);
});


console.log('after');