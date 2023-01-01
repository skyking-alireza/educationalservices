import {HiUserAdd, HiUser} from 'react-icons/hi';
import {IoLogIn} from 'react-icons/io5';
import {Link} from "react-router-dom";
import {useState} from "react";
import {Btnlogin} from "./btnlogin";

const Header = () => {
    const {sessionuser, setSessionuser} = useState(null);
    window.addEventListener('hashchange', function () {
        console.log(111111111111111122222222222222);
        // window.history.pushState({}, null, myOldUrl);
    });
    onstorage = (event) => {
        console.log(localStorage.getItem('accesstoken'));
        setSessionuser(localStorage.getItem('accesstoken'));
    };
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
            </div>
        </header>
    )
}

export default Header;