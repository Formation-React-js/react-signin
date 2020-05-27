import React from 'react';
import { articles } from '../data';
import { Layout, Article } from '../components';

const ArticlesPage = ({ currentUser, setCurrentUser }) => {
  return (
    <Layout>
      <ul>
      {articles.map( (article, index) =>
        <li key={index}>
          <Article {...article} {...{currentUser, setCurrentUser}} />
        </li>
      )}
      </ul>
    </Layout>
  );
}

export default ArticlesPage;
