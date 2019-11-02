module.exports = {
    title: '前端开发者手册2019',
    description: 'Cody Lindley编著,Frontend Masters 赞助，通过有深度的现代前端工程课程提升您的开发技能',
    themeConfig: {
        sidebar: [
            {
              title: '概述',
              collapsable: false,
              children: [
                '/overview/'
              ]
            },
            {
              title: '回顾2018，展望未来 ',
              collapsable: false,
              children: [
                '/chapter0/chapter0.1',
                '/chapter0/chapter0.2',
                '/chapter0/chapter0.3',
              ]
            },
            {
              title: '什么是前端开发者',
              collapsable: false,
              children: [
                '/chapter1/chapter1.0'
              ]
            },
            {
              title: '前端开发实践：概述',
              collapsable: false,
              children: [
                '/chapter2/chapter2.0',
                '/chapter2/chapter2.1',
                '/chapter2/chapter2.2'

              ]
            }
          ]
      }
  }