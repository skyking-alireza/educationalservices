import {blog_api} from "../../api/blog";
import {Alerts} from "../alerts";
import {useState} from 'react';
import Show_cate from './show_cate';
import {set_images} from "../../functions/images";
export default ({info,del})=>{
  const [cate , setCate] = useState(false)
  const editcate = (data)=>{
    document.getElementById('name').value = data.name;
    setCate(data)
  }
  const create_blog = () => {
      let allinput = []
      let allinputform = document.forms["blog"].getElementsByTagName("input")
      for (const element of allinputform) {allinput.push(element.validity.valid);}
      const data_form = new FormData(document.getElementById('blog'));
        cate ?
          document.getElementById('name').validity.valid ?
            blog_api(`RUD_category_blog/${cate.id}`,{headers: {'Authorization': `Bearer ${localStorage.accesstoken}`},data: data_form,method:"put"}).then((e) => {
                Alerts({text:'عملیات موفقیت آمیز بود',status:'success'})
            }).catch((e) => {
                if (e.message === "timeout of 2000ms exceeded"){
                    Alerts({text : 'ارتباط با سرور برقرار نشد لطفا بعدا تلاش کنید' , status : 'danger'});
                }else if (e.response.status === 400){
                    for (var value in e.response.data){Alerts({text:e.response.data[value],status:'danger'})}
                }
            })
          :
            Alerts({text : 'در فرم شما خطایی وجود دارد نسبت به رفع آن اقدام کنید و مجددا تلاش فرمایید' , status : 'danger'})
          :
          allinput.every(v => v === true) ?
            blog_api('category_blog',{headers: {'Authorization': `Bearer ${localStorage.accesstoken}`},data: data_form,method:"post"}).then((e) => {
                Alerts({text:'عملیات موفقیت آمیز بود',status:'success'})
            }).catch((e) => {
                if (e.message === "timeout of 2000ms exceeded"){
                    Alerts({text : 'ارتباط با سرور برقرار نشد لطفا بعدا تلاش کنید' , status : 'danger'});
                }else if (e.response.status === 400){
                    for (var value in e.response.data){Alerts({text:e.response.data[value],status:'danger'})}
                }
            })
          :
              Alerts({text : 'در فرم شما خطایی وجود دارد نسبت به رفع آن اقدام کنید و مجددا تلاش فرمایید' , status : 'danger'})
  }
    return(
    <div className={'p-5'}>
        <div className={'text-2xl p-3'}>ساخت دسته بندی جدید</div>
        <form name={'blog'} className={'py-5 flex flex-col '} id={'blog'}>
            <div className={'max-h-[330px] flex flex-wrap h-[330px] overflow-y-scroll overflow-x-hidden'}>
                <label>
                    <input type={'text'} id={'name'} minLength={3} required={true}
                           className={'rounded-md invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 focus:outline-none focus:ring focus:ring-blue-600  mx-20 bg-gray-600 my-2 peer  p-3'}
                           name={'name'} placeholder={'نام'}/>
                    <ul className={"marker:text-sky-400 hidden peer-[#name]:peer-invalid:block text-red-700 list-disc text-sm space-y-2 "}>
                        <li> * حداقل 3 حروف وارد کنید</li>
                        <li> * این فیلد اجباری می باشد</li>
                    </ul>
                </label>
                <label>
                  <img className={cate && 'w-[200px] h-[150px] rounded'} src={cate && set_images(cate.image)} />
                  <input type={'file'} id={'image'} accept={'image/*'} required={true}
                         className={'rounded-md invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 focus:outline-none focus:ring focus:ring-blue-600  mx-20 bg-gray-600 my-2 peer  p-3'}
                         name={'image'} placeholder={'نام'}/>
                  <ul className={"marker:text-sky-400 hidden peer-[#image]:peer-invalid:block text-red-700 list-disc text-sm space-y-2 "}>
                      <li> * این فیلد اجباری می باشد</li>
                  </ul>
                </label>
                <input type={'button'} onClick={create_blog} className={'rounded h-fit bg-blue-600 my-2 invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 focus:outline-none focus:ring focus:ring-blue-600 p-3 cursor-pointer duration-300 hover:text-blue-600 hover:bg-transparent border border-blue-600'} value={'ثبت اطلاعات'}  />
                <div className={'flex flex-wrap justify-between mx-20'}>
                    {info && info.map((e , i) =>{return <Show_cate key={i} info={e} edit={editcate} del={del} />})}
                </div>
            </div>
        </form>
    </div>
  )
}
