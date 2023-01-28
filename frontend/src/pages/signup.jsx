import { IMaskInput } from 'react-imask';
import React from 'react'
import DatePicker from 'react-datepicker2';
import { useState} from "react";
import {user_api} from "../api/auth";
import {Alerts} from "../components/alerts";
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
            user_api('user/',{data: data_form,method:"post"}).then(() => {window.location.replace("/login")}).catch((e) => {
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
    return(
        <section className={'w-full justify-between h-full flex'}>
            <div id={'setalert'} className={'absolute h-screen z-[999]'}>
            </div>

            <img className={'h-screen w-screen object-cover brightness-50 left-0'} src={'images/signup/close-up-doctor-filling-out-prescription.webp'} alt={'signup'} />
            <div className={'fixed py-24 px-4 z-10 w-full'}>
                <div className={'max-w-[400px] mx-auto py-16 bg-black/70 text-center text-white rounded-3xl'}>
                    <h1 className={'text-xl '}>فرم عضویت انجمن علمی فنی حرفه ای</h1>
                    <form name={'register'} className={'py-5 flex flex-col '} id={'createform'}>
                        <div className={'max-h-[330px] h-[330px] overflow-y-scroll overflow-x-hidden'}>
                            <label>
                                <input type={'text'} id={'firstname'} minLength={3} required={true} className={'rounded-md invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 focus:outline-none focus:ring focus:ring-blue-600  mx-20 bg-gray-600 my-2 peer  p-3'} name={'first_name'} placeholder={'نام'} />
                                <ul className={"marker:text-sky-400 hidden peer-[#firstname]:peer-invalid:block text-red-700 list-disc text-sm space-y-2 "}>
                                    <li> * حداقل 3 حروف وارد کنید</li>
                                    <li> * این فیلد اجباری می باشد</li>
                                </ul>
                            </label>
                            <label>
                                <input type={'text'} id={'lastname'} min={3} required={true} className={'rounded-md peer mx-20 bg-gray-600 my-2 invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 focus:outline-none focus:ring focus:ring-blue-600 p-3'} name={'last_name'} placeholder={'نام خانوادگی'} />
                                <ul  class={"marker:text-sky-400 hidden peer-[#lastname]:peer-invalid:block text-red-700 list-disc text-sm space-y-2 "}>
                                    <li> * حداقل 3 حروف وارد کنید</li>
                                    <li> * این فیلد اجباری می باشد</li>
                                </ul>
                            </label>
                            <label>
                                <input type={'text'} id={'fathername'} min={3} required={true} className={'rounded-md peer mx-20 bg-gray-600 my-2 invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 focus:outline-none focus:ring focus:ring-blue-600 p-3'} name={'fathername'} placeholder={'نام پدر'} />
                                <ul className={"marker:text-sky-400 hidden peer-[#fathername]:peer-invalid:block text-red-700 list-disc text-sm space-y-2 "}>
                                    <li> * حداقل 3 حروف وارد کنید</li>
                                    <li> * این فیلد اجباری می باشد</li>
                                </ul>
                            </label>
                            <select name={'grade'} className={'rounded-md mx-20 bg-gray-600 my-2 focus:outline-none focus:ring focus:ring-blue-600 p-3'}>
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
                                className={'rounded-md mx-20 bg-gray-600 my-2 invalid:outline-none invalid:ring invalid:ring-red-600 focus:outline-none focus:ring focus:ring-blue-600 p-3'}>
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
                            <label>
                                <IMaskInput id={'phonenumber'} minLength={10} onChange={ (e) => setUsername(e.target.value)} required={true} type={'text'} className={'rounded-md peer mx-20 bg-gray-600 my-2 invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 focus:outline-none focus:ring focus:ring-blue-600 p-3'}  name={'phonenumber'} mask={'9000000000'} placeholder={'شماره تماس'} />
                                <ul className={"marker:text-sky-400 hidden peer-[#phonenumber]:peer-invalid:block text-red-700 list-disc text-sm space-y-2 "}>
                                    <li> * یک شماره تماس معتبر بدون 0 وارد کنید</li>
                                    <li> * این فیلد اجباری می باشد</li>
                                </ul>
                            </label>
                            <IMaskInput type={'hidden'} value={username} className={'rounded-md mx-20 bg-gray-600 my-2 invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 focus:outline-none focus:ring focus:ring-blue-600 p-3'}  name={'username'}  />
                            <label>
                                <input type={'email'} id={'email'} required={true} className={'rounded-md peer mx-20 bg-gray-600 my-2 invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 focus:outline-none focus:ring focus:ring-blue-600 p-3'}  name={'email'}  placeholder={'ایمیل'} />
                                <ul className={"marker:text-sky-400 hidden peer-[#email]:peer-invalid:block text-red-700 list-disc text-sm space-y-2 "}>
                                    <li> * ایمیل وارد شده معتبر نیست لطفا از صحت ایمیل خود اطمینان کسب کرده و مجدد تلاش کنید</li>
                                    <li> * این فیلد اجباری می باشد</li>
                                </ul>
                            </label>
                            <label>
                                <IMaskInput id={'virtualnumber'} minLength={10} required={true} type={'text'}  className={'rounded-md peer mx-20 bg-gray-600 my-2 invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 focus:outline-none focus:ring focus:ring-blue-600 p-3'}  name={'virtualnumber'} mask={'9000000000'} placeholder={'شماره فضای مجازی'} />
                                <ul className={"marker:text-sky-400 hidden peer-[#virtualnumber]:peer-invalid:block text-red-700 list-disc text-sm space-y-2 "}>
                                    <li> * یک شماره تماس معتبر بدون 0 وارد کنید</li>
                                    <li> * این فیلد اجباری می باشد</li>
                                </ul>
                            </label>
                            <label>
                                <IMaskInput id={'studentcode'} minLength={14} required={true} type={'text'} className={'rounded-md peer mx-20 bg-gray-600 my-2 invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 focus:outline-none focus:ring focus:ring-blue-600 p-3'}  name={'studentcode'} mask={'00000000000000'} placeholder={'شماره دانشجویی'} />
                                <ul className={"marker:text-sky-400 hidden peer-[#studentcode]:peer-invalid:block text-red-700 list-disc text-sm space-y-2 "}>
                                    <li> * توجه داشته باشید که شماره دانشجویی شما 14 باید رقمی باشد</li>
                                    <li> * این فیلد اجباری می باشد</li>
                                </ul>
                            </label>
                            <label>
                                <input id={'datepicker'} required={true} name={'birthday'} type={'hidden'}  value={ new Date(birthday).getFullYear() + '-' + new Date(birthday).getUTCMonth() + '-' + new Date(birthday).getDay()} />
                                <DatePicker timePicker={false} onChange={e => setBirthday(String(e._d))} placeholder={'تاریخ تولد'} showTodayButton={false} isGregorian={false} className={'rounded-md mx-20 bg-gray-600 my-2 focus:outline-none focus:ring focus:ring-blue-600 p-3'} />
                                <ul className={birthday ? "hidden" : "marker:text-sky-400  block text-red-700 list-disc text-sm space-y-2 " }>
                                    <li> * این فیلد اجباری می باشد</li>
                                    <li>{birthday}</li>
                                </ul>
                            </label>
                            <label>
                                <textarea id={"address"} required={true} className={'rounded-md mx-20 bg-gray-600 my-2 invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 focus:outline-none focus:ring focus:ring-blue-600 p-3'}  name={'address'}  placeholder={'محل سکونت'} ></textarea>
                                <ul className={"marker:text-sky-400 hidden peer-[#address]:peer-invalid:block block text-red-700 list-disc text-sm space-y-2"}>
                                    <li> * این فیلد اجباری می باشد</li>
                                </ul>
                            </label>

                            <label className={'inline-flex peer-checked/draft:text-sky-500 text-center mx-20'}>آیا عضو انجمن یا گروه دیگر در دانشگاه هستید ؟</label>
                            <input name={'otherassociation'} className={'accent-blue-600 cursor-pointer w-5 h-5 rounded-xl duration-300'} type={'checkbox'}/>
                            <br/>
                            <label>
                                <textarea required={true} id={'descriptionotherassociation'} className={'rounded-md peer mx-20 bg-gray-600 my-2 invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 focus:outline-none focus:ring focus:ring-blue-600 p-3'}  name={'descriptionotherassociation'}  placeholder={'در چه عرصه هایی مایل به همکاری هستید ؟'} ></textarea>
                                <ul className={"marker:text-sky-400 hidden peer-[#descriptionotherassociation]:peer-invalid:block block text-red-700 list-disc text-sm space-y-2"}>
                                    <li> * این فیلد اجباری می باشد</li>
                                </ul>
                            </label>
                            <label>
                                <textarea required={true} id={'skill'} className={'rounded-md peer mx-20 bg-gray-600 my-2 invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 focus:outline-none focus:ring focus:ring-blue-600 p-3'}  name={'skill'}  placeholder={'مهارت های تخصصی مرتبط با رشته'} ></textarea>
                                <ul className={"marker:text-sky-400 hidden peer-[#skill]:peer-invalid:block block text-red-700 list-disc text-sm space-y-2"}>
                                    <li> * این فیلد اجباری می باشد</li>
                                </ul>
                            </label>
                            <label>
                                <textarea required={true} id={'proposal'} className={'rounded-md mx-20 bg-gray-600 my-2 invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 focus:outline-none focus:ring focus:ring-blue-600 p-3'}  name={'proposal'}  placeholder={'سایر پیشنهاد ها جهت فعالیت در انجمن'} ></textarea>
                                <ul className={"marker:text-sky-400 hidden peer-[#proposal]:peer-invalid:block block text-red-700 list-disc text-sm space-y-2"}>
                                    <li> * این فیلد اجباری می باشد</li>
                                </ul>
                            </label>
                            <label className={'inline-flex text-center mx-20'}>تمایل به شرکت در انتخابات به عنوان کاندیدای انتخابات انجمن علمی رشته مربوطه</label>
                            <input name={'candidate'} className={'accent-blue-600 cursor-pointer w-5 h-5 rounded-xl duration-300'} type={'checkbox'}/>
                            <br/>
                            <label className={'inline-flex text-center mx-20'}>نوع عضویت</label>
                            <br/>
                            <input id={'enable'} name={'typemember'} className={'accent-blue-600 cursor-pointer w-5 h-5 rounded-xl duration-300'} value={1} type={'radio'}/>
                            <label htmlFor={'enable'}>فعال</label>
                            <input checked={true} id={'disable'} name={'typemember'} className={'accent-blue-600 cursor-pointer w-5 h-5 rounded-xl duration-300'} value={0} type={'radio'}/>
                            <label htmlFor={'disable'}>عادی</label>
                            <input required={true} placeholder={'رمز عبور'} type={'password'} onChange={(e) => setPassword(e.target.value)} className={'rounded-md mx-20 bg-gray-600 my-2 invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 focus:outline-none focus:ring focus:ring-blue-600 p-3'} name={'password'} />
                            <input required={true} placeholder={'تکرار رمز عبور'} type={'password'} onChange={(e) => setRepeat_password(e.target.value)} className={'rounded-md mx-20 bg-gray-600 my-2 invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 focus:outline-none focus:ring focus:ring-blue-600 p-3'} name={'repeat_password'} />
                            <p className={password === repeat_password ?  'hidden' : 'text-red-700' }>پسورد ها برابر نیستند</p>
                            <br/>
                        </div>
                        <input type={'button'} onClick={create_user}  className={'rounded mx-20 bg-blue-600 my-2 invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 focus:outline-none focus:ring focus:ring-blue-600 p-3 cursor-pointer duration-300 hover:text-blue-600 hover:bg-transparent border border-blue-600'} value={'ثبت اطلاعات'}  />
                    </form>
                </div>

            </div>
        </section>
    )

}