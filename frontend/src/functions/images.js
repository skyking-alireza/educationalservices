const set_images = (link) => {
  return window.location.pathname.split("/").length - 1 === 1 ?
   link.includes('http://localhost:8000/') ?   link.replaceAll('http://localhost:8000/frontend/public/' , '') : link.replaceAll('frontend/public/' , '')
   :
   link.includes('http://localhost:8000/') ?   link.replaceAll('http://localhost:8000/frontend/public/' , '../') : link.replaceAll('frontend/public/' , '../')

}
export {set_images}