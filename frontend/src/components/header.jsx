import {HiUserAdd, HiUser} from 'react-icons/hi';
import {IoLogIn} from 'react-icons/io5';
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
const Header = () => {
    const [sessionuser, setSessionuser] = useState(window.localStorage.getItem('accesstoken') || null);
    return (
        <header className={'fixed justify-between w-full flex px-8 h-[60px] z-50 bg-transparent items-center'}>
            <div className={'flex items-center'}>
                <img className={'h-[50px]'} src={'images/logo/logo.png'} alt={'/#'}/>
                <p>دانشگاه باهنر شیراز</p>
            </div>
            <div className={'flex'}>
                <Link className={'px-2 block hover:text-white duration-300 '} to={'/'}>خانه</Link>
                <a className={'px-2 block hover:text-white duration-300 '} href={'/#'}>انتخابات</a>
                <a className={'px-2 block hover:text-white duration-300 '} href={'/#'}>نتیجه انتخابات</a>
                <a className={'px-2 block hover:text-white duration-300 '} href={'/#'}>دوره های آموزشی</a>
            </div>
            <div className={'flex'} id={'setbtnlogin'}>
                {sessionuser ?
                    <>
                        <Link to={"/profile"}
                              className={'px-6 flex py-2 text-white rounded mx-2 border-blue-600 border duration-500 bg-blue-600 hover:text-blue-600 hover:bg-transparent '}>پروفایل <HiUser
                            className={'w-6 h-6'}/> </Link>
                    </>

                    : <>
                        <Link to={"/signup"}
                              className={'px-6 flex py-2 text-white rounded mx-2 border-blue-600 border duration-500 bg-blue-600 hover:text-blue-600 hover:bg-transparent '}>ثبت
                            نام <HiUserAdd className={'w-6 h-6'}/> </Link>
                        <Link to={'/login'}
                              className={'px-6 flex py-2 text-blue-600 hover:text-white hover:bg-blue-600 rounded mx-2 border-blue-600 border duration-500 bg-transparent '}> ورود<IoLogIn
                            className={'w-6 h-6'}/></Link>
                    </>}
            </div>
        </header>
    )
}
export default Header;