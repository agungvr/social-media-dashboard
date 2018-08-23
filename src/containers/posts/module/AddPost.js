import React, {Component} from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {Button, Card, Image, Icon, Comment, Form, Header} from 'semantic-ui-react'
import {postsRequest} from "../../../actions/posts";

class AddPost extends Component {
  constructor(props){
    super(props);
    this.withBlocking = false;
    this.state = {
      title: '',
      body: ''
    };
  }


  _handleText = (key) => (e) => {
    this.setState({
      [key]: e.target.value
    })
  };

  componentWillReceiveProps(nextProps){
    if(this.withBlocking === true && nextProps.loading === false){
      if(nextProps.error === false){
        setTimeout(() => {
          NotificationManager.success('Success');
        }, 500);
        this.withBlocking = false;
        this.setState({title: '', body: ''})
      }else{
        NotificationManager.error('Error');
      }
    }
  }

  _postClick = () => {
    const {title, body} = this.state;
    if(title && body !== ''){
      const {userId, dispatchAddPost} = this.props;
      const data = {
        title, body, userId
      };
      this.withBlocking = true;
      dispatchAddPost(data)
    }else{
      NotificationManager.error('Alert', 'Please insert all field!');
    }

  };

  render() {
    return (
      <Card style={{width: '70%'}}>
        <NotificationContainer/>
        <Card.Content>
          <Card.Header style={{color: '#707070'}}>
            Make Post
          </Card.Header>
          <Card.Description style={{marginTop: 10}}>
            <Form reply>
              <Form.Field>
                <label>Title</label>
                <input onChange={this._handleText('title')} value={this.state.title}/>
              </Form.Field>
              <Form.Field>
                <label>Content</label>
                <Form.TextArea style={{height: 100}} onChange={this._handleText('body')} value={this.state.body}/>
              </Form.Field>
            </Form>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="d-flex j-c-e">
            <Button size="mini" content='POST' labelPosition='left' icon='edit' color="teal" onClick={this._postClick}/>
          </div>
        </Card.Content>
      </Card>
    )
  }
}

const mapStateToProps = ({posts}) => ({
  loading: posts.fetching,
  error: posts.error,
  posts: posts.payload
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    dispatchAddPost: (data) => postsRequest({method: 'POST', data}),
    dispatchGetPost: (data) => postsRequest({method: 'GET_ID', data})
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
