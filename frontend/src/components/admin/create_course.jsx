import {React ,useRef,useState} from "react";
import {Alerts} from "../alerts";
import { Editor } from '@tinymce/tinymce-react';
import {course_api} from "../../api/course";
import All_course from './all_course';
import moment from "jalali-moment";
import {set_images} from "../../functions/images";
export default ({info,set}) => {
    const description = useRef(null)
    const [course , setCourse] = useState(0)
    const edit_course = (info) =>{
      setCourse(info)
      document.getElementById('name').value = info.name
      document.getElementById('count').value = info.count
      document.getElementById('price').value = info.price
      document.getElementById('description').value = info.description
      description.current.setContent(info.description)
    }
    const delete_course = (id) =>{
      course_api(`RUD_courses/${id}`,{method:"delete",headers: {'Authorization': `Bearer ${localStorage.accesstoken}`}}).then((e) => {
          Alerts({text:'عملیات موفقیت آمیز بود',status:'success'})
          let el = info.filter((e)=>{
            return e.id !== id
          })
          set([...el])
      }).catch((e) => {
          for (var value in e.response.data){Alerts({text:e.response.data[value],status:'danger'})}
      });
    }
    const create_course = () => {
        let allinput = []
        let allinputform = document.forms["course"].getElementsByTagName("input")
        for (const element of allinputform) {allinput.push(element.validity.valid);}
        const data_form = new FormData(document.getElementById('course'));
        if(course){
          course_api(`RUD_courses/${course.id}`,{data: data_form,method:"put",headers: {'Authorization': `Bearer ${localStorage.accesstoken}`}}).then((e) => {
              Alerts({text:'عملیات موفقیت آمیز بود',status:'success'})
          }).catch((e) => {
              for (var value in e.response.data){Alerts({text:e.response.data[value],status:'danger'})}
          });
        }else{
          if (allinput.every(v => v === true)) {
              course_api('courses',{data: data_form,method:"post",headers: {'Authorization': `Bearer ${localStorage.accesstoken}`}}).then((e) => {
                  Alerts({text:'عملیات موفقیت آمیز بود',status:'success'})
              }).catch((e) => {
                      for (var value in e.response.data){Alerts({text:e.response.data[value],status:'danger'})}
              });
          }else {
              Alerts({text : 'در فرم ثبت نام شما خطایی وجود دارد نسبت به رفع آن اقدام کنید و مجددا تلاش فرمایید' , status : 'danger'});
          };
        }

    }
    const handleEditorChange = (e) => {
        document.getElementById('description').value  = e.target.getContent()
    }
    return (
        <>
            <div className={'text-2xl mt-0 pb-2'}>ساخت دوره جدید</div>
            <div className={'max-h-[400px] overflow-y-scroll overflow-x-hidden'}>
            <form name={'course'} className={'p-5 flex flex-wrap text-center'} id={'course'}>
                    <label className={'flex-auto'}>
                        <input type={'text'} id={'name'} minLength={3} required={true}
                               className={'rounded-md invalid:outline-none invalid:ring-red-600 valid:outline-none valid:ring-green-600 focus:outline-none ring-[2px] focus:ring-blue-600 border mx-20 bg-gray-200 my-2 peer p-3'}
                               name={'name'} placeholder={'نام'}/>
                        <ul className={" hidden peer-[#name]:peer-invalid:block text-red-700 text-sm space-y-2 "}>
                            <li> * حداقل 3 حروف وارد کنید</li>
                            <li> * این فیلد اجباری می باشد</li>
                        </ul>
                    </label>
                    <label className={'flex-auto'}>
                        <input type={'number'} id={'count'} min={0} required={true}
                               className={'rounded-md appearance-none invalid:outline-none invalid:ring-red-600 valid:outline-none valid:ring-green-600 focus:outline-none ring-[2px] focus:ring-blue-600 border mx-20 bg-gray-200 my-2 peer p-3'}
                               name={'count'} placeholder={'حداکثر تعداد'}/>
                        <ul className={" hidden peer-[#count]:peer-invalid:block text-red-700 text-sm space-y-2 "}>
                            <li> * این فیلد اجباری می باشد</li>
                        </ul>
                        <input type={'hidden'} name={'date_create'} value={moment(new Date()).format('YYYY-MM-DD')}/>
                    </label>
                    <label className={'flex-auto'}>
                        <input type={'number'} id={'price'} min={0} required={true}
                               className={'rounded-md appearance-none invalid:outline-none invalid:ring-red-600 valid:outline-none valid:ring-green-600 focus:outline-none ring-[2px] focus:ring-blue-600 border mx-20 bg-gray-200 my-2 peer p-3'}
                               name={'price'} placeholder={'قیمت'}/>
                        <ul className={" hidden peer-[#price]:peer-invalid:block text-red-700 text-sm space-y-2 "}>
                            <li> * این فیلد اجباری می باشد</li>
                        </ul>
                    </label>
                    <label className={'flex-auto'}>
                    <p className={'p-6'}>توضیحات دوره</p>
                    <Editor
                        onInit={(evt , editor) => description.current = editor }
                        onChange={handleEditorChange}
                        init={{
                            'cleanup_on_startup': true,
                            'custom_undo_redo_levels': 20,
                            'selector': 'textarea#tinymce',
                            'theme': 'silver',
                            'plugins':
                            "textcolor save link image media preview codesample contextmenu table code lists fullscreen  insertdatetime  nonbreaking contextmenu directionality searchreplace wordcount visualblocks visualchars code fullscreen autolink lists  charmap print  hr anchor pagebreak"
                            ,
                            'toolbar1':
                            "fullscreen preview bold italic underline | fontselect, fontsizeselect  | forecolor backcolor | alignleft alignright | aligncenter alignjustify | indent outdent | bullist numlist table  | link image media | codesample |"
                            ,
                            'toolbar2':
                            "visualblocks visualchars | charmap hr pagebreak nonbreaking anchor |  code | ",
                            'contextmenu': 'formats | link image',
                            'menubar': true,
                            'statusbar': true,
                    }} />
                    </label>

                    <input type={'hidden'} id={'description'} name={'description'}/>
                    <label className={'flex-auto'}>
                        <img className={ course ? 'w-[200px] h-[150px] rounded' : 'hidden'} src={course && set_images(course.image)} />
                        <input type={'file'} accept={'image/*'} id={'image'} required={true}
                               className={'rounded-md invalid:outline-none invalid:ring-red-600 valid:outline-none valid:ring-green-600 focus:outline-none ring-[2px] focus:ring-blue-600 border mx-20 bg-gray-200 my-2 peer p-3'}
                               name={'image'} />
                        <ul className={" hidden peer-[#image]:peer-invalid:block text-red-700 text-sm space-y-2 "}>
                            <li> * این فیلد اجباری می باشد</li>
                        </ul>
                    </label>
                    <input type={'button'} onClick={create_course}  className={'rounded max-h-[50px] mx-20 bg-blue-600 my-2 invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 focus:outline-none focus:ring focus:ring-blue-600 p-3 cursor-pointer duration-300 hover:text-blue-600 hover:bg-transparent border border-blue-600'} value={'ثبت اطلاعات'}  />
                    <br />
                    <div className={'w-full flex flex-wrap justify-between mx-5 text-center text-white'}>
                      {info.length ?
                        info.map((e) =>{return <All_course info={e} del={delete_course} edit={edit_course} />})
                        :
                        <p className={'bg-yellow-600 mx-auto m-4 p-4 rounded-xl '}>شما دوره ای ایجاد نکرده اید</p>
                      }
                    </div>
            </form>
            </div>
        </>
    )
}
