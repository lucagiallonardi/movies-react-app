const API = 'https://api.themoviedb.org/3'

function get(path){
    return fetch(API + path, {
          headers: {
            Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YzViNzU0ZjJiOTIyNmNhNzFiYTQxOGMxMWVlYjE1NiIsInN1YiI6IjYyODUyYTY4ZjEwYTFhMDA5ZGFmOTE2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mB4_vEdPuLzaUxmeROx-TPztppB954BuEPXp5QjD4MA',
            'Content-Type': 'application/json;charset=utf-8',
        },
        })
        .then((result) => result.json())
}

export default get;