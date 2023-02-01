import All_students from './all_students';
export default ({info})=>{
    return (
      <div className={'p-4'}>
        <div className={'text-2xl mt-0 pb-2'}>تمامی دانشجویان</div>
          <div className={'flex text-white text-center justify-between flex-wrap mx-auto overflow-y-scroll max-h-[400px] '}>
            {info && info.map((e,i)=>{return <All_students key={i} info={e} />})}
          </div>
      </div>
    )
}
