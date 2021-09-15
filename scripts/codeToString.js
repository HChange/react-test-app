const fs = require('fs');
const path = require('path');//解析需要遍历的文件夹
const filePath = path.resolve(__dirname,'../src');

//调用文件遍历方法
fileDisplay(filePath);
//文件遍历方法
function fileDisplay(filePath){
    //根据文件路径读取文件，返回文件列表
    fs.readdir(filePath,function(err,files){
        if(err){
            console.warn(err)
        }else{
            //遍历读取到的文件列表
            files.forEach(function(filename){
                //获取当前文件的绝对路径
                const filedir = path.join(filePath, filename);
                //根据文件路径获取文件信息，返回一个fs.Stats对象
                fs.stat(filedir,function(eror, stats){
                    if(eror){
                        console.warn('获取文件stats失败');
                    }else{
                        const isFile = stats.isFile();//是文件
                        const isDir = stats.isDirectory();//是文件夹
                        if(isFile&&filename.startsWith('_')&&!/\.code\./.test(filename)){
                            console.log(filedir);
														console.log(filename);
														// 读取文件内容
														let content = fs.readFileSync(filedir, 'utf-8');
														// 编辑内容
														content = getTemplate(content);
														const  templateArr = filename.split('.');
														templateArr.splice(templateArr.length-1,1,'code.ts');
														 const targetName = templateArr.join('.');
														 console.log(targetName);
                            fs.writeFileSync(path.resolve(filePath,targetName),content);
                        }
                        if(isDir){
                            fileDisplay(filedir);//递归，如果是文件夹，就继续遍历该文件夹下面的文件
                        }
                    }
                })
            });
        }
    });
}

function getTemplate(content){
	return (
`
/* eslint-disable */
const codeString = \`
`
+
'\\`\\`\\`'
+
`
${content}
`
+
'\\`\\`\\`'
+
`
\`;
export default codeString;
/* eslint-enable */
`)
}
