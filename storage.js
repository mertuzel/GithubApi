class Storage{
    constructor(){
        this.users = [];
    }
    
    static getSearchedProfilesFromStorage(){
       
        if(localStorage.getItem("searched") === null){
            this.users = [];
        }
        else{
            this.users = JSON.parse(localStorage.getItem("searched"));

        }
        return this.users ;
    }
    static addSearchedProfilesToStorage(username){
        this.users = this.getSearchedProfilesFromStorage();
        if(this.users.indexOf(username.login) === -1){
            this.users.push(username.login);
            localStorage.setItem("searched",JSON.stringify(this.users));    
        }
        
    }

    static clearAll(){
        localStorage.removeItem("searched");
    }
    static deleteChosenUserFromStorage(chosen){
       const users = this.getSearchedProfilesFromStorage();
        users.forEach((user,index)=>{
            if((chosen.textContent.split("Delete")[0]).trim() === user){
                users.splice(index,1);
            }
        }) 
        localStorage.setItem("searched",JSON.stringify(users));
    }
}