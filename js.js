// AIzaSyBw1gOtUY8kExZBWn3Qxmn3zCVas2CCUqc

const search = $("#search");
const searchbtn = $("#btn");
const output = $("#output");
let searchValue = "Friday";

function getGifs() {
  $.ajax({
    url: `https://tenor.googleapis.com/v2/search?q=excited&key=AIzaSyBw1gOtUY8kExZBWn3Qxmn3zCVas2CCUqc&client_key=my_test_app&limit=8&q=${searchValue}`,
    method: "GET",
    dataType: "json",
    success: function (response) {
      let gifs = response.results;
      output.html("");
      for (let gif of gifs) {
        let outputCard = $("<div>").addClass("card");
        output.append(outputCard);
        outputCard.html(`<img src='${gif.media_formats.gif.url}'></img>`);
      }
    },
    error: function () {
      alert("error");
    },
  });
}

getGifs();

search.on("change", (e) => {
  searchValue = e.target.value;
  console.log(searchValue);
});

searchbtn.on("click", (e) => {
  e.preventDefault();
  getGifs();
});
