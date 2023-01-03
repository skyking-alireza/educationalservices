import Cover from "../components/cover";
import Listlesson from "../components/listlesson";

export default () => {
    return(
        <div>
            <Cover />
            <Listlesson title={'lesson'} />
            <Listlesson title={'blog'} />
        </div>
    )
}
