import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/1672034998981.jpeg" />
      </Head>

      <main>
        <Header title="Aneesh Saba" />
        <img src="1672034998981.jpeg" alt="image description"></img>
        <p className="description">
          Get started by looking at my links!
        </p>
        <p className="description">
          LinkedIn: <a href="https://www.linkedin.com/in/aneesh-saba-976256220/">Aneesh Saba</a>
        </p>
        <p className="description">
          GitHub: <a href="github.com/AneSaba">Aneesh Saba</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
