import React from "react";

function Card(props) {
  // console.log(props.item[0]);

  if (props.item)
    return (
      <div className=" m-5 p-2 gap-6 pt-[20px] flex justify-center content-center w-[600px] h-[300px] rounded-lg  bg-slate-900">
        <div className="flex flex-col justify-center">
          <img
            className=" bg-cover rounded-full w-[200px] h-[200px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_pdK5B5-RBx_ONDXnM5lrOVEV9AbkQVOnZg&s"
          />
          <button className=" mt-5">Ruab * 3</button>
        </div>
        <div className=" flex flex-col justify-center">
          <h1>Name : {props.item.name}</h1>
          <p>{props.item.description}</p>
        </div>
      </div>
    );
  else if (props.name && props.description)
    return (
      <div className=" m-5 p-2 gap-6 pt-[20px] flex justify-center content-center w-[600px] h-[300px] rounded-lg  bg-slate-900">
        <div className="flex flex-col justify-center">
          <img
            className=" bg-cover rounded-full w-[200px] h-[200px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_pdK5B5-RBx_ONDXnM5lrOVEV9AbkQVOnZg&s"
          />
          <button className=" mt-5">Ruab * 3</button>
        </div>
        <div className=" flex flex-col justify-center">
          <h1>Name : {props.name}</h1>
          <p>{props.description}</p>
        </div>
      </div>
    );
}

export default Card;
