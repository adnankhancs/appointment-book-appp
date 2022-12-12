const div=document.querySelector("#btn");

div.style.background='brown';
div.addEventListener('click', a);




    // console.log(cat);
    // console.log(b[i].innerText+'---'+a[i].value);




function a(e){
    e.preventDefault(); 
    //console.log(1);
    const a=document.querySelectorAll('input');
    const b=document.querySelectorAll('label');
    var cat={}
    for(var i=0;i<a.length-1;i++){
        cat[b[i].innerText]=a[i].value;

        // console.log(cat);
        // console.log(b[i].innerText+'---'+a[i].value);

    

    }
    localStorage.setItem(a[1].value,cat)
    console.log(cat);

}

div.addEventListener("mouseover",e=>{

    e.preventDefault();

    console.log(" mouseover");

    div.style.background='green';



});

div.addEventListener("mouseout",e=>{

    e.preventDefault();

    console.log(" mouseout");

    div.style.background='brown';



});

div.addEventListener('click',(e)=>{

    e.preventDefault();

    console.log(" click");

    div.style.background='yellow';

    

});