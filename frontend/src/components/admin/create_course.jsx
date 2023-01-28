import React from "react";
import {Alerts} from "../alerts";
import { Editor } from '@tinymce/tinymce-react';
import {course_api} from "../../api/course";
import moment from "jalali-moment";
export default () => {
    const create_course = () => {
        let allinput = []
        let allinputform = document.forms["course"].getElementsByTagName("input")
        for (const element of allinputform) {allinput.push(element.validity.valid);}
        if (allinput.every(v => v === true)) {
            const data_form = new FormData(document.getElementById('course'));
            course_api('courses',{data: data_form,method:"post"}).then((e) => {
                Alerts({text:'عملیات موفقیت آمیز بود',status:'success'})
            }).catch((e) => {
                if (e.message === "timeout of 2000ms exceeded"){
                    Alerts({text : 'ارتباط با سرور برقرار نشد لطفا بعدا تلاش کنید' , status : 'danger'});
                }else if (e.response.status === 400){
                    for (var value in e.response.data){Alerts({text:e.response.data[value],status:'danger'})}
                }
            });
        }else {
            Alerts({text : 'در فرم ثبت نام شما خطایی وجود دارد نسبت به رفع آن اقدام کنید و مجددا تلاش فرمایید' , status : 'danger'});

        };
    }



    const handleEditorChange = (e) => {
        document.getElementsByName('description')[1].value = e.target.getContent()
    }
    return (
        <>
            <div className={'text-2xl mt-0 pb-2'}>ساخت دوره جدید</div>
            <form name={'course'} className={'py-5 flex flex-col '} id={'course'}>
                <div className={'max-h-[330px] h-[330px] overflow-y-scroll overflow-x-hidden'}>
                    <label>
                        <input type={'text'} id={'name'} minLength={3} required={true}
                               className={'rounded-md invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 focus:outline-none focus:ring focus:ring-blue-600  mx-20 bg-gray-600 my-2 peer  p-3'}
                               name={'name'} placeholder={'نام'}/>
                        <ul className={"marker:text-sky-400 hidden peer-[#name]:peer-invalid:block text-red-700 list-disc text-sm space-y-2 "}>
                            <li> * حداقل 3 حروف وارد کنید</li>
                            <li> * این فیلد اجباری می باشد</li>
                        </ul>
                        <input type={'hidden'} name={'teacher'} value={1}/>
                    </label>
                    <label>
                        <input type={'number'} id={'count'} min={5} required={true}
                               className={'rounded-md invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 focus:outline-none focus:ring focus:ring-blue-600  mx-20 bg-gray-600 my-2 peer  p-3'}
                               name={'count'} placeholder={'حداکثر تعداد'}/>
                        <ul className={"marker:text-sky-400 hidden peer-[#count]:peer-invalid:block text-red-700 list-disc text-sm space-y-2 "}>
                            <li> * این فیلد اجباری می باشد</li>
                        </ul>
                        <input type={'hidden'} name={'rate'} value={0}/>
                        <input type={'hidden'} name={'date_create'} value={moment(new Date()).format('YYYY-MM-DD')}/>
                    </label>
                    <label>
                        <input type={'number'} id={'price'} min={5} required={true}
                               className={'rounded-md invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 focus:outline-none focus:ring focus:ring-blue-600  mx-20 bg-gray-600 my-2 peer  p-3'}
                               name={'price'} placeholder={'قیمت'}/>
                        <ul className={"marker:text-sky-400 hidden peer-[#price]:peer-invalid:block text-red-700 list-disc text-sm space-y-2 "}>
                            <li> * این فیلد اجباری می باشد</li>
                        </ul>
                    </label>
                    <p className={'p-6'}>توضیحات دوره</p>
                    <Editor
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
                    <input type={'hidden'} name={'description'}/>
                    <label>
                        <input type={'file'} accept={'image/*'} id={'image'} required={true}
                               className={'rounded-md invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 focus:outline-none focus:ring focus:ring-blue-600  mx-20 bg-gray-600 my-2 peer  p-3'}
                               name={'image'} />
                        <ul className={"marker:text-sky-400 hidden peer-[#image]:peer-invalid:block text-red-700 list-disc text-sm space-y-2 "}>
                            <li> * این فیلد اجباری می باشد</li>
                        </ul>
                    </label>

                    <input type={'button'} onClick={create_course}  className={'rounded mx-20 bg-blue-600 my-2 invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 focus:outline-none focus:ring focus:ring-blue-600 p-3 cursor-pointer duration-300 hover:text-blue-600 hover:bg-transparent border border-blue-600'} value={'ثبت اطلاعات'}  />
                </div>
            </form>
        </>
    )
}