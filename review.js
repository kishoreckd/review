
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

  const btns=document.querySelectorAll("button")
//   console.log(btns);
  const img=document.querySelector(".person-img")
//   console.log(img);
  const author=document.querySelector(".author")
//   console.log(author);
  const job=document.querySelector(".job")
//   console.log(job);
  const info=document.querySelector(".info")
//   console.log(info);

let plus = -1

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click",(e)=>{
        // console.log(e.target);
        if (e.target.matches(".random-btn")) {
            let random =Math.floor(Math.random()*reviews.length)
            author.innerText=reviews[random].name
            job.innerText=reviews[random].job
            info.innerText=reviews[random].text
            img.src=reviews[random].img
        }
         if(e.target.matches("#nextbtn")){
            plus ++
            // console.log(plus);
            if(plus === 4){
                plus =0
              }
              author.innerText=reviews[plus].name
              job.innerText=reviews[plus].job
              text.innerText=reviews[plus].text
              img.src=reviews[plus].img
        }
        
        if(e.target.matches("#prvbtn")){
            plus --
            // console.log(plus);
            if(plus === -1){
                plus =3
              }
              author.innerText=reviews[plus].name
              job.innerText=reviews[plus].job
              text.innerText=reviews[plus].text
              img.src=reviews[plus].img
        }
           
        
    })    
}


