import { IoMdNotifications } from 'react-icons/io'
import DropDowns from './DropDowns'
import Divider from '../Divider'

const SideBar = () => {
    return (
        <div className="hidden sm:block w-[30%] h-auto flex-col pb-[100px]">
            <div className="h-10 mt-[40px] w-[180px] rounded-xl text-slate-700 bg-slate-300 flex items-center justify-center gap-3 ease-in-out duration-300 hover:cursor-pointer hover:bg-slate-400 hover:text-[white] ">
                <IoMdNotifications className='h-8 w-8' />
                <span className='font-semibold text-md '>Get Price Alerts</span>
            </div>
            <div className='mt-[30px] '>
                <DropDowns type="items" title="options" option={["Account Setting", "Support", "License", "Sign out"]} />
                <div className='mt-4'>
                    <Divider />
                </div>
                <DropDowns type="range" title="Departure time" rangeValues={[25, 60]} />
                <div className='mt-4'>
                    <Divider />
                </div>
                <DropDowns type="range" title="Trip duration" rangeValues={[25]} />
                <div className='mt-4'>
                    <Divider />
                </div>
            </div>
        {/* <div className="bg-[red]"></div> */}
        </div>
    )
}

export default SideBar