import React, { useState } from "react";
import { Headbar } from "./component/headbar";
import { Menubar } from "./component/headbar";
import { Post } from "./component/Post";
import { Post1 } from "./component/Post1";

const Home = () => {
  return (
    <div>
      <Headbar></Headbar>
      <nav class="sticky top-0" >
        
        <Menubar></Menubar>
      </nav>
      <Post></Post>
      <div>
        <nav className="bg-neutral-300 dark:bg-gray-800 shadow ">
          <div className="mx-auto">
            <div className="flex items-center justify-between h-16 pl-3">
              <div className=" flex items-center bg-red-700 mr-3 pr-3">
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a className="flex-shrink-0" href="/">
                  <img
                    className="w-10"
                    src="https://scontent.xx.fbcdn.net/v/t1.15752-9/318479530_1492960227851464_1024246408573483961_n.png?_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeHrzM8n7gm_OumX2AO36QWZ8gSdqfknlr3yBJ2p-SeWvaCx_7Nsq5p5rnhBT0BnZm447ADpsmHNP6F19rKZ5Tqc&_nc_ohc=Z8ZEu7H6niMAX-y_7cV&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdR52M4ZMtsEHhlfliC8tOsaAuKxGSjL-8ie3bHKizlZkA&oe=63C17DF4"
                  />
                </a>
                &nbsp;
                <div className="hidden md:block">
                  <div className="flex items-baseline space-x-1">
                    <a className="text-white flex-shrink-0">ข่าว</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <Post1></Post1>
    </div>
  );
};

export default Home;
