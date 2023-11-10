/* eslint-disable no-unused-vars */

import WorkList from './WorkList';



const data = [
    {
        year: 2020,
        title: 'Content Creator',
        duration: '1 Year',
        details:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut explicabo velit laboriosam eum quia ipsam, molestiae ad, illo inventore mollitia quasi quo quaerat repellendus, ea consectetur. Quis voluptatem nisi laborum!'
    },
    {
        year: 2021,
        title: 'HR',
        duration: '1 Year',
        details:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut explicabo velit laboriosam eum quia ipsam, molestiae ad, illo inventore mollitia quasi quo quaerat repellendus, ea consectetur. Quis voluptatem nisi laborum!'
    },
    {
        year: 2022,
        title: 'sqa',
        duration: '1 Year',
        details:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut explicabo velit laboriosam eum quia ipsam, molestiae ad, illo inventore mollitia quasi quo quaerat repellendus, ea consectetur. Quis voluptatem nisi laborum!'
    },
    {
        year: 2023,
        title: 'Content Creator',
        duration: '1 Year',
        details:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut explicabo velit laboriosam eum quia ipsam, molestiae ad, illo inventore mollitia quasi quo quaerat repellendus, ea consectetur. Quis voluptatem nisi laborum!'
    }
];

const Work = () => {
    return (
        <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
            {data.map((item,index)=>(
                <WorkList 
                    key={index} 
                    year={item.year} 
                    title={item.title} 
                    duration={item.duration} 
                    details={item.details}
                />
            ))}
        </div>
    );
};

export default Work;