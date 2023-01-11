# Voroniyx Tools
Web: https://tools.voroniyx.xyz

This Module is cjs and mjs compatible

The Standart Export ist mjs for modules
```mjs
import {createTimestamp,TimestampTypes} from 'voronstools';
```

For CommonJS / cjs use this import:
```cjs
const {createTimestamp,TimestampTypes} = require('voronstools/src/main.cjs');
```

An example code can look like this:
```js
import {createTimestamp,TimestampTypes, generateRandomString, ChannelTypeConverter, ChannelType} from 'voronstools'; // imports the classes and TimestampTypes Objekt

//creates a new class whit a given Date and Type
let createdDiscordTimestamp = new createTimestamp({
    Date:Date.now(),
    Type:TimestampTypes.Date
})

// logs the class
console.log(createdDiscordTimestamp) // createTimestamp { date: 1670964081583, type: '<t:unix:d>' }
// logs the generated Timestamp from your given Date
console.log(createdDiscordTimestamp.getDate()) //<t:1670964081:d>

//creates a new class to generate a new random string
let createdString = new generateRandomString({lenght:5}) //the minmum lenght is 4 and the maximum is 46

//logs the class
console.log(createdString) //generateRandomString { lenght: 5 }
//logs the string
console.log(createdString.getString()) //a string. example: kqVkl

//ChannelTypeConverter
console.log(ChannelTypeConverter.resolve(5)) //GuildNews
```



For Bug Reports or any Issues join the Discord Server: https://voroniyx.xyz -> "Discord"
~ **Voroniyx**
