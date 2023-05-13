export type ChannelType = 0 | 1 | 2 | 3 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15;
export declare enum Colors {
    "red" = "\u001B[2;31m{{content}}",
    "blue" = "\u001B[2;34m{{content}}",
    "green" = "\u001B[2;32m{{content}}",
    "yellow" = "\u001B[2;33m{{content}}",
    "white" = "\u001B[2;37m{{content}}"
}
export declare enum TimestampTypes {
    Date = "<t:unix:d>",
    FullDate = "<t:unix:f>",
    Time = "<t:unix:t>",
    DescriptiveDate = "<t:unix:D>",
    DescriptiveFull = "<t:unix:F>",
    InAgo = "<t:unix:R>",
    FullTime = "<t:unix:T>"
}
export declare function generateAnsiText(content: string, color: Colors): string;
export declare function channelTypeConverter(channelType: ChannelType): string;
export declare function randomString(lenght: number): string;
export declare function timestampGen(type: TimestampTypes, date: Date): string;
