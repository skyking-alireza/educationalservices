import {useEffect, useState} from "react";

export default ({data}) => {
    const [userdata, setUserdata] = useState([]);
    const [userbirthday, setUserbirthday] = useState([]);
    const e2p = (s) => s.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
    useEffect(() => {
        if (typeof data[0] !== 'undefined') {
            setUserdata(data[0])
            setUserbirthday(new Intl.DateTimeFormat('fa').format(new Date(data[0].birthday)))
        }
    }, [data])
    console.log(userdata)
    return (
        <>
            <div className={'text-2xl mt-0 pb-2'}>اطلاعات کاربری</div>
            <div className={'flex flex-wrap leading-10 justify-between py-3'}>
                <p className={'w-[33%]'}> نام و نام خانوادگی : {`${userdata.first_name}   ${userdata.last_name}`} </p>
                    <p className={'w-[33%]'}> نام پدر :{userdata.fathername}  </p>
                    <p className={'w-[33%]'}> تاریخ تولد:{userbirthday}  </p>
                    <p className={'w-[33%]'}> شماره تماس : {e2p(String(userdata.username))} </p>
                    <p className={'w-[33%]'}>  ایمیل : {userdata.email} </p>
                    <p className={'w-[33%]'}>  شماره دانشجویی : {e2p(String(userdata.studentcode))} </p>
            </div>
            <div className={'inline-flex justify-between py-3'}>
                <p className={''}>  آدرس : {userdata.address} </p>
            </div>

        </>
    )
}