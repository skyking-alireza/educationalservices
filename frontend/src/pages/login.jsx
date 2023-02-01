import {IMaskInput} from "react-imask";
import React from "react";
import {user_api} from "../api/auth";
import {Alerts} from "../components/alerts";
import {useNavigate} from "react-router-dom";
import {parseJwt} from "../functions/parseJWT";
export default ({setsesstion}) => {
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
                        setsesstion(e.data.access)
                        parseJwt(e.data.access).admin ?
                            navigate('/admin')
                            :
                            parseJwt(e.data.access).master ?
                                navigate('/master')
                              :
                                navigate('/profile')
                    }
                })
                .catch((e) => {
                        Alerts({text: 'کاربری با این مشخصات یافت نشد', status: 'danger'});
                });
        } else {
            Alerts({
                text: 'در فرم ثبت نام شما خطایی وجود دارد نسبت به رفع آن اقدام کنید و مجددا تلاش فرمایید',
                status: 'danger'
            });

        }


    }
    return (
        <section className={'bg-login w-full justify-between h-screen bg-cover object-cover flex'}>
            <div id={'setalert'} className={'absolute h-screen z-[999]'}>
            </div>
            <div className={'py-24 px-4 z-10 w-full'}>
                <div className={'sm:w-full md:w-1/2 lg:w-1/3 mx-auto bg-white py-16 text-center  rounded-3xl'}>
                    <h1 className={'text-xl '}>فرم ورود انجمن علمی فنی حرفه ای</h1>
                    <form name={'login'} className={'py-5 flex flex-col '} id={'createform'}>
                        <div className={'max-h-[230px] h-[230px] overflow-y-scroll overflow-x-hidden'}>
                            <label>
                                <IMaskInput id={'username'} minLength={10}
                                            required={true} type={'text'}
                                            className={'rounded-md invalid:outline-none invalid:ring-red-600 valid:outline-none valid:ring-green-600 focus:outline-none ring-[2px] focus:ring-blue-600 border mx-20 bg-gray-200 my-2 peer p-3'}
                                            name={'username'} mask={'9000000000'} placeholder={'شماره تماس'}/>
                                <ul className={"hidden peer-[#username]:peer-invalid:block text-red-700 list-disc text-sm space-y-2 "}>
                                    <li> * یک شماره تماس معتبر بدون 0 وارد کنید</li>
                                    <li> * این فیلد اجباری می باشد</li>
                                </ul>
                            </label>
                            <label>
                                <input id={'password'} required={true} placeholder={'رمز عبور'} type={'password'}
                                       className={'rounded-md invalid:outline-none invalid:ring-red-600 valid:outline-none valid:ring-green-600 focus:outline-none ring-[2px] focus:ring-blue-600 border mx-20 bg-gray-200 my-2 peer p-3'}
                                       name={'password'}/>
                                <ul className={"hidden peer-[#password]:peer-invalid:block text-red-700 list-disc text-sm space-y-2 "}>
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
