import {user_api} from "../api/auth";
import {useNavigate} from "react-router-dom";

export default () => {
    const navigate = useNavigate();
    user_api(`data_user/`, {headers: {'Authorization': `Bearer ${localStorage.getItem('accesstoken')}`}})
        // .then((e) => console.log(e))
    const logout = () => {
        localStorage.removeItem('accesstoken');
        localStorage.removeItem('refreshtoken');
        navigate('/');
    }
    return (
        <div className={'flex h-screen w-screen'}>
            <img className={'absolute justify-center h-screen w-screen object-cover -z-10'}
                 src={'images/background-student.webp'}
                 alt={'student'}/>
            <div className={'h-fit my-auto mr-8 bg-black/60 text-white p-8 justify-between rounded-xl text-xl'}>
                <ul>
                    <li className={'py-3 cursor-pointer hover:text-gray-400 duration-300'}>اطلاعات کاربری</li>
                    <li className={'py-3 cursor-pointer hover:text-gray-400 duration-300'}>پروفایل</li>
                    <li className={'py-3 cursor-pointer hover:text-gray-400 duration-300'}>پروفایل</li>
                    <li className={'py-3 cursor-pointer hover:text-gray-400 duration-300'}>پروفایل</li>
                    <li className={'py-3 cursor-pointer hover:text-gray-400 duration-300'} onClick={logout}>خروج از حساب
                        کاربری
                    </li>
                </ul>
            </div>
            <div className={'h-fit w-[60%] m-auto bg-black/60 text-white p-8  rounded-xl text-xl'}>
                <div className={'text-2xl mt-0 pb-2'}>اطلاعات کاربری</div>
                <div className={'inline-flex justify-between py-3'}>
                    <p className={'px-5'}> نام و نام خانوادگی : علیرضا صابری </p>
                    <p className={'px-5'}> نام پدر : منصور صابری </p>
                    <p className={'px-5'}> تاریخ تولد : 01 / 15 / 1381 </p>
                </div>
                <div className={'inline-flex justify-between py-3'}>
                    <p className={'px-5'}> نام و نام خانوادگی : علیرضا صابری </p>
                    <p className={'px-5'}> نام پدر : منصور صابری </p>
                    <p className={'px-5'}> تاریخ تولد : 01 / 15 / 1381 </p>
                </div>
                <div className={'inline-flex justify-between py-3'}>
                    <p className={'px-5'}> نام و نام خانوادگی : علیرضا صابری </p>
                    <p className={'px-5'}> نام پدر : منصور صابری </p>
                    <p className={'px-5'}> تاریخ تولد : 01 / 15 / 1381 </p>
                </div>
            </div>
        </div>
    )
}