import Show_course from "../show_course";
export default ({courses}) => {
    return (
        <>
            <div className={'text-2xl mt-0 pb-2'}>دوره های من</div>
            <section id={'title'} className={'w-full flex-wrap  max-h-[440px] flex  scroll-smooth  px-3 overflow-scroll overflow-x-hidden '}>
                {courses && courses.map((e , i) => { return (<Show_course key={i} info={e} />)})}
            </section>
        </>
    )
}
