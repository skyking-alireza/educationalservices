import Listlesson from "../components/listlesson";

export default ({courses}) => {
    console.log(courses);
    return (
        <div className={'flex-warp'}>
            <div id={'setalert'} className={'absolute h-screen z-[999]'}>

            </div>
            <div className={'flex h-screen bg-gradient-to-t from-zinc-200'}>
                <img className={'absolute justify-center brightness-75 h-screen w-screen object-cover -z-10'}
                     src={'images/cover/books.webp'} alt={'electioncover'}/>
                <h1 className={'h-fit m-auto text-white justify-between text-7xl'}>
                    دوره های فعال
                </h1>
            </div>
            <div className={' w-auto pb-2 bg-zinc-200 pr-8 text-4xl'}>
                <h2>دوره ها</h2>
            </div>
            <div className={'px-6 bg-zinc-200 flex flex-wrap max-h-[440px] leading-10 justify-between'}>
                {courses ? <Listlesson title={'lesson'} info={courses} /> : <p className={'mx-auto bg-yellow-500 text-white text-center'}>دوره ای جهت نمایش وجود ندارد</p> }
            </div>
        </div>
    )
}
