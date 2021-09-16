const fs = require('fs');
const path = require('path');//解析需要遍历的文件夹
const colors = require('colors');
const rootPath = path.resolve(__dirname,'../src');

// 生成文件的模版
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


// 将文件内容转化字符串
function buildFile(filePath,targetPath){
		// 读取文件内容
		let content = fs.readFileSync(filePath, 'utf-8');
		// 编辑内容
		content = getTemplate(content);

		 console.log(`./src${filePath.replace(rootPath,'')}`.blue+` -> `.red+`./src${targetPath.replace(rootPath,'')}`.blue);
		fs.writeFileSync(targetPath,content);
}


//文件遍历方法
function fileDisplay(dirPath){
    //根据文件路径读取文件，返回文件列表
    fs.readdir(dirPath,function(err,files){
        if(err){
            console.warn(err)
        }else{
            //遍历读取到的文件列表
            files.forEach(function(filename){
                //获取当前文件的绝对路径
                const filePath = path.resolve(dirPath, filename);
                //根据文件路径获取文件信息，返回一个fs.Stats对象
                fs.stat(filePath,function(eror, stats){
                    if(eror){
                        console.warn('获取文件stats失败');
                    }else{
                        const isFile = stats.isFile();//是文件
                        const isDir = stats.isDirectory();//是文件夹
                        if(isFile&&filename.startsWith('_')&&!/\.code\.ts$/.test(filename)){
													// 获取目标文件文件名
													 const targetName = filename+'.code.ts';
													 const targetPath = path.resolve(dirPath,targetName);
													// 判断是否存在打包文件
													fs.stat(targetPath,(e,targteStats)=>{
														// 存在目标文件，且目标是文件
														if(!e&&targteStats.isFile()){
															// 如果`源文件`修改时间比`目标文件`修改时间更加接近当前时间,说明文件有更新需要打包
																if(stats.mtimeMs>targteStats.mtimeMs){
																	buildFile(filePath,targetPath)
																}
														}else{
															buildFile(filePath,targetPath)
														}
													})

                        }
                        if(isDir){
                            fileDisplay(filePath);//递归，如果是文件夹，就继续遍历该文件夹下面的文件
                        }
                    }
                })
            });
        }
    });
}


//调用文件遍历方法
fileDisplay(rootPath);
