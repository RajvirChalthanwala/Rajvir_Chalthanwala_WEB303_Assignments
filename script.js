/*
    Assignment 05
*/

$(document).ready(function () {
   
    class ContentItem{
       eId;
        name;
       desc;
       dept;
   
   constructor(eId, name, desc, dept){
           this.eId = eId;
           this.name = name;
           this.desc = desc;
           this.dept = dept;
           }
   
   updateContentItem(eId, name, desc, dept){
           if(this.eId == eId && name && desc && dept){
               this.eId = eId;
               this.name = name;
               this.desc = desc;
               this.dept = dept;
               }
   
           }
           toString(){
           return $('#content-item-list').append(`<div class="content-item-wrapper">
           <div id="content-item-${this.eId}">
           <h2 class="name">${this.name}</h2>
           <p class="desc">${this.desc}</p>
           <div class="dept">${this.dept}</div>
           </div>
            </div>`);
               }
       }
    
       let content = [
        {
            "eId": 0,
            "name": "Rajvir Chalthanwala",
            "desc": "Designs include drawings, design details, specifications, bills of quantity and design calculations.",
            "dept": "Designer"
        },
        {
            "eId": 1,
            "name": "Poonam Patel",
            "desc": "A team manager has to ensure that all members understand the team's objectives and work together to achieve it.",
            "dept": "Team Manager"
        },
        {
            "eId": 2,
            "name": "Tarang Patel",
            "desc": "Provide mentoring to faculty to offer support and guidance towards excellence in teaching, service and scholarly activities.",
            "dept": "HOD"
        },
        {
            "eId": 3,
            "name": "Puja Golani",
            "desc": "The description typically includes the person's main duties, responsibilities, and working conditions. It also includes the job title and to whom the person holding that job has to report.",
            "dept": "Employee"
        },
        {
            "eId": 4,
            "name": "Tanvi Patel",
            "desc": "Managers' roles fall into three basic categories: informational roles, interpersonal roles, and decisional roles.",
            "dept": "Manager"
        },
    
        ];
        
        $.each(content, function(key, val){
            $('#content-item-list').append(`<div class="content-item-wrapper">
              <div id="content-item-${this.eId}">
              <h2 class="name">${this.name}</h2>
              <p class="desc">${this.desc}</p>
              <div class="dept">${this.dept}</div>
              </div>
          </div>`);
          });

         $('h1').empty().text("About Stores");

        $('.content-item-wrapper').css('width', '75%');
        $('.content-item-wrapper').css('margin', 'auto'); 
        $('.content-item-wrapper').css('margin-bottom', '20px');
        $('.content-item-wrapper').css('marging-top', '10px');
        $('.content-item-wrapper').css('padding', '12px');
        $('.content-item-wrapper').css('border', 'double 5px #995511');

        $('.desc').css('color', '#2211ff');
        $('.dept').css('font-weight', 'bold');
      
      });