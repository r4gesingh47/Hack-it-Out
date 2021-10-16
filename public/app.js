

// function showarticle(){
//     const todo = {
//       article_title: article_clicked
//   };
  
//     fetch('http://localhost:3000/getsinglearticle', {
//       method: 'POST',
//       body: JSON.stringify(todo),
//       headers: {
//           'Content-type': 'application/json; charset=UTF-8'
//       }
//   })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (s) {
//     document.getElementById('art_title').innerHTML=s[0].article_title;
//     document.getElementById('art_author').innerHTML=s[0].article_author;
//     document.getElementById('art_content').innerHTML=s[0].aticle_content;
//   })
//   .catch(function (error) {
//     console.log("Error: " + error);
//   });
// }

// //Server realted
// var data;
// fetch("http://localhost:3000/getquestion")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (s) {
//     s.forEach(element => {
//      add_question(element);   
//     });
//   })
//   .catch(function (error) {
//     console.log("Error: " + error);
//   });
// //modifying html

// fetch("http://localhost:3000/check")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (s) {
//     if(s.username!="false")
//     dologin(s);
//   })
//   .catch(function (error) {
//     console.log("Error: " + error);
//   });

// function add_question(elem){
//     var question_format=`
//     <div class="${elem.category} question question1">
//                         <p style="width: 100%;font-size: 2rem;">${elem.question}</p>
//                         <div class="question-info">
//                                 <div class="options likes">
//                                     <i class="fa fa-thumbs-o-up" aria-hidden="true"></i><p>${elem.likes}</p>
//                                 </div>
//                                 <div class="options down">
//                                     <i class="fa fa-thumbs-o-down" aria-hidden="true"></i><p>${elem.dislikes}</p>
//                                 </div>
//                                 <div class="options views">
//                                     <i class="fa fa-eye" aria-hidden="true"></i><p>${elem.views}</p>
//                                 </div>
//                                 <div class="options bookmark">
//                                 <i class="fa fa-bookmark-o" aria-hidden="true"></i>
//                                 </div>
//                                 <div class="questions-user">
//                                     <p>${elem.author}</p>
//                                 </div>
//                         </div>
//                     </div>
//     `
//     document.getElementById('add_question').innerHTML+=question_format;
// }


// setTimeout( 300);
// const category=document.getElementById('choose-category');
// var val="test";
// category.addEventListener('change', function() {
//     val=category.value;
//     console.log(val);  
//     var elements=document.getElementsByClassName("question");
//     if(val!="all"){
//     for(var i=0;i<elements.length;i++)
//     {
//         elements[i].classList.remove('show');
//         elements[i].classList.add('default');
//     }
//     elements=document.getElementsByClassName(val);
//     for(var i=0;i<elements.length;i++)
//     {
//         elements[i].classList.add('show');
//     }
//     }
//     else{
//         for(var i=0;i<elements.length;i++)
//     {
//         elements[i].classList.add('show');
//     }
//     }
// });

// function dologin(elem)
// {
//    document.getElementById('user').innerHTML=elem.username;
//    document.getElementById("user").onclick = function() {
//     document.getElementById("user").href="#"; 
//     return false;
//   };
// }
