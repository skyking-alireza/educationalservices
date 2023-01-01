const Alerts = ({text, status}) => {
    let colors = {
        danger: 'bg-red-500',
        success: 'bg-green-500',
        warning: 'bg-yellow-500',
    }
    const first_div = document.createElement('div');
    first_div.className = 'sticky alert cursor-pointer';
    first_div.onclick = function () {
        this.parentElement.removeChild(this);
    };
    const twice_div = document.createElement('div');
    twice_div.className = `max-w-xs mt-2 mr-2 ${colors[status]} text-sm text-white rounded-md shadow-lg`;
    const text_div = document.createElement('div');
    text_div.className = 'flex p-4'
    text_div.innerText = text;
    twice_div.appendChild(text_div);
    first_div.appendChild(twice_div);
    document.getElementById('setalert').appendChild(first_div);

}
export {Alerts}