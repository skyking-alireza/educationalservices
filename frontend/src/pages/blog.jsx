import {useParams} from "react-router-dom";
import {blog_api} from "../api/blog";
import {useEffect, useState} from "react";
import {Alerts} from "../components/alerts";
import {set_images} from "../functions/images";
import {Parser} from 'html-to-react'
import Show_blog from "../components/show_blog";
export default () =>{
    const param = useParams()
    const [blog , setBlog] = useState(false)
    useEffect(()=>{
        (async ()=>{await blog_api(`RUD_blog/${param.id}`).then((e) =>{
            setBlog(e.data)
        }).catch((e) =>{
            for (var value in e.response.data){Alerts({text:e.response.data[value],status:'danger'})}
        })
        })()
    })
    const [data, setData] = useState([])
    useEffect(() => {
        (async () => {
            await blog_api('blog').then((e) => {
                setData(e.data)
            }).catch((e) => {
                for (var value in e.response.data){Alerts({text:e.response.data[value],status:'danger'})}
            })
        })()
    }, [])
    return(
        <section className={'min-h-screen flex justify-between pt-[80px] bg-zinc-200 mx-auto '}>
            <div id={'setalert'} className={'absolute h-screen z-[999]'}>
            </div>
            <div className={'shadow-black drop-shadow-xl p-8 m-8 rounded-xl bg-white ml-2 w-[75%]'}>
                <h1 className={'pr-8 text-2xl'}>{blog && blog.title}</h1>
                <img className={'m-4 rounded-3xl '} src={blog && set_images(blog.image)}/>
                {blog &&  Parser().parse(blog.body)}
            </div>
            <div className={'shadow-black drop-shadow-xl p-4 m-8  rounded-xl bg-white ml-2 min-w-[400px]'}>
                {data.map((e ,i)=>{return <Show_blog key={i} info={e} />})}
            </div>
        </section>
    )
}