import Election from './election';
export default ({elections , del})=>{
  return(
    <div className={'p-5'}>
      <p className={'text-2xl p-3'}>ویراش انتخابات</p>
      <div className={'flex flex-wrap justify-between w-full'}>
          {elections && elections.map((e ,i ) => {return <Election key={i} del={del} info={e} />})}
      </div>
    </div>
  )
}
