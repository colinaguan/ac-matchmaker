import React, {useEffect, useState} from 'react';
import {styled} from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MuiBox from '@mui/material/Box';
import MuiAvatar from '@mui/material/Avatar';
import MuiPaper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import ForumsComment from './ForumsComment';
import ForumsNewPost from './ForumsNewPost';
import ForumsPost from './ForumsPost';

const Paper = styled((props) => (
  <MuiPaper elevation={0} {...props} />
))(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  padding: '1.5em 2em 1.5em 2em',
  marginTop: '1em',
  height: 'auto',
  width: 'auto',
  background: 'white',
  boxShadow: '0px 4px 50px -15px rgba(0, 86, 166, 0.15)',
  border: '0.5px solid rgba(0, 0, 0, 0.15)',
  borderRadius: '10px',
}));

const Loading = (props) => (
  <MuiBox
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '25%',
    }}
  >
    <CircularProgress {...props} />
  </MuiBox>
);

const Input = ({image}, props) => (
  <MuiBox
    sx={{
      display: 'flex',
      gap: '10px',
    }}
  >
    <MuiAvatar
      src={image}
      sx={{
        marginBlock: '4px',
        height: '30px',
        width: '30px',
      }}
    />
    <TextField
      placeholder='Write a comment...'
      size='small'
      InputProps={{
        style: {
          fontSize: '0.9rem',
          borderRadius: '10px',
        },
      }}
      multiline
      fullWidth
      {...props}
    />
    <IconButton
      color='primary'
      sx={{
        display: 'flex',
        height: '38px',
        width: '38px',
        padding: 0,
      }}
    >
      <SendRoundedIcon />
    </IconButton>
  </MuiBox>
);

/**
 * Forums tab for view opportunity
 * @return {JSX}
 */
export default function ViewOpportunityForums({id}) {
  const [expanded, setExpanded] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (postid, index) => {
    if (expanded.includes(index)) {
      setExpanded(expanded.filter((item) => item !== index));
    } else {
      setExpanded((prevExpanded) => ([
        ...prevExpanded,
        index,
      ]));
    }
    getComments(postid, index);
  };

  const getPosts = () => {
    setIsLoading(true);
    fetch(`/api/getPosts/${id}`)
        .then((res) => {
          if (!res.ok) {
            throw res;
          }
          return res.json();
        })
        .then((json) => {
          console.log(json);
          setPosts(json);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          alert('Error retrieving opportunity posts');
        });
  };

  const getComments = (postid, index) => {
    fetch(`/api/getComments/${postid}`)
        .then((res) => {
          if (!res.ok) {
            throw res;
          }
          return res.json();
        })
        .then((json) => {
          setComments((prevComments) => ({
            ...prevComments,
            [index]: json,
          }));
        })
        .catch((err) => {
          console.log(err);
          alert('Error retrieving opportunity comments');
        });
  };

  const postNewPost = (data) => {
    fetch(`/api/postPost`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
        .then((res) => {
          if (!res.ok) {
            throw res;
          }
          return res.json();
        })
        .then((json) => {
          console.log(data);
          console.log(json);
          setPosts((prevPosts) => [json, ...prevPosts]);
        })
        .catch((err) => {
          console.log(err);
          alert('Error retrieving opportunity posts');
        });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <ForumsNewPost postNewPost={postNewPost} />
      {isLoading ? <Loading /> : null}
      {posts ? (
        posts.map((post, index) => (
          <Paper key={`post-${index}`}>
            <ForumsPost
              post={post}
              expanded={expanded}
              index={index}
              handleClick={(postid, i) => handleClick(postid, i)}
            />
            {expanded.includes(index) && comments.hasOwnProperty(index) && (
              <>
                {comments[index].length > 0 && (
                  <Divider
                    sx={{borderBottom: '0.5px solid rgba(0, 0, 0, 0.15)'}}
                  />
                )}
                {comments[index].map((comment, commentIndex) => (
                  <ForumsComment
                    key={`comment-${commentIndex}`}
                    comment={comment}
                    index={commentIndex}
                  />
                ))}
              </>
            )}
            <Input />
          </Paper>
        ))
      ) : (
        <p>There are no posts</p>
      )}
    </>
  );
};
