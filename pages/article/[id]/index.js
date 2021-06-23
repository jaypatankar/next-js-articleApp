import Link from 'next/link'
import Meta from '../../../components/Meta'
// import { useRouter } from "next/dist/client/router";

const article = ({article}) => {

    // const router = useRouter();
    // const { id } = router.query

    return(
        <>
        <Meta title={article.title} description={article.excerpt}/>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br/>
            <Link href='/'>Go Back</Link>
        </>
    );
}

export async function getStaticPaths() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
    const articles = await res.json()

    const ids = articles.map(article => article.id)

    const paths = ids.map(id => ({params: {id: id.toString()}}))
    return{
        paths,
        fallback: false
    }
}

export async function getStaticProps(ctx) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${ ctx.params.id}`)
    const article = await res.json();
    return{
        props: {article}
    }
}



// export async function getServerSideProps(ctx) {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${ctx.params.id}`)
//     const article = await res.json();
//     return{
//         props: {article}
//     }
// }

export default article;