import {Link} from "react-router-dom";
export default ({setsesstion}) => {
    return(
        <section className={`bg-signup object-cover bg-cover w-full pt-[80px] bg-transparent justify-between h-full flex`}>
            <div className={'w-full sm:w-1/2 mx-auto drop-shadow-2xl z-10 rounded-xl md:w-1/4 bg-white my-20 p-4 flex text-center flex-wrap'}>
                <Link className={'w-full bg-blue-600 p-2 hover:bg-transparent hover:text-blue-600 text-white duration-300 border-2 border-blue-600 m-2 rounded-lg cursor-pointer'} to={'/signupmaster'}  > ثبت نام اساتید</Link>
                <Link className={'w-full bg-transparent p-2 text-blue-600 duration-300 hover:bg-blue-600 hover:text-white border-2 border-blue-600 m-2 rounded-lg cursor-pointer'} to={'/signupstudent'}  > ثبت نام دانشجویان</Link>
            </div>
        </section>
    )

}
