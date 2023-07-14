const remove =document.getElementById("main");
const toa=remove.remove()

const newHeader =document.createElement("h1")

newHeader.setAttribute('id','victory')
newHeader.textContent="Kimemia is the champion";

document.body.append(newHeader)