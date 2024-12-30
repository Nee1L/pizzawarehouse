import React, { Fragment, useState } from 'react';
import Header from '../../components/header/Header';
import Banner from '../../components/banner/BannerEducation.tsx';
import Footer from '../../components/footer/Footer';
import articles from '../../../public/courses.json';

interface Article {
  type: string;
  img: string;
  title: string;
  icon: string;
  rate: string;
  comments: string;
  hours: string;
  price: string;
}

const filterData = [
  {
    title: 'By Category',
    items: ['Technologies', 'Design', 'Marketing', 'Finance & Business', 'Lifestyle & Travel', 'Sports & Fitness', 'Real Estate & Housing'],
  },
  {
    title: 'By Content Type',
    items: ['Text Articles', 'Videos', 'Podcasts', 'Case Studies', 'Slideshows', 'White Papers', 'Webinars'],
  },
];

function EducationPage() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredItems, setFilteredItems] = useState<Article[]>([]);

  const items: Article[] = filteredItems.length === 0 ? articles : filteredItems;

  const getItemsContent = () => {
    return items.map((item, index) => (
      <div key={index} className="flex flex-col max-w-[318px] mb-4">
        <img className="rounded" src={item.img} alt={item.title} />
        <h3 className="text-lg mt-3">{item.title}</h3> 
        <div className="mt-2 flex items-center">
          <img src={item.icon} alt="rating" className="w-4 h-4 mr-1" />
          <span className="text-yellow-500 text-sm mr-3">{item.rate}</span>
          <span className="text-gray-500 text-sm">{item.comments}</span>
          <span className="mx-3 text-gray-500">&middot;</span>
          <span className="text-gray-500 text-sm">{item.hours}</span>
        </div>
        <span className="text-green-600 font-semibold text-xl mt-3">{item.price}</span>
      </div>
    ));
  };

  const handleSearchClick = (e: React.FormEvent) => {
    e.preventDefault();
    const searchedList = items.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(searchedList);
  };

  const handleSectionClick = (type: string) => {
    const searchedItems = items.filter(item => item.type === type);
    setFilteredItems(searchedItems.length > 0 ? searchedItems : articles.filter(item => item.type === type));
  };

  return (
    <Fragment>
      <Header />
      <div className="px-9">
        <Banner />
        <div className="mt-6 flex flex-row justify-between gap-[104px]">
          <div className="flex flex-row gap-2 w-[388px]">
            <button onClick={() => setFilteredItems(articles)} className="bg-gray-200 px-5 py-2 rounded-full border border-gray-300">Articles</button>
            <button onClick={() => handleSectionClick('video')} className="bg-gray-200 px-5 py-2 rounded-full border border-gray-300">Videos</button>
            <button onClick={() => handleSectionClick('courses')} className="bg-gray-200 px-5 py-2 rounded-full border border-gray-300">Courses</button>
          </div>
          <form className=" w-[524px] flex flex-row gap-2" onSubmit={handleSearchClick}>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search"
              className="w-[416px] h-11 px-7 py-2 rounded-full border border-gray-300 bg-gray-200"
            />
            <button type="submit" className="bg-blue-500 text-white px-5 py-2 rounded-full">Search</button>
          </form>     
          <div className="flex flex-row self-end gap-2">
            <button className="bg-gray-200 px-5 py-2 rounded-full border border-gray-300">Filter</button>
            <button className="bg-gray-200 px-5 py-2 rounded-full border border-gray-300">Sort</button>
          </div>
        </div>
        <div className="mt-6 flex justify-center gap-2 flex-wrap">
          <button className="bg-gray-200 px-4 py-2 rounded-full border border-gray-300"># SEO Strategies</button>
          <button className="bg-gray-200 px-4 py-2 rounded-full border border-gray-300"># Data Analysis with Python</button>
          <button className="bg-gray-200 px-4 py-2 rounded-full border border-gray-300"># Content Strategy</button>
          <button className="bg-gray-200 px-4 py-2 rounded-full border border-gray-300"># Photography Techniques</button>
          <button className="bg-gray-200 px-4 py-2 rounded-full border border-gray-300"># Typography</button>
          <button className="bg-gray-200 px-4 py-2 rounded-full border border-gray-300"># Video Editing</button>
        </div>
        <div className="mt-8 flex justify-center gap-8 flex-wrap">
          {getItemsContent()}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default EducationPage;
