##  DayDayUp



### Time:2021.1.21

- #### Git 恢复单个文件修改

```
1、git reflog 查看到修改前的哈希字符串；
2、git	checkout [哈希字符串] [需要恢复的文件名]
```

- #### 明明是同一个`package.json`文件为什么`npm i`导致`package-lock.json`变化了

```
package.json里面定义的是版本范围（比如^1.0.0），具体跑npm install的时候安的什么版本，要解析后才能决定；
解决：安装依赖时使用npm ci，此时npm安装包会根据package-lock.json来进行安装；
```

> 参考：https://www.zhuyuntao.cn/npm-ci%E5%91%BD%E4%BB%A4



### Time:2021.1.22

- #### 另类给创建的标签添加属性的方法

```js
const script = Object.assign(document.createElement('script'), {
    	type: 'module',
    	src: URL.createObjectURL(moduleBlob),
    onerror() {
    	reject(new Error(`Failed to import: ${url}`))
    	cleanup(script)
    },
    onload() {
    	resolve(self[importFunctionName].moduleMap[absURL])
    	cleanup(script)
    }
})
document.head.appendChild(script)
```

- #### Webpack dll被抛弃后，更好的代替方案

```js
var HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
  context: // ...
  entry: // ...
  output: // ...
  plugins: [
    new HardSourceWebpackPlugin()
  ]
}
```

> 参考：https://github.com/mzgoddard/hard-source-webpack-plugin

- #### 动态创建函数

```
new Function(...args,fun:string)
```

- #### 解析url

```
new URL(https://xxx.com)
```

- #### url拼接技术

```
new URL(url,base);
url为绝对路径：如https://xxx.com； base	不起作用
url为路径：如 /a/b，base为https://qq.com/tc/m ==> https://qq.com/a/b
url为路径：如 a/b，base为https://qq.com/tc/m ==>https://qq.com/tc/m/a/b
```

- #### 富文本编辑器

```
braft-editor 
// @see https://www.yuque.com/braft-editor/be/lzwpnr
// @see https://www.npmjs.com/package/braft-extensions
```



### Time: 2021.1.25

- #### 多行溢出隐藏

```
overflow : hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
```

- #### 将字符串转化为blob url

```javascript
// 将字符串转化为blob对象
const blobObj = new Blob([`const hi = \'hello world\'`,'consolr.log(hi)'],{type:'text/javascript'});

// 将blob对象转化为blob url
const blobUrl = URL.createObjectURL(blobObj);

```

- #### 将线上地址转化为blob

```javascript
const xhr = new XMLHttpRequest();
  xhr.open(
    'get',
 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1089874897,1268118658&fm=26&gp=0.jpg',
    true,
  );
  xhr.responseType = 'blob';
  xhr.onload = () => {
    if (xhr.status === 200) {
      const blob = xhr.response;
      const img = Object.assign(document.createElement('img'), {
        src: URL.createObjectURL(blob),
        width: 200,
        height: 200,
        onload: () => {
          window.URL.revokeObjectURL(img.src);
        },
      });

      document.body.appendChild(img);
    }
  };
  xhr.send();
```

- #### parseInt少有人知的一面

```
parseInt(string,进制);
parseInt('10',10) // 10;
parseInt('10',2) // 2;
```





### TIME: 2021.1.28

- #### npm ci

```
按照package-lock 一次性全部按照依赖
```



- #### eslint&prettier

1. ###### typescript 项目配置

```bash
# 1、创建项目
mkdir projectName

# 2、初始化项目
npm init

# 3、初始化git
git init

# 4、全局安装
npm i eslint prettier typescript -g

# 5、初始化tsconfig.json
tsc init

# 6、安装vscode的eslint&prettier插件

# 7、配置eslint
eslint --init
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
    }
};

# 8、安装相关依赖
# typescript相关
npm i typescript -D
# eslint相关【使用eslint --init可选择自动安装】
# @typescript-eslint/eslint-plugin：为TypeScript代码库提供lint规则
# @typescript-eslint/parse：ESLint解析器，它利用TypeScript ESTree允许ESLint整理TypeScript源代码
npm i eslint @typescript-eslint/eslint-plugin @typescript-eslint/parse -D
# prettier相关
# eslint-config-prettie：关闭eslint所有不必要的规则或可能与Prettier冲突的规则。
# eslint-plugin-prettier：prettier规则作为格式化规则
npm i prettier eslint-config-prettier eslint-plugin-prettier -D

# 9、编辑prettier配置文件
touch .prettierrc.js
module.exports = {
  printWidth: 120 /** 超过120自动换行 */,
  tabWidth: 2 /** tab缩进的空格数 */,
  useTabs: false /** 使用tab，而不是空隔 */,
  semi: true /** 每一句结尾添加； */,
  singleQuote: true /** 使用 '' */,
  trailingComma: 'all' /** 不能有尾随逗号 */,
  bracketSpacing: true /**对象添加空格 */,
  jsxBracketSameLine: true /** > 单独在最后一行 */,
  arrowParens: 'always' /**尖头函数，一个参数也要用括号包裹 */,
  insertPragma: false /**插入一个特殊的@format标记 */,
}
  
# 10、eslint结合prettier
# 编辑eslint配置文件
{
		...
    "extends": [
        ...
        "plugin:prettier/recommended"
    ],
    ...
}
  
# 11、配置vscode文件，文件保存自动格式化代码
mkdir .vscode # 记住一定要到根目录不然vscode读取不到，此处翻过🚗
touch settings.json 
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
  "source.fixAll.tslint": true,
  "source.fixAll.eslint": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "git.ignoreLimitWarning": true
}
  
 # 12、代码提交自动检测修复
 # husky：git钩子https://www.npmjs.com/package/husky
 # lint-staged：在提交代码之前运行时，可以确保没有错误进入存储库并强制执行代码样式。
 npm i husky lint-staged -D
 # 配置package.json
 {
 	...,
 	"husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "src/*.{ts,tsx}": [
      "eslint --fix --max-warnings 0"
    ],
    "src/*.{js,jsx}": [
      "eslint --fix --max-warnings 0"
    ]
  }
 }
 
 # 13、想验证提交信息是否符合规则
  npm install  @commitlint/config-conventional @commitlint/cli -D 
  touch .commitlintrc.js
  module.exports={extends:['@commitlint/config-conventional'],rules:{}};
  
  # 配置package.json
  "commit-msg": "commitlint -e $GIT_PARAMS"
```

> verifyCommit.js
>
> ```js
> // Invoked on the commit-msg git hook by yorkie.
> 
> const chalk = require('chalk')
> const msgPath = process.env.GIT_PARAMS
> const msg = require('fs').readFileSync(msgPath, 'utf-8').trim()
> 
> const releaseRE = /^v\d/
> const commitRE = /^(revert: )?(feat|fix|docs|dx|refactor|perf|test|workflow|build|ci|chore|types|wip|release|deps)(\(.+\))?: .{1,50}/
> 
> if (!releaseRE.test(msg) && !commitRE.test(msg)) {
>   console.log()
>   console.error(
>     `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(
>       `invalid commit message format.`
>     )}\n\n` +
>       chalk.red(
>         `  Proper commit message format is required for automated changelog generation. Examples:\n\n`
>       ) +
>       `    ${chalk.green(`feat: add 'comments' option`)}\n` +
>       `    ${chalk.green(`fix: handle events on blur (close #28)`)}\n\n` +
>       chalk.red(`  See .github/commit-convention.md for more details.\n`)
>   )
>   process.exit(1)
> }
> 
> ```
>



### TIME:2021.1.29

- #### #!/usr/bin/env node 是啥？

```
在写npm包的时候需要在脚本的第一行写上#!/usr/bin/env node ，用于指明该脚本文件要使用node来执行。

/usr/bin/env 用来告诉用户到path目录下去寻找node，#!/usr/bin/env node 可以让系统动态的去查找node，已解决不同机器不同用户设置不一致问题。

PS： 该命令必须放在第一行， 否者不会生效

此时我们可以编写 node脚本了。
把编写的脚本使用 `chmod 755 脚本路径`
此时我们能直接访问路径执行脚本

chmod是Linux下设置文件权限的命令，后面的数字表示不同用户或用户组的权限。
一般是三个数字：
第一个数字表示文件所有者的权限
第二个数字表示与文件所有者同属一个用户组的其他用户的权限
第三个数字表示其它用户组的权限。
权限分为三种：读（r=4），写（w=2），执行（x=1）。综合起来还有可读可执行（rx=5=4+1）、可读可写（rw=6=4+2）、可读可写可执行(rwx=7=4+2+1)。
所以，chmod 755 设置用户的权限为：
1.文件所有者可读可写可执行
2.与文件所有者同属一个用户组的其他用户可读可执行
3.其它用户组可读可执行
```

- #### package.json中的bin有啥作用？

```
配置命令，如全局安装的webpack可以使用webpack xxx命令
```



### TIME: 2021.2.2

- #### 安利两个包

```
1、commander.js
> 完整的 node.js 命令行解决方案。
> https://github.com/tj/commander.js/blob/HEAD/Readme_zh-CN.md

2、shelljs
> 在Node.js API之上的Unix shell命令的可移植（Windows / Linux / OS X）实现。您可以使用它消除shell脚本对Unix的依赖，同时仍然保留其熟悉而强大的命令。您还可以全局安装它，以便可以从Node项目外部运行它-告别那些讨厌的Bash脚本
> https://github.com/shelljs/shelljs
```



- #### commander

```js
简单实用：
	- 安装：npm install commander
	- 使用：
	#1 构建program对象：
	
		1、提供全局对象(不适用多种方式来使用 Commander)：
		const { program } = require('commander');
		program.version('0.0.1');
		2、创建对象
		const { Command } = require('commander');
		const program = new Command();
		program.version('0.0.1');
		
 #2 自定义选项
 
		program
			.option('-c,--config-env <type>','description','default') 
			// option('短,长<>必填的参数,[]选填的参数',描述,默认值) 
			//必填选项要么设有默认值，要么必须在命令行中输入 否则报错
			//选填项如果传了 为传的值。不传为boolean（true）
			.parse(process.argv) // 解析命令行
		
 #3 获取解析结果
 		#运行：xxx --config-env settings
 		const options = program.opts();
 		if(options.configEnv)....
 		console.log(options); // {configEnv:'settings'} 驼峰哦
 
 #4 其他
 		1、取反：
 		.option('--no-sauce', 'Remove sauce')
 		取值：options.sauce // false
 		
 		2、参数是一个数组
 		.option('-n, --number <numbers...>', 'specify numbers')
 		#运行：xxx -n 1 2 3 4
 		console.log(options); //{number:[1,2,3,4]}
 		
 		3、设置脚本版本
 		program.version('0.0.1');
 		#运行 xxx -V // 0.0.1
 		
 		4、使用构造函数Option，对选项进行更详尽的配置
 		program
  	.addOption(new Option('-s, --secret').hideHelp()) // xxx --help不展示
  	.addOption(new Option('-t, --timeout <delay>', 'timeout in seconds').default(60, 'one minute'))
 	 .addOption(new Option('-d, --drink <size>', 'drink size').choices(['small', 'medium', 'large'])); //如果值不在 choices数组中报错
 	 
 	 运行：
 	 xxx --help
		Usage: help [options]

		Options:
 		 -t, --timeout <delay>  timeout in seconds (default: one minute)
 		 -d, --drink <size>     drink cup size (choices: "small", "medium", "large")
 		 -h, --help             display help for command

	 xxx --drink huge
		error: option '-d, --drink <size>' argument 'huge' is invalid. Allowed choices are small, medium, large.
		
		5、自定义接收参数的函数
		function collect(value, previous) {
  		return previous.concat([value]);
		}
		.option('-c, --collect <value>', 'repeatable value', collect, [])
		# 运行：
		xxx -c a -c b -c c // ['a','b','c']
		

 #5 命令
 如：git clone xx; git pull;
 
 通过.command()或.addCommand(new Commond(xxx))可以配置命令
 
 program
  .command('clone <source> [destination]')
  .description('clone a repository into a newly created directory')
  .action((source, destination) => {
    console.log('clone command called');
    console.log(source);
  });
  
  #运行：xxx clone wodesijie 描述 ；
  打印：clone command called 
  		 wodesijie
  		 
#6 注意点
	
	1、debug
	program
  .command('start <service>', 'start named service')
  .command('stop [service]', 'stop named service, or all if no name supplied');
  如果运行使用是 node test（文件） start 会报错，因为解析成 test-start命令了，此时我们应该改写成：
  program.command('start <service>').description('start named service')
  program.command('stop [service]').description('stop named service, or all if no name supplied')

	2、parseAsync
  如果.action中是一个 异步函数，我们应该使用异步解析
```



### TIME:2021.2.3

- #### 初学Linux

  ##### 1、dirs、popd、pushd

  ```shell
  # pushd：
  	pushd 目录   # 给目录栈添加一个目录
  	pushd       # 将目录栈顶层2个目录交换
  	pushd +n/-n # 切到到任意目录。n为索引值。+从上往下数。-从下往上数
  
  # popd：
  	popd        # 移除目录栈第一个
  	popd +n/-n
  	
  # dirs:
  	dirs -p     # 每行显示一行数据
  	dirs -v     # 展示索引
  	dirs -c     # 清空目录栈
  ```

  

- #### 错误捕获工具

```
sentry   https://sentry.io/organizations/change-ae/issues/ # 简单探索了
```



### TIME:2021.2.4

- #### 服务器搭建sentry（centOS7）

```shell
 # 参考：
    https://linoxide.com/containers/upgrade-docker-fedora-centos/
# 安装docker
#1. 卸载已有的docker
    yum remove docker docker-common docker-selinux docker-engine

#2. 安装docker的依赖
    yum install -y yum-utils device-mapper-persistent-data lvm2

#3. 安装docker-ce
    yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
    yum install docker-ce

#4. 启动docker后台服务
    service docker start

#5. 测试运行
    docker run hello-world

#6. 设置开机启动
    sudo systemctl enable docker
    
    
 # 安装docker-compose
 
 curl -L https://get.daocloud.io/docker/compose/releases/download/1.25.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose

chmod +x /usr/local/bin/docker-compose

# 测试
docker-compose version

# 安装sentry

#1. 安装git
    yum install git

#2. 下载onpremise
    git clone https://github.com/getsentry/onpremise.git

#3. 安装
    cd onpremise
    ./install.sh

#4. 启动
    docker-compose up -d

#5. 创建账号
    docker-compose run --rm web createuser
    
#最后在浏览器中访问 http://localhost:9000/
```



- #### 自动发布包

```javascript
# 脚本：

#!/usr/bin/env node

const path = require('path');
const shelljs = require('shelljs');
const program = require('commander');

// 拷贝package.json
const sourceFile = path.resolve(__dirname, '../package.json')
const targetFile = path.resolve(__dirname, '../dist/package.json');
shelljs.cp('-f',sourceFile,targetFile);

const packagejson = require(targetFile);
const currentVersion = packagejson.version;
const versionArr = currentVersion.split('.');
const [mainVersion, subVersion, phaseVersion] = versionArr;

// 默认版本号
const defaultVersion = `${mainVersion}.${subVersion}.${+phaseVersion+1}`;

let newVersion = defaultVersion;

// 从命令行参数中取版本号
program
  .option('-v, --versions <type>', 'Add release version number', defaultVersion);

program.parse(process.argv);

if (program.opts().versions) {
  newVersion = program.opts().versions;
}

function publish() {
  shelljs.sed('-i', `"name": "auto-publish"`, `"name": "change-auto-publish"`, targetFile); // 修改版本号
  shelljs.sed('-i', `"version": "${currentVersion}"`, `"version": "${newVersion}"`, targetFile); // 修改版本号
  shelljs.cd('dist');
  shelljs.exec('npm publish --access public'); // 发布
}

publish(); 
```



### Jenkins配置

##### 安装

```shell
sudo wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo
sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key
yum install jenkins
```



##### 配置

```shell
vi /etc/sysconfig/jenkins
# 把JENKINS_USER="jenkins" 修改为 ="root"
# 把JENKINS_PORT="8080"    修改为 ="9090"

# 启动可能会报错，一般是java路径不对
vi /etc/init.d/jenkins
# 设置正确地址

# 配置文件修改执行下面命令
systemctl daemon-reload

# 启动 status：状态 stop：停止 restart：重启
systemctl start jenkins
```

![image-20210205174525077](/Users/chensiji/Library/Application Support/typora-user-images/image-20210205174525077.png)



##### 进入

```shell
# 访问对应端口

# 获取密码
tail /var/lib/jenkins/secrets/initialAdminPassword
```



##### Github配置

```
1、右上角头像->Settings->Developer settings->Personal access tokens->Generate new token
```

![image-20210305182059509](/Users/chensiji/Library/Application Support/typora-user-images/image-20210305182059509.png)

```
2、Jenkins配置：依次点击系统管理->系统设置，找到GitHub，添加GitHub服务器，其中API URL是固定的，输入名称，点击添加，添加一个凭据。
```

![image-20210305182350007](/Users/chensiji/Library/Application Support/typora-user-images/image-20210305182350007.png)

```
3、jenkins类型选择Secret text，Secret输入刚才复制的tonken，描述随意写，就是一个别名。
```



```
4、安装nodejs插件点击系统管理->插件管理->可选插件搜索NodeJS->安装
```



```
5、安装之后重启Jenkins。之后需要在系统设置->全局工具配置中配置node。下拉找到nodejs，新增nodejs，输入别名，选择版本。在接下来的新建任务中，用的是这个别名
```



```
6、点击新建任务，
输入名称，选择“构建一个自由风格的软件项目”。
输入描述，写上你的GitHub地址；
源码管理：这里输入的url是以.git结尾的，就是你克隆项目是使用的url。之后点击添加，选择账号密码，输入即可。
构建环境：选择nodejs，刚才在全局配置工具中配置的
构建：选择增加构建步骤->执行shell
npm install -g cnpm --registry=https://registry.npm.taobao.org;
cnpm i;
npm run start;
ls;
```



##### 配置GithubIP

```shell
# 找到可连接的ip地址
http://ping.chinaz.com/

# 编辑host文件
vim /etc/hosts/

# 内容添加 【ip】 github.com
```



##### 解决Github慢的方法

```
https://github.com.cnpmjs.org --替换-> 原本github
```



##### 可能找不到npm命令

```shell
npm bin -g # 查询到bin目录
npm root -g # 全局包的目录

# 查询到环境PATH
echo $PATH;

# 把环境变量配置到Jenkins
【系统管理】->【系统设置】->【全局属性】->【环境变量】
```



### TIME:2021.3.17

#### `pageack.json`中`bin`的作用

```
我们全局使用 webpack xxx等命令，都是由bin配置的；
比如： 
bin:{
	'change':'xxxxx xxx'
}
全局安装的包执行： change xxx即可以执行后面命令
```



#### 纯函数

```
1、不尝试修改入参
2、传入相同的参数将返回相同的值
function sum(a, b) {
  return a + b;
}
```



#### 代码分割库

```
loadable-components
```



#### react错误边界

```js
// getDeriveredStateFromError 使用备用方案
// componentDidCatch 打印日志

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 你同样可以将错误日志上报给服务器
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}
```



### 2021.3.18

#### useEffect与useLayoutEffect的执行时机