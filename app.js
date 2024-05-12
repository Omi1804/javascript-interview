// here we get to know about how we fetch apis before the time of fetch comes in picture
//i.e., through AJAX requests i.e., asynchronous js and xml requests

const heading = document.querySelector("#heading");

const requrestURL = "https://api.github.com/users/omi18";

const xhr = new XMLHttpRequest(); //creating xml object first
xhr.open("GET", requrestURL); //this open needs to be called for the data

//now for tracking all the statechanges events we use
xhr.onreadystatechange = function () {
  console.log(xhr.readyState); //this tell at which state at the moment we are in
  //each state has its own meaning
  /*Meanign of each state 

  0	UNSENT	Client has been created. open() not called yet.
  1	OPENED	open() has been called.
  2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
  3	LOADING	Downloading; responseText holds partial data.
  4	DONE

*/

  // we can here set the request when its all done i.e., readystate is in 4
  if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText); //this holds the response data from the api comes in the form of strings
    console.log(data.avatar_url);
    const div = document.createElement("div");
    const img = document.createElement("img");
    div.appendChild(img);
    img.setAttribute("src", data.avatar_url);
    img.setAttribute("width", "100px");
    img.setAttribute("height", "100px");

    heading.appendChild(div);
  }
};

xhr.send(); // this send request has to be there to call open method with all the necessary parameters
