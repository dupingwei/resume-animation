<template>
  <div id="app">
    <div class="stopEditor" @click.once="stop()">跳过</div>
    <StyleEditor ref="styleEditor" :code="currentStyle"></StyleEditor>
    <ResumeEditor ref="resumeEditor" :markdown="currentMarkdown" :enableHtml="enableHtml"></ResumeEditor>
  </div>
</template>

<script>
  import StyleEditor from './components/StyleEditor'
  import ResumeEditor from './components/ResumeEditor'
  import './assets/reset.css'

  export default {
    name: 'app',
    components: {
      StyleEditor,
      ResumeEditor
    },
    data() {
      return {
        interval: 20,
        currentStyle: '',
        enableHtml: false,
        fullStyle: [
          `/*
 * Hi 你好，我是杜萍伟，是一名求职者
 * 感谢查看我的简历 Ｏ(≧▽≦)Ｏ
 * 下面我要开始我的表演了！
 * 简历构建中
 * ··· 3 ···
 * ··· 2 ···
 * ··· 1 ···
*/

/* 首先给所有元素加上过渡效果 */
* {
  transition: all .3s;
}

/* 白色背景有点扎眼，我们来点背景色 */
html {
  color: rgb(53,53,53);
  background: rgb(232,233,237);
}

/* 文字离边框太近了 */
.styleEditor {
  margin: 1em;
  padding: 1em;
  width: 30vw;
  height: 95vh;
  background: rgb(242,242,242);
  border-radius:3px;
  overflow: auto;
}

/* 代码高亮才能展现美 */
.token.selector{color: rgb(133,153,0 );}
.token.property{color: rgb(187,137,0 );}
.token.punctuation{color: black;}
.token.function{color :rgb(42,161,152);}

/* 加点 3D 效果？ */
html{
  perspective: 1000px;
}
.styleEditor {
  position: fixed; left: 0; top: 0;
  -webkit-transition: none;
  transition: none;
  -webkit-transform: rotateY(10deg)
                     translateZ(-100px);
          transform: rotateY(10deg)
                     translateZ(-100px);
}

/* 呃呃呃...好像3D的忒丑，那我还是去掉吧！*/
.styleEditor{
  transform:none;
}

/* 看了这么久您可能着急了
 * 右上角有跳过按钮，可以直接看最后结果
 */

/* 接下来我得做一个编辑器 */
.resumeEditor{
  font-family: "Georgia", "Xin Gothic",
        "Hiragino Sans GB", "Droid Sans Fallback",
        "Microsoft YaHei", sans-serif;
  position: fixed;
  right: 0; top: 0;
  padding: 1em;  margin: 1em;
  width: 65vw; height: 95vh;
  border-radius: 5px;
  background: rgb(211,217,227);
  color: #222;
  overflow: auto;
}

/* OK，那么现在开始写简历 */
`,
          `
/* 这个简历有些丑...
 * emm，这是 Markdown 格式的
 * 我需要变成更友好的样式
 * 那么，用开源工具翻译成 HTML 就行了
 */
`,
          `
/* 再对 HTML 加点样式 */
.resumeEditor{
  padding: 2em;
}
.resumeEditor p{
  margin: 10px 0;
  color: #555;
}
.resumeEditor h1{
  font-size: 1.6rem;
  line-height: 28px;
  margin: 52px 0 15px 0;
  padding-bottom: 7px;
  color: #000;
}
.resumeEditor h2{
  font-size: 1.3rem;
  line-height: 23px;
  margin: 30px 0 13px 0;
  padding-bottom: 7px;
  color: #333;
}
.resumeEditor h3{
  font-size: 1.2rem;
  line-height: 18px;
  margin: 20px 0 2px;
  padding-bottom: 7px;
  color: #333;
}
.resumeEditor ul{
  display: block;
  list-style-type: disc;
  padding-left: 17px;
  margin: 6px 0 10px;
  color: #555;
}
.resumeEditor ul li{
  position: relative;
  left: 15px;
}
.resumeEditor blockquote {
  border-left: 4px solid #aba8a8;
  padding: 0 15px;
}
.resumeEditor blockquote>:last-child {
  margin-bottom: 15px;
}
.resumeEditor blockquote>:first-child {
  margin-top: 15px;
}
`],
        currentMarkdown: '',
        fullMarkdown: `
## 个人信息
- 杜萍伟/男/1995
- 本科/邯郸学院统计学
- 期望职位：Java开发工程师
- 手机：13323007604
- Email：dpw0609@163.com、dupingwei@qq.com
- QQ：775357468

## 技能清单

- Java基础扎实，熟悉Java常用设计模式，熟悉SOA架构开发流程；熟悉并能使用Node开发后台；
- 熟练运用Spring、SpringMVC、Mybatis、Struts2、Hibernate、JFinal、Express等常用开源框架；
- 了解UEditor、DUBBO、zookeeper等技术；
- 熟练使用HTML、Ajax、JQuery、Bootstrap、Vue、Sass、Webpack等前端技术；
- 熟悉MySQL、Oracle，能够熟练编写常用SQL语句；熟练使用NoSQL数据库Redis；
- 版本管理：SVN、Git；
- 熟悉使用Linux操作系统，了解常用指令、能够搭建Java开发环境；
- 熟练使用多种工具，如：Jmeter、Teambetion、禅道、墨刀、Easy Mock、Docsify等

## 工作经历

### 北京同创永益科技发展有限公司 （2017/01 -- 2017/05）

#### IStorm V3.2 存储运维管理软件
> 开发环境：Eclipse、tomcat8、MySQL5.6、Spring、MyBatis、SpringMVC
>
> 项目简介：本系统是基于B/S架构而设计开发，旨在提供全面的存储监控方案，降低运维风险，提高管理效率、资源利用率、分析能力等。
>
> 责任描述：资产管理、告警管理、配置管理模块前台数据交互模块以及后台对应功能代码的实现。

### 浙江金惠科技有限公司 （2017/07 -- 2018/03）

#### 公积金新网厅研发
> 开发环境：WebStorm、Node、vue、iView
>
> 项目URL：http://lvyueyang.gitee.io/wangtingyanshi/mock （账号密码随意输入即可）
>
> 项目简介：该项目采用前后端分离技术。前端使用vue-cli搭建，并采用iView作为UI 组件库，其中使用vuex、vue-amap、vue-xlsx-table、axios、sass等技术；后端使用node.js,并采用request、experss、superagent、crypto等模块。
>
> 责任描述：前端负责个人版（查询）、单位版（全部）开发；后端负责Node接口转发项目开发；根据综合服务平台接口文档制作并维护jMeter文件；并负责多方项目之间的协作沟通，推进项目进度。

#### 河北省直公积金网厅维护
> 项目简介：此项目主要为后期维护
>
> 责任描述：负责后期bug的修复、功能的修改、新需求的开发、现场问题的解决。

#### 其他项目
  > 公众号-贵安新区公积金和社保中心：公众号主动推送功能（ActiveMQ）、留言功能；管理平台留言处理功能。
  >
  > 公众号-汕头市住房公积金管理中心：公众号主动推送功能、公积金个人贷款查询（六类）功能，数据库Oracle到MySQL迁移。
  >
  > [贵安新区网站](http://www.gaxqgjj.com/)：网站留言建议、回复功能开发。

## 自我评价
- 勤恳务实，有严格的执行能力
- 代码规范良好，注释、文档撰写规范
- 有较好的沟通协调能力
- 接受新事物的能力较强，有良好的抗压能力，有坚定的信心去面对新的任务，发挥自己最大的能力为公司创造更多的效益。

`
      }
    },
    created() {
      this.makeResume()
    },

    methods: {
      makeResume: async function () {
        await this.progressivelyShowStyle(0);
        await this.progressivelyShowResume();
        await this.progressivelyShowStyle(1);
        await this.showHtml();
        await this.progressivelyShowStyle(2)
      },
      showHtml: function () {
        return new Promise((resolve, reject) => {
          this.enableHtml = true;
          resolve()
        })
      },
      progressivelyShowStyle(n) {
        return new Promise((resolve, reject) => {
          let interval = this.interval;
          let showStyle = (async function () {
            let style = this.fullStyle[n];
            if (!style) {
              return
            }
            // 计算前 n 个 style 的字符总数
            let length = this.fullStyle.filter((_, index) => index <= n).map((item) => item.length).reduce((p, c) => p + c, 0)
            let prefixLength = length - style.length;
            if (this.currentStyle.length < length) {
              let l = this.currentStyle.length - prefixLength;
              let char = style.substring(l, l + 1) || ' ';
              this.currentStyle += char;
              if (style.substring(l - 1, l) === '\n' && this.$refs.styleEditor) {
                this.$nextTick(() => {
                  this.$refs.styleEditor.goBottom();
                })
              }
              setTimeout(showStyle, interval)
            } else {
              resolve()
            }
          }).bind(this);
          showStyle()
        })
      },
      progressivelyShowResume() {
        return new Promise((resolve, reject) => {
          let length = this.fullMarkdown.length;
          let interval = 5;
          let showResume = () => {
            if (this.currentMarkdown.length < length) {
              this.currentMarkdown = this.fullMarkdown.substring(0, this.currentMarkdown.length + 1);
              let lastChar = this.currentMarkdown[this.currentMarkdown.length - 1];
              let prevChar = this.currentMarkdown[this.currentMarkdown.length - 2];
              if (prevChar === '\n' && this.$refs.resumeEditor) {
                this.$nextTick(() => this.$refs.resumeEditor.goBottom())
              }
              setTimeout(showResume, interval)
            } else {
              resolve()
            }
          };
          showResume()
        })
      },
      stop() {
        this.currentMarkdown = this.fullMarkdown;
        this.currentStyle = this.fullStyle;
      }
    }
  }

</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    min-height: 100vh;
  }

  * {
    box-sizing: border-box;
  }

  .stopEditor {
    width: 50px;
    height: 50px;
    position: fixed;
    right: 50px;
    top: 35px;
    z-index: 1040;
    cursor: pointer;
    background-color: rgba(107, 138, 167, 1);
    border-radius: 50%;
    font-size:20px;
    text-align:center;
    line-height:50px;
    color:#000;
  }
</style>
