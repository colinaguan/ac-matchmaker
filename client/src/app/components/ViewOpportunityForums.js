import React, {useEffect, useState} from 'react';
import {styled} from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MuiBox from '@mui/material/Box';
import MuiAvatar from '@mui/material/Avatar';
import MuiPaper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

const Post = styled((props) => (
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

const Headline = styled((props) => (
  <MuiBox {...props} />
))(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
}));

const Comment = styled((props) => (
  <MuiBox {...props} />
))(() => ({
  display: 'flex',
  gap: '10px',
}));

const Bubble = styled((props) => (
  <MuiBox {...props} />
))(({theme}) => ({
  padding: '0.75em',
  borderRadius: '10px',
  background: theme.palette.tertiary.bright,
}));

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

const PosterAvatar = ({image}, props) => (
  <MuiAvatar sx={{height: '40px', width: '40px'}} src={image} {...props} />
);

const CommenterAvatar = ({image}, props) => (
  <MuiAvatar sx={{height: '30px', width: '30px'}} src={image} {...props} />
);

/**
 * Forums tab for view opportunity
 * @return {JSX}
 */
export default function ViewOpportunityForums({id}) {
  const [expanded, setExpanded] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState({});

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
    fetch(`/api/getPosts/${id}`)
        .then((res) => {
          if (!res.ok) {
            throw res;
          }
          return res.json();
        })
        .then((json) => {
          setPosts(json);
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

  useEffect(() => {
    if (id) {
      getPosts();
    }
  }, []);

  return (
    <>
      {posts ? (
        posts.map((post, index) => (
          <Post key={`post-${index}`}>
            <Headline>
              <PosterAvatar image={post.profilepicture} />
              <div>
                <div className='text-bold text-dark'>{post.content}</div>
                <p className='text-bold text-blue'>
                  {`${post.firstname} ${post.lastname}`}
                  <span className='text-normal text-gray'>
                    {` · 3hrs ago`}
                  </span>
                </p>
              </div>
            </Headline>
            <p>{post.content}</p>
            <div className='flex-end flex-align-center'>
              <p
                className='hover-underline'
                onClick={() => handleClick(post.postid, index)}
                style={{'cursor': 'pointer', 'userSelect': 'none'}}
              >
                {expanded.includes(index) ? 'Hide Comments' : 'Show Comments'}
              </p>
              <ArrowDropUpRoundedIcon
                sx={{
                  transform: expanded.includes(index) ? null : 'rotate(180deg)',
                  transition: 'transform 300ms ease-out',
                }}
              />
            </div>
            {
              expanded.includes(index) && comments.hasOwnProperty(index) &&
              (
                <>
                  {
                    comments[index].length > 0 && (
                      <Divider
                        sx={{borderBottom: '0.5px solid rgba(0, 0, 0, 0.15)'}}
                      />
                    )
                  }
                  {comments[index].map((comment, commentIndex) => (
                    <Comment key={`comment-${commentIndex}`}>
                      <CommenterAvatar
                        image={comment.profilepicture}
                      />
                      <Bubble>
                        <p className='text-bold text-dark'>
                          {`${comment.firstname} ${comment.lastname}`}
                        </p>
                        <p>{comment.content}</p>
                      </Bubble>
                    </Comment>
                  ))}
                </>
              )
            }
            <Input />
          </Post>
        ))
      ) : (
        <p>There are no posts</p>
      )}
    </>
  );
};
