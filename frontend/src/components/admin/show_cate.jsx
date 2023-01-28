export default ({info , edit , del})=>{
  return(
    <div className={'p-4 bg-blue-500 rounded-lg text-center text-white m-4 h-fit'}>
      <p>{info.name}</p>
      <input onClick={()=>{edit(info)}} className={'cursor-pointer bg-green-500 p-2 m-2 rounded'} type={'button'} value={"ویرایش"} />
      <input onClick={()=>{del(info.id)}} className={'cursor-pointer bg-red-500 p-2 m-2 rounded'} type={'button'} value={"حذف"} />
    </div>
  )
}
