const program = require('commander');
const download = require('download-git-repo')
// 调用 version('1.0.0','-v,--version') ,会将 -v 和 --Version 添加到命令中，可以通过这些打印出版本号
program.version('1.0.0','-v,--version')
		// 定义 init 命令，name 是必传参数，为项目名
		.command('init <name>')
		// action 则是执行 init 命令会发生的行为，在这里执行生成项目的过程
		.action((name) => {
			console.log(name)
			/**
			* 下载模板
			* 第一个参数为仓库地址，注意端口号后面的‘/’要写成‘:’，#master代表的分支名
			* 第二个参数是路径，以下为在当前路径下创建一个name的文件夹存放模板，也可以使用二级目录比如test/${name}
			*/ 
			download('http://xxxxxx:9999:HTML5/H5Template#master', name, {clone: true}, (err)=>{
				console.log(err ? 'error' : 'success')
			})
		});
program.parse(process.argv);



