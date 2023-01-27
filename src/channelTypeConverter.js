function channelTypeConverter(options) {
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
    if (numberArray.includes(options.channelType)) {
        return ChannelType[options.channelType]
    }
    else return error;

}

module.exports = channelTypeConverter;