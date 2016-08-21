var x = prompt('Введите число, которое хотите возвести в степень', x);
var n = prompt('Введите степень', n);

console.log('ответ', pow(x, n));

function pow(x, n) {

    // Проверяем число и степень на 0   

    if (n == 0) return 1;
    if (x == 0) return 0;

    //Берем значение степени по модулю
    var absn = Math.abs(n);
    result = 1;

    //Возводим в степень
    for (var i = 0; i < absn; i++) {
        result = result * x;
    };

    //Если степень отрицательная - берем обратное значение
    if (n < 0)
        result = 1 / result;

    return result;
}