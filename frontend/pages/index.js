import React from 'react'
import Carousel from '../components/Carousel'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { fetchAPI } from '../lib/api'

const Home = ({ navigation, homepage }) => {
  return (
    <Layout navigation={navigation}>
      <Seo seo={homepage.seo} />
      <h1>{homepage.hero.title}</h1>
      <div>{JSON.stringify(homepage)}</div>
      <div>{JSON.stringify(navigation)}</div>
      <Carousel />
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [navigation, homepage] = await Promise.all([
    fetchAPI('/navigation'),
    fetchAPI('/homepage'),
  ])

  return {
    props: { navigation, homepage },
    revalidate: 1,
  }
}

export default Home
