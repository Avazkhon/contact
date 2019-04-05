function getUser (colaback) {
  let xhr = new XMLHttpRequest();
  let url = "http://demo.sibers.com/users";

  xhr.open("GET", url);

  xhr.onreadystatechange = ()=>{
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
    	let arrayUsers = JSON.parse(xhr.response);
      colaback(arrayUsers)
    }
  }
  xhr.send();
}

export default getUser