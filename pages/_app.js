import 'tailwindcss/tailwind.css'
import Layout from '../components/layout'

function myApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default myApp