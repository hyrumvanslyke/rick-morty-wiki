import React from "react";
import styles from './Cards.module.css'




const Cards = ({ results }) => {
  let display;

  if (results) {
    display = results.map((x) => {
      let { id, name, image, location, status } = x;

      return (
        <div key={id} className="card">
          <div className={styles.cards}>
            <img src={image} alt="" className={`${styles.img} img-fluid`} />
            <div className={`${styles.content}`}>
              <div className="fs-5 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6">Last Location</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>
          </div>
          {(() =>{
            if(status === "Dead"){
                return(<div className= {`${styles.badge} position-absolute badge bg-danger`} >{status}</div>) 
            }else if (status === "Alive"){
                return(<div className= {`${styles.badge} position-absolute badge bg-success`} >{status}</div>)
            }else{
                return(
                    <div className= {`${styles.badge} position-absolute badge bg-secondary`} >{status}</div>
                )
            }
          })()}
        </div>
      );
    });
  } else {
    display = "No Characters Found With That Name😥";
  }

  return display;
};

export default Cards