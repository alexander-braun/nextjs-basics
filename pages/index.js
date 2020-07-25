import React from 'react';
import Link from 'next/link';

const Index = (props) => {
  return (
    <ul>
      {props.data.map((post) => {
        return (
          <li key={post.id}>
            <Link href={`/post?id=${post.id}`} passHref={true}>
              <a>{post.title}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Index;

export async function getServerSideProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}
