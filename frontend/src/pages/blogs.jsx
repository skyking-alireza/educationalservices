import Listblog from "../components/listblog";
import {parseJwt} from "../functions/parseJWT";
export default () => {
    return (
        <div className={'flex-warp'}>
            <div id={'setalert'} className={'absolute h-screen z-[999]'}>

            </div>
            <div className={'flex h-screen bg-gradient-to-t from-zinc-200'}>
                <img className={'absolute justify-center brightness-75 h-screen w-screen object-cover -z-10'}
                     src={'images/cover/blogs.webp'} alt={'blogscover'}/>
                <h1 className={'h-fit m-auto text-white justify-between text-7xl'}>
                    وبلاگ
                </h1>
            </div>
            <div className={' w-auto pb-2 bg-zinc-200 pr-8 text-4xl'}>
                <h2>نوشته ها</h2>
            </div>
            <div className={'px-6 bg-zinc-200 flex flex-wrap max-h-[440px] leading-10 justify-between'}>
                <Listblog title={'blog'} />
            </div>
        </div>
    )
}
