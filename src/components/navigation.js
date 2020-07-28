import React from "react";


const navLinks=[
    {
        title:'Home',
        path:'/'
    },

    {
        title:'Contact Us',
        path:'/contact-us'
    },
    {
        title:'Blog',
        path:'/blog'
    },
    {
        title:'Login',
        path:'/login'
    }

] ;



const Navigation =()=>{

    return <nav className={"site-navigation"}>
        <span>My Tech Blog</span>

        <ul>
            {
                navLinks.map((link,index)=>{
                    return  <li key={index}>
                        {link.title}
                    </li>;
                })


            }
        </ul>
    </nav>
};
export default Navigation;