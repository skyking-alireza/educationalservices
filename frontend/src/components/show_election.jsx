import {parseJwt} from "../functions/parseJWT";

export default ({info, submit, unsubmit, status}) => {
    return (
        status ?
            <div className={'bg-yellow-600  text-center rounded-xl p-4 my-2 disabled'}><p>{info.name}</p><p>تاریخ شروع
                : {new Intl.DateTimeFormat('fa', {
                    dateStyle: 'medium',
                    timeStyle: 'short'
                }).format(new Date(info.starttime))} </p><p>تاریخ پایان : {new Intl.DateTimeFormat('fa', {
                dateStyle: 'medium',
                timeStyle: 'short'
            }).format(new Date(info.endtime))}</p><p className={'text-sm '}>تعداد شرکت کنندگان
                : {new Intl.NumberFormat('fa').format(info.participant.length)}</p><p className={'text-sm my-2 '}>نمی
                توانید در این انتخابات شرکت کنید</p></div>
            :
            new Date(info.endtime) > new Date() ?
                info.candidates.includes(parseJwt(localStorage.getItem('accesstoken')).user_id) ?
                    info.participant.includes(parseJwt(localStorage.getItem('accesstoken')).user_id) ?
                        <div className={'bg-teal-800  text-center rounded-xl p-4 my-2'}>
                            <p>{info.name}</p>
                            <p>تاریخ شروع : {new Intl.DateTimeFormat('fa', {
                                dateStyle: 'medium',
                                timeStyle: 'short'
                            }).format(new Date(info.starttime))} </p>
                            <p>تاریخ پایان : {new Intl.DateTimeFormat('fa', {
                                dateStyle: 'medium',
                                timeStyle: 'short'
                            }).format(new Date(info.endtime))}</p>
                            <p className={'text-sm '}>تعداد شرکت کنندگان
                                : {new Intl.NumberFormat('fa').format(info.participant.length)}</p>
                            <button onClick={() => unsubmit(info.id)}
                                    className={'bg-rose-700 border-2 duration-300 border-rose-700 hover:text-rose-700 hover:bg-transparent  rounded-md text-sm p-3 my-2'}>انصراف
                                از انتخابات
                            </button>
                        </div>
                        :
                        <div className={'bg-blue-800  text-center rounded-xl p-4 my-2'}>
                            <p>{info.name}</p>
                            <p>تاریخ شروع : {new Intl.DateTimeFormat('fa', {
                                dateStyle: 'medium',
                                timeStyle: 'short'
                            }).format(new Date(info.starttime))} </p>
                            <p>تاریخ پایان : {new Intl.DateTimeFormat('fa', {
                                dateStyle: 'medium',
                                timeStyle: 'short'
                            }).format(new Date(info.endtime))}</p>
                            <p className={'text-sm '}>تعداد شرکت کنندگان
                                : {new Intl.NumberFormat('fa').format(info.participant.length)}</p>

                            <button onClick={() => submit(info.id)}
                                    className={'bg-green-700 border-2 duration-300 border-green-700 hover:text-green-700 hover:bg-transparent  rounded-md text-sm p-3 my-2'}>شرکت
                                در انتخابات
                            </button>
                        </div>
                    :
                    <div className={'bg-yellow-600  text-center rounded-xl p-4 my-2 disabled'}>
                        <p>{info.name}</p>
                        <p>تاریخ شروع : {new Intl.DateTimeFormat('fa', {
                            dateStyle: 'medium',
                            timeStyle: 'short'
                        }).format(new Date(info.starttime))} </p>
                        <p>تاریخ پایان : {new Intl.DateTimeFormat('fa', {
                            dateStyle: 'medium',
                            timeStyle: 'short'
                        }).format(new Date(info.endtime))}</p>
                        <p className={'text-sm '}>تعداد شرکت کنندگان
                            : {new Intl.NumberFormat('fa').format(info.participant.length)}</p>
                        <p className={'text-sm my-2 '}>نمی توانید در این انتخابات شرکت کنید</p>
                    </div>
                :
                <div className={'bg-red-800  text-center rounded-xl p-4 my-2 disabled'}>
                    <p>{info.name}</p>
                    <p>تاریخ شروع : {new Intl.DateTimeFormat('fa', {
                        dateStyle: 'medium',
                        timeStyle: 'short'
                    }).format(new Date(info.starttime))} </p>
                    <p>تاریخ پایان : {new Intl.DateTimeFormat('fa', {
                        dateStyle: 'medium',
                        timeStyle: 'short'
                    }).format(new Date(info.endtime))}</p>
                    <p className={'text-sm '}>تعداد شرکت کنندگان
                        : {new Intl.NumberFormat('fa').format(info.participant.length)}</p>
                    <p className={'text-sm my-2 '}>وضعیت : خاتمه یافته</p>
                </div>

    )
}