// import './App.css';
// // import elephant from "./images/elephant.jpeg";

// const imageData = ()=>{
//   let data = [
//     {
//       id:1,
//       img:elephant
//     },
//     {
//       id:2,
//       img:elephant
//     },
//     {
//       id:3,
//       img:elephant
//     },
//     {
//       id:4,
//       img:elephant
//     }
//   ]
//   return data;
// }

// function App(props) {
//   const {imageprop}=props;
//   return(
//     <div>
//       {
//         imageprop.map((element)=>{
//           return <img src={element.img}/>
//         })
//       }
//     </div>
//     )}
    

// export default App;

import './App.css'
 
function App(props) {
  console.log(props)
  const {imageprop} = props;
  console.log(imageprop)

  return (
    <div>

        {
          imageprop.map((element)=>{
            return <img src={element.img} />

          })
        }
    </div>
  )
}

export default App
