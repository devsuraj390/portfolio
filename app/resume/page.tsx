import { LinkedinIcon, Mail } from 'lucide-react'
import { Phone } from 'lucide-react'
import { MapPin } from 'lucide-react'
import { Linkedin } from 'lucide-react'
import { Github } from 'lucide-react'




export default function Resume() {
    return (
        <div className="max-w-[1200px] mx-auto border-2">
            <div className="px-4 my-5">
                <h1 className="name">Suraj Kumar</h1>
                <p className="current-designation-top">Senior Frontend Engineer | Cue Health</p>
            </div>
            <div className="contact-info-container">
                <div className="px-4 space-y-1 py-1 md:flex md:justify-around md:items-center md:space-x-2 md:px-6">
                    <div className='flex items-center gap-1'>
                        <Mail size={18} />
                        <a href="mailto:dev.suraj390@gmail.com" className='contact-link'>
                            dev.suraj390@gmail.com
                        </a>
                    </div>
                    <div className='flex items-center gap-1'>
                        <Phone size={18} />
                        <a href="tel:+91-7205482295" className='contact-link'>+91-7205482295</a>
                    </div>
                    <div className='hidden xl:flex items-center gap-1'>
                        <MapPin size={18} />
                        <a target='_blank' href="https://en.wikipedia.org/wiki/Hyderabad" className='contact-link'>Hyderabad</a>
                    </div>
                    <div className=' hidden md:flex items-center gap-1'>
                        <Linkedin size={18} />
                        <a target='_blank' href="https://www.linkedin.com/in/devsuraj390" className='contact-link'>https://www.linkedin.com/in/devsuraj390</a>
                    </div>
                    <div className='hidden lg:flex items-center gap-1'>
                        <Github size={18} />
                        <a target='_blank' href="https://github.com/devsuraj390" className='contact-link'>https://github.com/devsuraj390</a>
                    </div>
                </div>
            </div>
            <div className="lg:flex justify-between gap-16 mt-5 px-4 mb-4">
                <div className="basis-3/5 space-y-6">
                    <section className="work-experience">
                        <h2 className="section-title">Work Experience</h2>
                        <hr />
                        <ul className="mt-2 space-y-6">
                            {/* Cue Health */}
                            <li className="organization-details company-left-border">
                                <div className="flex justify-between items-center">
                                    <h3 className="org-name">Cue Health</h3>
                                    <span className="location">Hyderabad, India</span>
                                </div>
                                <div className="roles-and-responsibilities -mt-1 items-center">
                                    <div className="flex justify-between">
                                        <span className="designation">Senior Software Development Engineer</span>
                                        <span className="timeline">Sep, 2022 - Present</span>
                                    </div>
                                    <div className="mt-2">
                                        <ul className="work-descriptions">
                                            <li>Currently working as a Senior Frontend Developer mainly involved in UI
                                                development of a health-care platform which helps user to consult Doctors in
                                                Sync and Async modes.</li>
                                            <li>Implement unit testing and perform thorough testing of applications to
                                                identify and address bugs and issues.</li>
                                            <li>Other responsibilities includes regular code review of the colleagues,
                                                mentoring junior developers in their day-to-day tasks.</li>
                                            <li>
                                                <span className="tech-stack">Tech Stack:&nbsp;</span>
                                                <span className="">NextJS, TypeScript, React Query, JEST, Material UI, GIT,
                                                    Tailwind
                                                    CSS, NestJS, NodeJS, MongoDB, Google Cloud, Circle CI, Testim</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            {/* <!--ORACLE --> */}
                            <li className="organization-details company-left-border">
                                <div className="flex justify-between">
                                    <h3 className="org-name">Oracle</h3>
                                    <span className="location">Hyderabad, India</span>
                                </div>
                                <div className="roles-and-responsibilities -mt-1">
                                    <div className="flex justify-between">
                                        <span className="designation">Senior Applications Engineer</span>
                                        <span className="timeline">Feb, 2022 - Sep, 2022</span>
                                    </div>
                                    <div className="mt-2">
                                        <ul className="work-descriptions">
                                            <li>Worked as a front-end developer involved in developing the complete UI from
                                                the provided Figma designs, checking build issues in CI/CD pipeline and
                                                ultimately delivering it.</li>
                                            <li>
                                                <span className="tech-stack">Tech Stack:&nbsp;</span>
                                                <span className="">HTML5, CSS3, JavaScript, Oracle JET, Oracle VBCS, Figma, GIT,
                                                    React.js </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="roles-and-responsibilities mt-6">
                                    <div className="flex justify-between">
                                        <span className="designation">Applications Engineer</span>
                                        <span className="timeline">Jun, 2019 - Jan, 2022</span>
                                    </div>
                                    <div className="mt-2">
                                        <ul className="work-descriptions">
                                            <li>Worked as a Full-Stack Developer on a Federal Financial product which is
                                                used for global accounting, financial reporting and tax requirements.</li>
                                            <li>Worked on creating UIs consuming the REST Services using Oracle Visual
                                                Builder Cloud Service(VBCS)</li>
                                            <li>
                                                <span className="tech-stack">Tech Stack:&nbsp;</span>
                                                <span className="">VBCS, HTML5, CSS3, JavaScript, Java, RESTful Web
                                                    Services, SQL</span>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </li>

                            {/* <!-- COGNIZANT --> */}
                            <li className="organization-details company-left-border">
                                <div className="flex justify-between">
                                    <h3 className="org-name">Cognizant</h3>
                                    <span className="location">Hyderabad, India</span>
                                </div>
                                <div className="roles-and-responsibilities -mt-1">
                                    <div className="flex justify-between">
                                        <span className="designation">Programmer Analyst</span>
                                        <span className="timeline">Aug, 2016 - Jun, 2019</span>
                                    </div>
                                    <div className="mt-2">
                                        <ul className="work-descriptions">
                                            <li>Handled Java development and Production support for a lifesciences domain
                                                client.</li>
                                            <li>Worked with onsite client to track status and issues in offshore development
                                                mode, conducting reviews of code and test cases and raise change
                                                requests/enhancements. </li>
                                            <li>
                                                <span className="tech-stack">Tech Stack:&nbsp;</span>
                                                <span className="">HTML5, CSS3, JavaScript, Oracle JET, Oracle VBCS, Figma, GIT,
                                                    React.js</span>
                                            </li></ul>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </section>

                    <section className="mt-8">
                        <h2 className="section-title">Education</h2>
                        <hr />
                        <div className="flex justify-between company-left-border mt-2 mb-4">
                            <div>
                                <h3 className="degree">B.Tech - 8.62 CGPA</h3>
                                <span className="specialization">Electronics &
                                    Electrical Eng.</span>
                                <span className="university">KIIT University, Bhubaneswar.</span>
                            </div>
                            <div>
                                <span className="timeline">2012 - 2016</span>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="basis-2/5">
                    <section className="skills">
                        <h2 className="section-title">Skills</h2>
                        <hr />
                        <div className=" flex flex-wrap mt-4 pl-4 gap-3">
                            <span className="skill">JavaScript</span>
                            <span className="skill">TypeScript</span>
                            <span className="skill">ReactJS</span>
                            <span className="skill">NextJS</span>
                            <span className="skill">React Query</span>
                            <span className="skill">Redux</span>
                            <span className="skill">Zustand</span>
                            <span className="skill">Storybook</span>
                            <span className="skill">React Testing Library</span>
                            <span className="skill">Jest</span>
                            <span className="skill">Material UI</span>
                            <span className="skill">Ant Design</span>
                            <span className="skill">Radix UI</span>
                            <span className="skill">Tailwind CSS</span>
                            <span className="skill">NodeJS</span>
                            <span className="skill">NestJS</span>
                            <span className="skill">GraphQL</span>
                            <span className="skill">RESTful APIs</span>
                            <span className="skill">Mongo DB</span>
                            <span className="skill">Figma</span>
                            <span className="skill">Design Pattern</span>
                            <span className="skill">NPM</span>
                            <span className="skill">Sass + Less</span>
                            <span className="skill">Docker</span>
                            <span className="skill">Monorepo</span>
                            <span className="skill">Micro Frontend</span>
                            <span className="skill">Git</span>
                            <span className="skill">Google Cloud</span>
                            <span className="skill">Oracle VBCS</span>
                            <span className="skill">Oracle JET</span>
                            <span className="skill">Circle CI</span>
                            <span className="skill">Testim</span>
                            <span className="skill">Test Automation</span>
                        </div>
                    </section>

                    <section className="other-interests mt-8">
                        <h2 className="section-title">Other Interests</h2>
                        <hr />
                        <div className=" flex flex-wrap mt-4 pl-4 gap-3">
                            <span className="interest">Travelling</span>
                            <span className="interest">Photography</span>
                            <span className="interest">Finance</span>
                            <span className="interest">Marathons</span>
                        </div>

                    </section>
                </div>
            </div>
        </div>
    )
}