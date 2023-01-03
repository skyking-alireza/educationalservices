import {user_api} from "../api/auth";
import Userdata from "../components/userdata";

export default () => {
    async function setdata(){
        const api_data = await user_api(`data_user/`, {headers: {'Authorization': `Bearer ${localStorage.getItem('accesstoken')}`}})
        return api_data
    }


    const logout = () => {
        localStorage.removeItem('accesstoken');
        localStorage.removeItem('refreshtoken');
        window.location.replace('/');
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
                    <li className={'py-3 cursor-pointer hover:text-gray-400 duration-300'} onClick={logout}>خروج
                    </li>
                </ul>
            </div>
            <div className={'h-fit w-[60%] m-auto bg-black/60 text-white p-8  rounded-xl text-xl'}>
                <Userdata data={setdata()} />
            </div>
        </div>
    )
}