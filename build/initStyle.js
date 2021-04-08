'use strict'

var readline = require('readline');
var fs = require('fs');
var os = require('os');
var path = require('path')

let primary = {}
var fRead = fs.createReadStream(path.resolve(__dirname, '../src/assets/css/antd-config.less'), { encoding: 'utf8' });
const fileData = fs.readFileSync(path.resolve(__dirname, '../src/assets/css/colors.less'), { encoding: 'utf8' });
const colorsObj = {};
const DelCodeCommentReg = /(\/\/.*)|(\/\*[\s\S]*?\*\/)/g;
fileData.split('\n').forEach((value) => {
    if (value.indexOf('@') !== 0) {
        return;
    }
    let cssKey = value.split(':')[0];
    let paperCssValue = value.split(':')[1];
    paperCssValue = paperCssValue.replace(DelCodeCommentReg, '').trim(); // 删除注释，清除前后空格
    let cssValue = paperCssValue.substring(0, paperCssValue.length - 1); // 除去';'这个符号
    colorsObj[cssKey] = cssValue.trim();
})

var objReadline = readline.createInterface({
    input: fRead,
})
objReadline.on('line', (line) => {
    if (!/^@/.test(line)) {
        return;
    }
    let sp0 = line.split("//")[0];
    let sp1 = line.split("//")[1];
    if (!sp1) {
        return;
    }
    let arr = sp1.split(';')
    arr.forEach((key) => {
        if (!key) {
            return;
        }
        // let value = sp0.split(":")[1].replace(/\s*/g, ""); // 为什么要去掉空格？ eg：0 2px 4px @shadow-color;这种格式怎么办
        let value = sp0.split(":")[1];
        if (value.indexOf('@') > -1) {
            Object.keys(colorsObj).forEach(cssKey => {
                value = value.split(cssKey).join(colorsObj[cssKey]);
            })
        }
        primary[key] = value.trim();
    })
})
objReadline.on('close', () => {
    fs.writeFileSync(path.resolve(__dirname, '../src/theme/antd.config.js'), `module.exports = ` + JSON.stringify(primary, null, 4))
})
