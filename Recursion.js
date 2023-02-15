let n = prompt("Enter your digit : ")
a = Number.parseInt(n)
console.log(typeof a)
function factorial(n){
    if (n==0 || n==1){
        return 1;
    }

    var result = n;
    while (n>1){
        result=result*(n-1)
        n=n-1;
    }
    return result;
    }

function abc(){
    docment.write(factorial(5));
}

// RECURSION.....
function factorial(a) {
    if (n == 0 || n == 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
function abc() {
    document.write(factorial(a));
    document.getElementById("fact").innerHTML=factorial(5);
}
