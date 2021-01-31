export default function (moduleOptions) {
  console.log(moduleOptions.message)
  // 1.modules 是运行在node中不是经过webpack编译 ~/plugins/test 这样是不识别的
  // 2. '../plugins/test.js' 运行地址不是modules文件夹
  // 3.
  this.addPlugin('plugins/test.js');

  // 可以进行全局修改
  this.options.message2 = 'message from a module';

}
