const images = ["about1.jpg","about2.jpg","about3.jpg","about4.jpg","about5.jpg","about6.jpg","about7.jpg","about8.jpg","about9.jpg","about10.jpg","about11.jpg","about12.jpg","about13.jpg","about14.jpg"]

let i = 0

function placeImage(x,y) {
    
    const nextSrc = images [i]
    
    const img = document.createElement("img")
    img.setAttribute("src", "images/" + nextSrc) 
    
    img.style.left = x + "px"
    img.style.top = y + "px"
    
    document.querySelector("#stuff").appendChild(img)
    
    i = i + 1
    
    if (i >= images.length) {
        i = 0
    }  
}

document.querySelector("#stuff").addEventListener("click", function (event) {
    event.preventDefault()
    placeImage(event.pageX, event.pageY)
})

document.querySelector("#stuff").addEventListener("touchend",function () {
    event.preventDefault()
 placeImage(event.pageX,event.pageY)   
})