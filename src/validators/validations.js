function isEmail(email) {
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    return regex.test(email);
}

function isString(string) {
    const regex = /^[a-z]+$/i;
    return regex.test(string);
}

function isNumber(number) {
    const regex = /^[0-9]+$/;
    return regex.test(number);
}

