import React from 'react'
import { Link } from "react-router-dom";
import {
  Container,
  Dropdown,
  Image,
  Menu,
} from 'semantic-ui-react'

const MainMenu = () => (
  <div>
    <Menu fixed='top' inverted>
      <Container fluid>
        <Menu.Item as='span' header>
          <Image size='mini' src='/logo192.png' style={{ marginRight: '1.5em' }} />
          <Link to='/'>Onebox</Link>
        </Menu.Item>
        <Menu.Item as='span'><Link to='/'>Home</Link></Menu.Item>
        <Menu.Item as='span'><Link to='/contact'>Contact</Link></Menu.Item>

        <Dropdown item simple text='Dropdown'>
          <Dropdown.Menu>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon' />
              <span className='text'>Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>
  </div>
)

export default MainMenu