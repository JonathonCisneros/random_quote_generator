/******************************************
    A Random Quote Generator
    By Jonathon Cisneros
******************************************/

/***
    Array containing quote objects
***/

var quotes = [
    {
        quote : 'Life is like a box a chocolate, you never know what your going to get.',
        source : 'Forrest Gump',
        citation : 'Forrest Gump',
        year : '1994',
        tags: 'movies'
    },
    {
        quote : 'Be the change that you wish to see in the world.',
        source : 'Mahatma Gandhi',
        tags: 'change, inspirational'
    },
    {
        quote : "I have not failed. I've just found 10,000 ways that won't work.",
        source : 'Thomas Edison',
        tags: 'ways, motivation'
    },
    {
        quote : 'No matter where life takes me, find me with a smile.',
        source : 'Mac Miller',
        citation : 'Best Day Ever',
        year : '2011',
        tags: 'music, happiness'
    },
    {
        quote : 'Anyone who has never made a mistake has never tried anything new.',
        source : 'Albert Eintstein',
        tags: 'innovation, change'
    },
    {
        quote : 'Learning never exhausts the mind.',
        source : 'Leonardo da Vinci',
        tags: 'inspiration, motivation'
    },
    {
        quote : 'Lord, make me an instrument of thy peace. Where there is hatred, let me sow love.',
        source : 'Francis of Assisi',
        tags: 'religious, faith'
    }
];

/***
    getRandomQuote() creates random number
    returns random number
***/

function getRandomQuote () {
    var random = Math.floor(Math.random() * quotes.length);
    return quotes[random];
}

/***
    randomColor() creates random color
    returns random color
***/

function randomColor () {
    var hexadecimals = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += hexadecimals[Math.floor(Math.random() * 16)];
    }
    return color;
}

/***
    printQuote() prints out random quote with source AND
    citation and year, if applicable
    Changes color of body background
***/

function printQuote () {
    var quoteObj = getRandomQuote();
    var html = '';
    html += '<p class="quote">' + quoteObj.quote + '</p>';
    html += '<p class="source">' + quoteObj.source;
    if (quoteObj.citation)
        html += '<span class="citation">' + quoteObj.citation + '</span>';
    if (quoteObj.year)
        html += '<span class="year">' + quoteObj.year + '</span>';
    html += '</p>';
    html += '<p>tags: ' + quoteObj.tags + '</p>';
    document.getElementById('quote-box').innerHTML = html;
    document.querySelector('body').style.backgroundColor = randomColor(); // Sets background color of the body to random color
}


/***
    Creates event listener on "Show another quote" button
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

/***
    Prints random quote every 5000ms
***/
window.setInterval(printQuote, 5000);
