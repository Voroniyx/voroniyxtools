function timestampGen(options) {
    if (!options.type || !options.date) {
        throw new Error('VoronsTools | You must add a parameter to options of Timestamp Type and Date')
    }
    else {
        let gDate = options.date;

        if (gDate.toString() == "NaN") throw new Error(`The given date is not a type of \`Date\` or it is NaN`)
        else {
            let pDate = gDate / 1000 |0;
            let rDate = options.type.replace("unix", pDate.toString())

            return rDate
        }
    }
}

module.exports = timestampGen;