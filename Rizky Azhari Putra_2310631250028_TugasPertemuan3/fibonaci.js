function fibonacci (n) {
    let a = 0, b = 1, temp;
    console.log("Deret Fibonnaci:");
    console.log(a);
    if(n>1) console.log(b);

    for (let i= 2; i < n; i++) {
        temp = a + b;
        console.log(temp);
        a = b;
        b = temp;
    }
}