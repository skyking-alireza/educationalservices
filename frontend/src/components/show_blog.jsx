import {set_images} from "../functions/images";
import {Parser} from 'html-to-react'
import {Link} from "react-router-dom";
export default ({ info}) => {
    return (
        <div className={'p-4 mx-auto m-4 rounded-xl max-w-[360px] bg-blue-900'}>
            <div className={' max-w-[330px] overflow-hidden w-[330px] max-h-[186px] h-[186px] rounded-xl'}>
                <img className={'w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer '} src={set_images(info.image)}/>
            </div>
            <Link to={`/blog/${info.id}`} className={'-translate-x-6 p-2 max-w-[330px] cursor-pointer overflow-hidden w-[330px]'}>{info.title}</Link>
            <p className={'text-sm max-w-[330px] overflow-hidden w-[330px]'}>{Parser().parse(info.description)}</p>
        </div>
    )
}