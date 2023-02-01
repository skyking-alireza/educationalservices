import {useNavigate} from "react-router-dom";
import {useState , useEffect} from 'react';
import {course_api} from '../api/course';
import Create_course from "../components/admin/create_course";
import {Alerts} from "../components/alerts";
export default ({setsesstion})=>{
  const [courses , setCourses] = useState(0)
  const [panel , setPanel] = useState(0)
  const navigate = useNavigate();
  const logout = () => {
      localStorage.removeItem('accesstoken');
      localStorage.removeItem('refreshtoken');
      setsesstion(null)
      navigate('/')
  }
  useEffect(()=>{
    panel == 1 && course_api('courses_by_master' ,{headers: {'Authorization': `Bearer ${localStorage.accesstoken}`}} ).then((e) =>{
      setCourses(e.data)
    }).catch((e)=>{
      for (var value in e.response.data){Alerts({text:e.response.data[value],status:'danger'})}
    })
  },[panel])
  return(
    <section className={'bg-master h-full mx-auto md:flex justify-between h-screen bg-cover pt-[80px] pb-[80px]'}>
    <div id={'setalert'} className={'absolute h-screen z-[999]'}>
    </div>
    <div className={'rounded-lg md:w-1/6 m-2 drop-shadow-lg bg-white h-fit'}>
        <ul className={'text-center leading-9 py-5'}>
            <li onClick={()=>{setPanel(1)}} className={'cursor-pointer hover:text-cyan-600 duration-300'}>دوره ها
            </li>
            <li className={'cursor-pointer hover:text-cyan-600 duration-300'}>آزمون ها
            </li>
            <li onClick={logout} className={'cursor-pointer group hover:text-cyan-600 duration-300'}>خروج</li>
        </ul>
    </div>
    <div className={'md:w-full m-2 drop-shadow-lg rounded-lg md:w-4/5 bg-white h-5/6'}>
      {panel == 1 && <Create_course info={courses} set={setCourses} />}
    </div>
    </section>
  )
}
