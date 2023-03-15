
$('#add_user').submit(function(event){
    alert("Data inserted Successfully");
})



$('#update_user').submit(function(event){
    event.preventDefault();//this will change the default behaviour of the form(which is to render the browser when we click on submit button)

    var unindexed_array = $(this).serializeArray();//this method is going to return serializearray of the data
    var data ={}

    //map is method where here n will return the data of unindexed_array and i will return the index of unindexed_array
    $.map(unindexed_array,function(n,i){
        data[n['name']] = n['value']
    })
    
    console.log(data);

    var request = {
        "url": `http://localhost:3000/api/users/${data.id}`,
        "method":"PUT",
        "data":data
    }

    $.ajax(request).done(function(response){
        alert("Data updated successfully!")
    })

})

if(window.location.pathname == "/table"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url": `http://localhost:3000/api/users/${id}`,
            "method":"DELETE"
        }
    if(confirm("Do you really want to delete this record ?")){
        $.ajax(request).done(function(response){
            alert("Data Deleted successfully!");
            location.reload()
        })
        }
    })
}

if(window.location.pathname == "/contacttbl"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")
        var request = {
            "url": `http://localhost:3000/contacts/${id}`,
            "method":"DELETE"
        }
    if(confirm("Do you really want to delete this record ?")){
        $.ajax(request).done(function(response){
            alert("Data Deleted successfully!");
            location.reload()
        })
        }
    })
}

if(window.location.pathname == "/usertbl"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")
        var request = {
            "url": `http://localhost:3000/reg/${id}`,
            "method":"DELETE"
        }
    if(confirm("Do you really want to delete this record ?")){
        $.ajax(request).done(function(response){
            alert("Data Deleted successfully!");
            location.reload()
        })
        }
    })
}


if(window.location.pathname == "/feedbacktbl"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")
        var request = {
            "url": `http://localhost:3000/feedbacks/${id}`,
            "method":"DELETE"
        }
    if(confirm("Do you really want to delete this record ?")){
        $.ajax(request).done(function(response){
            alert("Data Deleted successfully!");
            location.reload()
        })
        }
    })
}

