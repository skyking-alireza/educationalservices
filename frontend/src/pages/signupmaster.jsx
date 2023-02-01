import { IMaskInput } from 'react-imask';
import React from 'react'
import DatePicker from 'react-datepicker2';
import { useState} from "react";
import {user_api} from "../api/auth";
import {Alerts} from "../components/alerts";
import moment from "jalali-moment";
export default ({setsesstion}) => {
    const [birthday , setBirthday] = useState('');
    const [username , setUsername] = useState('');
    const [repeat_password , setRepeat_password] = useState('');
    const [password , setPassword] = useState('');
    const create_user = () => {
        let allinput = []
        let allinputform = document.forms["register"].getElementsByTagName("input")
        for (const element of allinputform) {allinput.push(element.validity.valid);}
        if (allinput.every(v => v === true)) {
            const data_form = new FormData(document.getElementById('createform'));
            user_api('staff_user/',{data: data_form,method:"post"}).then(() => {window.location.replace("/login")}).catch((e) => {
                    for (var value in e.response.data){Alerts({text:e.response.data[value],status:'danger'})}
            });
        }else {
            Alerts({text : 'در فرم ثبت نام شما خطایی وجود دارد نسبت به رفع آن اقدام کنید و مجددا تلاش فرمایید' , status : 'danger'});

        };

    }
    return(
        <section className={'bg-signup object-cover bg-cover w-full pt-[80px] justify-between h-full flex h-screen'}>
            <div id={'setalert'} className={'absolute h-screen z-[999]'}>
            </div>
            <div className={'z-10 w-full'}>
                <div className={'sm:w-full md:w-1/2 mx-auto my-10 bg-white drop-shadow-xl text-center text-gray-700 rounded-3xl'}>
                    <h1 className={'text-xl py-2'}>فرم عضویت انجمن علمی فنی حرفه ای</h1>
                    <form name={'register'} className={'py-5 flex flex-wrap max-h-[400px] overflow-y-scroll overflow-x-hidden '} id={'createform'}>
                        <div className={'w-fit flex flex-wrap p-4'}>
                            <label className={'flex-auto'}>
                                <input type={'text'} id={'firstname'} minLength={3} required={true} className={'rounded-md invalid:outline-none invalid:ring-red-600 valid:outline-none valid:ring-green-600 focus:outline-none ring-[2px] focus:ring-blue-600 border mx-20 bg-gray-200 my-2 peer p-3'} name={'first_name'} placeholder={'نام'} />
                                <ul className={"hidden peer-[#firstname]:peer-invalid:block text-red-700 text-sm space-y-2 "}>
                                    <li> * حداقل 3 حروف وارد کنید</li>
                                    <li> * این فیلد اجباری می باشد</li>
                                </ul>
                            </label>
                            <label className={'flex-auto'}>
                                <input type={'text'} id={'lastname'} min={3} required={true} className={'rounded-md invalid:outline-none invalid:ring-red-600 valid:outline-none valid:ring-green-600 focus:outline-none ring-[2px] focus:ring-blue-600 border mx-20 bg-gray-200 my-2 peer p-3'} name={'last_name'} placeholder={'نام خانوادگی'} />
                                <ul  class={"hidden peer-[#lastname]:peer-invalid:block text-red-700 text-sm space-y-2 "}>
                                    <li> * حداقل 3 حروف وارد کنید</li>
                                    <li> * این فیلد اجباری می باشد</li>
                                </ul>
                            </label>
                            <select name={'grade'} className={'rounded-md flex-auto h-[50px] mx-20 bg-gray-200 text-gray-700 my-2 focus:outline-none focus:ring focus:ring-blue-600 p-3'}>
                                <optgroup label={'مقطع تحصیلی'}>
                                    <option value={1}>کاردانی</option>
                                    <option value={2}>کارشناسی</option>
                                    <option value={3}>دکتری</option>
                                    <option value={4}>دکتری حرفه ای</option>
                                    <option value={5}>دکتری تخصصی</option>
                                </optgroup>
                            </select>
                            <select
                                name={'field_of_Study'}
                                className={'rounded-md flex-auto mx-20 bg-gray-200 h-[50px] my-2 text-gray-700 invalid:outline-none invalid:ring invalid:ring-red-600 focus:outline-none focus:ring focus:ring-blue-600 p-3'}>
                                <optgroup label={'رشته تحصیلی'}>
                                    <option value={1} >برق صنعتی</option>
                                    <option value={2} >تأسیسات الکتریکی</option>
                                    <option value={3} >فناوری اطلاعات و ارتباطات</option>
                                    <option value={4} >الکترونیک</option>
                                    <option value={5} >نرم‌افزار کامپیوتر</option>
                                    <option value={6} >ساختمان</option>
                                    <option value={7} >نقشه برداری</option>
                                    <option value={8} >معماری</option>
                                    <option value={9} >حسابداری</option>
                                    <option value={10} >تبلیغات و بازاریابی</option>
                                    <option value={11} >صنایع فلزی - جوشکاری</option>
                                    <option value={12} >طراحی صنعتی</option>
                                </optgroup>
                            </select>
                            <label className={'flex-auto'}>
                                <IMaskInput id={'phonenumber'} minLength={10} onChange={ (e) => setUsername(e.target.value)} required={true} type={'text'} className={'rounded-md invalid:outline-none invalid:ring-red-600 valid:outline-none valid:ring-green-600 focus:outline-none ring-[2px] focus:ring-blue-600 border mx-20 bg-gray-200 my-2 peer p-3'}  name={'phonenumber'} mask={'9000000000'} placeholder={'شماره تماس'} />
                                <ul className={"hidden peer-[#phonenumber]:peer-invalid:block text-red-700 text-sm space-y-2 "}>
                                    <li> * یک شماره تماس معتبر بدون 0 وارد کنید</li>
                                    <li> * این فیلد اجباری می باشد</li>
                                </ul>
                            </label>
                            <IMaskInput type={'hidden'} value={username} className={'rounded-md invalid:outline-none invalid:ring-red-600 valid:outline-none valid:ring-green-600 focus:outline-none ring-[2px] focus:ring-blue-600 border mx-20 bg-gray-200 my-2 peer p-3'}  name={'username'}  />
                            <label className={'flex-auto'}>
                                <input type={'email'} id={'email'} required={true} className={'rounded-md invalid:outline-none invalid:ring-red-600 valid:outline-none valid:ring-green-600 focus:outline-none ring-[2px] focus:ring-blue-600 border mx-20 bg-gray-200 my-2 peer p-3'}  name={'email'}  placeholder={'ایمیل'} />
                                <ul className={"hidden peer-[#email]:peer-invalid:block text-red-700 text-sm space-y-2 "}>
                                    <li> * ایمیل نامعتبر </li>
                                    <li> * این فیلد اجباری می باشد</li>
                                </ul>
                            </label>
                            <label className={'flex-auto'}>
                                <IMaskInput id={'studentcode'} minLength={8} required={true} type={'text'} className={'rounded-md invalid:outline-none invalid:ring-red-600 valid:outline-none valid:ring-green-600 focus:outline-none ring-[2px] focus:ring-blue-600 border mx-20 bg-gray-200 my-2 peer p-3'}  name={'studentcode'} mask={'00000000'} placeholder={'کد پرسنلی'} />
                                <ul className={"hidden peer-[#studentcode]:peer-invalid:block text-red-700 text-sm space-y-2 "}>
                                    <li> * توجه داشته باشید که کد پرسنلی شما باید 8 رقمی باشد</li>
                                    <li> * این فیلد اجباری می باشد</li>
                                </ul>
                            </label>
                            <label className={'flex-auto'}>
                                <input id={'datepicker'} required={true} name={'birthday'} type={'hidden'}  value={moment(birthday).format('YYYY-MM-DD')} />
                                <DatePicker timePicker={false} onChange={e => setBirthday(String(e._d))} placeholder={'تاریخ تولد'} showTodayButton={false} isGregorian={false} className={'rounded-md mx-20 bg-gray-200 my-2 focus:outline-none focus:ring focus:ring-blue-600 p-3'} />
                                <ul className={birthday ? "hidden" : " block text-red-700 text-sm space-y-2 " }>
                                    <li> * این فیلد اجباری می باشد</li>
                                    <li>{birthday}</li>
                                </ul>
                            </label>
                            <label className={'flex-auto'}>
                                <textarea id={"address"} required={true} className={'rounded-md invalid:outline-none invalid:ring-red-600 valid:outline-none valid:ring-green-600 focus:outline-none ring-[2px] focus:ring-blue-600 border mx-20 bg-gray-200 my-2 peer p-3'}  name={'address'}  placeholder={'محل سکونت'} ></textarea>
                                <ul className={"hidden peer-[#address]:peer-invalid:block block text-red-700 text-sm space-y-2"}>
                                    <li> * این فیلد اجباری می باشد</li>
                                </ul>
                            </label>
                            <label className={'flex-auto'}>
                            <input required={true} placeholder={'رمز عبور'} type={'password'} onChange={(e) => setPassword(e.target.value)} className={'rounded-md invalid:outline-none invalid:ring-red-600 valid:outline-none valid:ring-green-600 focus:outline-none ring-[2px] focus:ring-blue-600 border mx-20 bg-gray-200 my-2 peer p-3'} name={'password'} />
                            <input required={true} placeholder={'تکرار رمز عبور'} type={'password'} onChange={(e) => setRepeat_password(e.target.value)} className={'rounded-md invalid:outline-none invalid:ring-red-600 valid:outline-none valid:ring-green-600 focus:outline-none ring-[2px] focus:ring-blue-600 border mx-20 bg-gray-200 my-2 peer p-3'} name={'repeat_password'} />
                            <p className={password === repeat_password ?  'hidden' : 'text-red-700' }>پسورد ها برابر نیستند</p>
                            </label>
                            <input type={'button'} onClick={create_user}  className={'rounded mx-auto bg-blue-600 my-2 p-3 cursor-pointer duration-300 hover:text-blue-600 hover:bg-transparent border border-blue-600 text-white'} value={'ثبت اطلاعات'}  />
                        </div>
                    </form>
                </div>

            </div>
        </section>
    )

}
