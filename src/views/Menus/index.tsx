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
        <Menu defaultIndex={0} onSelect={(index) => { console.log(index); }} mode="vertical">
          <MenuItem>active</MenuItem>
          <MenuItem disabled={true}>disabled</MenuItem>
          <MenuItem>xyz</MenuItem>
          <SubMenu title="下载">
            <MenuItem>1</MenuItem>
            <MenuItem>2</MenuItem>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default Menus;
