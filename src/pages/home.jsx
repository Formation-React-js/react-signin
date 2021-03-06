import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Layout } from '../components';
import { connect } from 'react-redux';
import { withCurrentUser } from '../state/current-user';

const HomePage = ({ currentUser }) => {
  return (
    <Layout>
      <Jumbotron>
        <h1>
          {currentUser === null ?
            'Bienvenue!'
          :
            `Bienvenue, ${currentUser.name}!`
          }
        </h1>
        <p>
          {currentUser === null ?
            'Texte super accrocheur pour donner aux visiteurs l\'envie de s\'inscrire.'
          :
            'Texte personnalisé pour les utilisateurs déjà inscrits.'
          }
        </p>
      </Jumbotron>
    </Layout>
  );
}

export default withCurrentUser(HomePage);
