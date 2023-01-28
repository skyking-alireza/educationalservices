export default ({info,cate,delcate,addcate})=>{
  return(
    <div onClick={() => { cate.includes(info.id) ? delcate(info.id) : addcate(info.id)}} className={'bg-blue-500 p-4 m-4 rounded-lg cursor-pointer ' + (cate.includes(info.id) && 'border-green-600 border-4')}>
      <p>{info.name}</p>
    </div>
  )
}
