let url = fetch("https://kontests.net/api/v1/all")

url.then((response) => {
    return response.json()
}).then((response) => {
    console.log(response);

    for (const item in response) {
        console.log(response[item].name);
        document.getElementById('card').innerHTML += `<div class="card text-bg-primary mt-4" style="width: 18rem;"> 
        <img src="https://apod.nasa.gov/apod/image/2003/BhShredder_NASA_3482.jpg" class="card-img-top" alt="...">
        <div class="card-body" bg-danger>
          <h5 class="card-title">${response[item].name}</h5>
          <p class="card-text" style = "font-size: 13px">Start Time - ${response[item].start_time}</p>
          <p class="card-text" style = "font-size: 13px">Start Time - ${response[item].start_time}</p>
          <p class="card-text" style = "font-size: 13px">Status - ${response[item].status}</p>
          <p class="card-text" style = "font-size: 13px">Site - ${response[item].site}</p>
          <div style="text-align : center;">
          <a href="${response[item].url}" class="btn btn-outline-danger" target = "main()">Visit Site</a>
          </div>
        </div>
      </div>` // Storing element again and again
    }

})

