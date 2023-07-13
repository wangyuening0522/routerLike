# routerLike
 使用原生js实现一个简单的路由
 ## 需要注意的知识点：
 点击链接时需要拿到此节点的href属性完成传参(render和pushState都需要)=>onclick="handleClick(event)"
 ## 思路：
 1. 阻止页面跳转(event.preventDefault();)
 2. 修改页面内容(render)
 3. 修改url(window.history.pushState(null, null, path);)
