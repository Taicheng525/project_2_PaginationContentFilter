let list = $('.student-list li');
list.hide();
let pageNum = Math.ceil(list.length/10);
let group_of_list=[];

//Loop the list and put 10 students as an array into the group_of_list array
//Set the buttons
for(let i=0, x=0, y=10; i<pageNum; i++, x+=10, y+=10){
    $('#start').append('<li><a id="button'+(i+1)+'" href="#">'+(i+1)+'</a></li>'); 
    group_of_list[i]=list.slice(x,y);
}

//Set the event to each buttom
for(let j=0; j<pageNum; j++){
    $('#button'+(j+1)).on('click',function(){
        $('#start li a').removeAttr("class");
        list.hide();
        group_of_list[j].show();
        $(this).attr("class","active");
        //console.log('i='+i+" x="+x+" y="+y);
    });  
}//for end

//For the first page display purpose
group_of_list[0].show();
$("#button1").attr("class","active");

//------------------------------exceeds part below

//Put all of the text information into the nameList array
let nameList = [];
for(let z=0; z<list.length; z++){
    nameList.push(list[z].innerText);
}

//Set the event for checking if there is a word match in the nameList array
$("#buttonSearch").on('click',function(){
    let finalList=[];
    for(let z=0; z<list.length; z++){
        let nameIndex = nameList[z].indexOf($("#inputSection").val());
        if(nameIndex > -1){
            finalList.push(list.eq(z));/*----question!!: I have to use the eq method otherwise the finalList loop will not work, could you explain the eq methods a little bit?? */
        }//if end
    }//for end

    if(finalList.length === 0){
        $("a").removeAttr("class");
        $("#appendHTML").empty();
        list.hide();
        $("#appendHTML").append("<h2>Sorry! Not match!</h2>");   
    }
    else{
        $("a").removeAttr("class");
        list.hide();
        $("#appendHTML").empty();
        //finalList.hide();
        for(let q=0; q<finalList.length; q++){
            finalList[q].show(); /*---------------------question!!: Here I have to use a loop and eq method above(line 42) to make the .show() method work otherwise it will show that the finalList is not a function? why I couln't use the method directly?? like list.hide()or list.show() that I used above? I checked the type in the web console, it is an object*/
        }
    }//if end
});


