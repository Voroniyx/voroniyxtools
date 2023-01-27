function randomString(options) {
    if (!options.lenght) {
        throw new Error('VoronsTools | You must add a parameter of Number type(lenght)')
    }
    if (3 >= options.lenght || 47 <= options.lenght) throw new Error(`VoronsTools | The lenght should be bigger then 3 and maximum 46`)
    else {
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomString = '';
        for (var i = 0; i < options.lenght; i++) {
            randomString += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return randomString
    }
}

module.exports = randomString;