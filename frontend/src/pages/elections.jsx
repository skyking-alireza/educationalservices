import {useEffect, useState} from "react";
import {user_api} from "../api/auth";
import Show_election_all from "../components/show_election_all";

export default () => {
    const [elections, setElections] = useState([])
    useEffect(() => {
        (async () => {
            await user_api('election/').then((e) => {
                console.log(e.data)
                setElections(e.data)
            })
        })()
    }, [])
    return (
        <div className={'flex-warp'}>
            <div className={'flex h-screen bg-gradient-to-t from-zinc-200'}>
                <img className={'absolute justify-center brightness-75 h-screen w-screen object-cover -z-10'}
                     src={'images/cover/electioncover.webp'} alt={'electioncover'}/>
                <h1 className={'h-fit m-auto text-white justify-between text-7xl'}>
                    انتخابات شورای دانشجویی
                </h1>
            </div>
            <div className={' w-auto pb-4 bg-zinc-200 pr-8 text-4xl'}>
                <h2>لیست انتخابات</h2>
            </div>
            <div className={'px-6 bg-zinc-200 flex flex-wrap max-h-[440px] leading-10 justify-between'}>
                {elections.map((e) => {return <Show_election_all info={e} /> })}
            </div>
        </div>
    )
}