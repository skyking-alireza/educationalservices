import {useParams} from "react-router-dom";
import {user_api} from "../api/auth";
import {useEffect, useState} from "react";
import {Alerts} from "../components/alerts";
import Show_participant from "../components/show_participant";

export default () => {
    const param = useParams()
    const [elections, setElections] = useState([])
    const [participant, setParticipant] = useState([])
    const [vote, setVote] = useState([])
    const addvote = (id) => {
        if (vote.length < 7) {
            vote.push(id)
            setVote([...vote])
        }
    }
    const removevote = (id) => {
        const new_vote = vote.filter((e) => {
            return e !== id
        })
        setVote([...new_vote])
    }
    useEffect(() => {
        (async () => {
            await user_api(`receive_election/${param.id}`).then((e) => {
                console.log(123)
                setElections(e.data)
                user_api('get_users/', {
                    method: "POST",
                    headers: {'Authorization': `Bearer ${localStorage.getItem('accesstoken')}`},
                    data: {users_id: e.data.participant}
                }).then((event) => {
                    setParticipant(event.data.status)
                })
            })
        })()
    })
    const submitvotes = () => {
        vote.length ?
            user_api('set_vote', {
                method: "POST",
                headers: {'Authorization': `Bearer ${localStorage.getItem('accesstoken')}`},
                data: {elections: elections.id, votes: vote}
            }).then((event) => {
                event.data.status ?
                    Alerts({text: 'عملیات موفق آمیز', status: 'success'})
                    :
                    Alerts({text: 'شما قبلا شرکت کرده اید', status: 'danger'})
            })

            :
            Alerts({text: 'حداقل یک کاندید را انتخاب کنید ', status: 'danger'})
    }
    return (<>
        <div className={'flex h-screen bg-gradient-to-t from-zinc-200'}>
            <div id={'setalert'} className={'absolute h-screen z-[999]'}>

            </div>
            <img className={'absolute justify-center brightness-75 h-screen w-screen object-cover -z-10'}
                 src={'../images/cover/electioncover.webp'} alt={'electioncover'}/>
            <div className={'h-fit w-full mx-16 bg-black/60 rounded-2xl p-8 m-auto text-white justify-between'}>
                <p className={'text-2xl  text-center'}>{elections.name}</p>
                {elections.starttime &&
                    <p className={'text-center'}>تاریخ شروع : {new Intl.DateTimeFormat('fa', {
                        dateStyle: 'medium',
                        timeStyle: 'short'
                    }).format(new Date(elections.starttime))} </p>
                }
                {elections.endtime &&
                    <p className={'text-center'}>تاریخ پایان : {new Intl.DateTimeFormat('fa', {
                        dateStyle: 'medium',
                        timeStyle: 'short'
                    }).format(new Date(elections.endtime))}</p>
                }
                <p className={'text-xl text-center'}>جهت رای دادن به کاندید روی کادر آن کلیک کنید</p>
                <p onClick={() => {
                    submitvotes()
                }}
                   className={'text-center mx-auto cursor-pointer text-xl m-4 rounded-xl border-2 border-green-700 hover:bg-transparent duration-300 hover:text-green-700 p-4 bg-green-700 w-fit '}>ثبت
                    آرا</p>
                <div className={'flex flex-wrap max-h-[400px] overflow-auto leading-10 justify-between'}>
                    {participant.map((e) => {
                        return (
                            <Show_participant delvote={removevote} votes={vote} addvote={addvote} key={e.id} data={e}/>)
                    })}
                </div>
            </div>
        </div>
    </>)
}
