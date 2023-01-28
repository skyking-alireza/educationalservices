import {IMaskInput} from "react-imask";
import DatePicker from "react-datepicker2";
import React, {useEffect, useState} from "react";
import moment from 'jalali-moment'
import {user_api} from "../../api/auth";
import {Alerts} from "../alerts";

export default ({data}) => {
    const [user, setUser] = useState('');
    const [birthday, setBirthday] = useState('');
    useEffect(() => {
        data && setUser(data[0])
    }, [data])
    const update_user = () => {
        let allinput = []
        let allinputform = document.forms["update"].getElementsByTagName("input")
        for (const element of allinputform) {allinput.push(element.validity.valid);}
        if (allinput.every(v => v === true)) {
            const data_form = new FormData(document.getElementById('updateform'));
            user_api(`update_user/${user.id}`,{data: data_form,method:"PUT"}).then(() => {window.location.replace("/login")}).catch((e) => {
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
    return (
        <>
            <div className={'text-2xl w-full mt-0 pb-2'}>ویرایش اطلاعات</div>
            <div id={'setalert'} className={'absolute h-screen z-[999]'}>
            </div>
            {user &&
                <form name={'update'} className={'mx-auto px-24 text-center '} id={'updateform'}>
                    <div className={'max-h-[330px] h-[330px] overflow-y-scroll overflow-x-hidden'}>
                        <label>
                            <input defaultValue={user.first_name} type={'text'} id={'firstname'} minLength={3}
                                   required={true}
                                   className={'rounded-md invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 focus:outline-none focus:ring focus:ring-blue-600  mx-20 bg-gray-600 my-2 peer  p-3'}
                                   name={'first_name'} placeholder={'نام'}/>
                            <ul className={"marker:text-sky-400 hidden peer-[#firstname]:peer-invalid:block text-red-700 list-disc text-sm space-y-2 "}>
                                <li> * حداقل 3 حروف وارد کنید</li>
                                <li> * این فیلد اجباری می باشد</li>
                            </ul>
                        </label>
                        <label>
                            <input defaultValue={user.last_name } type={'text'} id={'lastname'} min={3} required={true}
                                   className={'rounded-md peer mx-20 bg-gray-600 my-2 invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 focus:outline-none focus:ring focus:ring-blue-600 p-3'}
                                   name={'last_name'} placeholder={'نام خانوادگی'}/>
                            <ul className={"marker:text-sky-400 hidden peer-[#lastname]:peer-invalid:block text-red-700 list-disc text-sm space-y-2 "}>
                                <li> * حداقل 3 حروف وارد کنید</li>
                                <li> * این فیلد اجباری می باشد</li>
                            </ul>
                        </label>
                        <label>
                            <input defaultValue={user.fathername } type={'text'} id={'fathername'} min={3} required={true}
                                   className={'rounded-md peer mx-20 bg-gray-600 my-2 invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 focus:outline-none focus:ring focus:ring-blue-600 p-3'}
                                   name={'fathername'} placeholder={'نام پدر'}/>
                            <ul className={"marker:text-sky-400 hidden peer-[#fathername]:peer-invalid:block text-red-700 list-disc text-sm space-y-2 "}>
                                <li> * حداقل 3 حروف وارد کنید</li>
                                <li> * این فیلد اجباری می باشد</li>
                            </ul>
                        </label>
                        <select defaultValue={user.grade} name={'grade'}
                                className={'rounded-md mx-20 bg-gray-600 my-2 focus:outline-none focus:ring focus:ring-blue-600 p-3'}>
                            <optgroup label={'مقطع تحصیلی'}>
                                <option value={1}>کاردانی</option>
                                <option value={2}>کارشناسی</option>
                                <option value={3}>دکتری</option>
                                <option value={4}>دکتری حرفه ای</option>
                                <option value={5}>دکتری تخصصی</option>
                            </optgroup>
                        </select>
                        <select
                            defaultValue={user.field_of_Study}
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
                            <input defaultValue={user.email } type={'email'} id={'email'} required={true}
                                   className={'rounded-md peer mx-20 bg-gray-600 my-2 invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 focus:outline-none focus:ring focus:ring-blue-600 p-3'}
                                   name={'email'} placeholder={'ایمیل'}/>
                            <ul className={"marker:text-sky-400 hidden peer-[#email]:peer-invalid:block text-red-700 list-disc text-sm space-y-2 "}>
                                <li> * ایمیل وارد شده معتبر نیست لطفا از صحت ایمیل خود اطمینان کسب کرده و مجدد تلاش
                                    کنید
                                </li>
                                <li> * این فیلد اجباری می باشد</li>
                            </ul>
                        </label>
                        <label>
                            <IMaskInput defaultValue={user.virtualnumber } id={'virtualnumber'} minLength={10} required={true} type={'text'}
                                        className={'rounded-md peer mx-20 bg-gray-600 my-2 invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 focus:outline-none focus:ring focus:ring-blue-600 p-3'}
                                        name={'virtualnumber'} mask={'9000000000'}
                                        placeholder={'شماره فضای مجازی'}/>
                            <ul className={"marker:text-sky-400 hidden peer-[#virtualnumber]:peer-invalid:block text-red-700 list-disc text-sm space-y-2 "}>
                                <li> * یک شماره تماس معتبر بدون 0 وارد کنید</li>
                                <li> * این فیلد اجباری می باشد</li>
                            </ul>
                        </label>
                        <label>
                            <IMaskInput defaultValue={user.studentcode} id={'studentcode'} minLength={14} required={true} type={'text'}
                                        className={'rounded-md peer mx-20 bg-gray-600 my-2 invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 focus:outline-none focus:ring focus:ring-blue-600 p-3'}
                                        name={'studentcode'} mask={'00000000000000'}
                                        placeholder={'شماره دانشجویی'}/>
                            <ul className={"marker:text-sky-400 hidden peer-[#studentcode]:peer-invalid:block text-red-700 list-disc text-sm space-y-2 "}>
                                <li> * توجه داشته باشید که شماره دانشجویی شما 14 باید رقمی باشد</li>
                                <li> * این فیلد اجباری می باشد</li>
                            </ul>
                        </label>
                        <label>
                            <input id={'datepicker'} required={true} name={'birthday'} type={'hidden'}
                                   value={new Date(birthday).getFullYear() + '-' + new Date(birthday).getUTCMonth() + '-' + new Date(birthday).getDay()}/>

                            <DatePicker timePicker={false} onChange={e => setBirthday(String(e._d))}
                                        placeholder={'تاریخ تولد'} showTodayButton={false} isGregorian={false}
                                        value={moment(new Date('2002-04-04'), 'YYYY/MM/DD')}
                                        className={'rounded-md mx-20 bg-gray-600 my-2 focus:outline-none focus:ring focus:ring-blue-600 p-3'}
                            />
                            <ul className={birthday ? "hidden" : "marker:text-sky-400  block text-red-700 list-disc text-sm space-y-2 "}>
                                <li> * این فیلد اجباری می باشد</li>
                                <li>{birthday}</li>
                            </ul>
                        </label>
                        <label>
                            <textarea defaultValue={user.address} id={"address"} required={true}
                                      className={'rounded-md mx-20 bg-gray-600 my-2 invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 focus:outline-none focus:ring focus:ring-blue-600 p-3'}
                                      name={'address'} placeholder={'محل سکونت'}></textarea>
                            <ul className={"marker:text-sky-400 hidden peer-[#address]:peer-invalid:block block text-red-700 list-disc text-sm space-y-2"}>
                                <li> * این فیلد اجباری می باشد</li>
                            </ul>
                        </label>

                        <label className={'inline-flex peer-checked/draft:text-sky-500 text-center mx-20'}>آیا عضو
                            انجمن یا گروه دیگر در دانشگاه هستید ؟</label>
                        <input name={'Otherassociation'}
                               checked={user.otherassociation}
                               className={'accent-blue-600 cursor-pointer w-5 h-5 rounded-xl duration-300'}
                               type={'checkbox'}/>
                        <br/>
                        <label>
                            <textarea  required={true} id={'Descriptionotherassociation'}
                                       defaultValue={user.descriptionotherassociation}
                                       className={'rounded-md peer mx-20 bg-gray-600 my-2 invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 focus:outline-none focus:ring focus:ring-blue-600 p-3'}
                                       name={'Descriptionotherassociation'}
                                       placeholder={'در چه عرصه هایی مایل به همکاری هستید ؟'}></textarea>
                            <ul className={"marker:text-sky-400 hidden peer-[#Descriptionotherassociation]:peer-invalid:block block text-red-700 list-disc text-sm space-y-2"}>
                                <li> * این فیلد اجباری می باشد</li>
                            </ul>
                        </label>
                        <label>
                            <textarea required={true} id={'Skill'}
                                      defaultValue={user.skill}
                                      className={'rounded-md peer mx-20 bg-gray-600 my-2 invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 focus:outline-none focus:ring focus:ring-blue-600 p-3'}
                                      name={'skill'}
                                      placeholder={'مهارت های تخصصی مرتبط با رشته'}>
                                        </textarea>
                            <ul className={"marker:text-sky-400 hidden peer-[#Skill]:peer-invalid:block block text-red-700 list-disc text-sm space-y-2"}>
                                <li> * این فیلد اجباری می باشد</li>
                            </ul>
                        </label>
                        <label>
                            <textarea required={true} id={'Proposal'}
                                      className={'rounded-md mx-20 bg-gray-600 my-2 invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 focus:outline-none focus:ring focus:ring-blue-600 p-3'}
                                      name={'proposal'}
                                      defaultValue={user.proposal}
                                      placeholder={'سایر پیشنهاد ها جهت فعالیت در انجمن'}>
                                        </textarea>
                            <ul className={"marker:text-sky-400 hidden peer-[#Proposal]:peer-invalid:block block text-red-700 list-disc text-sm space-y-2"}>
                                <li> * این فیلد اجباری می باشد</li>
                            </ul>
                        </label>
                        <label className={'inline-flex text-center mx-20'}>تمایل به شرکت در انتخابات به عنوان
                            کاندیدای انتخابات انجمن علمی رشته مربوطه</label>

                        <input className={'accent-blue-600 cursor-pointer w-5 h-5 rounded-xl duration-300'}
                               checked={user.candidate}
                               name={'candidate'}
                               type={'checkbox'}/>
                        <br/>
                        <label className={'inline-flex text-center mx-20'}>نوع عضویت</label>
                        <br/>
                        <input checked name={'typemember'}
                               className={'accent-blue-600 cursor-pointer w-5 h-5 rounded-xl duration-300'}
                               value={1} type={'radio'}/>
                        <label htmlFor={'enable'}>فعال</label>
                        <input  name={'typemember'}
                               className={'accent-blue-600 cursor-pointer w-5 h-5 rounded-xl duration-300'}
                               value={0} type={'radio'}/>
                        <label htmlFor={'disable'}>عادی</label>
                    </div>
                    <input type={'button'}
                           onClick={update_user}
                           className={'rounded mx-20 bg-blue-600 my-2 invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 focus:outline-none focus:ring focus:ring-blue-600 p-3 cursor-pointer duration-300 hover:text-blue-600 hover:bg-transparent border border-blue-600'}
                           value={'ثبت اطلاعات'}/>
                </form>
            }

        </>
    )
}