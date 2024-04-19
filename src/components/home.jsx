import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const logout = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/powder')
  }
  const user = useSelector((state) => state.user.user);

  return (
    <div>
      <div style={{backgroundColor:'pink',color:'indigo',height:'30px',padding:'40px',  justifyContent:'space-between',display:'flex'}}>
        <h1 style={{alignContent:'center'}}>WASHING HUB</h1>
      <div style={{display:'flex',justifyContent:'flex-end',gap:'50px',width:'100px',height:'40px'}}>
           <button style={{borderColor:'lightcoral',borderRadius:'30px',fontSize:'20px'}}> Home</button>
           <button style={{borderColor:'lightcoral', borderRadius:'30px',fontSize:'20px'}}> Login </button>
           <button style={{borderColor:'lightcoral', borderRadius:'30px',fontSize:'20px'}}>brands</button>
           <button style={{borderColor:'lightcoral', borderRadius:'30px',fontSize:'20px'}}>agents </button>
           

           </div>

      </div>
      

      <center>
    <div style={{backgroundImage:`url(/homeimage.jpg)`,backgroundSize:'cover',height:'700px',width:'700',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'10px'}}>
      <div style={{alignItems:'center',display:'flex',justifyContent:"center",color:'beige',flexDirection:'row',width:'500px',height:'200px',flexDirection:"column"}}>
      <h1 style={{fontSize:'60px',color:'pink'}}>Cleaing products </h1>
      
    </div>
    </div>
      </center>
    <div style={{justifyContent:'space-around',display:'flex',backgroundColor:'pink',padding:'30px'}}>
    <a href='#' onClick={logout}>
        <img src='powder1.jpg' style={{borderRadius:'20px', height:'200px',width:'300px'}}></img>
        <h4>Powder</h4>
      </a>
      <a href='#'>
        
        <img src='liquid.jpg' style={{borderRadius:'20px', height:'200px',width:'300px'}}></img>
        <h4>Lquid</h4>
      </a>
      <a href='#' >
        
        <img src='barshoap.jpg' style={{borderRadius:'20px',height:'200px',width:'300px'}}></img>
        <h4>Barshoap</h4>
      </a>
      
     
      
      

    </div>
    </div>
  );
};

export default Home;
