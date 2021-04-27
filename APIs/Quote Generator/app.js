const newQuoteButton = document.querySelector('#js-new-quote');
const spinner = document.querySelector('#js-spinner')
const twitterButton = document.querySelector('#js-tweet');

newQuoteButton.addEventListener('click', getQuote);

const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

// pull from API and check for errors
async function getQuote() {
    // remove 'hidden' class on spinner
    spinner.classList.remove("hidden");
    // disable the quote button while spinner spins
    newQuoteButton.disabled = true;

    // the `try` block executes as usual
    // If an exception is thrown, statements defined in `catch` are executed
    try {
        const response = await fetch(endpoint);
        // if response is not 200 OK
        if (!response.ok) {
            throw Error(response.statusText);
        }

        const json = await response.json();
        // quotes are stored in "message" property
        displayQuote(json.message);
        setTweetButton(json.message);
    } catch {
        alert('Failed to fetch new quote');
    } finally {
        // `finally` executes whether or not an operation succeeds or fails
        // enable quote button
        newQuoteButton.disabled = false;
        // add 'hidden' class back
        spinner.classList.add("hidden");
    }
}

// Display quote on page
function displayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;
}

function setTweetButton(quote) {
    twitterButton.setAttribute('href', `https://twitter.com/share?text=${quote} - Donald Trump`);
}

// invoke getQuote on page load so it is not blank and so Tweet button works right away
getQuote();
