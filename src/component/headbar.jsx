import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import React from "react";


import Logocpe from '../assets/logo.png';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[500]),
  backgroundColor: grey[50],
  '&:hover': {
    backgroundColor: grey[700],
  },
}));


export const Headbar = () => {
  return (
    <div>
        <div className="mx-auto bg-black dark:bg-gray-800 shadow  ">
          <div className="flex items-center justify-between h-10">
            <div className=" flex items-center">
              <a className="flex-shrink-0" href="/">
                <img className="w-8 ml-2 p-0.5 "
                  src="https://cdn-icons-png.flaticon.com/512/206/206614.png"
                />
              </a>
              <a className="flex-shrink-0" href="/">
                <img className="w-8 p-0.5"
                  src="https://cdn-icons-png.flaticon.com/512/4060/4060233.png"
                />
              </a>
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-1">
                  <a className="text-white px-3 py-2 rounded-md text-sm font-medium">
                    Faculty of Computer Enigeering
                  </a>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="flex items-center ml-4 md:ml-6">
                <div className="relative ml-3">
                  <div className="relative inline-block text-left">
                    <div className="pr-6">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mx-3 ">
              <ColorButton variant="contained" size="small"  >
                login
                {/* <Button className="primary" variant="text" size="small"  startIcon={<PersonOutlineIcon />} >Login</Button> */}
              </ColorButton>
            </div>
          </div>
        </div>
    </div>
  );
};

export const Menubar = () => {
  return (
    <>
      <div>
        <nav className="bg-red-800 dark:bg-gray-800  shadow  mx-auto">
          <div className="flex items-center justify-between h-16">
            <div className="w-full justify-between flex items-center">
              <a className="flex-shrink-0" href="/">
                <img className="w-32 m-5" src={Logocpe} /> {/**logo png */}
              </a>
              <div className=" md:block">
                <div className="flex items-baseline ml-10 space-x-6">

                  <a className="text-white px-3 py-2 rounded-md text-sm font-medium  hover:text-gray-300 " href="/#">
                    หน้าแรก
                  </a>
                  <a className="text-white px-3 py-2 rounded-md text-sm font-medium  hover:text-gray-300 " href="/#">
                    เกี่ยวกับภาควิชา
                  </a>
                  <a className="text-white px-3 py-2 rounded-md text-sm font-medium  hover:text-gray-300" href="/#">
                    บุคลากร
                  </a>
                  <a className="text-white px-3 py-2 rounded-md text-sm font-medium  hover:text-gray-300" href="/#">
                    หลักสูตร
                  </a>
                  <a className="text-white px-3 py-2 rounded-md text-sm font-medium  hover:text-gray-300" href="/#">
                    ผลงานนักศึกษา
                  </a>
                  <a className="text-white px-3 py-2 rounded-md text-sm font-medium  hover:text-gray-300" href="/#">
                    สหกิจ
                  </a>

                </div>
              </div>
            </div>
            <div className="block">
              <div className="flex items-center ml-4 md:ml-6"></div>
            </div>
            {/* <div className="flex -mr-2 md:hidden">
                <button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="w-8 h-8"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                  </svg>
                </button>
              </div> */}
          </div>
          {/* <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-6 sm:px-3">
              <a
                className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                href="/#"
              >
                หน้าแรก
              </a>
              <a
                className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                href="/#"
              >
                เกี่ยวกับภาควิชา
              </a>
              <a
                className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                href="/#"
              >
                บุคลากร
              </a>
              <a
                className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                href="/#"
              >
                หลักสูตร
              </a>
              <a
                className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                href="/#"
              >
                ผลงานนักศึกษา
              </a>
              <a
                className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                href="/#"
              >
                สหกิจ
              </a>
            </div>
          </div> */}
        </nav>
      </div>
    </>
  );
};