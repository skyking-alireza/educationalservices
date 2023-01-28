import {HiUserAdd, HiUser} from 'react-icons/hi';
import {IoLogIn} from 'react-icons/io5';
import {Link} from "react-router-dom";
import {set_images} from "../functions/images";
import {parseJwt} from "../functions/parseJWT";
import {FcManager} from 'react-icons/fc'
import { useState} from "react";
import {AiOutlineMenu , AiOutlineClose} from 'react-icons/ai'
const Header = ({sessionuser}) => {
    const [menu , setMenu] = useState(0)
    return (
        <header >
        <div className={'fixed z-[999] justify-between bg-white w-full drop-shadow-lg flex px-8 h-[60px] z-50 items-center'}>
            <div className={'flex md:hidden '}>
                {menu ? <AiOutlineClose onClick={()=>{setMenu(0)}}  className={'cursor-pointer'} /> :  <AiOutlineMenu className={'cursor-pointer'} onClick={()=>{setMenu(1)}} />}

            </div>
            <div className={'flex items-center'}>
                <img className={'h-[50px]'} src={set_images('frontend/public/images/logo/logo.png')} alt={'/#'}/>
                <p>دانشگاه باهنر شیراز</p>
            </div>
            <div className={'hidden md:flex'}>
                <Link className={'px-2 block hover:text-gray-700 duration-300 '} to={'/'}>خانه</Link>
                <Link className={'px-2 block hover:text-gray-700 duration-300 '} to={'/elections'}>انتخابات</Link>
                <Link className={'px-2 block hover:text-gray-700 duration-300 '} to={'/result_election'}>نتیجه انتخابات</Link>
                <Link className={'px-2 block hover:text-gray-700 duration-300 '} to={'/courses'}>دوره های آموزشی</Link>
                <Link className={'px-2 block hover:text-gray-700 duration-300 '} to={'/blogs'}>وبلاگ</Link>
            </div>
            <div className={'flex'} id={'setbtnlogin'}>
                {sessionuser ?
                    parseJwt(sessionuser).admin ?
                        <>
                            <Link to={"/admin"}
                                  className={'hidden md:flex md:py-1.5 md:px-3 flex text-white rounded  border-blue-600 border duration-500 bg-blue-600 hover:text-blue-600 hover:bg-transparent '}>مدیریت سایت <FcManager
                                className={'w-6 h-6'}/> </Link>
                        </>
                        :
                        <>
                            <Link to={"/profile"}
                                  className={'px-4 sm:px-6 sm:py-2 sm:mx-2 flex  text-white rounded  border-blue-600 border duration-500 bg-blue-600 hover:text-blue-600 hover:bg-transparent '}>پروفایل <HiUser
                                className={'w-6 h-6'}/> </Link>
                        </>
                    : <>
                        <Link to={"/signup"}
                              className={'hidden sm:px-6 sm:py-2 md:flex text-white rounded mx-2 border-blue-600 border duration-500 bg-blue-600 hover:text-blue-600 hover:bg-transparent '}>ثبت
                            نام <HiUserAdd className={'w-6 h-6'}/> </Link>
                        <Link to={'/login'}
                              className={'hidden sm:px-6 sm:py-2 md:flex text-blue-600 hover:text-white hover:bg-blue-600 rounded mx-2 border-blue-600 border duration-500 bg-transparent '}> ورود<IoLogIn
                            className={'w-6 h-6'}/></Link>
                    </>}
            </div>
        </div>
            <div className={menu ?'fixed md:hidden mt-[60px] w-full z-[998]' : 'hidden'}>
                <div className={'block  bg-white text-center'}>
                    <Link className={'py-2  block hover:text-gray-700 duration-300 '} to={'/'}>خانه</Link>
                    <Link className={'py-2  block hover:text-gray-700 duration-300 '} to={'/elections'}>انتخابات</Link>
                    <Link className={'py-2  block hover:text-gray-700 duration-300 '} to={'/result_election'}>نتیجه انتخابات</Link>
                    <Link className={'py-2  block hover:text-gray-700 duration-300 '} to={'/courses'}>دوره های آموزشی</Link>
                    <Link className={'py-2  block hover:text-gray-700 duration-300 '} to={'/blogs'}>وبلاگ</Link>
                    {sessionuser ?
                        parseJwt(sessionuser).admin ?
                            <>
                                <Link to={"/admin"}
                                      className={'px-6 my-2  mx-6 py-2 flex  text-white rounded  border-blue-600 border duration-500 bg-blue-600 hover:text-blue-600 hover:bg-transparent '}>مدیریت سایت <FcManager
                                    className={'w-6 h-6'}/> </Link>
                            </>
                            :
                            <>
                                <Link to={"/profile"}
                                      className={'px-6 my-2 mx-6 py-2 flex   text-white rounded  border-blue-600 border duration-500 bg-blue-600 hover:text-blue-600 hover:bg-transparent '}>پروفایل <HiUser
                                    className={'w-6 h-6'}/> </Link>
                            </>
                        : <>
                            <Link to={"/signup"}
                                  className={'px-6 my-2 mx-6 py-2 flex text-white rounded mx-2 border-blue-600 border duration-500 bg-blue-600 hover:text-blue-600 hover:bg-transparent '}>ثبت
                                نام <HiUserAdd className={'w-6 h-6'}/> </Link>
                            <Link to={'/login'}
                                  className={'px-6 my-2 mx-6 py-2 flex text-blue-600 hover:text-white hover:bg-blue-600 rounded mx-2 border-blue-600 border duration-500 bg-transparent '}> ورود<IoLogIn
                                className={'w-6 h-6'}/></Link>
                        </>}
                </div>
            </div>


        </header>
    )
}
export default Header;
