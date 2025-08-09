export default function handler(req, res) {
  res.status(200).json({
    headStart: `console.log('head 开头脚本执行');`,
    headEnd: `console.log('head 末尾脚本执行');`,
    bodyStart: `console.log('body 开头脚本执行');`,
    bodyEnd: `console.log('body 末尾脚本执行');`
  });
}
