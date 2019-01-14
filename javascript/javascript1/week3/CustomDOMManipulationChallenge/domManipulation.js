//Array of ten books
let books = [{
  id: 111,
  title: 'In_search_of_lost_time',
  language: 'English',
  author: 'Marcel Proust'
},
{
  id: 112,
  title: 'the_laws_of_human_nature',
  language: 'English',
  author: 'Robert Greene'
},
{
  id: 113,
  title: 'rewire',
  language: 'English',
  author: 'Marc Pye'
},
{
  id: 114,
  title: 'emotional_intelligence',
  language: 'English',
  author: 'Daniel Goleman'
},
{
  id: 114,
  title: 'sour_dough',
  language: 'English',
  author: 'Robin Sloan'
},
{
  id: 115,
  title: 'zawiah',
  language: 'Urdu',
  author: 'Isfaq Ahmad'
},
{
  id: 116,
  title: 'becoming_myself',
  language: 'English',
  author: 'Irvin D. Yalom'
},
{
  id: 117,
  title: 'body_bears_the_burden',
  language: 'English',
  author: 'Robert C Scaer'
},
{
  id: 118,
  title: 'a_smarter_way_to_learn_javascript',
  language: 'English',
  author: 'Mark Mayers'
},
{
  id: 119,
  title: 'mind_in_the_making',
  language: 'English',
  author: 'Ellen Galinsky'
}
];


function creatingList() {
  //making heading h1 for topic name:
  let topicHeading = document.createElement('h2');
  topicHeading.innerHTML = "Books I Read";
  document.body.appendChild(topicHeading);

  //creating ordered list of books.
  let newList = document.createElement('ol');

  //creating list items in <ol>
  for (let i = 0; i < books.length; i++) {
    let listItem = document.createElement('li');
    newList.appendChild(listItem);

    //using book titles as headings of every list item
    let heading = document.createElement('h2');
    heading.innerHTML = books[i].title;
    listItem.appendChild(heading);

    //making another sub list to show other info about books
    let innerUnorderedList = document.createElement('ul');
    //list items for sub list
    var keys = Object.keys(books);
    for (let j = 1; j < Object.keys(books[i]).length; j++) {
      let innerListItem = document.createElement('li');
      switch (j) {
        case 1:
          innerListItem.innerHTML = books[i].id;
          break;
        case 2:
          innerListItem.innerHTML = books[i].language;
          break;
        case 3:
          innerListItem.innerHTML = books[i].author;
          break;
      }

      innerUnorderedList.appendChild(innerListItem);
    }
    listItem.appendChild(innerUnorderedList);


  }
  document.body.appendChild(newList);
};



creatingList();