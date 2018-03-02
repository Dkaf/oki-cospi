import React from 'react';
import { Menu, GridColumn } from 'semantic-ui-react';

const NavBar = () => (
  <GridColumn>
    <Menu widths="4">
      <Menu.Item name="gallery" content="Gallery" href="#"/>
      <Menu.Item name="patreon" content="Patreon" href="#"/>
      <Menu.Item name="facebook" content="Facebook" href="#"/>
      <Menu.Item name="instagram" content="Instagram" href="#"/>
    </Menu>
  </GridColumn>
);

export default NavBar;