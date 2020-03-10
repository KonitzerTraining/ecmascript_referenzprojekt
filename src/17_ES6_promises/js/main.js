function interceptJSON(dataString, cb) {
    cb(JSON.parse(dataString));
}

function createComponent(data) {
    console.log(data);
}

function getData(cb, cb1) {
    setTimeout(function () {
        let dataString = '[{"id":3},{"id":5}]';
        cb(dataString, cb1);
    }, 1000);
}

getData(interceptJSON, createComponent);

function get() {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            let dataString = '[{"id":7},{"id":8}]';
            resolve(dataString);
        } else {
            reject('timeout');
        }
    });
}

get()
    .then((dataString) => {
        //throw new Error('no json');
        return JSON.parse(dataString);
      //  return new Promise();
    })
    .then((dataObj) => {
        console.log(dataObj);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(()=> {
       console.log('ende');
    });


// ES8
// async await
function compute(x) {
    return new Promise((resolve) => {
        resolve(x * 2)
    });
}

(async () => {

    let erg = await compute(5);
    erg = await compute(erg);
    console.log(erg);

})().catch((err) => {
    console.log(err);
});


console.log('123');



