import {IMaskInput} from "react-imask";
import React from "react";
import {user_api} from "../api/auth";
import {Alerts} from "../components/alerts";
import {useNavigate} from "react-router-dom";
export default () => {
    const navigate = useNavigate();
    const check_user = () => {
        let allinput = []
        let allinputform = document.forms["login"].getElementsByTagName("input")
        for (const element of allinputform) {
            allinput.push(element.validity.valid);
        }
        if (allinput.every(v => v === true)) {
            const data_form = new FormData(document.getElementById('createform'));
            user_api('token/', {data: data_form, method: "post"})
                .then((e) => {
                    if (e.status === 200) {
                        Alerts({text:'ورود موفقیت امیز بود', status: 'success'});
                        localStorage.setItem('accesstoken',e.data.access);
                        localStorage.setItem('refreshtoken',e.data.refresh);
                        navigate("/profile");
                    }
                })
                .catch((e) => {
                    if (e.message === "timeout of 2000ms exceeded") {
                        Alerts({text: 'ارتباط با سرور برقرار نشد لطفا بعدا تلاش کنید', status: 'danger'});
                    }else if (e.response.status === 401) {
                        Alerts({text: 'کاربری با این مشخصات یافت نشد', status: 'danger'});
                    }
                });
        } else {
            Alerts({
                text: 'در فرم ثبت نام شما خطایی وجود دارد نسبت به رفع آن اقدام کنید و مجددا تلاش فرمایید',
                status: 'danger'
            });

        }


    }
    return (
        <section className={'w-full justify-between h-full flex'}>
            <div id={'setalert'} className={'absolute h-screen z-[999]'}>
            </div>
            <img className={'h-screen w-screen object-cover brightness-50 left-0'}
                 src={'images/login.webp'} alt={'signup'}/>
            <div className={'fixed py-24 px-4 z-10 w-full'}>
                <div className={'max-w-[400px] mx-auto py-16 bg-black/70 text-center text-white rounded-3xl'}>
                    <h1 className={'text-xl '}>فرم ورود انجمن علمی فنی حرفه ای</h1>
                    <form name={'login'} className={'py-5 flex flex-col '} id={'createform'}>
                        <div className={'max-h-[230px] h-[230px] overflow-y-scroll overflow-x-hidden'}>
                            <label>
                                <IMaskInput id={'username'} minLength={10}
                                            required={true} type={'text'}
                                            className={'rounded-md peer mx-20 bg-gray-600 my-2 invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 focus:outline-none focus:ring focus:ring-blue-600 p-3'}
                                            name={'username'} mask={'9000000000'} placeholder={'شماره تماس'}/>
                                <ul className={"marker:text-sky-400 hidden peer-[#username]:peer-invalid:block text-red-700 list-disc text-sm space-y-2 "}>
                                    <li> * یک شماره تماس معتبر بدون 0 وارد کنید</li>
                                    <li> * این فیلد اجباری می باشد</li>
                                </ul>
                            </label>
                            <label>
                                <input id={'password'} required={true} placeholder={'رمز عبور'} type={'password'}
                                       className={'rounded-md peer mx-20 bg-gray-600 my-2 invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 focus:outline-none focus:ring focus:ring-blue-600 p-3'}
                                       name={'password'}/>
                                <ul className={"marker:text-sky-400 hidden peer-[#password]:peer-invalid:block text-red-700 list-disc text-sm space-y-2 "}>
                                    <li> * این فیلد اجباری می باشد</li>
                                </ul>
                            </label>
                        </div>
                        <input type={'button'}
                               onClick={check_user}
                               className={'rounded mx-20 bg-green-600 my-2 focus:outline-none focus:ring focus:ring-green-600 p-3 cursor-pointer duration-300 hover:text-green-600 hover:bg-transparent border border-green-600'}
                               value={'ورود'}/>
                    </form>
                </div>

            </div>
        </section>
    )
};