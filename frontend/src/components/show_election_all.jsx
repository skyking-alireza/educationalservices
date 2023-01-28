import {Link} from "react-router-dom";

export default ({info}) => {
    return (

        new Date(info.endtime) > new Date() ?
            new Date(info.starttime) > new Date() ?
                    <div className={'bg-blue-800 text-center rounded-xl p-4 my-2'}>
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
                        <p className={'text-sm my-2 '}>وضعیت : انتخابات شروع نشده</p>
                    </div>
                :
                <div className={'bg-green-600 text-center rounded-xl p-4 my-2'}>
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
                    {localStorage.getItem('accesstoken') ?
                        <Link to={`/submitvote/${info.id}`}
                                className={'bg-blue-700 border-2 duration-300 border-blue-700 hover:text-blue-700 hover:bg-transparent  rounded-md text-sm p-3 my-2'}>
                            ثبت رای
                        </Link>
                        :
                        <Link className={'bg-blue-700  border-2 duration-300 border-blue-700 hover:text-blue-700 hover:bg-transparent rounded-md text-sm p-2 my-2'} to={'/login'} >ابتدا وارد شوید</Link>
                    }

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