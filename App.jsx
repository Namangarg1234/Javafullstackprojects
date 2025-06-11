// import './App.css'
// function Properties(props)
// {
//   return(
//     <>
//     <img src={props.image} className='images'></img>
//     <p>{props.name},Rs.{props.price}</p>
//     </>
//   )
// }
// function App(){
//   return(
//     <>
//     <h1>MENU</h1>
//     <p className='items'>
//     <Properties image='https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/corn.f8baa08ad7f607f1de30f96bb9245b50.1.jpg' name="Corn pizza" price={59}/>
//     <Properties name="Panner pizza" price={59} image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQxMPF65Og_cTiP4Kqr2-2sX0hD0cw1HWV1Q&s'/>
//     <Properties name="Onion pizza" price={59} image='https://cdn.uengage.io/uploads/5/image-191979-1715686806.png'/>
//     <Properties name="Chesse Volcano pizza" price={199} image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR71fvIm1F5XIk17VttpH7MVXSBJpZBE5l9LA&s'/>
//     </p>
//     </>
//   )
// }

// function App() {
//   let handler = (e) => {
//     e.target.textContent = e.target.textContent === "Don't click me!!"
//       ? "Click me!!"
//       : "Don't click me!!";
//   };

//   return (
//     <>
//       <button onClick={(e) => handler(e)}>Click me!!</button>
//     </>
//   );
// }

//useState
// import './App.css'
// import { useState } from "react";

// function App(){
//   let count=0;
//   let date=new Date();
//   let [cnt,setcnt]=useState(0);
//   date.setDate(date.getDate()+cnt);
//   return(
//     <>
//     <button onClick={()=>{
//       console.log("Hello",count++)
//       setcnt(cnt+1)
//     }}>+</button>
//     <p>Count{cnt}</p>
//     <button onClick={()=>{
//       console.log("Hello",count--)
//       setcnt(cnt-1)
//     }}>-</button>
//     <div>
//       <p>{date.toDateString()}</p>
//     </div>
//       </>
//   )
// }

//List rendering
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState(null); // track selected button index

  return (
    <>
      {[1, 2, 3, 4, 5].map((ele, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setSelected(idx)}
            style={{
              backgroundColor: selected === idx ? "red" : "white",
              color: selected === idx ? "white" : "black",
              margin: "5px",
              padding: "10px 20px",
              border: "1px solid gray",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            {ele}
          </button>
        );
      })}
    </>
  );
}

export default App;
