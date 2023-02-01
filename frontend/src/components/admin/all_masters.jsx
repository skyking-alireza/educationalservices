export default ({info,able})=>{
  const grade = ['کاردانی' , 'کارشناسی' , 'دکتری','دکتری حرفه ای','دکتری تخصصی']
  const field_of_Study = ['برق صنعتی' , 'تأسیسات الکتریکی' , 'فناوری اطلاعات و ارتباطات' , 'الکترونیک' , 'نرم‌افزار کامپیوتر' , 'ساختمان' , 'نقشه برداری' , 'معماری' , 'حسابداری' , 'تبلیغات و بازاریابی' , 'صنایع فلزی - جوشکاری' , 'طراحی صنعتی']
  return(
    <div className={'bg-slate-700 drop-shadow-2xl flex-auto m-2 p-4 duration-300 hover:bg-slate-500 cursor-pointer rounded-xl'}>
      <p>{`${info.first_name} ${info.last_name}`}</p>
      <p> شماره تماس :  {info.username}</p>
      <p> ایمیل :  {info.email}</p>
      <p> مقطع :  {grade[info.grade-1]}</p>
      <p> رشته :  {field_of_Study[info.field_of_Study-1]}</p>
      <p> کد پرسنلی :  {info.studentcode}</p>
      <p> تاریخ تولد :  {new Intl.DateTimeFormat('fa').format(new Date(info.birthday))}</p>
      <p> آدرس :  {info.address}</p>
      {info.is_active ?
        <button onClick={()=>{able(info.id,info.is_active)}} className={'m-2 p-3 bg-green-600 rounded border-2 border-green-600 duration-300 hover:bg-transparent hover:text-green-600'}>فعال</button>
        :
        <button onClick={()=>{able(info.id,info.is_active)}} className={'m-2 p-3 bg-red-600 rounded border-2 border-red-600 duration-300 hover:bg-transparent hover:text-red-600'}>غیر فعال</button>
      }
    </div>
  )
}
