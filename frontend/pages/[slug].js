import { fetchAPI } from '../lib/api'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { getStrapiMedia } from '../lib/media'
import Blocks from '../components/Blocks'
import Container from '../components/Container'

const Post = ({ article, navigation }) => {
  const imageUrl = getStrapiMedia(article.image)

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  }
  return (
    <Layout navigation={navigation}>
      <Seo seo={seo} />
      <section className="mt-10">
        <Blocks blocks={article.blocks} />
      </section>
    </Layout>
  )
}

export async function getStaticPaths() {
  const posts = await fetchAPI('/articles')

  return {
    paths: posts.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const [navigation, posts] = await Promise.all([
    fetchAPI('/navigation'),
    fetchAPI(`/articles?slug=${params.slug}`),
  ])
  return {
    props: { article: posts[0], navigation },
    revalidate: 1,
  }
}

export default Post
