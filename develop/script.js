// var a = "hello";
// console.log(a);
// This Works!
// var requestURL = 'https://api.trace.moe';
// var requestURL = 'https://api.jikan.moe/v3';
var requestURL = 'https://api.giphy.com/v1/gifs/search?api_key=n2y3Fcb9H0LUrjbN7SJui121LbMZIq8g&q=&limit=25&offset=0&rating=pg-13&lang=en';

function getApi(requestURL) {
    fetch(requestURL)
        .then(function (response) {
            console.log(response);
        });
}
getApi(requestURL);



// Here we define our query as a multi-line string
// Storing it in a separate .graphql/.gql file is also possible

// var query = `
// query ($id: Int) { # Define which variables will be used in the query (id)
//   Media (id: $id, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
//     id
//     title {
//       romaji
//       english
//       native
//     }
//   }
// }
// `;

// // Define our query variables and values that will be used in the query request
// var variables = {
//     id: 15125
// };

// // Define the config we'll need for our Api request
// var url = 'https://graphql.anilist.co',
//     options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//         },
//         body: JSON.stringify({
//             query: query,
//             variables: variables
//         })
//     };

// // Make the HTTP Api request
// fetch(url, options).then(handleResponse)
//                    .then(handleData)
//                    .catch(handleError);

// function handleResponse(response) {
//     return response.json().then(function (json) {
//         return response.ok ? json : Promise.reject(json);
//     });
// }

// function handleData(data) {
//     console.log(data);
// }

// function handleError(error) {
//     alert('Error, check console');
//     console.error(error);
// }