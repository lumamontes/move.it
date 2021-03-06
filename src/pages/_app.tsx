import { useState } from 'react';

import '../styles/global.css'

import {ChallengesProvider } from '../contexts/ChallengesContext'
import { CountdownProvider } from '../contexts/CountdownContext';

// todas as telas da aplicação irão incoportar o código adicionado no app
function MyApp({ Component, pageProps }) {
    return (
          <Component {...pageProps} />
      )

  }

export default MyApp
