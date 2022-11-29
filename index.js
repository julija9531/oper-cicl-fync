let nodePath = process.argv[0];
let appPath = process.argv[1];
let num = process.argv[2];

function func1 (n1) {
    if (n1 == 0) {return []};

    var arr = [2];
    var n2 = 2;

    for (let i1 = 0; i1<(n1-1); i1++) {
        do {
            n2 = n2 + 1;
            var deliteli = 0;
            for (let i2 = 2; i2<n2; i2++) {
                if (n2 % i2 == 0) {
                    deliteli = deliteli + 1
                };
            };
        } while (deliteli > 0);
        arr.push(n2);
    };

    return arr;
};


console.log(func1(num));

