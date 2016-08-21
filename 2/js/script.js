var users = init();

if (isLogin(users))
    alert(users[i] + ', вы успешно вошли');
else
    alert('К сожалению, вы не прошли авторизацию');

function init() {
    var arr = new Array();

    for (i = 0; i < 5; i++)
        arr[i] = prompt("Введите " + (i + 1) + "-ое имя");

    return arr;
}

function isLogin(users) {
    var a = prompt("Введите ваше имя");

    for (i = 0; i < users.length; i++) {
        if (a == users[i]) return true;
    }

    return false;
}