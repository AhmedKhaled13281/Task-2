import '@/styles/globals.css'
import Layout1 from '../../Layouts/Layout1/Layout1'
import Layout2 from '../../Layouts/Layout2/Layout2'



export default function App(props) {
  const { Component, pageProps } = props
  let layouts = {
  'L1' : Layout1,
  'L2' : Layout2
  }
  let Layout = layouts[Component.layout]
  console.log(pageProps)


  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
