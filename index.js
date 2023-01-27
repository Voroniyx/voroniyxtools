module.exports = {
    randomString: require('./src/randomString'),
    timestampGen: require('./src/timestampGen'),
    channelTypeConverter: require('./src/channelTypeConverter'),
    TimestampTypes: {
        Date : "<t:unix:d>",
        FullDate : "<t:unix:f>",
        Time : "<t:unix:t>",
        DescriptiveDate : "<t:unix:D>",
        DescriptiveFull : "<t:unix:F>",
        InAgo : "<t:unix:R>",
        FullTime : "<t:unix:T>"
    }
}