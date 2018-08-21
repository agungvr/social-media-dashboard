import React from 'react';
import {Button, Icon} from 'semantic-ui-react';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';

const S_Button = styled(Button)`
  &&& {
    border-radius: 20px;
    background-color: white;
    color: cadetblue;
    border: 1px solid cadetblue;
    margin-bottom: 10px;
  }
`;

const BackButton = ({history, path}) => (
  <S_Button color="grey" size='small' onClick={() => path ? history.push(path) : history.goBack()}>
    <Icon name="arrow left"/>
    Back
  </S_Button>
);

export default withRouter(BackButton)
