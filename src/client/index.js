import { handler } from "./js/app";

//import style files
import './style/resets.scss'
import './style/base.scss'
import './style/footer.scss'
import './style/form.scss'
import './style/header.scss'

//Event listener for the element with the id: search
document.getElementById("search").addEventListener("click", function (event) {
  event.preventDefault();
  console.log('search clicked')
  handler();
});

export {
  //clicked
  handler,
};
