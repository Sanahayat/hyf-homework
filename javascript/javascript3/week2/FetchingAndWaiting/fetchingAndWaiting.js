// ----Fetching and waiting----
fetch('https://aws.random.cat/meow')
    .then(response => response.json())
    .then(cats => {
        return new Promise( (resolve) => {
            setTimeout(() => {
                resolve(cats);
            }, 3000)
        })
       
    }).then((cats) => console.log(cats));
