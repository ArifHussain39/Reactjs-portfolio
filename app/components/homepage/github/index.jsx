// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import experience from '/public/lottie/code.json';

import GitHubCalendar from 'react-github-calendar';

function Github() {
    return (
        <div id="githubcontribution" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
            <Image
                src="/section.svg"
                alt="Hero"
                width={1572}
                height={795}
                className="absolute top-0 -z-10"
            />

            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex  items-center">
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                    <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
                        Github Contributions
                    </span>
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                </div>
            </div>

            <div className="flex justify-center my-5 lg:py-8">

                <GitHubCalendar
                    username="arifhussain39"
                    colorScheme="dark"
                    blockMargin={5}
                    blockSize={20}
                    fontSize={16}
                    showWeekdayLabels={true}  
                />

            </div>

        </div>
    );
};

export default Github;