const div=document.querySelector("#btn");
const search=document.querySelector("#btn1");

div.style.background='brown';
div.addEventListener('click', a);
search.addEventListener('click', B);


const b=document.querySelectorAll('label');
const ul=document.getElementById('ul');
console.log(ul);

// Create new li element






    // console.log(cat);
    // console.log(b[i].innerText+'---'+a[i].value);

    function B(e){
        e.preventDefault(); 
        while(ul.firstChild){
            ul.removeChild(ul.lastChild);
        }
        
        const a2=document.querySelectorAll('input');
        console.log(a2[0].value);
        const b2=document.querySelectorAll('label');

        var pop=JSON.parse(localStorage.getItem(a2[0].value));
        
        for(var i=1;i<b2.length;i++){
            console.log(pop[b2[i].innerText]); 
            const li = document.createElement('li');
        // Add class
        // Add text node with input value
            li.appendChild(document.createTextNode(b2[i].innerText+": "+pop[b2[i].innerText]));
            li.className = 'form-control';
        
        // li.appendChild(document.createTextNode(" "+x.value));
        
        
        // Append li to list
            ul.appendChild(li); 
        
        }
        
    
    }



function a(e){
    e.preventDefault(); 
    //console.log(1);
    while(ul.firstChild){
        ul.removeChild(ul.lastChild);
    }
    const a1=document.querySelectorAll('input');
    const b1=document.querySelectorAll('label');
    var cat={}
    for(var i=2;i<a1.length-1;i++){
        cat[b1[i-1].innerText]=a1[i].value;
        // console.log(cat);
        // console.log(b[i].innerText+'---'+a[i].value);    

    }
    var str=JSON.stringify(cat);
    localStorage.setItem(a1[3].value,str);
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