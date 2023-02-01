import {Link} from "react-router-dom";
import {e2p} from "../functions/persiannumber";
import {BsTelegram , BsYoutube,BsTwitter,BsWhatsapp , BsFacebook,BsDiscord} from "react-icons/bs";
import {set_images} from "../functions/images";

export default () => {
    return (
        <div className={'pt-8'}>
            <p className={'mr-12 text-2xl'}>دانشکده باهنر شیراز</p>
            <p className={'mr-16 mt-2 text-sm'}>تلفن تماس : {e2p('0609 3738 071')} |
                ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
            <div className={'w-full p-12 flex justify-between flex-wrap'}>
                <div className={'w-[19%] grid pr-4  border-r-2 border-neutral-400 '}>
                    <Link to={'#'} className={'hover:pr-6 duration-300'}> صفحه اصلی </Link>
                    <Link to={'#'} className={'hover:pr-6 duration-300'}> وبلاگ </Link>
                    <Link to={'#'} className={'hover:pr-6 duration-300'}> انتخابات </Link>
                    <Link to={'#'} className={'hover:pr-6 duration-300'}> دوره ها </Link>
                    <Link to={'#'} className={'hover:pr-6 duration-300'}> گالری عکس </Link>
                </div>
                <div className={'w-[19%] grid pr-4  border-r-2 border-neutral-400 '}>
                    <Link to={'#'} className={'hover:pr-6 duration-300'}> صفحه اصلی </Link>
                    <Link to={'#'} className={'hover:pr-6 duration-300'}> وبلاگ </Link>
                    <Link to={'#'} className={'hover:pr-6 duration-300'}> انتخابات </Link>
                    <Link to={'#'} className={'hover:pr-6 duration-300'}> دوره ها </Link>
                    <Link to={'#'} className={'hover:pr-6 duration-300'}> گالری عکس </Link>
                </div>
                <div className={'w-[19%] grid pr-4  border-r-2 border-neutral-400 '}>
                    <Link to={'#'} className={'hover:pr-6 duration-300'}> صفحه اصلی </Link>
                    <Link to={'#'} className={'hover:pr-6 duration-300'}> وبلاگ </Link>
                    <Link to={'#'} className={'hover:pr-6 duration-300'}> انتخابات </Link>
                    <Link to={'#'} className={'hover:pr-6 duration-300'}> دوره ها </Link>
                    <Link to={'#'} className={'hover:pr-6 duration-300'}> گالری عکس </Link>
                </div>
                <div className={'w-[19%] grid pr-4  border-r-2 border-neutral-400 '}>
                    <Link to={'#'} className={'hover:pr-6 duration-300'}> صفحه اصلی </Link>
                    <Link to={'#'} className={'hover:pr-6 duration-300'}> وبلاگ </Link>
                    <Link to={'#'} className={'hover:pr-6 duration-300'}> انتخابات </Link>
                    <Link to={'#'} className={'hover:pr-6 duration-300'}> دوره ها </Link>
                    <Link to={'#'} className={'hover:pr-6 duration-300'}> گالری عکس </Link>
                </div>
                <div className={'w-[19%] grid pr-4  border-r-2 border-neutral-400 '}>
                    <img className={'h-[96px] max-w-fit text-center mx-auto'} src={set_images('frontend/public/images/logo/logo.png')} alt={'/#'}/>
                    <p className={'text-center'}>دانشگاه باهنر شیراز</p>
                </div>
            </div>
            <p className={'text-center text-sm'}>برای استفاده از مطالب دانشکده باهنر ، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز برای دانشکده باهنر شیراز است.</p>
            <div className={'mx-auto w-[30%] py-6 flex justify-between flex-wrap'}>
                <BsTelegram className={'text-4xl fill-blue-500 duration-300 hover:-translate-y-3.5 mx-1  cursor-pointer'}  />
                <BsYoutube className={'text-4xl fill-red-700 duration-300 hover:-translate-y-3.5 mx-1  cursor-pointer'}  />
                <BsTwitter className={'text-4xl fill-blue-700 duration-300 hover:-translate-y-3.5 mx-1  cursor-pointer'}  />
                <BsWhatsapp className={'text-4xl fill-green-600 duration-300 hover:-translate-y-3.5 mx-1  cursor-pointer'}  />
                <BsFacebook className={'text-4xl fill-blue-800 duration-300 hover:-translate-y-3.5 mx-1  cursor-pointer'}  />
                <BsDiscord className={'text-4xl fill-blue-700 duration-300 hover:-translate-y-3.5 mx-1 cursor-pointer'}  />
            </div>
        </div>
    )
}
