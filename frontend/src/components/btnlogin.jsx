import {Link} from "react-router-dom";
import {HiUser, HiUserAdd} from "react-icons/hi";
import {IoLogIn} from "react-icons/io5";

const Btnlogin = ({value}) => {
    console.log(2222223333333);
    if (value){

    }else {
        const btnlogin = document.createElement('Link');
        btnlogin.className = 'px-6 flex py-2 text-white rounded mx-2 border-blue-600 border duration-500 bg-blue-600 hover:text-blue-600 hover:bg-transparent';
        btnlogin.innerText = 'پروفایل';
        document.getElementById('setbtnlogin').appendChild(btnlogin);
        console.log(555555555);
    }
            console.log(44444444)
            // document.getElementById('setbtnlogin').appendChild(`<Link to={"/profile"} className={'px-6 flex py-2 text-white rounded mx-2 border-blue-600 border duration-500 bg-blue-600 hover:text-blue-600 hover:bg-transparent '}>پروفایل <HiUser className={'w-6 h-6'}/> </Link>`)



        // document.getElementById('setbtnlogin').appendChild('<p>assasajd</p>');
        // document.getElementById('setbtnlogin').appendChild(`
            // <Link to={"/signup"}
            //       className={'px-6 flex py-2 text-white rounded mx-2 border-blue-600 border duration-500 bg-blue-600 hover:text-blue-600 hover:bg-transparent '}>ثبت
            //     نام <HiUserAdd className={'w-6 h-6'}/> </Link>
            // <Link to={'/login'}
            //       className={'px-6 flex py-2 text-blue-600 hover:text-white hover:bg-blue-600 rounded mx-2 border-blue-600 border duration-500 bg-transparent '}> ورود<IoLogIn
            //     className={'w-6 h-6'}/></Link>`)

}
export {Btnlogin}