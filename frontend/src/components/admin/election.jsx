export default ({info,del})=>{
  return(
      <div className={'w-1/4 text-center text-white drop-shadow-xl bg-emerald-500 m-2 p-4 rounded-xl '}>
          <p>{info.name}</p>
          <p>تاریخ شروع : {new Intl.DateTimeFormat('fa', {dateStyle: 'medium',timeStyle: 'short'}).format(new Date(info.starttime))} </p>
          <p> تاریخ پایان : {new Intl.DateTimeFormat('fa', {dateStyle: 'medium',timeStyle: 'short'}).format(new Date(info.endtime))} </p>
          <p>تعداد شرکت کنندگان : {new Intl.NumberFormat('fa').format(info.participant.length)}</p>
          <input onClick={()=>{del(info.id)}} className={'bg-red-600 p-2 m-1 cursor-pointer rounded justify-between'} type={'button'} value={'حذف انتخابات'} />
      </div>
  )
}
