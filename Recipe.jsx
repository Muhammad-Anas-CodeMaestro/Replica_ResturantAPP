import React, { useEffect, useState } from "react";
import ForDetails from "./forDetails";

function Recipe({ data }) {
  const [page, changePage] = useState(null);

  const pageChangeForDetail = (value) => {
    changePage(value);
  };
  return (
    <>
      {data?.map((value, index) => {
        return (
          <div key={value?.id} className="card" >
            <img src={value?.image} alt="" />
            <h2>{value?.name}</h2>
            <h4>{'$'}{value?.cookTimeMinutes}</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nisi itaque aspernatur, perferendis est vel, quis nam iusto at ipsa atque explicabo, dolorem architecto quas.</p>
            <button className="add-cart-button" onClick={()=>pageChangeForDetail(value)}>More Details</button>
          </div>
        );
      })}
      {page && <ForDetails onDetail={page}/>}
    </>
  );
}

export default Recipe;
