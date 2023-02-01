import All_masters from './all_masters';
export default ({info,able})=>{
    return (
      <div className={'p-4'}>
        <div className={'text-2xl mt-0 pb-2'}>لیست اساتید</div>
          <div className={'flex text-white text-center justify-between flex-wrap mx-auto overflow-y-scroll max-h-[400px] '}>
            {info && info.map((e,i)=>{return <All_masters able={able} key={i} info={e} />})}
          </div>
      </div>
    )
}
