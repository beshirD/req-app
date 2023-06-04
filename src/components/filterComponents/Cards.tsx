import Divider from "../Divider"
import Tooltip from "../Tooltip"
import { AiFillQuestionCircle } from "react-icons/ai"
import { IoIosAirplane } from "react-icons/io"
const Cards = () => {
    return (
        <div
            style={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
            className="max-h-[50%] w-full rounded-xl py-2 px-3 flex flex-col items-between">
            <div className="flex justify-between">
                <div className="flex justify-between items-end gap-5">
                    <img className="BpkImage_bpk-image__img__MDZkN h-8 w-8" alt="Delta" src="//www.skyscanner.net/images/airlines/favicon/DL.png" />
                    <p>
                        Delta
                    </p>
                </div>
                <Tooltip message={"✨ Coming soon!"}>
                    <AiFillQuestionCircle size={26} />
                </Tooltip>
            </div>
            <div className="bg-[white] h-[80%] w-full flex justify-center gap-3 items-center">
                <div className="w-[70%] flex justify-around items-center">
                    <div className="flex flex-col items-end text-xl">
                        <p>5:30 PM</p>
                        <p>BNA</p>
                    </div>
                    <div className="flex flex-col w-[40%] ">
                        <p>1h 57m</p>

                        <div className="flex gap-2">
                            <div className="my-2 w-full">
                                <Divider />

                            </div>
                            <IoIosAirplane />
                        </div>

                        <p>Direct</p>
                    </div>
                    <div className="flex flex-col items-start text-xl">
                        <p>5:30 PM</p>
                        <p>NNA</p>
                    </div>
                </div>
                <div className="w-[30%] flex flex-col gap-4 items-center">
                    <p className="text-2xl">183$</p>
                    <button className="text-[white] bg-[#488DCD] py-1 px-2 rounded-lg h-15 w-20 sm:w-30 lg:w-40 hover:cursor-pointer">Book me</button>
                </div>
            </div>
        </div>
    )
}

export default Cards