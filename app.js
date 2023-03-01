// local reviews data


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

const names=document.querySelector('.author')
// console.log(names);
const job=document.querySelector('.job')
// console.log(job);
const img =document.querySelector('.person-img')
// console.log(img);
const text =document.querySelector('#text')
console.log(text)
const nxtbtn=document.querySelector('.next-btn')
// console.log(nxtbtn);
const prvbtn=document.querySelector('.prev-btn')
// console.log(prvbtn);
const random =document.querySelector('.random-btn')
// console.log(random);


// random.addEventListener('click',)


random.addEventListener('click',function(){
  let random =Math.floor(Math.random()*reviews.length)
  // console.log(random);
  names.innerText=reviews[random].name
  job.innerText=reviews[random].job
  text.innerText=reviews[random].text
  img.src=reviews[random].img

})


  let plus = -1
nxtbtn.addEventListener('click',function(){
  console.log(nxtbtn);
  plus++
  if(plus === 4){
    plus =0
  }
  names.innerText=reviews[plus].name
  job.innerText=reviews[plus].job
  text.innerText=reviews[plus].text
  img.src=reviews[plus].img
})


let minus = 4
prvbtn.addEventListener('click',function(){
  console.log(prvbtn);
  minus--
  if(minus === -1){
    minus =3
  }
  names.innerText=reviews[minus].name
  job.innerText=reviews[minus].job
  text.innerText=reviews[minus].text
  img.src=reviews[minus].img
})
  
  
// let plus = -1
// nxtbtn.addEventListener('click',function(){
//   plus++
//   if(plus == 4){
//     plus = 0
//   }

//   names.innerText=reviews[plus].name
//   job.innerText=reviews[plus].job
//   text.innerText=reviews[plus].text
//   img.src=reviews[plus].img
// })