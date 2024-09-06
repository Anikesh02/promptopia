import Provider from '@components/Provider';
import '@styles/globals.css';
import Nav from '@components/Nav';

export const metadata = {
    title: 'Promptopia',
    description: 'Discover & Share AI Prompts',
    keywords: 'prompt ai, promptopia',
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
    <body>
      <Provider>
        <div className="main">
            <div className="gradient" />
        </div>

        {/* <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}

        <main className="app"><Nav />{children}</main>
        </Provider>
    </body>
    </html>
  )
}

export default RootLayout