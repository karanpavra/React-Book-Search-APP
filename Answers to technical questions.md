1.	How long did you spend on the coding assignment?
#Ans. I spend around 5-6 hours in coding for this assignment.

a.	What would you add to your solution if you had more time?
#Ans. If I had a more time than I will add more search option for books.

b.	If you didn't spend much time on the coding test, then use this as an opportunity to explain what you would add.
#Ans. I will make more attractive using CSS, Bootstrap and other UI library. I will also make more interactive, increase performance and accessibility.

2.	What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
#ans. In my current version, there is a feature which sort books alphabetically by their title or by sort by date. Here is a sorting functions which I use in my code.

```js
// Sorting Functions

const sortAlpha = () => {
  const sortedBooks = [...books].sort((a, b) => a.title.localeCompare(b.title));
  setBooks(sortedBooks);
}

const sortDate = () => {
  const sortedBooksDate = [...books].sort((a, b) => a.first_publish_year - b.first_publish_year);
  setBooks(sortedBooksDate);
}

```
3.	How would you track down a performance issue in production? Have you ever had to do this?
#Ans. The easy way to track down a performance issue in production by checking CPU and memory usage. There are other factor like poorly written code, slow servers or loading time affect a performance too.

4.	How would you improve the API that you just used?
#Ans. I use openlibrary API in this program. I feel like it is little bit cluster and for better use it need a simplicity because I need to fetch cover image from different web address than other information like book title, year, author name.

5.	Please describe yourself using correctly formatted JSON.
#Ans.
```json
{
  "firstName": "Karan",
  "lastName": "Pavra",
  "age": 25,
  "live-in": "Canada",
  "interests": ["Programming", "Travelling"]
}

```
