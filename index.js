module.exports = {
    randomString: require('./src/randomString'),
    timestampGen: require('./src/timestampGen'),
    channelTypeConverter: require('./src/channelTypeConverter'),
    ansiGenerator: require('./src/ansiGenerator'),
    TimestampTypes: {
        Date : "<t:unix:d>",
        FullDate : "<t:unix:f>",
        Time : "<t:unix:t>",
        DescriptiveDate : "<t:unix:D>",
        DescriptiveFull : "<t:unix:F>",
        InAgo : "<t:unix:R>",
        FullTime : "<t:unix:T>"
    },
    Colors : {
        "red":"[2;31m{{content}}",
        "blue":"[2;34m{{content}}",
        "green":"[2;32m{{content}}",
        "yellow":"[2;33m{{content}}",
        "white":"[2;37m{{content}}"
    }
}