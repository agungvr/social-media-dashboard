import React, {Component} from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {commentsRequest} from "../../../actions/comments";
import {Button, Modal, Segment, Dimmer, Loader, Comment, Form} from 'semantic-ui-react'
import {NotificationContainer, NotificationManager} from 'react-notifications';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.withBlocking = false;
    this.state = {
      body: '',
      editText: ''
    };
  }

  componentDidMount() {
    const {dispatchGetComments, postsId} = this.props;
    const data = {postsId};
    dispatchGetComments(data);
  }

  componentWillReceiveProps(nextProps) {
    if (this.withBlocking === true && nextProps.loading === false) {
      if (nextProps.error === false) {
        setTimeout(() => {
          NotificationManager.success('Success');
        }, 500);
        this.withBlocking = false;
        this.setState({body: ''})
      } else {
        NotificationManager.error('Error');
      }
    }
  }

  _commentClick = () => {
    if (this.state.body !== '') {
      const data = {
        body: this.state.body
      };
      this.props.dispatchAddComments(data);
      this.withBlocking = true;
    } else {
      NotificationManager.error('Please insert comment field!', 'Alert');
    }
  };

  _deleteComment = commentId => e => {
    const data = {
      commentId
    };
    this.props.dispatchAddComments(data);
    this.withBlocking = true;
  };

  _editComment = commentId => e => {
    const data = {
      commentId,
      payload: {
        body: this.state.editText
      }
    };
    this.props.dispatchEditComments(data);
    this.withBlocking = true;
  };

  render() {
    const {loading, comments, postsId} = this.props;
    return (
      <div>
        <Comment.Group size="mini">
          {
            loading === false && comments[postsId] &&
            comments[postsId].map((x, i) =>
              <div key={`index-${i}`} className="m-b-20">
                <Comment>
                  <Comment.Avatar as='a'
                                  src='https://www.yourfirstpatient.com/assets/default-user-avatar-thumbnail@2x-ad6390912469759cda3106088905fa5bfbadc41532fbaa28237209b1aa976fc9.png'/>
                  <Comment.Content>
                    <Comment.Author as='a' style={{color: '#7c87f4'}}>{x.email}</Comment.Author>
                    <Comment.Text>{x.body}</Comment.Text>
                    <Comment.Actions>
                      <Modal onOpen={() => this.setState({editText: x.body})} size='tiny' trigger={
                        <Comment.Action>Edit</Comment.Action>
                      }>
                        <Modal.Content image>
                          <Modal.Description>
                            <Form reply>
                              <Form.Field>
                                <label>Comments</label>
                                <Form.TextArea style={{height: 100}}
                                               onChange={(e) => this.setState({editText: e.target.value})}
                                               value={this.state.editText}/>
                              </Form.Field>
                              <div className="d-flex j-c-e">
                                <Button size="tiny" content='Edit' labelPosition='left' icon='edit' color="teal"
                                        onClick={this._editComment(x.id)}/>
                              </div>
                            </Form>
                          </Modal.Description>
                        </Modal.Content>
                      </Modal>
                      <Comment.Action onClick={this._deleteComment(x.id)}>Delete</Comment.Action>
                    </Comment.Actions>
                  </Comment.Content>
                </Comment>
              </div>
            )
          }

          <Form reply>
            <Form.TextArea style={{height: 70}} value={this.state.body}
                           onChange={(e) => this.setState({body: e.target.value})}/>
            <div className="d-flex j-c-e">
              <Button onClick={this._commentClick} size="mini" content='Add Reply' labelPosition='left' icon='edit'
                      color="teal"/>
            </div>
          </Form>
        </Comment.Group>
      </div>
    )
  }
}

const mapStateToProps = ({comments}) => ({
  loading: comments.fetching,
  error: comments.error,
  comments: comments.payload
});


const mapDispatchToProps = dispatch => (
  bindActionCreators({
    dispatchGetComments: (data) => commentsRequest({method: 'GET_ID', data}),
    dispatchAddComments: (data) => commentsRequest({method: 'POST', data}),
    dispatchEditComments: (data) => commentsRequest({method: 'PUT', data}),
    dispatchDeleteComments: (data) => commentsRequest({method: 'DELETE', data})
  }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(Comments);
