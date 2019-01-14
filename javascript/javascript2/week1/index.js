//Array of ten books
const books = [
    'In_search_of_lost_time',
    'the_laws_of_human_nature',
    'rewire',
    'emotional_intelligence',
    'sour_dough',
    'zawiah',
    'becoming_myself',
    'body_bears_the_burden',
    'a_smarter_way_to_learn_javascript',
    'mind_in_the_making'
]

const booksInfoObject = {
    'In_search_of_lost_time': {
        title: 'In Search of Lost Time',
        language: 'English',
        author: 'Marcel Proust'
    },
    'the_laws_of_human_nature': {
        title: 'The Laws of Human Nature',
        language: 'English',
        author: 'Robert Greene'
    },
    'rewire': {
        title: 'Rewire',
        language: 'English',
        author: 'Marc Pye'
    },
    'emotional_intelligence': {
        title: 'Emotional Intelligence',
        language: 'English',
        author: 'Daniel Goleman'
    },
    'sour_dough': {
        title: 'Sour Dough',
        language: 'English',
        author: 'Robin Sloan'
    },
    'zawiah': {
        title: 'Zawiah',
        language: 'Urdu',
        author: 'Isfaq Ahmad'
    },
    'becoming_myself': {
        title: 'Becoming Myself',
        language: 'English',
        author: 'Irvin D. Yalom'
    },

    'body_bears_the_burden': {
        title: 'Body Bears The Burden',
        language: 'English',
        author: 'Robert C Scaer'
    },

    'a_smarter_way_to_learn_javascript': {
        title: 'A Smarter Way to Learn Javascript',
        language: 'English',
        author: 'Mark Mayers'
    },

    'mind_in_the_making': {
        title: 'Mind in the MAking',
        language: 'English',
        author: 'Ellen Galinsky'
    }
};


function creatingList() {
    //creating list of books.
    let newList = document.createElement('ul');

    //creating list items in <ol>
    for (let i = 0; i < books.length; i++) {
        let listItem = document.createElement('li');
        listItem.setAttribute( 'class', 'bookCard');
        newList.appendChild(listItem);

        //using book titles as headings of every list item
        /*let heading = document.createElement('h2');
        heading.innerHTML = books[i].id;
        listItem.appendChild(heading);
        */

        //making another sub list to show other info about books
        let innerUnorderedList = document.createElement('ul');
        innerUnorderedList.setAttribute('class', 'booksInfoList');

        //list items for sub list
        var keys = Object.keys(booksInfoObject[books[i]]);
        console.log(keys)
        for (let j = 0; j < Object.keys(booksInfoObject[books[i]]).length; j++) {
            let innerListItem = document.createElement('li');
            switch (j) {
                case 0:
                    innerListItem.innerHTML = booksInfoObject[books[i]].title;
                    break;
                case 1:
                    innerListItem.innerHTML = booksInfoObject[books[i]].author;
                    break;
                case 2:
                    innerListItem.innerHTML = booksInfoObject[books[i]].language;
                    break;
            }

            innerUnorderedList.appendChild(innerListItem);
        }
        listItem.appendChild(innerUnorderedList);


    }
    document.getElementById('main').appendChild(newList);
};



creatingList();