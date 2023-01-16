import {course_api} from "../../api/course";
import {useEffect, useState} from "react";
import Show_course from "../show_course";

export default () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        (async () => {
            await course_api('return_courses_by_student', {headers: {'Authorization': `Bearer ${localStorage.getItem('accesstoken')}`}}).then((e) => {
                setCourses(e.data.data)
            }).catch((e) => {
                console.log(e)
            })
        })()
    }, [])
    return (
        <>
            <div className={'text-2xl mt-0 pb-2'}>دوره های من</div>
            <section id={'title'} className={'w-full flex-wrap  max-h-[440px] flex  scroll-smooth  px-3 overflow-scroll overflow-x-hidden '}>
                {courses.map((e , i) => { return (<Show_course key={i} info={e} />)})}
            </section>
        </>
    )
}