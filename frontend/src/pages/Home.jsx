import Cover from "../components/cover";
import Listlesson from "../components/listlesson";
import {Btnlogin} from "../components/btnlogin";
export default () => {
    // Btnlogin(localStorage.getItem('accesstoken') ? 1 : 0)
    Btnlogin(1);
    return(
        <div>
            <Cover />
            <Listlesson title={'lesson'} />
            <Listlesson title={'blog'} />
        </div>
    )
}
