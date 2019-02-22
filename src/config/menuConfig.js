const menuList = [
    {
      title: '首页', // 菜单标题名称
      key: '/home', // 对应的path
      icon: 'home', // 图标名称
      isPublic: true, // 公开的
    },
    {
      title: 'UI',
      key: '/ui',
      icon: 'appstore',
      children: [ // 子菜单列表
        {
          title: '按钮',
          key: '/ui/buttons',
          icon: 'bars'
        },
        {
          title: '弹框',
          key: '/ui/modals',
          icon: 'tool'
        },
        {
          title: 'loading',
          key: '/ui/loadings',
          icon: 'tool'
        },
        {
          title: '通知提醒',
          key: '/ui/notifications',
          icon: 'tool'
        },
        {
          title: '全局message',
          key: '/ui/messages',
          icon: 'tool'
        },
        {
          title: 'Tab页签',
          key: '/ui/tabs',
          icon: 'tool'
        },
        {
          title: '图片画廊',
          key: '/ui/gallery',
          icon: 'tool'
        },
        {
          title: '轮播图',
          key: '/product7',
          icon: 'tool'
        }
      ]
    },
  
    {
      title: '用户管理',
      key: '/user',
      icon: 'user'
    },
    {
      title: '角色管理',
      key: '/role',
      icon: 'safety',
    },
  
    {
      title: '订单管理',
      key: '/order',
      icon: 'safety',
    },
    {
      title: '图形图表',
      key: '/charts',
      icon: 'area-chart',
      children: [
        {
          title: '柱形图',
          key: '/charts/bar',
          icon: 'bar-chart'
        },
        {
          title: '折线图',
          key: '/charts/line',
          icon: 'line-chart'
        },
        {
          title: '饼图',
          key: '/charts/pie',
          icon: 'pie-chart'
        },
      ]
    },
  ]
  
  export default menuList