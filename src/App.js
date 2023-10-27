import ResponsiveDrawer from "./Components/ResponsiveDrawer"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export const data = [
  {
    name: "Abi",
    lastmsg: "okay!",
    date: "22/01/2021",
    img: "https://cdn5.vectorstock.com/i/1000x1000/23/49/new-man-avatar-icon-flat-vector-19152349.jpg",
    sent:["Hi Abi!","merwmmer"],
    received:"Hi Anu!"
  },
  {
    name: "Abhi Chetan",
    lastmsg: "heloo?",
    date: "03/07/2021",
    img: "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
    sent:["Hi Abhi Cheta!",],
    received:"Hi Anu!"
  },
  {
    name: "Aleena",
    lastmsg: "<3",
    date: "06/12/2021",
    img: "https://cdn-icons-png.flaticon.com/512/194/194938.png",
    sent:["Hi Aluu!",],
    received:"Hi Anu!"
  },
  {
    name: "Elchu",
    lastmsg: "tc!",
    date: "22/07/2021",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQuLB8WMVX3qR3A70Ho96IrQ32FrhnYLhfDg&usqp=CAU",
    sent:["Hi Elchuu!",],
    received:"Hi Anu!"
  },
  {
    name: "Sujin",
    lastmsg: "hehe",
    date: "22/06/2021",
    img: "https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png",
    sent:["Hi Suji!",],
    received:"Hi Anu!"
  },
];
function App() {
  return (
    <>
    <Router>
      <ResponsiveDrawer/>
    </Router>
    </>
  );
}

export default App;
