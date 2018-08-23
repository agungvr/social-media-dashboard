import React, {Component} from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {Button, Card, Image, Icon, Comment, Form, Header, Modal} from 'semantic-ui-react'
import Comments from './Comments';
import {postsRequest} from "../../../actions/posts";

class Post extends Component {
  state = {
    title: '',
    body: ''
  };

  _handleText = (key) => (e) => {
    this.setState({
      [key]: e.target.value
    })
  };

  _deleteClick = post => e => {
    e.preventDefault();
    const data = {
      postId: post.id
    };
    this.props.dispatchDeletePost(data);
  };

  _editClick = postsId => e => {
    e.preventDefault();
    const data = {
      postsId,
      payload: {
        title: this.state.title,
        body: this.state.body
      }
    };
    this.props.dispatchEditPost(data);
  };

  render() {
    const {post} = this.props;
    return (
      <Card style={{width: '70%'}}>
        <NotificationContainer/>
        <Card.Content>
          <Card.Header style={{color: '#00b5ad'}}>
            {post.title.toUpperCase()}
          </Card.Header>
          <Card.Description style={{marginTop: 10}}>
            {post.body}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="d-flex j-c-e">
            <Modal onOpen={() => this.setState({
              title: post.title.toUpperCase(),
              body: post.body
            })} size='tiny' trigger={
              <div className="m-r-20">
                <a>
                  <Icon name='pencil'/>
                  Edit
                </a>
              </div>
            }>
              <Modal.Content image>
                <Modal.Description>
                  <Form reply>
                    <Form.Field>
                      <label>Title</label>
                      <input onChange={this._handleText('title')} value={this.state.title}/>
                    </Form.Field>
                    <Form.Field>
                      <label>Content</label>
                      <Form.TextArea style={{height: 100}}
                                     onChange={this._handleText('body')} value={this.state.body}/>
                    </Form.Field>
                    <div className="d-flex j-c-e">
                      <Button size="tiny" content='Edit' labelPosition='left' icon='edit' color="teal"
                              onClick={this._editClick(post.id)}/>
                    </div>
                  </Form>
                </Modal.Description>
              </Modal.Content>
            </Modal>
            <div>
              <a href="#" onClick={this._deleteClick(post)}>
                <Icon name='trash'/>
                Delete
              </a>
            </div>
          </div>
        </Card.Content>
        <Card.Content extra>
          <Comments postsId={post.id}/>
        </Card.Content>
      </Card>
    )
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    dispatchEditPost: (data) => postsRequest({method: 'PUT', data}),
    dispatchDeletePost: (data) => postsRequest({method: 'DELETE', data})
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(Post);


