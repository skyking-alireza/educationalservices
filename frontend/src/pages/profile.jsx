import {user_api} from "../api/auth";
import {course_api} from "../api/course";
import Userdata from "../components/profile/userdata";
import {Alerts} from "../components/alerts";
import {useEffect, useState} from "react";
import Usercourse from "../components/profile/usercourse";
import Userelections from "../components/profile/userelections";
import Editdata from "../components/profile/editdata";
import Create_election from "../components/admin/create_election";
import Create_course from "../components/admin/create_course";
import Create_blog from "../components/admin/create_blog";
import {useNavigate} from "react-router-dom";

export default ({setsesstion}) => {
    const navigate = useNavigate();
    const [courses, setCourses] = useState([])
    const [view, setView] = useState(1)
    const [infouser, setInfouser] = useState(0)
    const [elections, setElections] = useState(0)
    const refreshtoken = () => {
        user_api('refresh/', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            data: {refresh: localStorage.getItem('refreshtoken')}
        }).then((e) => {
            Alerts({text: 'ورود موفقیت امیز بود', status: 'success'});
            setsesstion(e.data.access)
            window.location.reload()
        })
    }
    const data_user = () => {
        user_api(`data_user/`, {headers: {'Authorization': `Bearer ${localStorage.getItem('accesstoken')}`}}).then((e) => {
            setInfouser(e.data)
        })
    }
    useEffect(()=>{
      (view === 1 && !infouser) &&
      user_api(`verify/`, {method: "POST",headers: {'Content-Type': 'application/json'},data: {token: localStorage.getItem('accesstoken')}}).then((e)=>{
          data_user()
        })
        .catch((e) => {
          user_api(`verify/`, {method: "POST",headers: {'Content-Type': 'application/json'},data: {token: window.localStorage.getItem('refreshtoken')}}).
          then((e) => {
            refreshtoken()
          }).
          catch((e) => {
            for (var value in e.response.data){Alerts({text:e.response.data[value],status:'danger'})};
            localStorage.removeItem('accesstoken');
            localStorage.removeItem('refreshtoken');
            setsesstion(null);
            navigate('/')})

        });

      (view === 2 && !courses) && course_api('return_courses_by_student', {headers: {'Authorization': `Bearer ${localStorage.getItem('accesstoken')}`}}).then((e) => {setCourses(e.data.data)}).catch((e) => {for (var value in e.response.data){Alerts({text:e.response.data[value],status:'danger'})}});
      (view === 3 && !elections) && user_api('election/').then((e) => {setElections(e.data)}).catch((e) => {for (var value in e.response.data){Alerts({text:e.response.data[value],status:'danger'})}});
    },[view])

    const logout = () => {
        localStorage.removeItem('accesstoken');
        localStorage.removeItem('refreshtoken');
        setsesstion(null)
        navigate('/')
    }
    return (
        // user_super ?
        //     <div className={'flex max-h-screen h-screen w-full'}>
        //         <div id={'setalert'} className={'absolute h-screen z-[999]'}>
        //
        //         </div>
        //         <img className={'absolute justify-center brightness-50 h-screen w-screen object-cover -z-10'}
        //              src={'images/cover/admin.webp'}
        //              alt={'student'}/>
        //         <div className={'h-fit my-auto mr-8 bg-black/60 text-white p-8 justify-between rounded-xl text-xl'}>
        //             <ul>
        //                 <li className={'py-3 cursor-pointer hover:text-gray-400 duration-300'} onClick={() => setView(1)}>انتخابات</li>
        //                 <li className={'py-3 cursor-pointer hover:text-gray-400 duration-300'} onClick={()=>{setView(2)}}>دوره ها</li>
        //                 <li className={'py-3 cursor-pointer hover:text-gray-400 duration-300'} onClick={()=>{setView(3)}}>نوشته ها</li>
        //                 <li className={'py-3 cursor-pointer hover:text-gray-400 duration-300'} onClick={logout}>خروج
        //                 </li>
        //             </ul>
        //         </div>
        //         <div className={'h-fit w-[60%] m-auto max-h-screen bg-black/60 text-white p-8  rounded-xl text-xl'}>
        //             <div className={view === 1 ? 'block' : 'hidden'}>
        //                 <Create_election />
        //             </div>
        //             <div className={  view === 2 ? 'block max-h-screen' : 'hidden'}>
        //                 <Create_course />
        //             </div>
        //             <div className={  view === 3 ? 'block max-h-screen' : 'hidden'}>
        //                 <Create_blog />
        //             </div>
        //
        //         </div>
        //     </div>
        //     :
        <div className={'flex max-h-screen h-screen w-full'}>
            <div id={'setalert'} className={'absolute h-screen z-[999]'}>

            </div>
            <img className={'absolute justify-center h-screen w-screen object-cover -z-10'}
                 src={'images/background-student.webp'}
                 alt={'student'}/>
            <div className={'h-fit my-auto mr-8 bg-black/60 text-white p-8 justify-between rounded-xl text-xl'}>
                <ul>
                    <li className={'py-3 cursor-pointer hover:text-gray-400 duration-300'} onClick={()=>setView(1)}>اطلاعات کاربری</li>
                    <li className={'py-3 cursor-pointer hover:text-gray-400 duration-300'} onClick={()=>{setView(2)}}>دوره های من</li>
                    <li className={'py-3 cursor-pointer hover:text-gray-400 duration-300'} onClick={()=>{setView(3)}}>شرکت در انتخابات</li>
                    <li className={'py-3 cursor-pointer hover:text-gray-400 duration-300'} onClick={()=>{setView(4)}}>ویرایش اطلاعات</li>
                    <li className={'py-3 cursor-pointer hover:text-gray-400 duration-300'} onClick={logout}>خروج
                    </li>
                </ul>
            </div>
            <div className={'h-fit w-[60%] m-auto max-h-screen bg-black/60 text-white p-8  rounded-xl text-xl'}>
                {view === 1 && <Userdata data={infouser}/> }
                {view === 2 && <Usercourse courses={courses}/> }
                {view === 3 && <Userelections el={elections} data={infouser} />  }
                {view === 4 && <Editdata data={infouser} />  }
            </div>
        </div>
    )
}
