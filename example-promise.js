function addPromise(a, b) {
    return new Promise(function(resolve, reject) {
        if (typeof(a) !== "number" || typeof(b) !== "number") {
            reject("One or more of the input values is not a number.");
        }
        resolve(a + b);
    });

}

const add = (a, b) => {
    addPromise(a, b).then(
        result => console.log("Sum:", result),
        err => console.log("Promise Error:", err)
    );
};

add(3, 4);