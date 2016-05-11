const SideBar = [
  {
    title: '用户管理',
    icon: 'appstore',
    sub: [
      {
        title: '用户列表',
        link: '/accounts'
      },
      {
        title: '用户行为',
        link: ''
      }
    ]
  }, {
    title: '订阅管理',
    icon: 'appstore',
    sub: [
      {
        title: '订阅列表',
        link: '/orders'
      }, {
        title: '三级导航',
        sub: [
          {
            title: '取消订阅',
            link: '/'
          }
        ]
      }
    ]
  }
];


export default {
  sideBar: SideBar
};
