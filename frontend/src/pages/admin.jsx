import {parseJwt} from "../functions/parseJWT";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {user_api} from "../api/auth";
import {blog_api} from "../api/blog";
import {Alerts} from "../components/alerts";
import Create_election from "../components/admin/create_election";
import Create_category_blog from "../components/admin/create_category_blog";
import Create_blog from "../components/admin/create_blog";
import All_election from "../components/admin/all_election";
import Students from "../components/admin/students";
import Masters from "../components/admin/masters";
export default ({setsesstion})=>{
    const navigate = useNavigate();
    const [panel , setPanel] = useState(0)
    const [elections , setElections] = useState(false);
    const [category_blog , setCategory_blog] = useState(false);
    const [students , setStudents] = useState(false);
    const [masters , setMasters] = useState(false);
    const [blog , setBlog] = useState(false);
    const del_blog = (id)=>{
      blog_api(`RUD_blog/${id}` , {method: "delete",headers: {'Authorization': `Bearer ${localStorage.accesstoken}`}}).then(()=>{
        const el = blog.filter((e)=>{
          return e.id !== id
        })
        setBlog([...el])
      }).catch((e)=>{
        for (var value in e.response.data){Alerts({text:e.response.data[value],status:'danger'})}
      })

    }
    const able_master = (id,status)=>{
      user_api(`able_master/${id}` , {method: "put",data : {is_active : !status} , headers: {'Authorization': `Bearer ${localStorage.accesstoken}`}}).then((e)=>{
        masters.map((e)=>{ if (e.id === id){e.is_active = !status}return e})
        setMasters([...masters])
      }).catch((e)=>{
        for (var value in e.response.data){Alerts({text:e.response.data[value],status:'danger'})}
      })

    }
    const del_election =(id)=>{
      user_api(`RUD_election/${id}` , {method: "delete",headers: {'Authorization': `Bearer ${localStorage.accesstoken}`}}).then(()=>{
        const el = elections.filter((e)=>{
          return e.id !== id
        })
        setElections([...el])
      }).catch((e)=>{
        for (var value in e.response.data){Alerts({text:e.response.data[value],status:'danger'})}
      })

    }
    const del_category_blog =(id)=>{
      blog_api(`RUD_category_blog/${id}` , {method: "delete",headers: {'Authorization': `Bearer ${localStorage.accesstoken}`}}).then(()=>{
        const el = category_blog.filter((e)=>{
          return e.id !== id
        })
        setCategory_blog([...el])
      }).catch((e)=>{
        for (var value in e.response.data){Alerts({text:e.response.data[value],status:'danger'})}
      })

    }
    useEffect(()=>{
      if (panel === 2 && !elections){
        (async()=>{
          await user_api('election/').then((e) =>{
            setElections(e.data)
          }).catch((e) =>{
            for (var value in e.response.data){Alerts({text:e.response.data[value],status:'danger'})}
          })
        } )()
      }
      if ((panel === 4 || panel === 3 ) && !category_blog){
        (async()=>{
          await blog_api('category_blog').then((e) =>{
            setCategory_blog(e.data)
          }).catch((e) =>{
            for (var value in e.response.data){Alerts({text:e.response.data[value],status:'danger'})}
          })
        } )()
      }
      if (panel === 4  && !blog){
        (async()=>{
          await blog_api('blog').then((e) =>{
            setBlog(e.data)
          }).catch((e) =>{
            for (var value in e.response.data){Alerts({text:e.response.data[value],status:'danger'})}
          })
        } )()
      }
      if (panel === 5 && !students){
        (async()=>{
          await user_api('students/').then((e) =>{
            setStudents(e.data)
          }).catch((e) =>{
            for (var value in e.response.data){Alerts({text:e.response.data[value],status:'danger'})}
          })
        } )()
      }
      if (panel === 6 && !masters){
        (async()=>{
          await user_api('masters/').then((e) =>{
            setMasters(e.data)
          }).catch((e) =>{
            for (var value in e.response.data){Alerts({text:e.response.data[value],status:'danger'})}
          })
        } )()
      }
    },[panel])
    const refreshtoken = () => {
        user_api('refresh/', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            data: {refresh: localStorage.refreshtoken}
        }).then((e) => {
            Alerts({text: 'ورود موفقیت امیز بود', status: 'success'});
            setsesstion(e.data.access)
        })
    }
    useEffect(() => {
        (async () => {
            await user_api(`verify/`, {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                data: {token: localStorage.accesstoken}
            }).then(()=>{
                parseJwt(localStorage.accesstoken).admin === false && setsesstion(null);
            }).catch((e) => {
                user_api(`verify/`, {
                    method: "POST",
                    headers: {'Content-Type': 'application/json'},
                    data: {token: localStorage.refreshtoken}
                }).then((e) => {
                    refreshtoken()
                }).catch((e) => {
                    Alerts({text: 'مجددا وارد شوید', status: 'danger'});
                    localStorage.removeItem('accesstoken');
                    localStorage.removeItem('refreshtoken');
                    setsesstion(null)
                    navigate('/')
                })
            })
        })()

    }, [])

    const logout = () => {
        localStorage.removeItem('accesstoken');
        localStorage.removeItem('refreshtoken');
        setsesstion(null)
        navigate('/')
    }
    return(
        <section className={'bg-admin h-full mx-auto md:flex justify-between h-screen bg-cover pt-[80px] pb-[80px]'}>
            <div id={'setalert'} className={'absolute h-screen z-[999]'}>
            </div>
            <div className={'rounded-lg md:w-1/6 m-2 drop-shadow-lg bg-white h-fit'}>
                <ul className={'text-center leading-9 py-5'}>
                    <li className={'cursor-pointer hover:text-cyan-600duration-300'}>داشبورد</li>
                    <li className={'cursor-pointer group hover:text-cyan-600 duration-300'}>مدیریت انتخابات
                        <ul className={'hidden group-hover:block '}>
                            <li onClick={()=>{setPanel(1)}} className={'text-sm leading-6 text-black hover:text-cyan-600 translate-x-4'}>ساخت انتخابات</li>
                            <li onClick={()=>{setPanel(2)}} className={'text-sm leading-6 text-black hover:text-cyan-600 translate-x-4'}>ویراش انتخابات</li>
                        </ul>
                    </li>
                    <li className={'cursor-pointer group hover:text-cyan-600 duration-300'}>مدیریت وبلاگ
                        <ul className={'hidden group-hover:block '}>
                            <li onClick={()=>{setPanel(3)}} className={'text-sm leading-6 text-black hover:text-cyan-600 translate-x-4'}>ساخت دسته بندی</li>
                            <li onClick={()=>{setPanel(4)}} className={'text-sm leading-6 text-black hover:text-cyan-600 translate-x-4'}>ایجاد نوشته</li>
                        </ul>
                    </li>
                    <li className={'cursor-pointer group hover:text-cyan-600 duration-300'}> مدیریت کاربران
                        <ul className={'hidden group-hover:block '}>
                            <li onClick={()=>{setPanel(5)}} className={'text-sm leading-6 text-black hover:text-cyan-600 translate-x-4'}>همه کاربران</li>
                            <li onClick={()=>{setPanel(6)}} className={'text-sm leading-6 text-black hover:text-cyan-600 translate-x-4'}>اساتید</li>
                        </ul>
                    </li>
                    <li onClick={()=>{logout()}} className={'cursor-pointer hover:text-cyan-600 duration-300'}>خروج</li>
                </ul>
            </div>
            <div className={'md:w-full m-2 drop-shadow-lg rounded-lg md:w-4/5 bg-white h-5/6'}>
                {panel === 0 &&
                    <div className={'p-5'}>
                        <p>بازدید روزانه سایت :</p>
                        <p>۱۲۰۰نفر</p>
                    </div>
                }
                {panel === 1 &&
                    <Create_election />
                }
                {panel === 2 &&
                    <All_election del={del_election} elections={elections} />
                }
                {panel === 3 &&
                    <Create_category_blog info={category_blog} del={del_category_blog} />
                }
                {panel === 4 &&
                    <Create_blog data={blog} del={del_blog} category={category_blog} />
                }
                {panel === 5 && <Students info={students} /> }
                {panel === 6 && <Masters able={able_master} info={masters} /> }
            </div>
        </section>
    )
}
