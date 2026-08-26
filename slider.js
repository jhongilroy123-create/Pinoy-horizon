const countries = [
{
    name: "JAPAN",
    image: "assets/images/japan.jpg",
    description: "Find caregiver, factory, engineering and hospitality jobs abroad."
},
{
    name: "CANADA",
    image: "assets/images/canada.jpg",
    description: "Explore nursing, welding, construction and skilled worker careers."
},
{
    name: "UAE",
    image: "assets/images/uae.jpg",
    description: "Discover opportunities in Dubai and the Middle East."
},
{
    name: "SOUTH KOREA",
    image: "assets/images/korea.jpg",
    description: "Manufacturing and technology jobs for Filipino workers."
},
{
    name: "GERMANY",
    image: "assets/images/germany.jpg",
    description: "Healthcare and engineering opportunities in Europe."
}
];


let index=0;


const title=document.querySelector("#country");

const description=document.querySelector("#description");

const cards=document.querySelectorAll(".card");

const hero=document.querySelector(".hero");



function changeSlide(){


    // Change background

    hero.style.backgroundImage = `
linear-gradient(
rgba(0,0,0,.45),
rgba(0,0,0,.65)
),
url("${countries[index].image}")
`;



    // Text animation

    gsap.to(".text",{

        opacity:0,

        y:30,

        duration:.3,


        onComplete:()=>{


            title.innerHTML =
            countries[index].name;


            description.innerHTML =
            countries[index].description;



            gsap.to(".text",{

                opacity:1,

                y:0,

                duration:.5

            });


        }

    });



    // Active card

    cards.forEach(card=>{

        card.classList.remove("active");

    });



    cards[index].classList.add("active");



    // Card animation

    gsap.from(".card",{

        x:80,

        opacity:0,

        duration:.5,

        stagger:.1

    });


}




// NEXT BUTTON

document.querySelector("#next").onclick=()=>{


    index++;


    if(index>=countries.length){

        index=0;

    }


    changeSlide();

};




// PREVIOUS BUTTON

document.querySelector("#prev").onclick=()=>{


    index--;


    if(index<0){

        index=countries.length-1;

    }


    changeSlide();

};




// CLICK COUNTRY CARD

cards.forEach((card,i)=>{


    card.onclick=()=>{


        index=i;


        changeSlide();


    }


});




// INITIAL ANIMATION


gsap.from("nav",{

    y:-50,

    opacity:0,

    duration:1

});



gsap.from(".text",{

    x:-80,

    opacity:0,

    duration:1

});



gsap.from(".card",{

    x:100,

    opacity:0,

    duration:1,

    stagger:.2

});





// SEARCH FUNCTION


const searchBtn =
document.querySelector("#searchBtn");


const searchInput =
document.querySelector("#searchInput");


const searchResult =
document.querySelector("#searchResult");



const jobs=[

"Japan Caregiver",

"Japan Factory Worker",

"Canada Nurse",

"Canada Welder",

"UAE Electrician",

"UAE Housekeeper",

"South Korea Manufacturing",

"Germany Engineer"

];



if(searchBtn){


searchBtn.onclick=()=>{


let search =
searchInput.value.toLowerCase();



let result =
jobs.filter(job=>

job.toLowerCase()
.includes(search)

);



if(result.length > 0.1){


searchResult.innerHTML =

"Available jobs: " + result.join(", ");


}

else{


searchResult.innerHTML =

"No matching jobs found.";


}


};


}

function openLogin(){
    document.getElementById("loginModal").style.display = "flex";
}

function closeLogin(){
    document.getElementById("loginModal").style.display = "none";
}

function openSignup(){
    document.getElementById("signupModal").style.display = "flex";
}

function closeSignup(){
    document.getElementById("signupModal").style.display = "none";
}

function signup(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Account created successfully!");

    closeSignup();
}

function login(){

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let savedEmail = localStorage.getItem("email");
    let savedPassword = localStorage.getItem("password");

    if(email === savedEmail && password === savedPassword){

        alert("Welcome " + localStorage.getItem("name") + "!");

        closeLogin();

    }else{

        alert("Incorrect email or password.");

    }
}