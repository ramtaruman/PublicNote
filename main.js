const addbutton=document.getElementById('add')

addbutton.addEventListener('click',()=>addnote(''))

function addnote(text=''){
const note = document.createElement('div')
note.classList.add('note')

note.innerHTML=`<div class="tools">
<button class="edit">
    <svg stroke="currentColor" fill="currentColor" stroke-width="0.9" viewBox="0 0 16 16" height="1rem" width="1rem" xmlns="http://www.w3.org/2000/svg"><path d="M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z"></path><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z" clip-rule="evenodd"></path></svg>

</button>
<button class="delete">
    <svg stroke="currentColor" fill="currentColor" stroke-width="2" viewBox="0 0 26 26" height="1rem" width="1rem" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#fff" stroke-width="3" d="M4,5 L20,5 L20,23 L4,23 L4,5 Z M1,5 L23,5 M9,1 L15,1 L15,5 L9,5 L9,1 Z M9,1 L15,1 L15,5 L9,5 L9,1 Z M15,9 L15,19 M9,9 L9,19"></path></svg>
</button>
</div>
<div class="main ${text ?"":"hidden"}">


</div>
<textarea class="${text ?"hidden":""}">


</textarea>`

const editbutton=note.querySelector('.edit')
const delbutton=note.querySelector('.delete')
const mainest=note.querySelector('.main')
const texter=note.querySelector('textarea')

texter.value=text



delbutton.addEventListener('click',()=>
{
    note.remove()
})
editbutton.addEventListener('click',()=>
{
    main.classList.toggle('hidden')
    textarea.classList.toggle('hidden')
})

document.body.appendChild(note)
}
