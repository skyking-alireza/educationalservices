import React, {useEffect, useState} from "react";
import DatePicker from "react-datepicker2";
import {user_api} from "../../api/auth";
import Show_candidate from "../show_candidate";
import {Alerts} from "../alerts";
import moment from "jalali-moment";

export default () => {
    const [starttime, setStarttime] = useState()
    const [endtime, setEndtime] = useState()
    const [candidates, setCandidates] = useState(false)
    const [vote, setVote] = useState([])
    const addvote = (id) => {
        vote.push(id)
        setVote([...vote])
    }
    const removevote = (id) => {
        const new_vote = vote.filter((e) => {
            return e !== id
        })
        setVote([...new_vote])
    }
    useEffect(() => {
        (async () => {
            await user_api('candidates').then((e) => {
                setCandidates(e.data)
            }).catch((e) => {
                for (var value in e.response.data){Alerts({text:e.response.data[value],status:'danger'})}
            })
        })()
    }, [])
    const create_election = () => {
        let allinput = []
        let allinputform = document.forms["election"].getElementsByTagName("input")
        for (const element of allinputform) {allinput.push(element.validity.valid);}
        if (allinput.every(v => v === true)) {
            user_api('create_election/',{headers: {'Authorization': `Bearer ${localStorage.accesstoken}`},data: {'name' : document.getElementsByName('name')[0].value,'candidates' : vote,'starttime' : document.getElementsByName('starttime')[0].value,'endtime' : document.getElementsByName('endtime')[0].value,},method:"post"}).then((e) => {
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
    return (
        <div className={'p-5'}>
            <div className={'text-2xl p-3'}>برگزاری انتخابات</div>
            <form name={'election'} className={'py-5 flex flex-col '} id={'createelection'}>
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
                        <input id={'datepicker'} required={true} name={'starttime'} type={'hidden'}
                               value={moment(starttime).add(5, 'hours').format('YYYY-MM-DD HH:mm')}/>
                        <DatePicker timePicker={true}
                                    onChange={e => setStarttime(String(e._d))}
                                    placeholder={'زمان شروع'} showTodayButton={false} isGregorian={false}
                                    className={'rounded-md text-black mx-20 bg-gray-600 my-2 focus:outline-none focus:ring focus:ring-blue-600 p-3'}/>
                        <ul className={starttime ? "hidden" : "marker:text-sky-400  block text-red-700 list-disc text-sm space-y-2 "}>
                            <li> * این فیلد اجباری می باشد</li>
                        </ul>
                    </label>
                    <label>
                        <input className={'hidden'} required={true} name={'endtime'} type={'datetime-local'}
                               value={moment(endtime).add(5, 'hours').format('YYYY-MM-DD HH:mm')}/>
                        <DatePicker timePicker={true}
                                    onChange={e => setEndtime(String(e._d))}
                                    placeholder={'زمان پایان'} showTodayButton={false} isGregorian={false}
                                    className={'rounded-md mx-20 bg-gray-600 my-2 focus:outline-none focus:ring focus:ring-blue-600 p-3'}/>
                        <ul className={endtime ? "hidden" : "marker:text-sky-400  block text-red-700 list-disc text-sm space-y-2 "}>
                            <li> * این فیلد اجباری می باشد</li>
                        </ul>
                    </label>
                    <div className={'flex flex-wrap leading-10 justify-between'}>
                        {candidates && candidates.data.map((e) => {
                            return (
                                <Show_candidate delvote={removevote} votes={vote} addvote={addvote} key={e.id}
                                                  data={e}/>)
                        })}
                    </div>
                    <input type={'button'} onClick={create_election}  className={'rounded mx-20 bg-blue-600 my-2 invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 focus:outline-none focus:ring focus:ring-blue-600 p-3 cursor-pointer duration-300 hover:text-blue-600 hover:bg-transparent border border-blue-600'} value={'ثبت اطلاعات'}  />
                </div>
            </form>
        </div>
    )
}