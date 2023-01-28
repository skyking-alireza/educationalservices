import {useEffect, useState} from "react";
import {user_api} from "../api/auth";
import Show_vote_users from "../components/show_vote_users";

export default () => {
    const [elections, setElections] = useState([])
    useEffect(() => {
        (async () => {
            await user_api('end_elections/').then((e) => {
                console.log(e.data)
                setElections(e.data.status)
            })
        })()
    }, [])
    return (
        <div className={'flex-warp'}>
            <div className={'flex h-screen bg-gradient-to-t from-zinc-200'}>
                <img className={'absolute justify-center brightness-75 h-screen w-screen object-cover -z-10'}
                     src={'images/cover/electioncover.webp'} alt={'electioncover'}/>
                <h1 className={'h-fit m-auto text-white justify-between text-7xl'}>
                    نتایج انتخابات شورای دانشجویی
                </h1>
            </div>
            <div className={' w-auto pb-4 bg-zinc-200 pr-8 text-4xl'}>
                <h2>لیست نفرات</h2>
            </div>
            <div className={'px-6 bg-zinc-200 flex flex-wrap max-h-[440px] leading-10 justify-between'}>
                {elections.map((e , i) => {return <Show_vote_users key={i} data={e} /> })}
            </div>
        </div>
    )
}