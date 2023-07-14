# routerLike
 使用原生js实现一个简单的路由
 ## 需要注意的知识点：
 点击链接时需要拿到此节点的href属性完成传参(render和pushState都需要)=>onclick="handleClick(event)"
 ## 思路：
 1. 阻止页面跳转(event.preventDefault();)
 2. 修改页面内容(render)
 3. 修改url(window.history.pushState(null, null, path);)
# vuexLike
 ## 思路：
 1. 创建一个状态对象，用来存放应用程序的状态
 2. 定义一些用来修改状态的方法，这些方法会接收当前的状态对象作为参数,然后进行修改
 3. 创建一个对象(store)来存储各种操作（例如 mutations、actions、getters 等）
 4. 在应用程序中使用这个 store 对象
# react
包含自定义钩子：防抖，节流，Mount，UnMount和路由监听  
作业在这里
![image](https://github.com/wangyuening0522/routerLike/assets/111636755/eb203fba-f6c9-483e-b8e8-921fea03c80b)

