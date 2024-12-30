import Filter from "components/filter/Filter";
import Sort from "components/sort/Sort";
import { useState } from "react";

function SearchBar() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const toggleFilter = () => {
    setIsFilterVisible((prev) => !prev);
  };

  const filterData = [
    {
      title: "By content type",
      items: ["Photographs", "Video", "Vector", "Drawings", "3D"],
    },
    {
      title: "Projects",
      items: ["New projects", "Top projects", "All projects"],
    },
  ];

  return (
    <section className="relative flex flex-col p-9">
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-2">
          <button className="w-[100px] h-[44px] px-4 py-2 rounded-full border border-gray-300 bg-gray-100 text-black font-medium hover:border-gray-500 transition-colors">
            Full-time
          </button>
          <button className="w-[100px] h-[44px] px-4 py-2 rounded-full border border-gray-300 bg-gray-100 text-black font-medium hover:border-gray-500 transition-colors">
            Part-time
          </button>
          <button className="w-[100px] h-[44px] px-4 py-2 rounded-full border border-gray-300 bg-gray-100 text-black font-medium hover:border-gray-500 transition-colors">
            Remote
          </button>
        </div>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Search"
            className="w-[416px] h-11 px-6 py-2 rounded-full border bg-[#EFEFEF] placeholder-gray-500 focus:outline-none hover:border-[#CFCFCF] border-2 text-gray-500 transition-colors"
          />
          <button className="w-[100px] h-[44px] px-4 py-2 rounded-full bg-[#40A6FF] text-white font-medium transition-colors">
            Search
          </button>
        </div>
        <div className="flex space-x-2 relative">
          <button
            onClick={toggleFilter}
            className="w-[120px] h-[44px] px-4 py-2 rounded-full border border-gray-300 bg-gray-100 text-black font-medium hover:border-gray-500 transition-colors"
          >
            Filter
          </button>
          <Sort name="Sort" onSortChange={undefined} />
          {isFilterVisible && (
            <div className="absolute top-[50px] left-0 z-10 p-4 w-[300px]">
              <Filter
                sections={filterData}
                onClearFilters={() => console.log("Filters cleared")}
                filters={{}}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default SearchBar;
