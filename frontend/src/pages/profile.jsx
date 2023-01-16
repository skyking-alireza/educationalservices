import {user_api} from "../api/auth";
import Userdata from "../components/profile/userdata";
import {Alerts} from "../components/alerts";
import {useEffect, useState} from "react";
import Usercourse from "../components/profile/usercourse";
import Userelections from "../components/profile/userelections";

export default () => {
    const [infouser, setInfouser] = useState([])
    const [view, setView] = useState(1)
    const data_user = () => {
        user_api(`data_user/`, {headers: {'Authorization': `Bearer ${localStorage.getItem('accesstoken')}`}}).then(({data}) => {
            setInfouser(data)
        })
    }
    const refreshtoken = () => {
        user_api('refresh/', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            data: {refresh: localStorage.getItem('refreshtoken')}
        }).then((e) => {
            console.log(e)
            Alerts({text: 'ورود موفقیت امیز بود', status: 'success'});
            localStorage.setItem('accesstoken', e.data.access);
            window.location.replace('/profile');
        })
    }
    useEffect(() => {
        (async () => {
            await user_api(`verify/`, {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                data: {token: localStorage.getItem('accesstoken')}
            }).then((e) => {
                data_user()
            }).catch((e) => {
                user_api(`verify/`, {
                    method: "POST",
                    headers: {'Content-Type': 'application/json'},
                    data: {token: window.localStorage.getItem('refreshtoken')}
                }).then((e) => {
                    refreshtoken()
                }).catch((e) => {
                    console.log(e)
                    Alerts({text: 'مجددا وارد شوید', status: 'danger'});
                    localStorage.removeItem('accesstoken');
                    localStorage.removeItem('refreshtoken');
                    window.location.replace('/login');
                })
            })
        })()

    }, [])

    const logout = () => {
        localStorage.removeItem('accesstoken');
        localStorage.removeItem('refreshtoken');
        window.location.replace('/');
    }
    return (
        <div className={'flex max-h-screen h-screen w-screen'}>
            <div id={'setalert'} className={'absolute h-screen z-[999]'}>

            </div>
            <img className={'absolute justify-center h-screen w-screen object-cover -z-10'}
                 src={'images/background-student.webp'}
                 alt={'student'}/>
            <div className={'h-fit my-auto mr-8 bg-black/60 text-white p-8 justify-between rounded-xl text-xl'}>
                <ul>
                    <li className={'py-3 cursor-pointer hover:text-gray-400 duration-300'}
                        onClick={() => setView(1)}>اطلاعات کاربری
                    </li>
                    <li className={'py-3 cursor-pointer hover:text-gray-400 duration-300'} onClick={()=>{setView(2)}}>دوره های من</li>
                    <li className={'py-3 cursor-pointer hover:text-gray-400 duration-300'} onClick={()=>{setView(3)}}>شرکت در انتخابات</li>
                    <li className={'py-3 cursor-pointer hover:text-gray-400 duration-300'} onClick={()=>{setView(4)}}>ویرایش اطلاعات</li>
                    <li className={'py-3 cursor-pointer hover:text-gray-400 duration-300'} onClick={logout}>خروج
                    </li>
                </ul>
            </div>
            <div className={'h-fit w-[60%] m-auto max-h-screen bg-black/60 text-white p-8  rounded-xl text-xl'}>
                <div className={view === 1 ? 'block' : 'hidden'}>
                    <Userdata data={infouser}/>
                </div>
                <div className={  view === 2 ? 'block max-h-screen' : 'hidden'}>
                    <Usercourse />
                </div>
                <div className={  view === 3 ? 'block max-h-screen' : 'hidden'}>
                    <Userelections data={infouser} />
                </div>

            </div>
        </div>
    )
}