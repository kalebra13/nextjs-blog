import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.sass'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
	const allPostsData = getSortedPostsData()
	return {
		props: {
			allPostsData
		}
	}
}

interface HomeProps {
	allPostsData: {
		date: string
		title: string
		id: string
	}[]
}

const Home = ({ allPostsData }: HomeProps) => (
	<Layout home>
		<Head>
			<title>{siteTitle}</title>
		</Head>
		<section className={utilStyles.headingMd}>
			<p>Вы каким-то чудом попали на бло(х) веб-разработчика Михаила из города Зажопинск (Рыбницкий район)</p>
			<p>(Этот сайтец был сделан мной пока проходил <a href="https://nextjs.org/learn">уроки по Next.js</a>.)</p>
		</section>
		<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
			<h2 className={utilStyles.headingLg}>Блог</h2>
			<ul className={utilStyles.list}>
				{allPostsData.map(({ id, date, title }) => (
					<li className={utilStyles.listItem} key={id}>
						<Link href={`/posts/${id}`}>
							<a>{title}</a>
						</Link>
						<br />
						<small className={utilStyles.lightText}>
							<Date dateString={date} />
						</small>
					</li>
				))}
			</ul>
		</section>
	</Layout>
)

export default Home
