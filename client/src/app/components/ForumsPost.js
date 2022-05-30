import React from 'react';
import {styled} from '@mui/material/styles';
import MuiAvatar from '@mui/material/Avatar';
import MuiBox from '@mui/material/Box';
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';

const Headline = styled((props) => (
  <MuiBox {...props} />
))(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
}));

const PosterAvatar = ({image}, props) => (
  <MuiAvatar
    sx={{
      height: '40px',
      width: '40px',
      border: '0.5px solid rgba(0, 0, 0, 0.15)',
    }}
    src={image}
    {...props}
  />
);

/**
 * Post component
 * @param {Array} post
 * @param {Array} expanded
 * @param {Number} index
 * @param {Function} handleClick
 * @return {JSX}
 */
export default function ForumsPost({post, expanded, index, handleClick}) {
  return (
    <>
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
    </>
  );
}
