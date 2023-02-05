function generateAnsi(content, color) {
    let endColor;
    if(!content) throw new Error(`VoronsTools | You need to provied a content`)
    if(!color) endColor = `[2;37m{{content}}` //white
    else endColor = color
    let editColor = endColor.replace("{{content}}",content)
    let CodeBlock = `\`\`\`ansi\n${editColor}\n\`\`\``;
    return CodeBlock;
}
module.exports = generateAnsi;