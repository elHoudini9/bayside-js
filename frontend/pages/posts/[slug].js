import ReactMarkdown from 'react-markdown'
import Moment from 'react-moment'
import { fetchAPI } from '../../lib/api'
import Layout from '../../components/layout'
import NextImage from '../../components/image'
import Seo from '../../components/seo'
import { getStrapiMedia } from '../../lib/media'

const Article = ({ article, categories }) => {
  const imageUrl = getStrapiMedia(article.image)

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  }

  return (
    <Layout categories={categories}>
      <Seo seo={seo} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const articles = await fetchAPI('/articles')

  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const articles = await fetchAPI(`/articles?slug=${params.slug}`)
  const categories = await fetchAPI('/categories')

  return {
    props: { article: articles[0], categories },
    revalidate: 1,
  }
}

export default Article
