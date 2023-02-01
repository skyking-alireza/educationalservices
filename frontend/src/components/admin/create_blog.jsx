import {React,useState,useRef } from "react";
import {Editor} from "@tinymce/tinymce-react";
import moment from "jalali-moment";
import {Alerts} from "../alerts";
import {blog_api} from "../../api/blog";
import Categories from "./categories";
import Blogs from "./blogs";
import {set_images} from "../../functions/images";
export default ({data,del,category})=>{
    const [cate, setCate] = useState([])
    const [blog, setBlog] = useState(false)
    const editorRef = useRef(null);
    const editorRef2 = useRef(null);
    const editBlog = (info)=>{
      setBlog(info)
      setCate([...info.category])
      document.getElementById('title').value = info.title
      editorRef.current.setContent(info.body)
      document.getElementById('body').value = info.body
      document.getElementById('description').value = info.description
      editorRef2.current.setContent(info.description)
    }
    const addcate = (id) => {
        cate.push(id)
        setCate([...cate])
    }
    const removecate = (id) => {
        const new_cate = cate.filter((e) => {
            return e !== id
        })
        setCate([...new_cate])
    }
    const create_blog = () => {
        if (cate === undefined || cate.length === 0){
          Alerts({text : 'حداقل یک دسته بندی را انتخاب کنید' , status : 'danger'});
          return 0;
        }
        let allinput = []
        let allinputform = document.forms["blog"].getElementsByTagName("input")
        for (const element of allinputform) {allinput.push(element.validity.valid);}
        let data_form = new FormData(document.getElementById('blog'));
        data_form.append('category' , cate)
        blog?
              blog_api(`RUD_blog/${blog.id}`,{data: data_form,method:"PUT",headers: {'Authorization': `Bearer ${localStorage.accesstoken}`}}).then((e) => {
                  Alerts({text:'عملیات موفقیت آمیز بود',status:'success'})
              }).catch((e) => {
                  for (var value in e.response.data){Alerts({text:e.response.data[value],status:'danger'})}
              })
          :
          allinput.every(v => v === true)?
              blog_api('blog',{data: data_form,method:"post"}).then((e) => {
                  Alerts({text:'عملیات موفقیت آمیز بود',status:'success'})
              }).catch((e) => {
                  if (e.message === "timeout of 2000ms exceeded"){
                      Alerts({text : 'ارتباط با سرور برقرار نشد لطفا بعدا تلاش کنید' , status : 'danger'});
                  }else if (e.response.status === 400){
                      for (var value in e.response.data){Alerts({text:e.response.data[value],status:'danger'})}
                  }
              })
          :
              Alerts({text : 'در فرم شما خطایی وجود دارد نسبت به رفع آن اقدام کنید و مجددا تلاش فرمایید'  , status : 'danger'});

    }
    const handleEditorChange = (e) => {
        document.getElementById('body').value = e.target.getContent()
    }
    const handleEditorChange2 = (e) => {
        document.getElementById('description').value = e.target.getContent()
    }
    return(
        <>
            <div className={'text-2xl mt-0 pb-2'}>ساخت دوره جدید</div>
            <form name={'blog'} className={'py-5 flex flex-col '} id={'blog'}>
                <div className={'max-h-[430px] h-[430px] overflow-y-scroll overflow-x-hidden'}>
                <label>
                        <input type={'text'} id={'title'} minLength={3} required={true}
                               className={'rounded-md invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 focus:outline-none focus:ring focus:ring-blue-600  mx-20 bg-gray-600 my-2 peer  p-3'}
                               name={'title'} placeholder={'عنوان بلاگ'}/>
                        <ul className={"marker:text-sky-400 hidden peer-[#title]:peer-invalid:block text-red-700 list-disc text-sm space-y-2 "}>
                            <li> * حداقل 3 حروف وارد کنید</li>
                            <li> * این فیلد اجباری می باشد</li>
                        </ul>
                    </label>
                    <label>
                        <p className={'p-6'}>بدنه بلاگ</p>
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            onChange={handleEditorChange}
                            init={{
                                'style_formats': { title: 'My heading' },
                                'cleanup_on_startup': true,
                                'custom_undo_redo_levels': 20,
                                'selector': 'textarea#tinymce',
                                'theme': 'silver',
                                'plugins':
                                    "textcolor save link image media preview codesample contextmenu table code lists fullscreen  insertdatetime  nonbreaking contextmenu directionality searchreplace wordcount visualblocks visualchars code fullscreen autolink lists  charmap print  hr anchor pagebreak"
                                ,
                                'toolbar1':
                                    "fullscreen preview bold italic underline | fontselect, fontsizeselect  | forecolor backcolor | alignleft alignright | aligncenter alignjustify | indent outdent | bullist numlist table  | link image media | codesample |"
                                ,
                                'toolbar2':
                                    "visualblocks visualchars | charmap hr pagebreak nonbreaking anchor |  code | ",
                                'contextmenu': 'formats | link image',
                                'menubar': true,
                                'statusbar': true,
                            }} />
                        <input type={'hidden'} name={'body'} id={'body'} />
                        <ul className={"marker:text-sky-400 hidden peer-[#body]:peer-invalid:block text-red-700 list-disc text-sm space-y-2 "}>
                            <li> * حداقل 3 حروف وارد کنید</li>
                            <li> * این فیلد اجباری می باشد</li>
                        </ul>
                    </label>
                    <input type={'hidden'} name={'time'} value={moment(new Date()).format('YYYY-MM-DD')}/>
                    <label>
                        <p  className={'p-6'}>توضیحات</p>
                        <Editor
                            onInit={(evt, editor) => editorRef2.current = editor}
                            onChange={handleEditorChange2}
                            init={{
                                'cleanup_on_startup': true,
                                'custom_undo_redo_levels': 20,
                                'selector': 'textarea#tinymce2',
                                'theme': 'silver',
                                'plugins':
                                    "textcolor save link image media preview codesample contextmenu table code lists fullscreen  insertdatetime  nonbreaking contextmenu directionality searchreplace wordcount visualblocks visualchars code fullscreen autolink lists  charmap print  hr anchor pagebreak"
                                ,
                                'toolbar1':
                                    "fullscreen preview bold italic underline | fontselect, fontsizeselect  | forecolor backcolor | alignleft alignright | aligncenter alignjustify | indent outdent | bullist numlist table  | link image media | codesample |"
                                ,
                                'toolbar2':
                                    "visualblocks visualchars | charmap hr pagebreak nonbreaking anchor |  code | ",
                                'contextmenu': 'formats | link image',
                                'menubar': true,
                                'statusbar': true,
                            }} />
                        <textarea id={'tinymce2'}></textarea>
                        <input type={'hidden'} name={'description'} id={'description'} />
                        <ul className={"marker:text-sky-400 hidden peer-[#description]:peer-invalid:block text-red-700 list-disc text-sm space-y-2 "}>
                            <li> * حداقل 3 حروف وارد کنید</li>
                            <li> * این فیلد اجباری می باشد</li>
                        </ul>
                    </label>
                    <label>
                        <img className={blog && 'w-[200px] h-[150px] rounded'} src={blog && set_images(blog.image)} />
                        <input type={'file'} accept={'image/*'} id={'image'} required={true}
                               className={'rounded-md invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 focus:outline-none focus:ring focus:ring-blue-600  mx-20 bg-gray-600 my-2 peer  p-3'}
                               name={'image'} />
                        <ul className={"marker:text-sky-400 hidden peer-[#image]:peer-invalid:block text-red-700 list-disc text-sm space-y-2 "}>
                            <li> * این فیلد اجباری می باشد</li>
                        </ul>
                    </label>
                    <div className={'flex flex-wrap justify-between mx-10'}>
                        {category && category.map((e ,i) =>{return <Categories delcate={removecate} cate={cate} addcate={addcate} key={i} info={e} />})}
                    </div>
                    <input type={'button'} onClick={create_blog}  className={'rounded mx-20 bg-blue-600 my-2 invalid:outline-none invalid:ring invalid:ring-red-600 valid:outline-none valid:ring valid:ring-green-600 focus:outline-none focus:ring focus:ring-blue-600 p-3 cursor-pointer duration-300 hover:text-blue-600 hover:bg-transparent border border-blue-600'} value={'ثبت اطلاعات'}  />
                    <div className={'flex flex-wrap mx-20'}>
                      {data && data.map((e)=>{return <Blogs edit={editBlog} del={del} info={e} />})}
                    </div>
                </div>
            </form>

        </>

    )
}
