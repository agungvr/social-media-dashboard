import React from 'react'
import {Menu, MenuItem, Icon, Header as Title} from 'semantic-ui-react'
import styled from 'styled-components'

const S_Menu = styled(Menu)`
  &&& {
    border-radius: 0px;
    width: 67px !important;
    height: 100vh;
    margin-top: 0px;
    background-color: #293149 !important;
    padding-top: 10px;
  }
`;

const S_MenuItem = styled(MenuItem)`
   &&& {
    min-width: 67px !important;
    color: white !important;
    background-color: #ea452e  !important;
    width: 69px !important;
    border-right: 2px solid #00a5af !important;
   }
`;

export const Sidebar = () => (
  <div className="app-sidebar">
    <S_Menu stackable icon='labeled' vertical>
      <S_MenuItem>
        <Icon name='home'/>
        Home
      </S_MenuItem>
    </S_Menu>
  </div>
);
