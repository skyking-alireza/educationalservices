import {RiArrowLeftSLine, RiArrowRightSLine} from "react-icons/ri";
import Show_course from "./show_course";
import {useEffect, useState} from "react";
import {course_api} from "../api/course";
import {blog_api} from "../api/blog";
import Show_blog from "./show_blog";
import {Alerts} from "./alerts";

export default ({title}) =>{
    const [blog, setBlog] = useState([])
    useEffect(() => {
        (async () => {
            await blog_api('blog').then((e) => {
                setBlog(e.data)
            }).catch((e) => {
                for (var value in e.response.data){Alerts({text:e.response.data[value],status:'danger'})}
            })
        })()
    }, [])
    const leftclick = (e) => {
        const sliderleft = document.getElementById('title'+title);
        sliderleft.scrollLeft  -= 250;
    }
    const rightclick = (e) => {
        const sliderleft = document.getElementById('title'+title);
        sliderleft.scrollLeft += 250;
    }
    return (
        <section id={'title'+title} className={'w-full flex pt-10 scroll-smooth pb-16 px-5 overflow-auto overflow-x-hidden '}>
            <div><RiArrowLeftSLine onClick={(e) => leftclick(e)} className={'bg-white cursor-pointer z-10 rounded-full w-14 h-14 absolute left-0 translate-y-40'}  /><RiArrowRightSLine onClick={(e) => rightclick(e)} className={'bg-white right-0 cursor-pointer z-10 rounded-full w-14 h-14 absolute translate-y-40'} /> </div>
            {blog.map((e , i) => { return (<Show_blog key={i} info={e} />)})}
        </section>
    )
}