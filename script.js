let moviesList = [];
let currentId = 0;

$myform = $("<form></form>");
$submitBtn = $('<button type="button" class="button">Submit</button>')
$deleteBtn = $('<button class="btn btn-danger" data-delete-id=${data.currentId}>Delete</button>')
$titleInput = $('<input type="text" class="title" placeholder="Title">')
$ratingInput = $('<input type="number" class="rating" placeholder="Rating" min="0" max="10">');
$('body').append($myform);
$myform.append($titleInput);
$myform.append($ratingInput);
$myform.append($submitBtn);

$myTable = $("<table></table>");
$('body').append($myTable);
$myTable.append('<tr class="header"></tr>')
$("<th>Title</th>").appendTo(".header");
$('<th>Rating</th>').appendTo('.header');
$('<th>Remove</th>').appendTo('.header');

$('h1').css('textAlign', 'center',)
$('form').css('textAlign', 'center').css({'padding': '10px 10px'})
$('table').css({ 'width': '100%'})
$('.header').css({'background-color': '#d3a883'})
$('input').css({'margin': '10px'})
$('button').css({'margin': '10px'})



$submitBtn.on("click",(e)=> {
    e.preventDefault();
    let title = $("#title").val();
    let rating = $("#rating").val();

    currentId++
    let movieData = { title, rating, currentId };
    moviesList.push(movieData);

    const HTMLtoAppend = createMovieDataHTML(movieData)
    $('table').append(HTMLtoAppend)
    $("form").trigger("reset");
    console.log(moviesList)
});   



$("table").on("click", ".btn.btn-danger", function(evt) {
    // find the index where this movie is
    let indexToRemoveAt = moviesList.findIndex(movie => movie.currentId === +$(evt.target).data("deleteId"))
    
    // remove it from the array of movies
    moviesList.splice(indexToRemoveAt, 1)

    // remove it from the DOM
    $(evt.target)
      .closest("tr")
      .remove();
    
});


function createMovieDataHTML(data) {
    return `
      <tr>
        <td>${data.title}</td>
        <td>${data.rating}</td>
        <td>
          <button class="btn btn-danger" data-delete-id=${data.currentId}>
            Delete
          </button>
        </td>
      <tr>
    `;
  }
  