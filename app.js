const gallery = document.querySelector("#gallery")
const popup = document.querySelector("#popup")

const httpData = [
    {
        code:"202",
        source:"./images/code_202.jpg",
        brief:"Accepted"
    },
    {
        code:"204",
        source:"./images/code_204.jpg",
        brief:"No Content"
    },
    {
        code:"300",
        source:"./images/code_300.jpg",
        brief:"Multiple Choices"
    },
    {
        code:"301",
        source:"./images/code_301.jpg",
        brief:"Moved Permanently"
    },
    {
        code:"400",
        source:"./images/code_400.jpg",
        brief:"Bad Request"
    }
]

const selectedImage = document.querySelector("#selectedImage");
const selectedCode = document.querySelector("#selectedCode");
const selectedCodeDescription = document.querySelector("#selectedCodeDescription");

httpData.forEach(i=>{
    const div = document.createElement('div')
    div.classList.add('codeCard')
    const image = document.createElement('img');
    image.src = i.source;
    image.alt = i.brief;
    image.classList.add('galleryImg');

    div.addEventListener('click', ()=>{
        popup.style.transform=`translateY(0)`;
        selectedImage.src=i.source;
        selectedCode.innerHTML=i.code;
        selectedCodeDescription.innerHTML=i.brief

    })

    const header = document.createElement('p')
    header.innerText=i.code;
    header.classList.add('headerCode')

    const brief = document.createElement('p');
    brief.innerText=i.brief

    div.appendChild(image);
    div.appendChild(header)
    div.appendChild(brief)
    gallery.appendChild(div);

})

popup.addEventListener('click', ()=>{
    popup.style.transform = `translateY(-100%)`
    selectedImage.src=""
    selectedImage.alt=""
    selectedCode.innerText="";
    selectedCodeDescription.innerText="";
})

