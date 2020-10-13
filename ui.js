class UI{
    constructor(){
        this.cardbody = document.querySelector(".card-body");
        this.profile = document.querySelector("#profile");
        this.repos = document.querySelector("#repos");
        this.lastusers = document.querySelector("#last-users");
        
    }
 
    addUserDataToUI(username){ // Add profile infos to ui
        this.profile.innerHTML = 
        `
        <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-4">
            <a href="${username.html_url}" target = "_blank">
             <img class="img-fluid mb-2" src="${username.avatar_url}"> </a>
             <hr>
             <div id="fullName"><strong>${username.name}</strong></div>
             <hr>
             <div id="bio">${username.bio}</div>
            </div>
          <div class="col-md-8">
                <button class="btn btn-secondary">
                      Followers  <span class="badge badge-light">${username.followers}</span>
                </button>
                <button class="btn btn-info">
                     Following  <span class="badge badge-light">${username.following}</span>
                  </button>
                <button class="btn btn-danger">
                    Repos  <span class="badge badge-light">${username.public_repos}</span>
                </button>
                <hr>
                <li class="list-group">
                    <li class="list-group-item borderzero">
                        <img src="images/company.png" width="30px"> <span id="company">${username.company}</span>
                        
                    </li>
                    <li class="list-group-item borderzero">
                        <img src="images/location.png" width="30px"> <span id = "location">${username.location}</a>
                        
                    </li>
                    <li class="list-group-item borderzero">
                        <img src="images/mail.png" width="30px"> <span id="email">${username.email}</span>
                        
                    </li>
                    
                </div>
                   
                
          </div>
    </div>
        `;
    }
    addRepoDataToUI(repo){ // Add repo infos to ui
       this.repos.innerHTML="";
        repo.forEach(repo=>{
            this.repos.innerHTML+=
            `<div class="mb-2 card-body">
            <div class="row">
                <div class="col-md-2">
                <a href="${repo.html_url}" target = "_blank" id = "repoName">${repo.name}</a>
                </div>
                <div class="col-md-6">
                    <button class="btn btn-secondary">
                        Stars  <span class="badge badge-light" id="repoStar">${repo.stargazers_count}</span>
                    </button>

                    <button class="btn btn-info">
                        Forks  <span class="badge badge-light" id ="repoFork">${repo.forks_count}</span>
                    </button>
            
                </div>
        </div>

        </div>`;
        })

    }


    alert(type,message){
        const div = document.createElement("div");
        div.className=`alert alert-${type}`;
        div.textContent = message;
        this.cardbody.appendChild(div);
        setTimeout(() => {
            div.remove();
        },1500);
    }
    addSearchedProfilesToUI(username){
        let users = Storage.getSearchedProfilesFromStorage();
        if(users.indexOf(username) === -1){
            const li = document.createElement("li");
            li.className ="list-group-item";
            li.textContent = username.login + " ";
            this.lastusers.appendChild(li);
            const button = document.createElement("button");
            button.className="btn btn-danger";
            button.type="button";
            button.textContent="Delete";
            li.appendChild(button);

            

        }

    }
    getSearchedProfilesAndAddToUI(){
        let users = Storage.getSearchedProfilesFromStorage();
        let last = "";
        users.forEach(user=>{
        const li = document.createElement("li");
        li.className = "list-group-item ";
        li.textContent=user + " ";
        this.lastusers.appendChild(li);
        const button = document.createElement("button");
        button.className="btn btn-danger ";
        button.type="button";
        button.textContent="Delete";
        li.appendChild(button);
        
        })
        
    };
    clearAll(){
        while(this.lastusers.firstElementChild !== null){
            this.lastusers.firstElementChild.remove();
        }
    }
    deleteChosenUserFromUI(chosen){
        chosen.remove();

    }

}