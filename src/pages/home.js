import React from "react";
import trending from "../assets/mocks/trending";
import {MasonryPost, PostMasonry,PostGrid} from '../components/common'
import featured from "../assets/mocks/featured";


const trendingConfig={
    1:{
        gridArea:'1/2/3/3'
    },
    4:{
        gridArea:'1/4/3/5'
    }
};
const featuredConfig={
    0:{
        gridArea: '1/1/2/3',
        height:'250px',
    },
    1:{
        gridArea:'1/3/3/4',
        height: '250px'
    },
    3:{

        gridArea:'2/2/3/4'

    },
    4:{
        marginLeft:'30px',
        width:'100%',
        height:'530px'
    }

};

const mergeStyle=(posts,config)=>{
    posts.forEach((post,index)=>{
        post.style=config[index];
        post.author="Djafer Abdelhadi";
        post.description="This Part of the Post will be replaced later by a real description"
    })
};
 const recentPosts=[...trending,...featured];
mergeStyle(trending,trendingConfig);
mergeStyle(featured,featuredConfig);

const lastFeatured=featured.pop();

const Home=()=>{

    return <main className={"home"}>
        <section className={"container "}>

            <div className={"row"}>
                <section className={"featured-posts-container"}>
                    <PostMasonry posts={featured} columns={3} tagsOnTop={true}/>
                    <MasonryPost post={lastFeatured} tagsOnTop={true}/>
                </section>
            </div>
        </section>

        <section className={"bg-white"}>

            <section className={"container "}>

                <div className={"row"}>
                    <h1>Recent Posts</h1>
                    <PostGrid posts={recentPosts}/>
                </div>
            </section>

        </section>

        <section className={"container "}>

            <div className={"row"}>
                <PostMasonry posts={trending} columns={4}/>
            </div>
        </section>

    </main>
};
export default Home;