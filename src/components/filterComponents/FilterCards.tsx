
// import SideBar from "./SideBar"
import Cards from "./Cards"
const FilterCards = () => {
    return (<div className="w-[100%] sm:w-[90%] md:w-[100%] lg:w-[80%] mx-auto h-[384px]">
        <div className="h-[20%] w-auto bg-[#05203C]"></div>
        <div className="flex justify-center gap-5">
            {/* <SideBar /> */}
            <div className="w-[90%] sm:w-[70%] flex flex-col items-center gap-8 py-6">
                <Cards />
                <Cards />
            </div>
        </div>
    </div>)
}
export default FilterCards