import '../styles/globals.scss'
import 'tailwindcss/tailwind.css'
import React, {useEffect, useState} from 'react';
import {Layout} from '../components';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  
  )
}

export default MyApp
