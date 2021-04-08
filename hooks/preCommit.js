const LineByLine = require('./readlinesyn');
const exec = require('child_process').execSync;
const branchName = exec('git rev-parse --abbrev-ref HEAD').toString().trim();

if (!/^\d+\.\d+\.\d+$/.test(branchName) && branchName !== 'master') {
    process.exit(0);
}


// console.log('\033[arg1;arg2m DONE')
// arg2 字色编号：30黑，31红，32绿，33黄，34蓝，35紫，36深绿，37白色
// arg1 背景编号：40黑，41红，42绿，43黄，44蓝，45紫，46深绿，47白色

const needCheckLintNvarchar = [
    process.cwd() + '/index.html',
    process.cwd() + '/package.json',
    process.cwd() + '/Jenkinsfile.groovy',
    process.cwd() + '/dockerfile',
    process.cwd() + '/docker-compose.yml',
]
checkLintNvarchar(needCheckLintNvarchar)

checkFile(process.cwd() + '/package.json', function ({ theline, index, liner, filePath }) {
    if (theline.indexOf('"version": ') > -1) {
        if (theline.indexOf('"version": "0.0.0"') > -1) {
            liner.close();
            console.log('\033[41;30m commitError \033[40;31m ', filePath + ':' + index, '\033[40;31m  文件中version字段未填写，请填写后再提交 \n')
            process.exit(1);
        }
    }

    if (branchName === 'master') {
        return
    }
    if (theline.indexOf('"version": ') > -1 && theline.indexOf(branchName) === -1) {
        liner.close();
        console.log('\033[41;30m commitError \033[40;31m ', filePath + ':' + index, '\033[40;31m  文件中version字段未填写，请填写后再提交 \n')
        process.exit(1);
    }
    if (theline.indexOf('build:image:harbor') > -1 && theline.indexOf('.web:' + branchName) === -1) {
        liner.close();
        console.log('\033[41;30m commitError \033[40;31m ', filePath + ':' + index, '\033[40;31m  build:image:harbor版本未改变，请改写后再提交 \n')
        process.exit(1);
    }

    if (theline.indexOf('build:image:reg') > -1 && theline.indexOf('.web:' + branchName) === -1) {
        liner.close();
        console.log('\033[41;30m commitError \033[40;31m ', filePath + ':' + index, '\033[40;31m  build:image:reg版本未改变，请改写后再提交 \n')
        process.exit(1);
    }
})


var defVersion = true
checkFile(process.cwd() + '/dockerfile', ({ theline, index, liner, filePath }) => {
    if (branchName === 'master') {
        return
    }
    if (theline.indexOf('version=') === -1) {
        defVersion = false
        return
    }
    defVersion = true
    if (theline.indexOf('version="' + branchName + '"') === -1) {
        liner.close();
        console.log('\033[41;30m commitError \033[40;31m ', filePath + ':' + index, '\033[40;31m  version版本未改变，请改写后再提交 \n')
        process.exit(1);
    } else {
        liner.close();
    }
}, (filePath) => {
    if (!defVersion) {
        console.log('\033[41;30m commitError \033[40;31m ', filePath, '\033[40;31m  version不存在！ \n')
        process.exit(1);
    }
})


var Jenkinsfile = process.cwd() + '/Jenkinsfile.groovy'
var JenkinsDefVersion = false
checkFile(Jenkinsfile, function ({ theline, index, liner, filePath }) {
    if (theline.indexOf('def version') === -1) {
        return
    }
    JenkinsDefVersion = true
    if (branchName === 'master' && theline.indexOf('-SNAPSHOT') === -1) {
        liner.close();
        console.log('\033[41;30m commitError \033[40;31m ', Jenkinsfile + ':' + index, '\033[40;31m  version版本未改变，请改写后再提交 \n')
        process.exit(1);
    }
    if (branchName !== 'master' && theline.indexOf('"' + branchName + '"') === -1) {
        liner.close();
        console.log('\033[41;30m commitError \033[40;31m ', Jenkinsfile + ':' + index, '\033[40;31m  version版本未改变，请改写后再提交 \n')
        process.exit(1);
    }
}, (filePath) => {
    if (!JenkinsDefVersion) {
        console.log('\033[41;30m commitError \033[40;31m ', filePath, '\033[40;31m  version不存在！ \n')
        process.exit(1);
    }
})

function checkFile(filePath, cb, finallyCB) {
    let liner = new LineByLine();
    liner.open(filePath);
    let theline;
    let index = 0;
    while (!liner._EOF) {
        index += 1
        theline = liner.next();
        if (!theline) {
            continue;
        }
        cb({ theline, index, liner, filePath })
    }
    liner.close();
    finallyCB ? finallyCB(filePath) : ''
}

function checkLintNvarchar(fileList) {
    if (!fileList || fileList.length === 0) {
        return
    }
    fileList.forEach(file => {
        checkFile(file, function ({ theline, index, liner, filePath }) {
            if (theline.indexOf('&{lint_nvarchar}') > -1) {
                liner.close();
                console.log('\033[41;30m commitError \033[40;31m ', filePath + ':' + index, '\033[40;31m  文件中含有&{lint_nvarchar}字段，请填写后再提交 \n')
                process.exit(1);
            }
        })
    })
}



console.log('\033[;32m commitSuccess! \n')
process.exit(0);
