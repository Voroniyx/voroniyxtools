# Voroniyx Tools
Web: https://voroniyx.xyz/voronstools

This Module is cjs and mjs compatible.
The old `class` exports are now functions.

Via the Typescript Types and some other things it is now possible to import everything directly from 'voronstools' without the extra path for cjs.
```js
//Example 1 Import
import voronstools from 'voronstools' //The module 'voronstools' is a CommonJS module that may not support all module.exports as named exports.
const {TimestampTypes,channelTypeConverter,randomString,timestampGen, ansiGenerator, Colors} = voronstools

//Example 2 Import
const {TimestampTypes,channelTypeConverter,randomString,timestampGen, ansiGenerator, Colors} = require('voronstools')

//channelTypeConverter
console.log(channelTypeConverter({channelType:13})) //Types are available via Intellisense 
//GuildStageVoice

//randomString
console.log(randomString({lenght:16})) //the minimum length is 4 and the maximum length is 46
//example: DLVIqRmIgrtC9T6A

//timestampGenerator
console.log(timestampGen({
    date:new Date, //only a sample date
    type:TimestampTypes.DescriptiveFull 
}))
//<t:1674820431:F>

//ansiGenerator
ansiGenerator('A content',Colors.yellow)
```

For bug reports or other issues, visit the Discord server: https://voroniyx.xyz/discordserver
~ **Voroniyx**
