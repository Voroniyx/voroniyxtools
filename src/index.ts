export type ChannelType = 0 | 1 | 2 | 3 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15;

export enum Colors {
    "red" = "[2;31m{{content}}",
    "blue" = "[2;34m{{content}}",
    "green" = "[2;32m{{content}}",
    "yellow" = "[2;33m{{content}}",
    "white" = "[2;37m{{content}}"
}

export enum TimestampTypes {
    Date = "<t:unix:d>",
    FullDate = "<t:unix:f>",
    Time = "<t:unix:t>",
    DescriptiveDate = "<t:unix:D>",
    DescriptiveFull = "<t:unix:F>",
    InAgo = "<t:unix:R>",
    FullTime = "<t:unix:T>"
}

export function generateAnsiText(content: string, color: Colors) {
    let endColor;
    if (!content) throw new Error(`VoronsTools | You need to provied a content`)
    if (!color) endColor = `[2;37m{{content}}` //white
    else endColor = color
    let editColor = endColor.replace("{{content}}", content)
    let CodeBlock = `\`\`\`ansi\n${editColor}\n\`\`\``;
    return CodeBlock;
}

export function channelTypeConverter(channelType: ChannelType) {
    const ChannelType = {
        0: "GuildText",
        1: "DM",
        2: "GuildVoice",
        3: "GroupDM",
        4: "GuildCategory",
        5: "GuildNews",
        10: "GuildNewsThread",
        11: "GuildPublicThread",
        12: "GuildPrivateThread",
        13: "GuildStageVoice",
        14: "GuildDirectory",
        15: "GuildForum"
    }
    let error = "Not Supported"
    let numberArray = [0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15]
    if (numberArray.some(num => num === channelType)) {
        return ChannelType[channelType]
    }
    else return error;
}

export function randomString(lenght: number) {
    if (!lenght) {
        throw new Error('VoronsTools | You must add a parameter of Number type(lenght)')
    }
    if (3 >= lenght || 47 <= lenght) throw new Error(`VoronsTools | The lenght should be bigger then 3 and not bigger then 46`)
    else {
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomString = '';
        for (var i = 0; i < lenght; i++) {
            randomString += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return randomString
    }
}

export function timestampGen(type: TimestampTypes, date:Date) {
    if (!type || !date) {
        throw new Error('VoronsTools | You must add a parameter to options of Timestamp Type and Date')
    }
    else {
        if (date.toString() == "NaN") throw new Error(`The given date is not a type of \`Date\` or it is NaN`)
        else {
            let pDate = date.getTime() / 1000 | 0;
            let rDate = type.replace("unix", pDate.toString())

            return rDate
        }
    }
}