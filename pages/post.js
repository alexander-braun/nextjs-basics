import React from 'react';

const Post = (props) => {
  const style = {
    marginBottom: '20px',
  };
  return (
    <div>
      {props.data.map((post) => {
        return (
          <div style={style} key={post.id}>
            <div>{post.email}</div>
            {post.name}
          </div>
        );
      })}
      );
    </div>
  );
};

export default Post;

export async function getServerSideProps(context) {
  const id = context.query.id;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );
  const data = await res.json();

  return {
    props: {
      data,
      id,
    },
  };
}
