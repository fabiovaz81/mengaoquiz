import React, { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (

    <QuizBackground backgroundImage={db.bg}>

      <Head>
        <title>MengãoQuiz - O Mais Querido</title>
      </Head>

      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Quiz do mengão</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('submit do react');

              // router manda para a próxima tela
            }}
            >
              <input
                onChange={function (infosDoEvento) {
                  setName(infosDoEvento.target.value);
                }}
                placeholder="Digite seu nome" />
              <button type="submit" disabled={name.length === 0}>
                Jogar
                {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da galera</h1>

            <p>Teste Teste Teste Teste</p>
          </Widget.Content>
        </Widget>

        <Footer />
        <GitHubCorner projectUrl="https://www.github.com/fabiovaz81" />

      </QuizContainer>
    </QuizBackground>
  );
}
