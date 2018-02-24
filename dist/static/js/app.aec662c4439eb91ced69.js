webpackJsonp([1],{40:function(n,e){},41:function(n,e,t){t(87);var r=t(15)(t(48),t(98),"data-v-2df95543",null);n.exports=r.exports},42:function(n,e,t){t(86);var r=t(15)(t(49),t(97),"data-v-2ca90776",null);n.exports=r.exports},43:function(n,e,t){t(85);var r=t(15)(t(46),t(96),"data-v-288975d1",null);n.exports=r.exports},44:function(n,e,t){t(88);var r=t(15)(t(47),t(99),"data-v-b76f4cbc",null);n.exports=r.exports},46:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(16),o=t.n(r),i=t(25),s=t.n(i),a=t(24),u=t.n(a),l=t(42),c=t.n(l),d=t(41),p=t.n(d),m=t(40);t.n(m);e.default={name:"app",components:{StyleEditor:c.a,ResumeEditor:p.a},data:function(){return{interval:20,currentStyle:"",enableHtml:!1,fullStyle:['/*\n * Hi 你好，我是杜萍伟，是一名求职者\n * 感谢查看我的简历 Ｏ(≧▽≦)Ｏ\n * 下面我要开始我的表演了！\n * 简历构建中\n * ··· 3 ···\n * ··· 2 ···\n * ··· 1 ···\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all .3s;\n}\n\n/* 白色背景有点扎眼，我们来点背景色 */\nhtml {\n  color: rgb(53,53,53);\n  background: rgb(232,233,237);\n}\n\n/* 文字离边框太近了 */\n.styleEditor {\n  margin: 1em;\n  padding: 1em;\n  width: 30vw;\n  height: 95vh;\n  background: rgb(242,242,242);\n  border-radius:3px;\n  overflow: auto;\n}\n\n/* 代码高亮才能展现美 */\n.token.selector{color: rgb(133,153,0 );}\n.token.property{color: rgb(187,137,0 );}\n.token.punctuation{color: black;}\n.token.function{color :rgb(42,161,152);}\n\n/* 加点 3D 效果？ */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg)\n                     translateZ(-100px);\n          transform: rotateY(10deg)\n                     translateZ(-100px);\n}\n\n/* 呃呃呃...好像3D的忒丑，那我还是去掉吧！*/\n.styleEditor{\n  transform:none;\n}\n\n/* 看了这么久您可能着急了\n * 不知道您有没有注意到\n * 右上角有一个圆形图标,点击可以直接看结果~~~\n * 我故意没有加提示字，HaHa\n */\n\n/* 接下来我得做一个编辑器 */\n.resumeEditor{\n  font-family: "Georgia", "Xin Gothic",\n        "Hiragino Sans GB", "Droid Sans Fallback",\n        "Microsoft YaHei", sans-serif;\n  position: fixed;\n  right: 0; top: 0;\n  padding: 1em;  margin: 1em;\n  width: 65vw; height: 95vh;\n  border-radius: 5px;\n  background: rgb(211,217,227);\n  color: #222;\n  overflow: auto;\n}\n\n/* OK，那么现在开始写简历 */\n',"\n/* 这个简历有些丑...\n * emm，这是 Markdown 格式的\n * 我需要变成更友好的样式\n * 那么，用开源工具翻译成 HTML 就行了\n */\n","\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor p{\n  margin: 10px 0;\n  color: #555;\n}\n.resumeEditor h1{\n  font-size: 1.6rem;\n  line-height: 28px;\n  margin: 52px 0 15px 0;\n  padding-bottom: 7px;\n  color: #000;\n}\n.resumeEditor h2{\n  font-size: 1.3rem;\n  line-height: 23px;\n  margin: 30px 0 13px 0;\n  padding-bottom: 7px;\n  color: #333;\n}\n.resumeEditor h3{\n  font-size: 1.2rem;\n  line-height: 18px;\n  margin: 20px 0 2px;\n  padding-bottom: 7px;\n  color: #333;\n}\n.resumeEditor ul{\n  display: block;\n  list-style-type: disc;\n  padding-left: 17px;\n  margin: 6px 0 10px;\n  color: #555;\n}\n.resumeEditor ul li{\n  position: relative;\n  left: 15px;\n}\n.resumeEditor blockquote {\n  border-left: 4px solid #aba8a8;\n  padding: 0 15px;\n}\n.resumeEditor blockquote>:last-child {\n  margin-bottom: 15px;\n}\n.resumeEditor blockquote>:first-child {\n  margin-top: 15px;\n}\n"],currentMarkdown:"",fullMarkdown:"\n## 个人信息\n- 杜萍伟/男/1995\n- 本科/邯郸学院统计学\n- 期望职位：Java开发工程师\n- 手机：13323007604\n- Email：dpw0609@163.com、dupingwei@qq.com\n- QQ：775357468\n\n## 技能清单\n\n- Java基础扎实，熟悉Java常用设计模式，熟悉SOA架构开发流程；熟悉并能使用Node开发后台；\n- 熟练运用Spring、SpringMVC、Mybatis、Struts2、Hibernate、JFinal、Express等常用开源框架；\n- 了解UEditor、DUBBO、zookeeper等技术；\n- 熟练使用HTML、Ajax、JQuery、Bootstrap、Vue、Sass、Webpack等前端技术；\n- 熟悉MySQL、Oracle，能够熟练编写常用SQL语句；熟练使用NoSQL数据库Redis；\n- 版本管理：SVN、Git；\n- 熟悉使用Linux操作系统，了解常用指令、能够搭建Java开发环境；\n\n## 工作经历\n\n### 北京同创永益科技发展有限公司 （2017/01 -- 2017/05）\n\n#### IStorm V3.2 存储运维管理软件\n> 开发环境：Eclipse、tomcat8、MySQL5.6、Spring、MyBatis、SpringMVC\n>\n> 项目简介：本系统是基于B/S架构而设计开发，旨在提供全面的存储监控方案，降低运维风险，提高管理效率、资源利用率、分析能力等。\n>\n> 责任描述：资产管理、告警管理、配置管理模块前台数据交互模块以及后台对应功能代码的实现。\n\n### 浙江金惠科技有限公司 （2017/07 -- 2018/03）\n\n#### 公积金新网厅研发\n> 开发环境：WebStorm、Node、vue、iView\n>\n> 项目URL：http://lvyueyang.gitee.io/wangtingyanshi/mock （账号密码随意输入即可）\n>\n> 项目简介：该项目采用前后端分离技术。前端使用vue-cli搭建，并采用iView作为UI 组件库，其中使用vuex、vue-amap、vue-xlsx-table、axios、sass等技术；后端使用node.js,并采用request、experss、superagent、crypto等模块。\n>\n> 责任描述：前端负责个人版（查询）、单位版（全部）开发；后端负责Node接口转发项目开发；根据综合服务平台接口文档制作并维护jMeter文件；并负责多方项目之间的协作沟通，推进项目进度。\n\n#### 河北省直公积金网厅维护\n> 项目简介：此项目主要为后期维护\n>\n> 责任描述：负责后期bug的修复、功能的修改、新需求的开发、现场问题的解决。\n\n#### 其他项目\n  > 公众号-贵安新区公积金和社保中心：公众号主动推送功能（ActiveMQ）、留言功能；管理平台留言处理功能。\n  >\n  > 公众号-汕头市住房公积金管理中心：公众号主动推送功能、公积金个人贷款查询（六类）功能，数据库Oracle到MySQL迁移。\n  >\n  > [贵安新区网站](http://www.gaxqgjj.com/)：网站留言建议、回复功能开发。\n\n## 自我评价\n- 勤恳务实，有严格的执行能力\n- 代码规范良好，注释、文档撰写规范0\n- 有较好的沟通协调能力\n- 接受新事物的能力较强，有良好的抗压能力，有坚定的信心去面对新的任务，发挥自己最大的能力为公司创造更多的效益。\n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=u()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(e,t){n.enableHtml=!0,e()})},progressivelyShowStyle:function(n){var e=this;return new o.a(function(t,r){var o=e.interval,i=u()(s.a.mark(function e(){var r,a,u,l,c,d=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.fullStyle[n]){e.next=3;break}return e.abrupt("return");case 3:a=this.fullStyle.filter(function(e,t){return t<=n}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0),u=a-r.length,this.currentStyle.length<a?(l=this.currentStyle.length-u,c=r.substring(l,l+1)||" ",this.currentStyle+=c,"\n"===r.substring(l-1,l)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):t();case 6:case"end":return e.stop()}},e,this)})).bind(e);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(e,t){var r=n.fullMarkdown.length;!function t(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(t,5)}else e()}()})},stop:function(){this.currentMarkdown=this.fullMarkdown,this.currentStyle=this.fullStyle}}}},47:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(16),o=t.n(r),i=t(25),s=t.n(i),a=t(24),u=t.n(a),l=t(42),c=t.n(l),d=t(41),p=t.n(d),m=t(40);t.n(m);e.default={name:"app",components:{StyleEditor:c.a,ResumeEditor:p.a},data:function(){return{interval:30,currentStyle:"",enableHtml:!1,fullStyle:['/*\n * Hi 你好，我是杜萍伟，是一名求职者\n * 感谢查看我的简历 Ｏ(≧▽≦)Ｏ\n * 下面我要开始我的表演了！\n * 简历构建中\n * ··· 3 ···\n * ··· 2 ···\n * ··· 1 ···\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all .3s;\n}\n\n/* 白色背景有点扎眼，我们来点背景色 */\nhtml {\n  color: rgb(53,53,53);\n  background: rgb(232,233,237);\n}\n\n/* 文字离边框太近了 */\n.styleEditor {\n  margin: 1em;\n  padding: 1em;\n  width: 90vw;\n  height: 45vh;\n  background: rgb(242,242,242);\n  border-radius:3px;\n  overflow: auto;\n}\n\n/* 代码高亮才能展现美 */\n.token.selector{color: rgb(133,153,0);}\n.token.property{color: rgb(187,137,0);}\n.token.punctuation{color: black;}\n.token.function{color:rgb(42,161,152);}\n\n/* 加点 3D 效果？ */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg)\n                     translateZ(-100px);\n          transform: rotateY(10deg)\n                     translateZ(-100px);\n}\n\n/* 呃呃呃...好像3D的忒丑，那我还是去掉吧！*/\n.styleEditor{\n  transform:none;\n}\n\n/* 看了这么久您可能着急了\n * 不知道您有没有注意到\n * 右上角有一个圆形图标,点击可以直接看结果~~~\n * 我故意没有加提示字，HaHa\n */\n\n/* 接下来我得做一个编辑器 */\n.resumeEditor{\n  font-family: "Georgia", "Xin Gothic",\n        "Hiragino Sans GB", "Droid Sans Fallback",\n        "Microsoft YaHei", sans-serif;\n  position: fixed;\n  left: 0; top: 50%;\n  padding: 1em;  margin: 1em;\n  width: 90vw; height: 45vh;\n  border-radius: 5px;\n  background: rgb(211,217,227);\n  color: #222;\n  overflow: auto;\n}\n\n/* OK，那么现在开始写简历 */\n',"\n/* 这个简历有些丑...\n * emm，这是 Markdown 格式的\n * 我需要变成更友好的样式\n * 那么，用开源工具翻译成 HTML 就行了\n */\n","\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor p{\n  margin: 10px 0;\n  color: #555;\n}\n.resumeEditor h1{\n  font-size: 1.6rem;\n  line-height: 28px;\n  margin: 52px 0 15px 0;\n  padding-bottom: 7px;\n  color: #000;\n}\n.resumeEditor h2{\n  font-size: 1.3rem;\n  line-height: 23px;\n  margin: 30px 0 13px 0;\n  padding-bottom: 7px;\n  color: #333;\n}\n.resumeEditor h3{\n  font-size: 1.2rem;\n  line-height: 18px;\n  margin: 20px 0 2px;\n  padding-bottom: 7px;\n  color: #333;\n}\n.resumeEditor ul{\n  display: block;\n  list-style-type: disc;\n  padding-left: 17px;\n  margin: 6px 0 10px;\n  color: #555;\n}\n.resumeEditor ul li{\n  position: relative;\n  left: 15px;\n}\n.resumeEditor blockquote {\n  border-left: 4px solid #aba8a8;\n  padding: 0 15px;\n}\n.resumeEditor blockquote>:last-child {\n  margin-bottom: 15px;\n}\n.resumeEditor blockquote>:first-child {\n  margin-top: 15px;\n}\n"],currentMarkdown:"",fullMarkdown:"\n## 个人信息\n- 杜萍伟/男/1995\n- 本科/邯郸学院统计学\n- 期望职位：Java开发工程师\n- 手机：13323007604\n- Email：dpw0609@163.com、dupingwei@qq.com\n- QQ：775357468\n\n## 技能清单\n\n- Java基础扎实，熟悉Java常用设计模式，熟悉SOA架构开发流程；熟悉并能使用Node开发后台；\n- 熟练运用Spring、SpringMVC、Mybatis、Struts2、Hibernate、JFinal、Express等常用开源框架；\n- 了解UEditor、DUBBO、zookeeper等技术；\n- 熟练使用HTML、Ajax、JQuery、Bootstrap、Vue、Sass、Webpack等前端技术；\n- 熟悉MySQL、Oracle，能够熟练编写常用SQL语句；熟练使用NoSQL数据库Redis；\n- 版本管理：SVN、Git；\n- 熟悉使用Linux操作系统，了解常用指令、能够搭建Java开发环境；\n\n## 工作经历\n\n### 北京同创永益科技发展有限公司 （2017/01 -- 2017/05）\n\n#### IStorm V3.2 存储运维管理软件\n> 开发环境：Eclipse、tomcat8、MySQL5.6、Spring、MyBatis、SpringMVC\n>\n> 项目简介：本系统是基于B/S架构而设计开发，旨在提供全面的存储监控方案，降低运维风险，提高管理效率、资源利用率、分析能力等。\n>\n> 责任描述：资产管理、告警管理、配置管理模块前台数据交互模块以及后台对应功能代码的实现。\n\n### 浙江金惠科技有限公司 （2017/07 -- 2018/03）\n\n#### 公积金新网厅研发\n> 开发环境：WebStorm、Node、vue、iView\n>\n> 项目URL：http://lvyueyang.gitee.io/wangtingyanshi/mock （账号密码随意输入即可）\n>\n> 项目简介：该项目采用前后端分离技术。前端使用vue-cli搭建，并采用iView作为UI 组件库，其中使用vuex、vue-amap、vue-xlsx-table、axios、sass等技术；后端使用node.js,并采用request、experss、superagent、crypto等模块。\n>\n> 责任描述：前端负责个人版（查询）、单位版（全部）开发；后端负责Node接口转发项目开发；根据综合服务平台接口文档制作并维护jMeter文件；并负责多方项目之间的协作沟通，推进项目进度。\n\n#### 河北省直公积金网厅维护\n> 项目简介：此项目主要为后期维护\n>\n> 责任描述：负责后期bug的修复、功能的修改、新需求的开发、现场问题的解决。\n\n#### 其他项目\n  > 贵安微信：公众号主动推送功能（ActiveMQ）、留言功能；管理平台留言处理功能。\n  >\n  > 汕头微信: 公众号主动推送功能、公积金个人贷款查询（六类）功能，数据库Oracle到MySQL迁移\n\n## 自我评价\n- 有严格的执行能力\n- 代码规范良好，注释、文档撰写规范\n- 有较好的沟通协调能力\n- 接受新事物的能力较强，有良好的抗压能力，有坚定的信心去面对新的任务，发挥自己最大的能力为公司创造更多的效益。\n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=u()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(e,t){n.enableHtml=!0,n.$nextTick(function(){n.$refs.resumeEditor.goTop()}),e()})},progressivelyShowStyle:function(n){var e=this;return new o.a(function(t,r){var o=e.interval,i=u()(s.a.mark(function e(){var r,a,u,l,c,d=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.fullStyle[n]){e.next=3;break}return e.abrupt("return");case 3:a=this.fullStyle.filter(function(e,t){return t<=n}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0),u=a-r.length,this.currentStyle.length<a?(l=this.currentStyle.length-u,c=r.substring(l,l+1)||" ",this.currentStyle+=c,"\n"===r.substring(l-1,l)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):t();case 6:case"end":return e.stop()}},e,this)})).bind(e);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(e,t){var r=n.fullMarkdown.length,o=n.interval;!function t(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(t,o)}else e()}()})},stop:function(){this.currentMarkdown=this.fullMarkdown,this.currentStyle=this.fullStyle}}}},48:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(89),o=t.n(r);e.default={props:["markdown","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?o()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5},goTop:function(){this.$refs.container.scrollTop=0}}}},49:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(90),o=t.n(r);e.default={name:"Editor",props:["code"],computed:{highlightedCode:function(){return o.a.highlight(this.code,o.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.code+"</style>"}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},50:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(45),o=t(43),i=t.n(o),s=t(44),a=t.n(s),u=document.documentElement.clientWidth;new r.a({el:"#app",render:function(n){return n(u>500?i.a:a.a)}})},85:function(n,e){},86:function(n,e){},87:function(n,e){},88:function(n,e){},96:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"stopEditor",on:{"~click":function(e){n.stop()}}},[n._v("跳过")]),n._v(" "),t("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}},97:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"styleEditor"},[t("div",{staticClass:"code",domProps:{innerHTML:n._s(n.codeInStyleTag)}}),n._v(" "),t("pre",{domProps:{innerHTML:n._s(n.highlightedCode)}})])},staticRenderFns:[]}},98:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:n.enableHtml}},[n.enableHtml?t("div",{domProps:{innerHTML:n._s(n.result)}}):t("pre",[n._v(n._s(n.result))])])},staticRenderFns:[]}},99:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"stopEditor",on:{"~click":function(e){n.stop()}}},[n._v("跳过")]),n._v(" "),t("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}}},[50]);
//# sourceMappingURL=app.aec662c4439eb91ced69.js.map