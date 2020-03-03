var vm = new Vue({
  el: '#app',
  data: {
    icons: {
      splitLine: 'icon-anjianfengexian',
      experience: 'icon-briefcase',
      degree: 'icon-xueli',
      status: 'icon-morentouxiang',
      mobile: 'icon-dianxiaohuokanjiabangtuan-shangjiaicon_huaban',
      wechat: 'icon-weixin',
      email: 'icon-youxiang',
      block: 'icon-shuxian',
      post: 'icon-augiclingdaiqian',
      salary: 'icon-qian',
      industry: 'icon-shujumianban',
      position: 'icon-weizhi',
    },
    name: '周鑫',
    header: {
      experience: '3年经验',
      degree: '本科',
      status: '在职-考虑机会',
      mobile: '18665664971',
      wechat: 'z630201431',
      email: '630201431@qq.com',
    },
    resumeList: [{
      type: 'advantage',
      title: '个人优势',
      advantage: [
        '扎实的JS基础',
        '精通H5,CSS3,ES6语法，熟练使用sass，less',
        '精通Vue全家桶和小程序开发,熟悉elementui,mintui框架',
        '熟悉webpack，了解Reactjs，Angularjs',
        '熟悉nodejs，熟悉express，koa，egg，midway框架',
        '熟悉Java语言，熟悉SSM后台开发框架',
        '逻辑思维强悍，学习能力强。',
      ]
    }, {
      type: 'post',
      title: '期望职位',
      postInfo: {
        post: 'web前端',
        salary: '面议',
        industry: '计算机软件、移动互联网',
        position: '长沙'
      }
    }, {
      type: 'application',
      title: '项目经历',
      appList: [{
          date: '2019.10-2019.11',
          company: '广州海鹚网络科技有限公司',
          appName: '长沙中信湘雅生殖与遗传专科医院（微信小程序）', // 项目名称
          duty: '小程序部分负责人以及管理后台BUG修改', // 责任描述
          appDesc: '帮助医院为患者提供线上咨询、挂号、缴费、视频就诊、报告查询等功能', // 项目描述
          appRole: '担任小程序部分的负责人，全权开发小程序端（登录注册，在线咨询，挂号，缴费，视频就诊，报告查询等页面），小程序管理后台（患者查询，统计分析页面）。负责和产品以及后端沟通。', // 参与角色
          mainTech: '原生小程序，wepy（小程序开发框架），腾讯视频云，ES6，CSS3，WXS，OCR（身份证识别）', //主要技术
        },
        {
          date: '2019.04-2019.09',
          company: '中惠旅智慧景区管理股份有限公司',
          appName: '中惠旅集团(APP嵌入H5)', // 项目名称
          duty: '项目前端大部分页面', // 责任描述
          appDesc: '对景区的游客、车辆、收入、财务、景点、订单、联营商户进行大数据统计分析', // 项目描述
          appRole: '负责部分页面（用户画像、停车数据、收入数据、订单统计）。', // 参与角色
          mainTech: 'Vue（主要框架），Vue-router（页面路由），Vuex（全局状态管理），axios（与后台交换数据），mint-ui（主要UI库），echarts（图表库），组件封装，webpack（组件分包，gzip压缩，cdn加速）', //主要技术
        },
        {
          date: '2019.05-2019.06',
          company: '中惠旅智慧景区管理股份有限公司',
          appName: '中惠旅智慧景区报团系统(微信小程序)', // 项目名称
          duty: '项目前端负责人', // 责任描述
          appDesc: '为合作伙伴和营销员提供在线工具，方便景区提前安排，方便公司为营销员计算业绩与提成。', // 项目描述
          appRole: '前端部分负责人，主要模块有系统首页，报团申请，报团详情，个人中心，身份验证等', // 参与角色
          mainTech: 'uni-app（主要框架），Vue，Vuex（全局状态管理）', //主要技术
        },
        {
          date: '2019.04-2019.04',
          company: '中惠旅智慧景区管理股份有限公司',
          appName: 'AI数据管理(微信小程序)', // 项目名称
          duty: '项目前端负责人', // 责任描述
          appDesc: '为景区提供订单查询，订单核销，核销查询，退款审核，门票核销，奖品核销，点标定位，设备管理，设备检查等功能', // 项目描述
          appRole: '前端部分负责人，主要模块有订单管理，核销管理，点标定位，设备管理等', // 参与角色
          mainTech: 'wepy（小程序开发框架），原生小程序开发', //主要技术
        },
        {
          date: '2018.12-2019.03',
          company: '湖南都成科技有限公司',
          appName: '阅卷系统(WEB端)', // 项目名称
          duty: '项目前端负责人', // 责任描述
          appDesc: '为学校提供试题录入，试卷制作，答题卡制作，考试创建，学生信息导入，答题卡扫描，图片裁剪，图像识别，试卷批阅，学生成绩统计分析，错题本，试题推荐等功能。', // 项目描述
          appRole: '前端部分负责人(也涉及后端)，主要模块有登录注册，题库，信息导入，答题卡扫描，图片裁剪，试卷批阅，统计分析，错题本', // 参与角色
          mainTech: 'Vue（主要框架）,Vue-cli（项目搭建）,Vue-router（前端路由）,Vuex（状态管理）,ElementUI（主要UI库）,axios（与后端交互）,echerts和v-charts（图表组件）,mathjax（公式解析），quill-editor（富文本编辑器）', //主要技术
        },
        {
          date: '2018.04-2018.11',
          company: '湖南都成科技有限公司',
          appName: '项目重构（WEB端）', // 项目名称
          duty: '项目前端负责人', // 责任描述
          appDesc: '在原有接口的基础上，为公司的原有项目重构前端视图和逻辑。', // 项目描述
          appRole: '负责原有项目的前端架构设计，和页面视图、页面逻辑的重写与优化以及打包优化上线。', // 参与角色
          mainTech: 'Vue（主要框架）,Vue-cli（项目搭建）,Vue-router（前端路由）,Vuex（状态管理）,ElementUI（主要UI库）,axios（与后端交互）', //主要技术
        },
        {
          date: '2017.07-2018.03',
          company: '广州微康信息科技有限公司',
          appName: '云药库（微信小程序）', // 项目名称
          duty: '负责前端部分页面（涉及部分后端）', // 责任描述
          appDesc: '主要功能有药品分类展示，药品搜索，药品报单，报单审批追踪，店员提成', // 项目描述
          appRole: '负责（药品搜索，药品报单，报单审批追踪，店员提成）等页面开发以及后端数据接口开发', // 参与角色
          mainTech: '原生小程序开发，CSS，JavaScript，bootstrap（后台管理页面），Java（后端语言），springboot（后端热启动，精简配置文件），springMVC（后端接口路由），Mybatis（ORM框架），Python（负责药品数据爬取），Redis（缓存），MySQL数据库', //主要技术
        },
        {
          date: '2017.01-2018.03',
          company: '广州微康信息科技有限公司',
          appName: '药顾问（微信小程序，现已停止服务）', // 项目名称
          duty: '负责前端部分页面（涉及部分后端）', // 责任描述
          appDesc: '主要功能有药品展示，药品搜索，药品使用说明及注意事项', // 项目描述
          appRole: '负责（药品展示，药品搜索，语音搜索，附近药店）等页面开发以及后续升级维护', // 参与角色
          mainTech: '原生小程序开发，CSS，JavaScript，语音转文字，腾讯地图API，ThinkPHP（后端接口开发），bootstrap（后台管理页面），MongoDB（搜索记录存储），MySQL数据库', //主要技术
        },
        // {
        //   date: '', // 项目时间
        //   company: '', // 所在公司
        //   appName: '', // 项目名称
        //   duty: '', // 责任描述
        //   appDesc: '', // 项目描述
        //   appRole: '', // 参与角色
        //   mainTech: '', //主要技术
        // }
      ]
    }, {
      type: 'education',
      title: '教育经历',
      education: {
        school: '湖南工业大学',
        profession: '信息与计算科学', // 专业
        degree: '统招本科',
        course: 'C语言，Java，C#，SqlServer，HTML，CSS，JavaScript，计算机基础，数学分析，概率论与数理统计，运筹学，数学建模等', // 课程
        other: '担任学校教学信息中心教学信息员，院学生会干事'
      }
    }]
  },
  created: function () {},
  mounted: function () {},
  beforeDestroy: function () {}
});