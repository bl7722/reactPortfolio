import React from "react";
import "./style.css"
import Day from "../Assets/img/dayPlannerDesktopView.jpg"
import Weather from "../Assets/img/weatherDashboard.jpg"
import Stream from "../Assets/img/StreamOn.png"
import Tracker from "../Assets/img/empTracker.png"
import  PBud from "../Assets/img/PBud.png"
import  Fun from "../Assets/img/Fun.png"

function Card(){
return(
<ul class= "ulList">
   <li>
      <div>
         <div>
            <a target = "_blank" href="https://bl7722.github.io/dayPlannerApp/"><img class= "img" src={Day} alt="dayPlanner img"></img></a>
            <div >
               <h5 >Day Scheduler</h5>
               <p >This app allows the user to schedule and organize their time throughout the workday</p>
               <p>Link to App: <a target = "_blank" href="https://bl7722.github.io/dayPlannerApp/">https://bl7722.github.io/dayPlannerApp/</a></p>
               <p>Link to Github Repo: <a target = "_blank" href="https://github.com/bl7722/dayPlannerApp">https://github.com/bl7722/dayPlannerApp</a></p>
            </div>
         </div>
      </div>
   </li>
   <li>
      <div>
         <div>
            <a target = "_blank" href="https://bl7722.github.io/weatherDashboardApp/"><img class= "img" src={Weather} alt="weatherDashboard img"></img></a>
            <div>
               <h5 >Weather Dashboard</h5>
               <p >This app uses a weather API that allows the user to search weather conditions in any given city</p>
               <p>Link to App: <a target = "_blank" href="https://bl7722.github.io/weatherDashboardApp/">https://bl7722.github.io/weatherDashboardApp/</a></p>
               <p>Link to Github Repo: <a target = "_blank" href="https://github.com/bl7722/weatherDashboardApp">https://github.com/bl7722/weatherDashboardApp</a></p>
            </div>
         </div>
      </div>
   </li>
   <li>
      <div>
         <div>
            <a target = "_blank" href="https://tuhituhi18.github.io/project1_movie/"><img class= "img" src={Stream} alt="StreamOn img"></img></a>
            <div>
               <h5 >StreamOn</h5>
               <p >This app displays available streaming platforms for a specific series or movie.</p>
               <p>Link to App: <a target = "_blank" href="https://tuhituhi18.github.io/project1_movie/">https://tuhituhi18.github.io/project1_movie/</a></p>
               <p>Link to Github Repo: <a target = "_blank" href="https://github.com/tuhituhi18/project1_movie">https://github.com/tuhituhi18/project1_movie</a></p>
            </div>
         </div>
      </div>
   </li>
   <li>
      <div>
         <div>
            <a target = "_blank" href="https://drive.google.com/file/d/1l901nk1RLeybMEEnRS0NlZu0WZe6VXp-/view"><img class= "img" src={Tracker} alt="empTracker img"></img></a>
            <div>
               <h5 >Employee Tracker</h5>
               <p>This app allows users to organize, view, and manage the departments, roles, and employees in a company.</p>
               <p>Link to Example Video: <a target = "_blank" href="https://drive.google.com/file/d/1l901nk1RLeybMEEnRS0NlZu0WZe6VXp-/view">View Here</a></p>
               <p>Link to Github Repo: <a target = "_blank" href="https://github.com/bl7722/employeeTracker">https://github.com/bl7722/employeeTracker</a></p>
            </div>
         </div>
      </div>
   </li>
   <li>
      <div>
         <div>
            <a target = "_blank" href="https://flannel-parliament-32180.herokuapp.com/"><img class= "img" src={PBud} alt=" pBud img"></img></a>
            <div>
               <h5>Progressive Budget</h5>
               <p> In this app, the user is able to add expenses and deposits to their budget on or offline. The app populates the total when brought back online.</p>
               <p>Link to App: <a target = "_blank" href="https://flannel-parliament-32180.herokuapp.com/">https://flannel-parliament-32180.herokuapp.com/</a></p>
               <p>Link to Github Repo: <a target = "_blank" href="https://github.com/bl7722/progressiveBudget">https://github.com/bl7722/progressiveBudget</a></p>
            </div>
         </div>
      </div>
   </li>
   <li>
      <div>
         <div>
            <a target = "_blank" href="https://agile-thicket-05064.herokuapp.com/"><img class= "img" src={Fun} alt="  img"></img></a>
            <div>
               <h5>FunActiv</h5>
               <p>This app visually tracks your exercise progress and nutritional intake for a healthier lifestyle.</p>
               <p>Link to App: <a target = "_blank" href="https://agile-thicket-05064.herokuapp.com/">https://agile-thicket-05064.herokuapp.com/</a></p>
               <p>Link to Github Repo: <a target = "_blank" href="https://github.com/lewismcruz/Project2">https://github.com/lewismcruz/Project2</a></p>
            </div>
         </div>
      </div>
   </li>
</ul>
);
}
export default Card;