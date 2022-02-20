let link = "https://api.github.com/users/"
let input  = ""


function changeInput(element){
    input = element.value
}

async function getUser(){
    const response = await fetch(link + input)
    const data = await response.json()
    console.log(data)
    document.getElementById("userCardContainer").innerHTML = addToPage(data)
}

function addToPage(data){
    let newContent = ` <div class="card">
    <h2>${data.name} - ${data.location}</h2>
    <img src="${data.avatar_url}/>"
</div>
`
    return newContent
}