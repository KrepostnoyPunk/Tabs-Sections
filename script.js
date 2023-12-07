const tabs=document.querySelector('.tabs')
const btnsEl=document.querySelectorAll('.btn')
const contents=document.querySelectorAll('.content')

tabs.addEventListener('click', (event)=>{
    // console.log(event.target.dataset.id);
    const id=event.target.dataset.id
    if(id) {
        btnsEl.forEach((btn)=>{
            btn.classList.remove('live')
        })
        event.target.classList.add('live')
        contents.forEach((content)=>{
            content.classList.remove('live')
        })
        const element=document.getElementById(id)
        element.classList.add('live')
    }
})