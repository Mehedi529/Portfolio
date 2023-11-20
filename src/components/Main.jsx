/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import { TypeAnimation } from "react-type-animation";
import {FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn ,FaGithub} from 'react-icons/fa'

const Main = () => {
    return (
        <div id="main">
            <img className="w-full h-screen object-cover object-left scale-x-[-1]" src="https://images.unsplash.com/photo-1614850523011-8f49ffc73908?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1572557798994-41431698dc8d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="/"
            />
            <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
                <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
                    <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">I'm Md.Mehedi Hasan</h1>
                    <h2 className="flext sm:text-3xl text-2xl pt-4 text-gray-800">I'm a
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Developer',
                            2000, // wait 2s before replacing "
                            'Coder',
                            2000, //wait 2s before replacing "
                            'Tech Enthusiast',
                            2000,

                        ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '1em', paddingLeft: '5px' }}
                            repeat={Infinity}
                    />
                    </h2>
                    <div className="flex justify-between pt-6 max-w-[200px] w-full">
                        <a href="https://github.com/Mehedi529" target="_blank">
                           <FaGithub className="cursor-pointer" size={20} />
                        </a>
                        <a href="#twitter" target="_blank">
                           <FaTwitter className="cursor-pointer" size={20} />
                        </a>
                        <a href="https://www.facebook.com/mehedihasan.anik.982845" target="_blank">
                           <FaFacebookF className="cursor-pointer" size={20} />
                        </a>
                        <a href="https://www.instagram.com/mehasan4275/" target="_blank">
                           <FaInstagram className="cursor-pointer" size={20}/>
                        </a>
                        <a href="https://www.linkedin.com/in/md-mehedi-hasan-328121283/" target="_blank">
                           <FaLinkedinIn className="cursor-pointer" size={20}/>
                        </a> 



                    </div>
                </div>

            </div>
        </div>
    );
};

export default Main;