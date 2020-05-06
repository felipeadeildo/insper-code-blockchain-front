const financeProj = {
  "Fin 1" : {
      "description" : "Lorem Ipsum Dolores sit amet",
      "image" : '../img/card-1.jpg',
  },
  "Fin2" : {
      "description" : "1 month imerssive bootcamp in the C language. The proposal was to motivate peer-to-peer learning.",
      "image" : '../assets/images/42-students.jpg'
  },
  "Fin 3" : {
       "description" : "7 month bootcamp in front-end web develpoment.",
       "image" : '../assets/images/ironhack-students.jpg'
   },
   "Fin 4" : {
       "description" : "Using machine learning to solve problems at Insper University.",
       "image" : '../assets/images/insperRooms.jpg'
   }
}

const businessProj = {
    "Business" : {
        "description" : "Lorem Ipsum Dolores sit amet",
        "image" : '../assets/images/cryptoAnalysis.png',
    },
    "Business 2" : {
        "description" : "1 month imerssive bootcamp in the C language. The proposal was to motivate peer-to-peer learning.",
        "image" : '../assets/images/42-students.jpg'
    },
    "Business 3" : {
         "description" : "7 month bootcamp in front-end web develpoment.",
         "image" : '../assets/images/ironhack-students.jpg'
     },
     "Business 4" : {
         "description" : "Using machine learning to solve problems at Insper University.",
         "image" : '../assets/images/insperRooms.jpg'
     }
  }

  const techProj = {
    "Blockchain 3" : {
        "description" : "Criamos tal tal csjrhbviwfnp",
        "image" : '../assets/images/cryptoAnalysis.png',
    },
    "Tech 2" : {
        "description" : "1 month imerssive bootcamp in the C language. The proposal was to motivate peer-to-peer learning.",
        "image" : '../assets/images/42-students.jpg'
    },
    "Tech 3" : {
         "description" : "7 month bootcamp in front-end web develpoment.",
         "image" : '../assets/images/ironhack-students.jpg'
     },
     "Tech 4" : {
         "description" : "Using machine learning to solve problems at Insper University.",
         "image" : '../assets/images/insperRooms.jpg'
     }
  }



let populate = (information, div) => {
   
   for (let name in information) {
       let box = document.createElement("a");
       // box.setAttribute("href", "#");
       box.style.textDecoration = "none";
       box.style.color = "black";
       box.classList.add("card");

       let title = document.createElement("h1");
       title.classList.add("card-title");
       title.innerText = name;

       let image = document.createElement("div");
       image.classList.add("card-img");
       image.style.backgroundImage = `url(${information[name]["image"]})`;

       let description = document.createElement("div");
       description.classList.add("description");
       description.innerText = information[name]["description"];

       let overlay = document.createElement("div");
       overlay.classList.add("overlay");
       
       overlay.appendChild(description);
       box.appendChild(title);
       box.appendChild(image);
       box.appendChild(overlay);
       div.appendChild(box);
   };
};

let financeDiv = document.querySelector(".finance-proj");
let businessDiv = document.querySelector(".business-proj");
let techDiv = document.querySelector(".tech-proj");


populate(financeProj, financeDiv);
populate(businessProj, businessDiv);
populate(techProj, techDiv);


if (isMobile()) {
   let sectionTitles = document.querySelectorAll(".section-header");
   sectionTitles.forEach(title => {
       title.classList.remove("section-header");
       title.classList.add("section-header-mobile");
   });

   let cards = document.querySelectorAll(".card");
   cards.forEach(card => {
       card.style.minWidth = "270px";
       card.style.height = "400px";
   });
}

// ScrollSnap on load.
document.addEventListener("DOMContentLoaded", () => {
   financeDiv.scrollTo(0, 0);
});