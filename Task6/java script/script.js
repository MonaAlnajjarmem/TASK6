
fetch("https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/")
    .then(res => res.json())
    .then(res => Mona(res));

let Div = document.getElementById("info");

function Mona(res) {
    console.log(res);
    // جلب آخر أربعة كتب
    let lastFourBooks = res.slice(-4);
    lastFourBooks.map(book => {
        Div.innerHTML += `
        <div class="p-2 g-col-6 mx-5 ">
            <div class="widthCard">
                <div class="nn col-lg-6 col-md-12 " style="width: 220px;">
                    <div class="border border-secondary-subtle shadow-sm">
                        <div class="card mx-auto my-4" style="width: 180px;">
                            <img src="${book.simple_thumb}" class="card-img-top" alt="${book.title}">
                        </div>
                    </div>
                    <div class="card-body text-center mx-auto my-4" style="border: none; height: 100px;">
                        <h5 class="card-text colorTitleCard">${book.author}.</h5>
                        <p class="card-title mx-auto">${book.title}</p>
                    </div>
                </div>
            </div>
        </div>
       `  ;
    });
}
// fetch("https://wolnelektury.pl/api/books/studnia-i-wahadlo/")
fetch("https://wolnelektury.pl/api/books/studnia-i-wahadlo/")

  .then(res => res.json())
  .then(res => Memo(res))
  .catch(error => console.error('Error:', error));

let Divv = document.getElementById("Card-onebookInfo");

function Memo(book) {
  console.log(book);
  Divv.innerHTML = `
    <div class="mb-3 mx-auto text-align-center pt-5 py-5 px-4" style="max-width: 75%;">
      <div class="row">
        <div class="col-12 col-lg-6 d-flex justify-content-center ">
          <img src="${book.cover}" class="img-fluid rounded-start" alt="${book.title}" style="max-width: 100%; height: auto;">
        </div>
        <div class="col-12 col-md-10 col-lg-6 text-align-center mx-auto">
          <div class="card-body px-lg-4 my-5 text-align-center mx-auto">
            <h1 class="card-title fst-italic py-2 ps-md-5 ">${book.title}</h1>
            <div class="w-25 h-2 border border-black mb-2 mb-lg-0 col-lg-4 ms-md-5"></div>
            <p class="card-text ps-md-5">${book.authors[0].name}</p>
<div class="ms-md-5"> <p class="card-text  ">${book.fragment_data.html}</p>
</div>
            <p class="card-text pb-5"><small class="text-body-secondary ps-md-5"></small></p>
<button class="btn btn-custom my-5 ps-md-5 ms-3 mt-5">View All Products →</button>
          </div>
        </div>
      </div>
    </div>`
  ;
}



fetch("https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/")
    .then(res => res.json())
    .then(res => m(res));

let mm = document.getElementById("Card1");

function m(res) {
    console.log(res);
    // جلب آخر أربعة كتب
    let lastFourBooks = res.slice(0,8);
    lastFourBooks.map(book => {
        console.log(res);

        mm.innerHTML +=  `
        <div class="p-2 g-col-6 mx-5 ">
            <div class="widthCard ">
                <div class="nn col-lg-6 col-md-12 " style="width: 220px;">
                    <div class="border border-secondary-subtle nn  shadow-sm">
                        <div class="card mx-auto my-4" style="width: 180px;">
                            <img src="${book.simple_thumb}" class="card-img-top" alt="${book.title}">
                        </div>
                    </div>
                    <div class="card-body text-center mx-auto my-4" style="border: none; height: 100px;">
                        <h5 class="card-text colorTitleCard">${book.author}.</h5>
                        <p class="card-title mx-auto">${book.title}</p>
                    </div>
                </div>
            </div>
        </div>
       `  ;
    });
}
