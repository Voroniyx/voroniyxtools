"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timestampGen = exports.randomString = exports.channelTypeConverter = exports.generateAnsiText = exports.TimestampTypes = exports.Colors = void 0;
var Colors;
(function (Colors) {
    Colors["red"] = "\u001B[2;31m{{content}}";
    Colors["blue"] = "\u001B[2;34m{{content}}";
    Colors["green"] = "\u001B[2;32m{{content}}";
    Colors["yellow"] = "\u001B[2;33m{{content}}";
    Colors["white"] = "\u001B[2;37m{{content}}";
})(Colors = exports.Colors || (exports.Colors = {}));
var TimestampTypes;
(function (TimestampTypes) {
    TimestampTypes["Date"] = "<t:unix:d>";
    TimestampTypes["FullDate"] = "<t:unix:f>";
    TimestampTypes["Time"] = "<t:unix:t>";
    TimestampTypes["DescriptiveDate"] = "<t:unix:D>";
    TimestampTypes["DescriptiveFull"] = "<t:unix:F>";
    TimestampTypes["InAgo"] = "<t:unix:R>";
    TimestampTypes["FullTime"] = "<t:unix:T>";
})(TimestampTypes = exports.TimestampTypes || (exports.TimestampTypes = {}));
function generateAnsiText(content, color) {
    var endColor;
    if (!content)
        throw new Error("VoronsTools | You need to provied a content");
    if (!color)
        endColor = "\u001B[2;37m{{content}}"; //white
    else
        endColor = color;
    var editColor = endColor.replace("{{content}}", content);
    var CodeBlock = "```ansi\n".concat(editColor, "\n```");
    return CodeBlock;
}
exports.generateAnsiText = generateAnsiText;
function channelTypeConverter(channelType) {
    var ChannelType = {
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
    };
    var error = "Not Supported";
    var numberArray = [0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15];
    if (numberArray.some(function (num) { return num === channelType; })) {
        return ChannelType[channelType];
    }
    else
        return error;
}
exports.channelTypeConverter = channelTypeConverter;
function randomString(lenght) {
    if (!lenght) {
        throw new Error('VoronsTools | You must add a parameter of Number type(lenght)');
    }
    if (3 >= lenght || 47 <= lenght)
        throw new Error("VoronsTools | The lenght should be bigger then 3 and not bigger then 46");
    else {
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var randomString_1 = '';
        for (var i = 0; i < lenght; i++) {
            randomString_1 += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return randomString_1;
    }
}
exports.randomString = randomString;
function timestampGen(type, date) {
    if (!type || !date) {
        throw new Error('VoronsTools | You must add a parameter to options of Timestamp Type and Date');
    }
    else {
        if (date.toString() == "NaN")
            throw new Error("The given date is not a type of `Date` or it is NaN");
        else {
            var pDate = date.getTime() / 1000 | 0;
            var rDate = type.replace("unix", pDate.toString());
            return rDate;
        }
    }
}
exports.timestampGen = timestampGen;
