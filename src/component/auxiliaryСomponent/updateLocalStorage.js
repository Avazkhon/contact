let updateLocalStorage = ( user )=>{
    // callback
      let arrContacts = JSON.parse((localStorage.getItem('arrContacts')));
      let newArrContacts =  arrContacts.map((item)=>{
      if(item.id === user.id){
       return item = user; // add the user in arr
      }
      return item
    })
    localStorage.setItem('arrContacts', JSON.stringify(newArrContacts))
}

export default updateLocalStorage