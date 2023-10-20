import {  useState } from "react";
import {Link } from "react-router-dom"
import styled from "styled-components";

 const Navbar = () =>{
	
	const [navClass, setNavClass] = useState(false)
	const showNavbar = () => {
		setNavClass(!navClass)		
	};

	
	return <HEADER>
    <header 

	>


			
			<Link className="logoText" to="/">
				 LOGO
			 </Link>


			
			<nav className= {navClass ? "responsive_nav" : "false"} >
				 
        
             <Link to="#" >Home</Link>
             
             
                 <Link to="#" >About us</Link>
             
             
                 <Link to="#" >Our Blog</Link>
             
             
                 <Link to="#" >Support</Link>
             
             
                 <Link to="#" >Affiliate</Link>
             
             
                 {/* <Link to="/shop" >SHOP</Link> */}
				 <select className="programs" >
					<option value="">Programs</option>
					<option value="">Programs01</option>
					<option value="">Programs02</option>
				 </select>
        
                
				<button className="nav-btn nav-close-btn" 
          onClick={showNavbar}>
						
                    close
				</button>
				
				
			</nav>
			<div className= {"secNav"} >
            {/* <div className="navIcons">
				
					<Link to="/cart">
					<Icon as={BsCart2}/>
                    
					</Link>
                    
					
                </div> */}
				<button className="login-btn">Login</button>
				<button className="signup-btn">Sign-up</button>
			<button onClick={showNavbar}
				className="nav-btn"
				 >
				
				
                open
			</button>
			</div>
      </header>
		</HEADER>
	
}


const HEADER = styled.div`
  *{
	padding: 0;
	margin: 0;
	/* margin-bottom: 80px; */
	/* padding-bottom: 80px; */
	/* width: 1920px; */
/* height: 100px; */
/* gap: 330px */

	/* width: 100%; */
	  /* box-sizing: border-box; */
    /* outline: 1px solid limegreen !important; */
  }
.login-btn{
	background-color: black;
	border: 0;
	color: white;
	padding: 5px 10px;

}
.programs{
	background-color: black;
	color:  white;
	border: 0;
}

.signup-btn{
	background: linear-gradient(90deg, #7b26f2 0%, #c126f2 100%);
	color: white;
	padding: 10px 20px;
	border: 0;
	border-radius: 10px;
}
header {
	/* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 70px;
	padding: 0 10px;
	/* margin-bottom: 20px; */
	/* margin-bottom: 20px; */
	/* padding-bottom:20px; */
	background-color: black;
	/* background-color: white */
	color: white;
	font-weight: 200;
	font-size: small;
	/* position:fixed; */
	z-index: 100;
	width: 100%;
}

nav a {
	margin: 0 1rem;
	color: white;
	/* font-weight: 600; */

	text-decoration: none;
}

nav a:hover {
	color: black;
	scale: 1.1;
	transition: 500ms;
	text-decoration: solid underline   #283593;

}

header .nav-btn {
	padding: 5px 10px;
	cursor: pointer;
	background: transparent;
	border: none;
	outline: none;
	color: white;
	visibility: hidden;
	opacity: 0;
	font-size: 20px;
}

header div,
nav {
	display: flex;
    width: fit-content;
    /* margin: auto; */
	align-items: center;
    /* justify-content: center; */
}
nav{
    margin: auto;
}

.blackDot{
    background-color: rgb(101, 101, 101);
    height: 5px;
    width: 5px;
    border-radius: 50%;
}
.logoText{
	font-size: x-large;
	font-weight: 800;
	text-decoration: none;
	color: white;
}
.lodo{
    font-size: larger;
    width: fit-content;
}
.navIcons{
    display: flex;
    gap: 20px;
    width: fit-content;
    font-size: 20px;
}
.logo{
	height: 40px;
	border-radius: 10px;
	/* border: 1px solid blue; */
	/* padding: -5px; */
}

.beforeSearch{
	border-radius: 10px;
	width: 0px;
	font-size: small;
	padding:  10px;
	visibility: hidden;
	transition: 0.4s;
}
.navSearch{
	visibility: visible;
	width: 200px;
	transition: 0.5s;
}

@media (max-width: 480px) {
	.logo{
		height: 25px;
		margin-right: 40px;
	}
	
	header .nav-btn {
		visibility: visible;
		opacity: 1;
	}

	header nav {
		position: fixed;
		top: -110vh;
		left: 0;
		padding:20px;
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		z-index: 100;
		justify-content: center;
		gap: 1.5rem;
		background-color: black;
        color: white;
		transition: 1s;
	}

	header .responsive_nav {
		transform: translateY(110vh);
	}

	nav .nav-close-btn {
		position: absolute;
		top: 2rem;
		right: 2rem;
        color: white;
        /* background-color: aliceblue; */
	}

	nav a {
        color: white;
		font-size: 1.5rem;
	}
	.searchBar{
		height: 20px;
		/* border: 1px solid black; */

		width: fit-content;
	}
	.searchBtn{
		/* border: 1px solid black; */
		height:20px;
		margin:0px;
		margin-top: -10px;
		padding: 2px
	}
	.searchInput{
		/* border: 1px solid black; */

		font-size: small;
		width: 130px;
		/* padding: 5px; */
		height: 25px
	}
	
}

@media (min-width: 481px) and (max-width: 1024px){
	header {
	/* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 70px;
	padding: 0 10px;
	/* margin-bottom: 20px; */
	/* margin-bottom: 20px; */
	/* padding-bottom:20px; */
	background-color: white;
	/* background-color: white */
	color: black;
	font-size: x-small;
	position:absolute;
	z-index: 100;
	width: 100%;
}
.chakra-button, .chakra-menu__menu-button, .css-i857na{
	font-size: small;
	padding: 0px;
}

}
`


export default Navbar