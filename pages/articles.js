import { useEffect, useState } from "react"
import Link from 'next/link'

export async function getStaticPaths() {
    return {
      paths: [
        { params: { id: 1 } } // See the "paths" section below
      ],
      fallback: false // See the "fallback" section below
    };
  }

const Articles = () => {
    // const res = await fetch('https://reqres.in/api/users?page=2')
    // const json = await res.json()
    // const list = json.data.map(element => (<div>{element.email}</div>))
    const [list, setList] = useState([]);
    useEffect(() => {
        (async() => {
            const res = await fetch('https://reqres.in/api/users?page=2')
            const json = await res.json()
            setList(json.data.map(element => <Link key={element.email} href={'/article/' + element.email}>{element.email}</Link>))
        })()
    }, [list])

    return <div>{list}</div>
}

export default Articles