for (i = 1; i <= 3000; i++) {
    if (i % 4 === 0 && i % 100 !== 0 || i % 400 === 0) {
        console.log(i + " is a leap year");
    } else {
        console.log(i + " is not a leap year");
    }
}