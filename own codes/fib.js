// Fibonacci 
// http://en.wikipedia.org/wiki/Fibonacci_number
var fibonacci = function(n) {
    if (n < 1) { return 0}
    else if (n == 1 || n == 2) { return 1; }
    else if (n > 2) { return fibonacci(n - 1) + fibonacci(n-2);}
}