import { FC } from 'react';
import Head from 'next/head';
import {Navbar} from '../ui/';

interface Props {
    title?: string
}

export const Layout: React.FC<Props> = ( { children, title }) => {
  return (
    <>
        <Head>
            <title>{title || 'Pokemon App'}</title>
            <meta name="description" content={`Information about pokemon ${title}`} />
        </Head>

        <Navbar/>

        <main>
            { children }
        </main>
    </>
  )
}