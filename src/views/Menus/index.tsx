import React from 'react';
import { Menu } from '../../components';
const { MenuItem, SubMenu } = Menu;


class Menus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        {/* mode="vertical" */}
        <Menu defaultIndex={0} onSelect={(index) => { console.log(index); }}>
          <MenuItem>active</MenuItem>
          <MenuItem disabled={true}>disabled</MenuItem>
          <MenuItem>xyz</MenuItem>
          <SubMenu title="下载">
            <MenuItem>下载1</MenuItem>
            <MenuItem>下载2</MenuItem>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default Menus;
