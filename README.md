# Cranberry-Scaffold

TWTStudio React Scaffold For Admin System

### 初衷
  
  中小型管理后台在工作室内部日常项目中已然标配, 并且大多数由后端负责，使用的模板良莠不齐，没有规范，甚至引入各种前端bug，不能保证开发效率。
  
  Ant Design是蚂蚁金服为中后台开发的前端解决方案，同样是为了解决集团内的这类问题。
  
  管理后台的前端需求较为集中，大多为表单，图表，展示列表等业务组件，提高开发效率的关键是高效方便地配置与调动这些组件，减少与业
务逻辑代码的耦合，让后端开发专注于后台逻辑的实现。

### 原则
- 贴合业务，适应灵活的业务需求
- 方便配置，尽可能发挥JSX的优越性
- 封装React路由，抽象成数据结构代码
- 友好的状态展示，如各类情求的message，process等
- 语义化，未接触JS也能快速上手
- 每个JSX文件包含一个主组件

### 架构
|结构|选型|
|---|---|
|View层|React|
|路由|React-Router|
|UI组件|Ant.design|
|HTTP|[isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch)|
|数据层|Redux|
|Middleware|[redux-logger](https://github.com/fcomb/redux-logger) [redux-thunk](https://github.com/gaearon/redux-thunk)|

### 层次
- App View
  - Manage + Layout
	  - ContentBox
		  - Content Layout + Grid
			  - Components
  - Login
- Actions
- Reducers
- Store

### 核心State
  - login
  - loading
  - dashboard
