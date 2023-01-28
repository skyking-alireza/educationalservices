
export default ({data}) => {
    return (<div className={'p-8 m-5 max-w-[20%] text-center bg-white/60 hover:cursor-pointer duration-300 rounded-xl '}>
        <p className={'text-xl'}> {data.name} </p>
        <p className={'text-xl'}> {data.first_name +' '+ data.last_name} </p>
        <p className={'text-xl'}> تعداد آرا :  {data.votes} </p>
    </div>)
}
