function gitMembers(json, members, exec) {

    return new Promise(
        function (resolve, reject) {

            if (exec == undefined) {

                $.get("https://api.github.com/orgs/BlockchainInsper/public_members", function (data) {

                    for (let index = 0; index < data.length; index++) {

                        let { login, avatar_url } = data[index]
                        position = "Tech Member"

                        if (json[login] == undefined) {

                            let template = `<div id="${login}" class="col-sm-4";">
                                                <div class="member">
                                                    <img src="${avatar_url}" alt="${obj.name}">
                                                    <h2 id="name">${login}</h2>
                                                    <h3 id="position">${position}</h3>
                                                </div>
                                            </div>`
                        } else {
                            json[login].seen = true
                            let template = `<div id="${obj.name}" class="col-sm-4";">
                                                <div class="member">
                                                    <img src="${obj.img}" alt="${obj.name}">
                                                    <h2 id="name">${obj.name}</h2>
                                                    <h3 id="position">${obj.position}</h3>
                                                </div>
                                            </div>`
                        }





                        let user = document.createElement("div");
                        user.innerHTML = template
                        members.appendChild(user.firstChild)





                    }

                    let resp = { json, members }
                    resolve(resp)

                });
            } else {
                resolve({ json, members })
            }
        }
    )

}




function loadMembers(exec) {
    return new Promise(
        function (resolve, reject) {

            members = document.createElement("div")
            members.class = "flex-container"
            members.id = "members"

            $.getJSON("js/config/members.json", function (json) {

                gitMembers(json, members, exec).then(({ json, members }) => {
                    console.log(json.executives);
                    Object.keys(json.executives).forEach(key => {
                        let obj = json.executives[key]
                        console.log(obj);


                        if (obj.seen == undefined || obj.seen == false) {

                            let template = `<div id="${obj.name}" class="col-sm-4";">
                                                <div class="member">
                                                    <img src="${obj.img}" alt="${obj.name}">
                                                    <h2 id="name">${obj.name}</h2>
                                                    <h3 id="position">${obj.position}</h3>
                                                </div>
                                            </div>`

                            let user = document.createElement("div");
                            user.innerHTML = template
                            members.appendChild(user.firstChild)
                        }




                        resolve(members);


                    });
                })
            })
        })















}



function loadMembersbusiness1(exec) {
    return new Promise(
        function (resolve, reject) {

            members = document.createElement("div")
            members.class = "flex-container"
            members.id = "members"

            $.getJSON("js/config/members.json", function (json) {

                gitMembers(json, members, exec).then(({ json, members }) => {
                    Object.keys(json.business).forEach(key => {
                        let obj = json.business[key]


                        if (obj.seen == undefined || obj.seen == false) {

                            let template = `<div id="${obj.name}" class="col-sm-4";">
                                                <div class="member">
                                                    <img src="${obj.img}" alt="${obj.name}">
                                                    <h2 id="name">${obj.name}</h2>
                                                    <h3 id="position">${obj.position}</h3>
                                                </div>
                                            </div>`

                            let user = document.createElement("div");
                            user.innerHTML = template
                            members.appendChild(user.firstChild)
                        }
                        resolve(members);


                    });
                })
            })
        })

}



function loadMembersfinance2(exec) {
    return new Promise(
        function (resolve, reject) {

            members = document.createElement("div")
            members.class = "flex-container"
            members.id = "members"

            $.getJSON("js/config/members.json", function (json) {

                gitMembers(json, members, exec).then(({ json, members }) => {
                    Object.keys(json.finance).forEach(key => {
                        let obj = json.finance[key]


                        if (obj.seen == undefined || obj.seen == false) {

                            let template = `<div id="${obj.name}" class="col-sm-4";">
                                                <div class="member">
                                                    <img src="${obj.img}" alt="${obj.name}">
                                                    <h2 id="name">${obj.name}</h2>
                                                    <h3 id="position">${obj.position}</h3>
                                                </div>
                                            </div>`

                            let user = document.createElement("div");
                            user.innerHTML = template
                            members.appendChild(user.firstChild)
                        }
                        resolve(members);


                    });
                })
            })
        })

}


function loadMemberstech0(exec) {
    return new Promise(
        function (resolve, reject) {

            members = document.createElement("div")
            members.class = "flex-container"
            members.id = "members"

            $.getJSON("js/config/members.json", function (json) {

                gitMembers(json, members, exec).then(({ json, members }) => {
                    Object.keys(json.finance).forEach(key => {
                        let obj = json.finance[key]


                        if (obj.seen == undefined || obj.seen == false) {

                            let template = `<div id="${obj.name}" class="col-sm-4";">
                                                <div class="member">
                                                    <img src="${obj.img}" alt="${obj.name}">
                                                    <h2 id="name">${obj.name}</h2>
                                                    <h3 id="position">${obj.position}</h3>
                                                </div>
                                            </div>`

                            let user = document.createElement("div");
                            user.innerHTML = template
                            members.appendChild(user.firstChild)
                        }
                        resolve(members);


                    });
                })
            })
        })

}