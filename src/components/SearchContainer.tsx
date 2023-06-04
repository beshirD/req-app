

const SearchContainer = () => {
    return (
        <div className="h-[280px] relative top-[100px] flex flex-col items-center">
            <div className="flex items-center gap-8 justify-center">
                <div className="bg-slate-100 rounded-3xl h-14 w-14"></div>
                <h3 className="text-2xl font-bold text-white">Requests app</h3>
            </div>
            <div style={{
                boxShadow: "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
            }}
                className="bg-[white] w-[90%] rounded-xl h-auto lg:h-40 mt-8 flex flex-wrap justify-evenly items-center p-3 gap-2">
                <input placeholder="From" className="h-10 w-[150px] sm:w-auto sm:h-20 bg-slate-200 rounded-xl p-5" />
                <input placeholder="To" className="h-10 w-[150px] sm:w-auto sm:h-20 bg-slate-200 rounded-xl p-5" />
                <input placeholder="Date" className="h-10 w-[150px] sm:w-auto sm:h-20 bg-slate-200 rounded-xl p-5" type="date" />
                <input placeholder="Content" className="h-10 w-[150px] sm:w-auto sm:h-20 bg-slate-200 rounded-xl p-5" />
                <button className="h-10 sm:h-20 justify-self-end rounded-xl bg-[#0062E3] text-[white] w-[100px]">
                    Search
                </button>
            </div>
            <div className="block md:hidden bg-[red] h-20 w-20">
            </div>
        </div >
    )
}
export default SearchContainer