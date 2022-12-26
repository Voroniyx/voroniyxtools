// <option value="<t:unix:d>" > Date < /option>
//   < option value = "<t:unix:f>" > Full Date < /option>
//     < option value = "<t:unix:t>" > Time < /option>
//       < option value = "<t:unix:D>" > Descriptive Date < /option>
//         < option value = "<t:unix:F>" > Descriptive Full < /option>
//           < option value = "<t:unix:R>" > In / Ago < /option>
//             < option value = "<t:unix:T>" > Full Time < /option>

const TimestampTypes = {
    Date: "<t:unix:d>",
    FullDate: "<t:unix:f>",
    Time: "<t:unix:t>",
    DescriptiveDate: "<t:unix:D>",
    DescriptiveFull: "<t:unix:F>",
    InAgo: "<t:unix:R>",
    FullTime: "<t:unix:T>"
}
/**@enum */
const ErrorEnum = {
    WrongType: "The given date is not a type of `Date` or it is NaN",
    ErrorLenght:"The lenght should be bigger then 3 and maximum 46"
}

/**@interface */
const ITimestampOptions = {
    "Date": Date,
    "Type": TimestampTypes
}
class createTimestamp {
    /** @private*/
    date = Date;
    /** @private*/
    type = TimestampTypes;

    constructor(options = ITimestampOptions) {
        this.date = options.Date;
        this.type = options.Type;
    }
    /**
     * 
     * @returns {String} 
     */
    getDate() {
        let gDate = this.date;

        if (gDate.toString() == "NaN") throw new Error(ErrorEnum.WrongType)
        else {
            let pDate = gDate / 1000 | 0;
            let rDate = this.type.replace("unix", pDate.toString())

            return rDate
        }
    }
}



let NumberOption = {
    lenght:Number
}
class generateRandomString {
    /** @private*/
    lenght = Number;
    constructor(option = NumberOption) {
        this.lenght = option.lenght
    }

    getString(){
        if (3 >= this.lenght || 47 <= this.lenght) throw new Error(ErrorEnum.ErrorLenght)
        else {
            let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let randomString = '';
            for (var i = 0; i < this.lenght; i++) { // characters.length defines the lenght of the string, add a text input, get the input and make a varibele here
                randomString += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            return randomString
        }
    }

}

module.exports = { TimestampTypes, createTimestamp, generateRandomString }

