const globalVariable = 'Welcome';

// outter function, I hope //
function outer() {
    alert(globalVariable);

    const course = 'Atlas';

    function inner() {
        alert(globalVariable + ' ' + course); // ' ' is a space, should print 'Welcome Atlas' //
        const exclamation = '!';

        function inception() {
            alert(globalVariable + ' ' + course + exclamation);
        }
        inception();
    }
    inner();
}

outer();
