import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

type Props = {
  title?: string
}

const Layout: NextPage<Props> = ({ children, title = '' }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <div>
      <div>
        <Link href='/'>
          <a>Top</a>
        </Link>
        {' '}
        <Link href='/todo'>
          <a>Todo</a>
        </Link>
      </div>
      {children}
    </div>
  </>
)

export default Layout
