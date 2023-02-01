import {useEffect, useState} from "react";
import {user_api} from "../../api/auth";
import Show_election from "../show_election";
import {parseJwt} from "../../functions/parseJWT";
import {Alerts} from "../alerts";

export default ({data , el}) => {
    const [elections, setElections] = useState([])
    const [candidate, setCandidate] = useState(false)
    useEffect(() => {
        el && setElections(el)
    }, [el])
    const participant = (id) => {
        user_api('set_election/', {
            method: "POST",
            headers: {'Authorization': `Bearer ${localStorage.getItem('accesstoken')}`},
            data: {election_id: id}
        }).then((e) => {
            if (e.data.status) {
                elections.map((e) => {
                    e.id === id && e.participant.push(parseJwt(localStorage.getItem('accesstoken')).user_id)
                })
                Alerts({text: 'عملیات اموفق', status: 'success'});
                setElections([...elections]);
            } else {
                Alerts({text: 'عملیات ناموفق', status: 'danger'})
            }
        })

    }
    const unparticipant = (id) => {
        user_api('del_election/', {
            method: "POST",
            headers: {'Authorization': `Bearer ${localStorage.getItem('accesstoken')}`},
            data: {election_id: id}
        }).then((e) => {
            if (e.data.status) {
                elections.map((e) => {
                    e.id === id && (e.participant = e.participant.filter((e) => {
                        return e !== parseJwt(localStorage.getItem('accesstoken')).user_id
                    }))
                })
                Alerts({text: 'عملیات اموفق', status: 'success'});
                setElections([...elections]);
            } else {
                Alerts({text: 'عملیات ناموفق', status: 'danger'})
            }
        })

    }
    useEffect(() => {
        if (typeof data[0] !== 'undefined') {
            setCandidate(data[0].candidate)
        }
    }, [data])
    return (
        <>
            <div className={'text-2xl mt-0 pb-2'}>شرکت در انتخابات</div>
            {!candidate &&
                <h3 className={'text-rose-600 text-sm -translate-x-2'}>برای شرکت در انتخابات باید در قسمت ویرایش اطلاعات
                    تیک شرکت در انتخابات را فعال کنید .</h3>}
            <div className={'flex flex-wrap max-h-[440px] overflow-auto leading-10 justify-between py-3'}>
                {elections.map((e, i) => {
                    return (<Show_election status={!candidate} unsubmit={unparticipant} submit={participant} key={i}
                                           info={e}/>)
                })}
            </div>
        </>
    )
}
