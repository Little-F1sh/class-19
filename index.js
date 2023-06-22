function fiboSeries(num) {
    var fibo = [0, 1];

    for (var i = 2; i < num; i++) {
      var nextNum = fibo[i - 1] + fibo[i - 2];
      fibo.push(nextNum);
    }
  
    return fibo;
  }
  
  var num;

    do {
    num = prompt("Please enter a number:");
    } while (isNaN(num) || num === "");

    console.log("You entered: " + num);

  var result = fiboSeries(num);
  
 document.write(result);








 