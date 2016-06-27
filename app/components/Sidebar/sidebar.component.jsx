import React from 'react';
import {connect} from 'react-redux';
import {Menu, Icon} from 'antd';
import {Link} from 'react-router';
import {sidebar}  from '../../config/app';
import {autobind} from 'core-decorators';
import './sidebar.css';

const SubMenu = Menu.SubMenu;

@connect(state => ({
  router: state.routing
}))
class Sidebar extends React.Component {
  constructor(props) {
      super(props);
  }

  @autobind()
  getCurrentPath() {
    const pathname = this.props.router.locationBeforeTransitions.pathname;
    let cleanPath = pathname;
    if (pathname !== '/' && pathname[0] === '/') {
      cleanPath = pathname.slice(1, pathname.length);
    }
    return cleanPath;
  }

  shouldComponentUpdate(nextProps) {
    const nextPath = nextProps.router.locationBeforeTransitions.pathname;
    if (nextPath === this.props.router.locationBeforeTransitions.pathname) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    return (
      <div className="layout-sidebar"
           style={{ width: 210 }}>
        <Menu style={{ width: 210}}
            defaultOpenKeys={['sub0', 'sub1', 'sub10']}
            theme="dark-blue"
            selectedKeys={[this.getCurrentPath()]}
            mode="inline">
          {
            sidebar.map((ele, index) => {
              return (
                <SubMenu key={`sub${index}`} title={<span>
                  <Icon type={ele.icon} />{ele.title}</span>}>
                  {
                    ele.sub.map((sele, sindex) => {
                      let subMenu;
                      if (sele.sub && sele.sub.length) {
                        subMenu = (
                          <SubMenu key={`sub${index}${sindex}`} title={sele.title}>
                            {
                              sele.sub.map((mele, mindex) => {
                                return (
                                  <Menu.Item key={mele.link}>
                                    <Link to={mele.link}>{mele.title}</Link>
                                  </Menu.Item>
                                );
                              })
                            }
                          </SubMenu>
                        );
                      } else {
                        subMenu = (
                          <Menu.Item key={sele.link}>
                            <Link to={sele.link}>{sele.title}</Link>
                          </Menu.Item>
                        );
                      }

                      return subMenu;
                    })
                  }
                </SubMenu>
              );
            })
          }
        </Menu>
      </div>
    );
  }
}

export default Sidebar;
