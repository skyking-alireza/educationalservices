import {set_images} from "../functions/images";
import {BsFillStarFill , BsStar} from 'react-icons/bs'
import {Parser} from 'html-to-react'
export default ({ info}) => {
    return (
        <div className={'p-4 m-4 rounded-xl bg-blue-900'}>
            <div className={'max-w-[330px] overflow-hidden w-[330px] max-h-[186px] h-[186px] rounded-xl'}>
                <img className={'w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer '} src={set_images(info.image)}/>
            </div>
            <p className={'-translate-x-6 p-2 '}>{info.name}</p>

            <p className={'text-sm max-w-[330px] overflow-hidden w-[330px]'}>{Parser().parse(info.description)}</p>
            <p className={'flex py-2'}> {info.rate ? [...Array(info.rate ).keys()].map(() =>{return(<BsFillStarFill />)  }) : [...Array(5).keys()].map(() =>{return(<BsStar />)  })}</p>
            <p className={'flex py-2'}> {info.price ? new Intl.NumberFormat('fa').format(info.price) + '  تومان ' : 'رایگان' }</p>
        </div>
    )
}