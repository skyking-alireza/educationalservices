import {Link} from "react-router-dom";
import {RiArrowLeftSLine , RiArrowRightSLine} from 'react-icons/ri'

const Listlesson = ({title}) => {
    const leftclick = (e) => {
        const sliderleft = document.getElementById('title'+title);
        sliderleft.scrollLeft  -= 250;
    }
    const rightclick = (e) => {
        const sliderleft = document.getElementById('title'+title);
        sliderleft.scrollLeft += 250;
    }
    return (
        <section id={'title'+title} className={'w-full flex pt-20 scroll-smooth pb-16 px-5 overflow-auto overflow-x-hidden '}>
            <div><RiArrowLeftSLine onClick={(e) => leftclick(e)} className={'bg-white cursor-pointer z-10 rounded-full w-14 h-14 absolute left-0 translate-y-40'}  /><RiArrowRightSLine onClick={(e) => rightclick(e)} className={'bg-white right-0 cursor-pointer z-10 rounded-full w-14 h-14 absolute translate-y-40'} /> </div>
            <div className={'w-[300px] mx-4 min-w-[300px] bg-dark1 h-[400px] text-center justify-between rounded-2xl'}>
                <img
                    className={'w-[250px] -translate-y-7 mx-auto rounded-2xl hover:blur-xs duration-300 cursor-pointer'}
                    src={'images/lesson/345.webp'} alt={'blockchain'}/>
                <h2 className={'text-white text-2xl font-bold translate-x-9'}>دوره بلاک چین</h2>
                <p className={'text-right px-2 text-white pt-2 font-light'}>بلاک چین (Blockchain) چیست، چگونه کار می‌کند
                    و چه کاربردهایی دارد؟ این‌ها سوالات متداولی هستند که در مورد این فناوریِ انقلابی پرسیده می‌شود </p>
                <p className={'text-right px-2 text-sm text-yellow-400 pt-3 font-medium'}>دسترسی برای اعضای سایت</p>
                <p className={'text-left translate-x-5 px-2 text-2xl text-white pt-2 pb-5 font-bold'}>{new Intl.NumberFormat('fa').format(440000)} تومان</p>
                <Link
                    className={'bg-fuchsia-700 inline-flex rounded-xl text-white px-7 py-3 mt-2 duration-300 -translate-y-5 hover:-translate-y-6'}>مشاهده
                    اطلاعات دوره</Link>
            </div>
            <div className={'w-[300px] mx-4 min-w-[300px] bg-dark1 h-[400px] text-center justify-between rounded-2xl '}>
                <img
                    className={'w-[250px] -translate-y-7 mx-auto rounded-2xl hover:blur-xs duration-300 cursor-pointer'}
                    src={'images/lesson/345.webp'} alt={'blockchain'}/>
                <h2 className={'text-white text-2xl font-bold translate-x-9'}>دوره بلاک چین</h2>
                <p className={'text-right px-2 text-white pt-2 font-light'}>بلاک چین (Blockchain) چیست، چگونه کار می‌کند
                    و چه کاربردهایی دارد؟ این‌ها سوالات متداولی هستند که در مورد این فناوریِ انقلابی پرسیده می‌شود </p>
                <p className={'text-right px-2 text-sm text-yellow-400 pt-3 font-medium'}>دسترسی برای اعضای سایت</p>
                <p className={'text-left translate-x-5 px-2 text-2xl text-white pt-2 pb-5 font-bold'}>{new Intl.NumberFormat('fa').format(440000)} تومان</p>
                <Link
                    className={'bg-fuchsia-700 inline-flex rounded-xl text-white px-7 py-3 mt-2 duration-300 -translate-y-5 hover:-translate-y-6'}>مشاهده
                    اطلاعات دوره</Link>
            </div>
            <div className={'w-[300px] mx-4 min-w-[300px] bg-dark1 h-[400px] text-center justify-between rounded-2xl '}>
                <img
                    className={'w-[250px] -translate-y-7 mx-auto rounded-2xl hover:blur-xs duration-300 cursor-pointer'}
                    src={'images/lesson/345.webp'} alt={'blockchain'}/>
                <h2 className={'text-white text-2xl font-bold translate-x-9'}>دوره بلاک چین</h2>
                <p className={'text-right px-2 text-white pt-2 font-light'}>بلاک چین (Blockchain) چیست، چگونه کار می‌کند
                    و چه کاربردهایی دارد؟ این‌ها سوالات متداولی هستند که در مورد این فناوریِ انقلابی پرسیده می‌شود </p>
                <p className={'text-right px-2 text-sm text-yellow-400 pt-3 font-medium'}>دسترسی برای اعضای سایت</p>
                <p className={'text-left translate-x-5 px-2 text-2xl text-white pt-2 pb-5 font-bold'}>{new Intl.NumberFormat('fa').format(440000)} تومان</p>
                <Link
                    className={'bg-fuchsia-700 inline-flex rounded-xl text-white px-7 py-3 mt-2 duration-300 -translate-y-5 hover:-translate-y-6'}>مشاهده
                    اطلاعات دوره</Link>
            </div>
            <div className={'w-[300px] mx-4 min-w-[300px] bg-dark1 h-[400px] text-center justify-between rounded-2xl '}>
                <img
                    className={'w-[250px] -translate-y-7 mx-auto rounded-2xl hover:blur-xs duration-300 cursor-pointer'}
                    src={'images/lesson/345.webp'} alt={'blockchain'}/>
                <h2 className={'text-white text-2xl font-bold translate-x-9'}>دوره بلاک چین</h2>
                <p className={'text-right px-2 text-white pt-2 font-light'}>بلاک چین (Blockchain) چیست، چگونه کار می‌کند
                    و چه کاربردهایی دارد؟ این‌ها سوالات متداولی هستند که در مورد این فناوریِ انقلابی پرسیده می‌شود </p>
                <p className={'text-right px-2 text-sm text-yellow-400 pt-3 font-medium'}>دسترسی برای اعضای سایت</p>
                <p className={'text-left translate-x-5 px-2 text-2xl text-white pt-2 pb-5 font-bold'}>{new Intl.NumberFormat('fa').format(440000)} تومان</p>
                <Link
                    className={'bg-fuchsia-700 inline-flex rounded-xl text-white px-7 py-3 mt-2 duration-300 -translate-y-5 hover:-translate-y-6'}>مشاهده
                    اطلاعات دوره</Link>
            </div>
            <div className={'w-[300px] mx-4 min-w-[300px] bg-dark1 h-[400px] text-center justify-between rounded-2xl '}>
                <img
                    className={'w-[250px] -translate-y-7 mx-auto rounded-2xl hover:blur-xs duration-300 cursor-pointer'}
                    src={'images/lesson/345.webp'} alt={'blockchain'}/>
                <h2 className={'text-white text-2xl font-bold translate-x-9'}>دوره بلاک چین</h2>
                <p className={'text-right px-2 text-white pt-2 font-light'}>بلاک چین (Blockchain) چیست، چگونه کار می‌کند
                    و چه کاربردهایی دارد؟ این‌ها سوالات متداولی هستند که در مورد این فناوریِ انقلابی پرسیده می‌شود </p>
                <p className={'text-right px-2 text-sm text-yellow-400 pt-3 font-medium'}>دسترسی برای اعضای سایت</p>
                <p className={'text-left translate-x-5 px-2 text-2xl text-white pt-2 pb-5 font-bold'}>{new Intl.NumberFormat('fa').format(440000)} تومان</p>
                <Link
                    className={'bg-fuchsia-700 inline-flex rounded-xl text-white px-7 py-3 mt-2 duration-300 -translate-y-5 hover:-translate-y-6'}>مشاهده
                    اطلاعات دوره</Link>
            </div>
            <div className={'w-[300px] mx-4 min-w-[300px] bg-dark1 h-[400px] text-center justify-between rounded-2xl '}>
                <img
                    className={'w-[250px] -translate-y-7 mx-auto rounded-2xl hover:blur-xs duration-300 cursor-pointer'}
                    src={'images/lesson/345.webp'} alt={'blockchain'}/>
                <h2 className={'text-white text-2xl font-bold translate-x-9'}>دوره بلاک چین</h2>
                <p className={'text-right px-2 text-white pt-2 font-light'}>بلاک چین (Blockchain) چیست، چگونه کار می‌کند
                    و چه کاربردهایی دارد؟ این‌ها سوالات متداولی هستند که در مورد این فناوریِ انقلابی پرسیده می‌شود </p>
                <p className={'text-right px-2 text-sm text-yellow-400 pt-3 font-medium'}>دسترسی برای اعضای سایت</p>
                <p className={'text-left translate-x-5 px-2 text-2xl text-white pt-2 pb-5 font-bold'}>{new Intl.NumberFormat('fa').format(440000)} تومان</p>
                <Link
                    className={'bg-fuchsia-700 inline-flex rounded-xl text-white px-7 py-3 mt-2 duration-300 -translate-y-5 hover:-translate-y-6'}>مشاهده
                    اطلاعات دوره</Link>
            </div>
        </section>
    )
}
export default Listlesson;