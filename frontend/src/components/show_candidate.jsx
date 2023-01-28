import {e2p} from "../functions/persiannumber";

export default ({data,addvote , votes , delvote}) => {
    return (<div onClick={() => { votes.includes(data.id) ? delvote(data.id) : addvote(data.id)}} className={'md:w-1/5 p-5  text-center bg-white/60 hover:cursor-pointer duration-300 rounded-xl ' + (votes.includes(data.id) && 'border-green-600 border-4')}>
        <img className={'w-[96px] mx-auto hx-[96px] rounded-xl'} src={data.profile ? data.profile : '../images/usernone.png' } alt={'profile_user'} />
        <p className={'text-xl'}> {data.first_name +' '+ data.last_name} </p>
        <p className={'text-xl'}> شماره تماس : {e2p(String(data.username))} </p>
        <p className={'hidden md:block text-sm'}>  توضیحات : {data.descriptionotherassociation  ? data.descriptionotherassociation : 'توضیحاتی درج نشده'} </p>
    </div>)
}