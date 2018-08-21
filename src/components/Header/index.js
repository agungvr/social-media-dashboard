import React from 'react'
import {Menu, MenuItem, Header as Title} from 'semantic-ui-react'
import styled from 'styled-components';

const S_Menu = styled(Menu)`
  &&& {
    border-radius: 0px;
    margin-bottom: 0px;
    margin-top: 0px;
  }
`;

export const Header = () => (
  <S_Menu stackable>
    <MenuItem>
      <img src='https://cdn.techinasia.com/data/images/630dfae1e5c3d8f5f7d6d8fb5bcb5d68.png'/>
    </MenuItem>
    <MenuItem>
      <Title as='h4'>
        Social Media Dashboard
      </Title>
    </MenuItem>
  </S_Menu>
);
