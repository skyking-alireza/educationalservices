export default ({info , edit , del})=>{
  return(
    <div className={'flex-auto bg-green-600 p-4 rounded-xl m-2 max-w-fit'}>
        <p className={'m-2'}>{info.name}</p>
        <button onClick={()=>{edit(info)}} className={'m-2 p-2 border-2 border-blue-600 bg-blue-600 rounded-lg hover:text-blue-600 hover:bg-transparent duration-300'}>ویرایش</button>
        <button onClick={()=>{del(info.id)}} className={'m-2 p-2 border-2 border-red-600 bg-red-600 rounded-lg hover:text-red-600 hover:bg-transparent duration-300'}>حذف </button>
    </div>
  )
}
