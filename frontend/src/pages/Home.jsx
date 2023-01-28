import Cover from "../components/cover";
import Listlesson from "../components/listlesson";
import Listblog from "../components/listblog";

export default () => {
    return(
        <div>
            <Cover />
            <Listlesson title={'lesson'} />
            <Listblog title={'blog'} />
        </div>
    )
}
