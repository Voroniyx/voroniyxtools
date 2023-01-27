type ChannelType = 0 | 1 | 2 | 3 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15

const TimestampTypes = {
    Date : "<t:unix:d>",
    FullDate : "<t:unix:f>",
    Time : "<t:unix:t>",
    DescriptiveDate : "<t:unix:D>",
    DescriptiveFull : "<t:unix:F>",
    InAgo : "<t:unix:R>",
    FullTime : "<t:unix:T>"
}
interface randomStringOptions {
    lenght: number
}

interface timestampGenOptions {
    type: TimestampTypes,
    date: Date
}


interface channelTypeConverterOptions {
    channelType: ChannelType
}
declare module 'voronstools' {
    export function randomString(options: randomStringOptions): String;
    export function timestampGen(options: timestampGenOptions): String;
    export function channelTypeConverter(options: channelTypeConverterOptions): String;
}
