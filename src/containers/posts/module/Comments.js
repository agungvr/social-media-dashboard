import React, {Component} from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {commentsRequest} from "../../../actions/comments";
import {Button, Segment, Dimmer, Loader, Comment, Form} from 'semantic-ui-react'

class Comments extends Component {
  componentDidMount() {
    const {dispatchGetComments, postsId} = this.props;
    dispatchGetComments(postsId);
  }

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
                  <Comment.Avatar as='a' src='https://www.yourfirstpatient.com/assets/default-user-avatar-thumbnail@2x-ad6390912469759cda3106088905fa5bfbadc41532fbaa28237209b1aa976fc9.png'/>
                  <Comment.Content>
                    <Comment.Author as='a' style={{color: '#7c87f4'}}>{x.email}</Comment.Author>
                    <Comment.Text>{x.body}</Comment.Text>
                  </Comment.Content>
                </Comment>
              </div>
            )
          }

          <Form reply>
            <Form.TextArea style={{height: 70}}/>
            <Button size="mini" content='Add Reply' labelPosition='left' icon='edit' color="teal"/>
          </Form>
        </Comment.Group>
      </div>
    )
  }
}

const mapStateToProps = ({comments}) => ({
  loading: comments.fetching,
  comments: comments.payload
});


const mapDispatchToProps = dispatch => (
  bindActionCreators({
    dispatchGetComments: (postsId) => commentsRequest({method: 'GET', postsId})
  }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(Comments);
