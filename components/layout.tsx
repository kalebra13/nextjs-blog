import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.sass'
import utilStyles from '../styles/utils.module.sass'
import Link from 'next/link'

const name = 'Миша (Kalebra)'
export const siteTitle = 'Блог не юного веб-разработчика'

interface LayoutProps {
	children: React.ReactNode
	home?: boolean
}

const Layout = ({ children, home }: LayoutProps) => (
	<div className={styles.container}>
		<Head>
			<link rel="icon" href="/favicon.ico" />
			<meta
				name="description"
				content="Блог не юного веб-разработчика"
			/>
			<meta name="og:title" content={siteTitle} />
			<meta name="twitter:card" content="summary_large_image" />
		</Head>
		<header className={styles.header}>
			{home ? (
				<>
					<Image
						priority
						src="/images/profile.jpg"
						className={utilStyles.borderCircle}
						height={144}
						width={144}
						alt={name}
					/>
					<h1 className={utilStyles.heading2Xl}>{name}</h1>
				</>
			) : (
				<>
					<Link href="/">
						<a>
							<Image
								priority
								src="/images/profile.jpg"
								className={utilStyles.borderCircle}
								height={108}
								width={108}
								alt={name}
							/>
						</a>
					</Link>
					<h2 className={utilStyles.headingLg}>
						<Link href="/">
							<a className={utilStyles.colorInherit}>{name}</a>
						</Link>
					</h2>
				</>
			)}
		</header>
		<main>{children}</main>
		{!home && (
			<div className={styles.backToHome}>
				<Link href="/">
					<a>← На главную</a>
				</Link>
			</div>
		)}
	</div>
)

export default Layout
