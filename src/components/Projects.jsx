/* eslint-disable no-undef */
import ProjectList from "./ProjectList";

const Projects = () => {
    return (
        <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001be5]">Projects</h1>
            <p className="text-center py-8">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium repellat explicabo eos modi nesciunt, aliquam odio tempore quasi incidunt quam excepturi harum architecto culpa. Odio, ullam! Illum ipsam perferendis odit.
                Officiis sunt quis sequi laudantium, sapiente veritatis fuga reprehenderit quidem assumenda suscipit minus adipisci ipsum aperiam, totam cumque ducimus temporibus nostrum ratione odio corporis amet voluptatibus voluptatem unde possimus? Esse!
                Soluta temporibus quibusdam voluptate nihil! Quod, dolorum itaque adipisci asperiores eaque, ab eveniet libero ut alias labore iusto, ducimus esse porro quasi modi obcaecati enim rem nobis dolorem impedit dignissimos.
            </p>
            <div className="grid sm:grid-cols-2 gap-12">
                <ProjectList />
                <ProjectList />
                <ProjectList />
                <ProjectList />
            </div>    
        </div>
    );
};

export default Projects;