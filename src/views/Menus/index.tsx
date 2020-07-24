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
        <Menu defaultIndex='0' onSelect={(index) => { console.log(index); }} mode="vertical" defaultOpenSubMenus={['3']}>
          <MenuItem>active</MenuItem>
          <MenuItem disabled={true}>disabled</MenuItem>
          <MenuItem>xyz</MenuItem>
          <SubMenu title="download">
            <MenuItem>download1</MenuItem>
            <MenuItem>download2</MenuItem>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default Menus;
