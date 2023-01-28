import {FcReading} from 'react-icons/fc';
const Cover = () => {
  return(
      <section className={'w-full h-full flex'} >
          <div className={'absolute top-[55%] w-full text-center '}>
              <button className={'px-9 py-4 rounded-2xl text-white text-3xl bg-teal-500 inline-flex hover:bg-transparent duration-500 border-teal-500 border-2 hover:text-teal-500'}>لیست دوره ها<FcReading className={'pr-2 w-9 h-9 '}/></button>
          </div>
          <img className={'absolute brightness-75  w-screen h-screen object-cover -z-10'} src={'images/cover/5853.webp'} alt={'aa'} />
          <h1 className={'absolute text-center font-bold text-emerald-300 w-full  top-[40%] drop-shadow-xl text-5xl'} disabled>مرکز رشد دانشگاه باهنر شیراز</h1>
          <div className={'bg-gradient-to-t from-white via-transparent h-screen pb-20 w-full'}></div>
      </section>
  )
}
export default Cover;