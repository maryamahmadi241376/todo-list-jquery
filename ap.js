URL = "https://61852c2223a2fe0017fff447.mockapi.io/blog";

$(document).ready(function(){
    localItems = JSON.parse(localStorage.getItem('localItems'));
    if (localItems){
        localItems.forEach(function (item) {
            $(".list-group").append("<li class='list-group-item d-flex justify-content-between'>" + item +  "<i class='fas fa-times text-danger mr-auto delete-item'></i>"+"</li>")
        })
    }
    $(".add").click(function(){
        // e.preventDefault()
        var inputval = $("#item").val().trim();

        if (inputval != ''){
            let localItems;
            localItems = [];
            if(localStorage.getItem('localItems') === null){
                localItems = [];
            }else{
                localItems = JSON.parse(localStorage.getItem('localItems'));
            }
            localItems.push(inputval);
            console.log(inputval);

            localStorage.setItem('localItems', JSON.stringify(localItems));

            $(".list-group").append("<li class='list-group-item d-flex justify-content-between'>" + inputval +  "<i class='fas fa-times text-danger mr-auto delete-item'></i>"+"</li>")

        }else{
            alert("please enter something to add")
        }
        
    })

    $(document).on('click','.delete-item',function(){
        let del = $(this).parent().text();
        $(this).parent().remove();
        //remove items from list
        localItems.splice(localItems.indexOf(del),1);
        newList = localItems
        //remove all items from localstorage
        localStorage.removeItem('localItems');
        //replace newlist in localstorage
        localStorage.setItem('localItems', JSON.stringify(newList));

    });
    $(document).on('click','.clear-tasks',function(){
        $('#items').children().remove();
        localStorage.removeItem('localItems');
        // $('#items').children().empty();
        // $('#items').empty();  this also works
    });
        
});
    // function showlist(){

    //     let outPut = '';
    //     let todoListShow = $(".clear-tasks")
    //     let localItems = JSON.parse(localStorage.getItem('localItem'))
    //     if(localItems === null){
    //         todoList = []

    //     }else{
    //         todoList = localItems;
    //     }
    //     todoList.forEach((data,index) => {
    //         outPut += `
    //         <p class="pText">(${data})</p>
    //         <i class="fas fa-times text-danger mr-auto" onClick="delete-item(${index})"></i>`


    //     });
    //     todoListShow.innerHTML = outPut;
    //     // todoList.push(inputval)
    //     // localStorage.setItem('localItem',JSON.stringify(todoList))


    // }
    // showlist();

    // function deleteItem(index){
    //     let localItems = JSON.parse(localStorage.getItem('localItem'))
    //     todoList.splice(index, 1);
    //     localStorage.setItem('localItems',JSON.stringify(todoList))
    //     showlist();

    // }
    // deleteItem();

    // function clearTasks(){
    //     localStorage.clear()
    //     showlist();




    // }





// filters = {
//     search: ''
// }
// $("#filtering").on("input",function(e){
//     filters.search = $(this).val();

//     var f = $grep("ul", function(o){
//         return o.$("li").children().textContent.toLowerCase().includes(filters.search.toLowerCase);
//     })
//     $("#items").empty();

//     $.each(f, function (index, value) {
//         $("#items").append("<p>"+value.name+"</p>");
//     })

// })



// $(document).ready(function(){
// $('.add').keypress(function(e){
//     e.preventDefault()
//     if(e.which === 13){
//         var todoText = $(".form-control").val();
//         $(this).val("");
//         $('ul').append('<li class="list-group-item d-flex justify-content-between">'+todoText+'<i class="fas fa-times text-danger mr-auto delete-item"></i></li>');

//     }
// });
// $('ul').on('click','i',function(e){
//     $(this).parent().fadeOut(500,function(){
//         $(this).remove();
//     });
//     e.stopPropagation();
// });
// });
