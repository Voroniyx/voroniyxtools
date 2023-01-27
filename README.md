# Voroniyx Tools
Web: https://voroniyx.xyz/voronstools

This Module is cjs and mjs compatible
The old `class` exports are now functions

About the Typescript Types and some other Stuff its no possible to import all directly from 'voronstools' without the extra path for cjs
```js
//Example 1 Import
import voronstools from 'voronstools' //The module 'voronstools' is a CommonJS module, which may not support all module.exports as named exports.
const {TimestampTypes,channelTypeConverter,randomString,timestampGen} = voronstools

//Example 2 Import
const {TimestampTypes,channelTypeConverter,randomString,timestampGen} = require('voronstools')

//channelTypeConverter
console.log(channelTypeConverter({channelType:13})) //Types are avalabil over Intellisense 
//GuildStageVoice

//randomString
console.log(randomString({lenght:16})) //the minmum lenght is 4 and the maximum is 46
//example: DLVIqRmIgrtC9T6A

//timestampGenerator
console.log(timestampGen({
    date:new Date, //just an example date
    type:TimestampTypes.DescriptiveFull 
}))
//<t:1674820431:F>
```

For Bug Reports or any Issues join the Discord Server: https://voroniyx.xyz/discordserver
~ **Voroniyx**
