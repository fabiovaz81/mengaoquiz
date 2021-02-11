import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (

    <QuizBackground backgroundImage={db.bg}>

      <Head>
        <title>GWQuiz - Top 100</title>
      </Head>

      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Quiz da GW</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('submit do react');

              // router manda para a próxima tela
            }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                placeholder="Digite seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Trabalhe na GW!!!</h1>

            <p><a href="https://getway.com.br/trabalhe-conosco/" target="_blank">Clica aqui se vc quer ser dev</a></p>
          </Widget.Content>
        </Widget>

        <Footer />
        <GitHubCorner projectUrl="https://www.github.com/fabiovaz81" />

      </QuizContainer>
    </QuizBackground>
  );
}
