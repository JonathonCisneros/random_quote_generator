/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
    Array containing quote objects
***/

var quotes = [
    {
        quote : 'Life is like a box a chocolate, you never know what your going to get.',
        source : 'Forrest Gump',
        citation : 'Forrest Gump',
        year : '1994'
    },
    {
        quote : 'Be the change that you wish to see in the world.',
        source : 'Mahatma Gandhi'
    },
    {
        quote : "I have not failed. I've just found 10,000 ways that won't work.",
        source : 'Thomas Edison'
    },
    {
        quote : 'No matter where life takes me, find me with a smile.',
        source : 'Mac Miller',
        citation : 'Best Day Ever',
        year : '2011'
    },
    {
        quote : 'Anyone who has never made a mistake has never tried anything new.',
        source : 'Albert Eintstein'
    },
    {
        quote : 'Learning never exhausts the mind.',
        source : 'Leonardo da Vinci'
    },
    {
        quote : 'Lord, make me an instrument of thy peace. Where there is hatred, let me sow love.',
        source : 'Francis of Assisi'
    }
];

/***
    getRandomQuote() creates random number
***/

function getRandomQuote () {
    var random = Math.floor(Math.random() * quotes.length);
    return quotes[random];
}

/***
    printQuote() prints out random quote with source AND
    citation and year, if applicable
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
    document.getElementById('quote-box').innerHTML = html;
}

/***
    Creates event listener on "Show another quote" button
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
