import React from 'react'
import {Menu, MenuItem, Header as Title} from 'semantic-ui-react'
import styled from 'styled-components';

const SMenu = styled(Menu)`
  &&& {
    border-radius: 0px;
    margin-bottom: 0px;
    margin-top: 0px;
    width: 100%;
    position: fixed;
    z-index: 2;
  }
`;

export const Header = () => (
  <SMenu stackable>
    <MenuItem>
      <img src='https://cdn.techinasia.com/data/images/630dfae1e5c3d8f5f7d6d8fb5bcb5d68.png'/>
    </MenuItem>
    <MenuItem>
      <Title as='h4'>
        Social Media Dashboard
      </Title>
    </MenuItem>
  </SMenu>
);
