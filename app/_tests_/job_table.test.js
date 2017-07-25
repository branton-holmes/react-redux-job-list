import React from 'react';
import { shallow } from 'enzyme';
import JobTable from '../components/JobTable';

const jobs = [
    {
        "company_name": "CareSprout",
        "description": "CareSprout is a senior living directory that helps people find the best senior living option for their loved ones.\r\n\r\nWe're looking for a self-motivated developer who can execute quickly on our site. We aggregate senior living locations around the US so the ideal candidate should know how to work with sites that have over 100,000 pages.\r\n\r\nIf you are interested in this role, please send an e-mail to eric@singlegrain.com with the headline 'developers are cool' and include 3 links to sites you have previously worked which had real customers (At least one site with 50,000 users). Please also tell us in the e-mail why you think you're the best fit. All applications that fail to do this will be disqualified.\r\n\r\n**Requirements:\r\n**\r\n1-2 years of professional experience with flask (python) web server\r\n1-2 years of professional experience with angular 1.x\r\nextensive knowledge and usage of git and has used github to submit pull requests\r\nexperience with PostgreSQL database\r\nexperience with running infrastructure on Amazon AWS\r\n\r\n**Responsibilities:\r\n**\r\nFront end changes (such as conversion rate optimization related work)\r\nTechnical SEO work (such as improving site speed or architecture)\r\nUI/UX - Creating a scalable site that delivers a great user experience",
        "featured": "false",
        "featured_text": "",
        "remote": "true",
        "term": "Freelance",
        "title": "Web Developer",
        "url": "http://codepen.io/url/job/zmObpr",
        "hashid": "JAjxOk"
    },
    {
        "company_name": "Outpost Games",
        "description": "",
        "featured": "true",
        "featured_text": "Build a React-based interactive gaming platform that turns players into performers!",
        "remote": "false",
        "term": "Full Time",
        "title": "Sr Front End Software Engineer",
        "url": "http://codepen.io/url/job/zgLaXZ",
        "hashid": "QkQnLz",
        "address": {
            "address1": "255 Shoreline Drive",
            "city": "Redwood City",
            "state_prov": "California",
            "postal_code": "94065",
            "country": "US"
        }
    },
    {
        "company_name": "Duke University Libraries",
        "description": "The MorphoSource Repository Developer will lead the design and development of a technical infrastructure to support the management, preservation and appropriate access to 3D digital assets hosted by the MorphoSource repository. MorphoSource is designed for archiving, interactive sharing, and tracking 3D digital assets and associated metadata relating to museum specimens, primarily 3D scans of anatomical specimens. This repository is used by scientists to collaborate on and to publish 3D data used in research; by museum curators to increase access to museum collections; by educators to enrich classroom instruction with otherwise-unavailable specimens; and by the public to access the \"raw data\" of scientific research. Currently, MorphoSource is implemented as a proof-of-concept LAMP (Linux/Apache/MySQL/PHP) stack. This is a 3-Year Term Appointment with possibility of renewal. \r\n\r\nThe developer will be responsible for refactoring the MorphoSource repository from its current form to a new implementation using a Hydra (being renamed Samvera) and Fedora digital repository software stack and integrating with Duke University Libraries infrastructure. This will include writing code that replicates and improves upon all the functionality of the MorphoSource proof-of-concept. The developer will work with researchers and stakeholders in gathering and defining requirements. The position requires a knowledgeable, enthusiastic, and self-motivated individual with experience in integrating disparate code bases, web services, API calls, scripts, and databases. The MorphoSource Repository Developer will focus on best strategies for enhancing the performance, stability and robustness of Hydra [Samvera] and Fedora technology stacks as preservation-aware, linked data infrastructure, as well as developing pathways for new contributions to MorphoSource. Other responsibilities\r\n\r\n**Responsibilities**\r\n•\tEvaluate the existing functionality in the MorphoSource proof-of-concept application and recommend appropriate technology infrastructure to support the continuation, and potential enhancement, of these services.\r\n•\tPartner with the Duke University Libraries Software Development and Integration Services team to ensure MorphoSource repository infrastructure is aligned with the Duke Digital Repository for sustainability.\r\n•\tTogether with key stakeholders, identify, prioritize, organize, and manage the infrastructure development agenda. \r\n•\tDesign, code, integrate, test, document, implement, and maintain services and applications that support digital object ingest, preservation, search, discovery, distribution and presentation.\r\n•\tComplete the re-implementation of MorphoSource as a Hydra [Samvera]/Fedora repository within two years for a beta launch at the beginning of year three.\r\n•\tWork closely with creators and managers of content and metadata to understand their needs and develop mechanisms for integrating assets into the repository.\r\n•\tRecommend, develop, and implement procedures to ensure the security and integrity of repository contents.\r\n•\tRecommend, develop, and implement APIs for exposing repository content to systems and services relevant to stakeholder communities.\r\n•\tActively participate in inter-institutional repository development communities, sharing experience, code, and best practices.\r\n•\tCollaborate with various information technology teams across campus to provide appropriate infrastructure in support of library repository services.\r\n•\tStay up to date on technology trends and standards and evaluate their impact on and application to library repository services.\r\n•\tPerform other duties as assigned.\r\n\r\n**Supervisory Responsibilities\r\n**•\tNone\r\n\r\n**Qualifications**\r\nIt is the expectation that all Duke University Libraries staff members will demonstrate exceptional workplace behaviors in the execution of their specific position responsibilities. These behaviors are customer focus, collaboration, creative problem solving, continuous learni_n_g and a commitment to diversity.  \r\n\r\n**_Education_**:\r\nRequired: BA/BS or higher in Computer Science or related field (or an equivalent combination of relevant education and/ or experience)\r\n\r\n**_Experience_**: \r\nRequired:  \r\n•\tAt least 3 years of professional experience developing and implementing technology projects in a collaborative, team-based, goal-oriented environment;  \r\n•\tExperience in object-oriented design and web application development in Java, Python, Ruby, or similar, and XML;\r\n•\tAbility to independently analyze complex problems and identify and evaluate solutions through requirements analysis, use cases, unit tests, integration test automation tools, and performance monitoring;\r\n•\tAbility to apply technology within and outside the body of knowledge and specialty of this position;\r\n•\tFamiliarity with Linux operating system and command line tools.  \r\n•\tExcellent interpersonal, oral and written communication skills;\r\n•\tAbility to work independently and as a member of a team; \r\n•\tDemonstrated commitment to providing outstanding customer services.    \r\n\r\nPreferred:  \r\n•\tPrior experience working in higher education generally and an academic research library in particular;\r\n•\tExtensive, documented experience with repository systems (Fedora, Hydra [Samvera], DSpace) and related toolkits;\r\n•\tExtensive, documented experience with Ruby and Rails;\r\n•\tExtensive, documented experience with Semantic Web and Linked Data tools and standards including RDF and SPARQL;\r\n•\tExtensive, documented experience in web/user interface development (JavaScript, jQuery, etc)\r\n•\tDatabase programming experience in an RDBMS (MySQL, PostgreSQL, etc) and/or non-relational DBMS-like triplestores, object databases, and NoSQL;\r\n•\tExperience with software lifecycle management and version control systems;\r\n•\tDeep understanding of issues related to scholarly publication, intellectual property, open access, and digital preservation (including bit rot management and software obsolescence);\r\n•\tFamiliarity with digital library technologies and standards, including digital object metadata and interchange standards, including Darwin Core, Dublin Core, Audubon Core, MARC, METS, MODS, OAI-PMH, OAI-ORE, and SWORD; familiarity with iRODS, Shibboleth, Grouper, and other federated identity management and access standards.\r\n\r\n**Working Conditions\r\n**•\tMust be able to work in an environment in which exposure to materials containing dust and mold is possible \r\n•\tNormal office environment\r\n•\tOccasional travel required \r\n\r\nThese statements are intended to describe the general nature and level of work being performed by the employee in this position. They are not intended to be construed as an exhaustive list of all responsibilities, duties, and skills required of a person in this position.\r\n\r\n**Salary and Benefits\r\n**Salary dependent on qualifications and experience. Comprehensive benefits package includes 15 days vacation, 13 holidays, 12 days sick leave; health, dental, disability and life insurance and support for professional development and training. \r\n\r\n**Environment**\r\nSince its founding in 1924, Duke University has grown into one of the most prestigious private universities in the world and its medical center ranks annually among the top in the nation. The Duke University Libraries are the shared center of the university's intellectual life, connecting people and ideas. The Libraries consist of the Perkins Library, Bostock Library, Rubenstein Rare Book and Manuscript Library, Lilly Library, and Music Library, and the library at the Duke Marine Laboratory in Beaufort. Duke's library holdings of 6.2 million volumes are among the largest of private universities in the United States.\r\n\t\r\nDuke's hometown is Durham, North Carolina, a city with vibrant research, medical and arts communities, and numerous shops, restaurants and theaters. Durham is located in the Research Triangle, a growing metropolitan area of more than one million people that provides a wide range of cultural, recreational and educational opportunities. The Triangle is conveniently located just a few hours from the mountains and the coast, offers a moderate climate, and has been ranked among the best places to live and to do business. \r\n\r\nDuke offers a comprehensive benefit packages which includes both traditional benefits such as health insurance, leave time and retirement, as well as wide ranging work/life and cultural benefits. Details can be found at:  http://www.hr.duke.edu/benefits/index.php.\r\n\r\n**Application**\r\nAn electronic resume, cover letter, and list of 3 references should be submitted at https://hr.duke.edu/careers/apply - refer to Requisition # 401297232. Review of applications will begin immediately and will continue until the position is filled. \r\n\t\r\nApplications which are missing any of the components listed above will not be reviewed.  \r\n\r\nDuke University is an Affirmative Action/Equal Opportunity Employer committed to providing employment opportunity without regard to an individual’s age, color, disability, genetic information, gender, gender identity, national origin, race, religion, sexual orientation, or veteran status. The Duke University Libraries have a strong commitment to Affirmative Action and is actively seeking to increase the racial and ethnic diversity of our staff.\r\n",
        "featured": "false",
        "featured_text": "",
        "remote": "false",
        "term": "Full Time",
        "title": "MorphoSource Repository Developer",
        "url": "http://codepen.io/url/job/nGNKQr",
        "hashid": "jzWJvk",
        "address": {
            "address1": "",
            "city": "Durham",
            "state_prov": "NC",
            "postal_code": "27708",
            "country": "US"
        }
    },
    {
        "company_name": "Duke University Libraries",
        "description": "On behalf of the Open Library Environment (OLE), the Duke University Libraries are creating a new senior level position of Director of Strategic Planning.   As a community committed to developing and sustaining the first open-source library management platform designed by librarians for libraries, OLE recognizes that planning for technical direction, collaboration, and sustainability permeates all aspects of its operations and strongly influences our mission. This is a 2-Year Term Appointment.\r\n\r\n**Responsibilities**\r\nReporting jointly to the Managing Director of OLE and the AUL for Information Technology Services for the Duke University Libraries, serving the OLE Board of Directors, and participating as ex officio to the OLE Steering Committee, the Director of Strategic Planning will:\r\n•\tLead the development of a shared vision for OLE’s future that supports the mission of the [Open Library Collaboration] and is responsive to the changing information needs of its members, sponsors, and broader library community.\r\n•\tCreate and articulate an evolving technology strategy to support that vision, with ongoing input from key stakeholders.\r\n•\tWork with the OLE team and outside collaborators to set the priority and order of technical development based on the functional priorities of the OLE partner libraries.\r\n•\tDevelop and implement a comprehensive vision and strategy for community engagement, development, and creating a sustainable organization.\r\n•\tEffectively communicate OLE’s shared vision to the OLE partners, potential partner libraries, and the broader library community.\r\n•\tRepresent OLE in national and international library-related collaborative technology efforts.\r\n•\tRepresent OLE in national and international conferences and forums.\r\n•\tOther duties as assigned.\r\n\r\nThis position is based at Duke University in Durham, NC.  Telecommuting opportunities are available for residents of: California, Florida, Georgia, Maryland, New York, South Carolina, Tennessee, Texas, Virginia, and Washington, DC.\r\n\r\n**Supervisory Responsibilities\r\n**•\tNone\r\n\r\n**Qualifications** \r\nIt is the expectation that all Duke University Libraries staff members will demonstrate exceptional workplace behaviors in the execution of their specific position responsibilities. These behaviors are customer focus, collaboration, creative problem solving, continuous learning and a commitment to diversity.  \r\n\r\n_**Education** \r\n_REQUIRED: Bachelor’s degree in Library and Information Science, Computer Science, Business Systems, or related discipline. \r\n\r\nPREFERRED: Advanced degree in Library and Information Science, Computer Science, Business Systems, or related discipline.\r\n\r\n_**Experience**\r\n_•\tThree to five years minimum of professional experience in a strategic leadership position.\r\n•\tSignificant experience with increasing levels of responsibility for setting and implementing strategic directions. \r\n•\tDemonstrated command of trends in digital libraries, information policy, collaborative technologies, and community-based open-source projects.  \r\n•\tSuccessful and effective leadership in academic, technical, and scientific communities, including a demonstrated ability to communicate effectively, oversee projects, and deliver excellent services.  \r\n•\tEvidence of enthusiasm, creativity and potential to succeed in a production oriented, rapidly changing, research library environment, including a good collaborative and relationship-building track record.  \r\n•\tDemonstrated experience in expository writing, public presentation, and communications; ability to meet deadlines and manage multiple projects simultaneously.\r\n•\tDemonstrated temperament to work with a wide variety of constituencies, both inside and outside the organization; ability to organize and work effectively with volunteers.\r\n\r\n**Working Conditions\t\r\n**•\tMust be able to work in an environment in which exposure to materials containing dust and mold is possible.\r\n•\tNormal office environment.\r\n•\tOccasional weekend shifts required.\r\n•\tOccasional travel is required.\r\n\r\nThese statements are intended to describe the general nature and level of work being performed by the employee in this position. They are not intended to be construed as an exhaustive list of all responsibilities, duties, and skills required of a person in this position.\r\n\r\n**Salary and Benefits\r\n**Salary dependent on qualifications and experience. Comprehensive benefits package includes 15 days vacation, 13 holidays, 12 days sick leave; health, dental, disability and life insurance and support for professional development and training. \r\n\r\n**Environment**\r\nSince its founding in 1924, Duke University has grown into one of the most prestigious private universities in the world and its medical center ranks annually among the top in the nation. The Duke University Libraries are the shared center of the university's intellectual life, connecting people and ideas. The Libraries consist of the Perkins Library, Bostock Library, Rubenstein Rare Book and Manuscript Library, Lilly Library, and Music Library, and the library at the Duke Marine Laboratory in Beaufort. Duke's library holdings of 6.2 million volumes are among the largest of private universities in the United States.\r\n\t\r\nDuke's hometown is Durham, North Carolina, a city with vibrant research, medical and arts communities, and numerous shops, restaurants and theaters. Durham is located in the Research Triangle, a growing metropolitan area of more than one million people that provides a wide range of cultural, recreational and educational opportunities. The Triangle is conveniently located just a few hours from the mountains and the coast, offers a moderate climate, and has been ranked among the best places to live and to do business. \r\n\r\nDuke offers a comprehensive benefit packages which includes both traditional benefits such as health insurance, leave time and retirement, as well as wide ranging work/life and cultural benefits. Details can be found at:  http://www.hr.duke.edu/benefits/index.php.\r\n\r\n**Application**\r\nAn electronic resume, cover letter, and list of 3 references should be submitted at https://hr.duke.edu/careers/apply - refer to Requisition # 401297214. Review of applications will begin immediately and will continue until the position is filled. \r\n\t\r\nApplications which are missing any of the components listed above will not be reviewed.  \r\n\r\nDuke University is an Affirmative Action/Equal Opportunity Employer committed to providing employment opportunity without regard to an individual’s age, color, disability, genetic information, gender, gender identity, national origin, race, religion, sexual orientation, or veteran status. The Duke University Libraries have a strong commitment to Affirmative Action and is actively seeking to increase the racial and ethnic diversity of our staff.\r\n\r\n",
        "featured": "false",
        "featured_text": "",
        "remote": "false",
        "term": "Full Time",
        "title": "Director of OLE Strategic Planning",
        "url": "http://codepen.io/url/job/rENjjn",
        "hashid": "vENYQA",
        "address": {
            "address1": "",
            "city": "Durham",
            "state_prov": "NC",
            "postal_code": "27708",
            "country": "US"
        }
    },
    {
        "company_name": "Duke University Libraries",
        "description": "OLE (the Open Library Environment) has partnered with EBSCO and Index Data to build and implement FOLIO (http://folio.org), a new open source library services platform. On behalf of OLE, the Duke University Libraries are seeking senior-level developers to work with the Index Data development team to build out the FOLIO platform, as well as, develop functional library service “apps” to contribute to the FOLIO library management system. These are 2 Year Term Appointments – 4 Positions\r\n\r\nThe opportunities for the FOLIO Senior Developer are: \r\n•\tProfessional growth: To create a truly innovative FOLIO system this team will be using a spectrum of technologies. The senior developers will be expected to have base skills (see below) but will also have plenty of opportunities to learn in a hands-on environment!\r\n•\tFlexible location and hours: This position will be based at Duke University. However, the Index Data and OLE teams will be distributed internationally so there is opportunity for flexible scheduling.  Telecommuting opportunities are available for residents of: California, Florida, Georgia, Maryland, New York, South Carolina, Tennessee, Texas, Virginia, and Washington, DC.\r\n•\tCollaboration and innovation: You will be part of a team. The FOLIO team members may be distributed, we work CLOSELY across time zones, institutional boundaries, and disciplines. This means developers and functional experts collaborating. We need YOUR input!\r\n•\tWorking with the best: This project requires senior developers and they’ll be coming from all over the world. This will create a stimulating environment and a highly desired end product!\r\n\r\n**Responsibilities**\r\nAs a Senior Developer reporting jointly to the OLE Project Manager (PM) and the AUL for Information Technology Services for the Duke University Libraries, she/he will: \r\n\r\n•\tFocus on developing innovative approaches to library management software in the FOLIO environment, and contributing to the FOLIO technical framework to encourage contribution and adoption of FOLIO and the FOLIO platform by the Library Community. \r\n•\tDemonstrate initiative, creativity, and innovation in the development of stable, maintainable, and efficient software solutions.  \r\n•\tProvide leadership in design, development, and implementation of new software solutions. Provide highly specialized expert technical knowledge of all issues pursuant to the development of the next phase of OLE. \r\n•\tTake responsibility for designing programmatic solutions and work with other developers on the team to resolve technical issues. \r\n•\tWork as part of a team to organize and own initiatives to analyze functional business processes, determine system specifications, design solutions, write software, and implement critical system applications while maintaining standards and good quality. \r\n•\tParticipate in tactical and strategic planning sessions in an open forum environment, with Subject Matter Experts (SMEs), and with the Product Owners (PO). Collaborate with PO, SME teams, UX Designers, and other team members to understand goals, processes, and standards. \r\n•\tOwn areas of project plans and roadmaps ensuring implementation, troubleshooting, and maintenance support. Provide training and support to staff, serves as a resource for problem analysis and resolution. \r\n•\tDevelop proofs-of-concept for data migrations from the current OLE data structures into the newly designed data-centric infrastructure of FOLIO. \r\n•\tWork independently as a senior member of the OLE project team and maintain excellent relationships with members of the OLE community as well as collaborating partners in FOLIO, through careful consideration and thorough communications on analysis and programming assignments. \r\n•\tEnsure established standards are followed and that the latest versions of the software infrastructure are being used, as well as ensuring the applications take advantage of emerging functionality that increases technical productivity or provides value added new services. \r\n\r\n**Supervisory Responsibilities\r\n**•\tNone\r\n\r\n**Qualifications**\r\nIt is the expectation that all Duke University Libraries staff members will demonstrate exceptional workplace behaviors in the execution of their specific position responsibilities. These behaviors are customer focus, collaboration, creative problem solving, continuous learning and a commitment to diversity.  In addition, managers and supervisors are expected to help develop a common vision by providing clear direction and priorities, clarifying roles and responsibilities, and promoting mutual understanding through effective communication.  They are also expected to take the time to effectively plan and evaluate performance, provide feedback, recognition and coaching, and develop employees to achieve their personal and organizational goals.  \r\n\r\n**_Education_**:\r\nRequired: Bachelor’s degree in Computer Science, Business Systems, or related discipline. \r\n\r\n**_Experience_**:\r\nRequired: Three to five years minimum of professional experience working as a software engineer or developer using the standard development tools and frameworks. Combinations of related education and experience may be considered. \r\n\r\nQualified applicants must be able to communicate effectively and provide strong leadership in a team of highly skilled software engineers and designers. Must be able to bring a strong service-oriented and collaborative approach to designing and developing robust and reliable software. Ability to build good working relationships and establish trust with a diverse group of academic and administrative university colleagues.  \r\n \r\n•\tDemonstrated ability working with enterprise-scale software development. Expert knowledge of standard development tools and frameworks. Understanding of common design patterns, service-oriented architecture, and test-driven development.  \r\n•\tDemonstrable skill in analyzing complex problems and producing concrete, actionable solutions, specifically as it pertains to production troubleshooting. Experience resolving highly complex integration issues involving multiple technologies and business areas. \r\n•\tExcellent oral, written, and interpersonal communication skills are required. Customer service attitude and willingness to work as part of a team in a dynamic and complex environment is required.  Ability to work with a variety of people with varying degrees of technical knowledge. \r\n•\tAbility to assume project leadership for OLE and work at the highest level of technical complexity. High levels of accuracy, problem-solving, dependability, and responsibility are essential. \r\n•\tWork independently with little guidance, seeking functional, technical, and managerial input when needed. \r\n•\tEnthusiasm for learning new technologies. \r\n \r\nPreferred Knowledge and Experience in some of these or comparable core technologies and skills:   \r\n•\tRESTful web services (JAX-RS or Spring Rest);   \r\n•\tMessage queues;\r\n•\tJavascript and Javascript frameworks, such as Node.js, jQuery, Bootstrap, Angular, React;   \r\n•\tHTTP/REST and related network protocols;   \r\n•\tJSON/XML and related technologies;\r\n•\tTest Driven Development;\r\n•\tUse of design patterns in development;\r\n•\tModern build and test tools for web application development;\r\n•\tAmazon AWS or similar cloud hosting environment\r\n\r\n**Working Conditions\r\n**•\tMust be able to lift 25 pounds\r\n•\tMust be able to work in an environment in which exposure to materials containing dust and mold is possible \r\n•\tNormal office environment\r\n•\tOccasional weekend and evening work required  \r\n•\tOccasional travel required \r\n\r\nThese statements are intended to describe the general nature and level of work being performed by the employee in this position. They are not intended to be construed as an exhaustive list of all responsibilities, duties, and skills required of a person in this position.\r\n\r\n**Salary and Benefits\r\n**Salary dependent on qualifications and experience. Comprehensive benefits package includes 15 days vacation, 13 holidays, 12 days sick leave; health, dental, disability and life insurance and support for professional development and training. \r\n\r\n**Environment**\r\nSince its founding in 1924, Duke University has grown into one of the most prestigious private universities in the world and its medical center ranks annually among the top in the nation. The Duke University Libraries are the shared center of the university's intellectual life, connecting people and ideas. The Libraries consist of the Perkins Library, Bostock Library, Rubenstein Rare Book and Manuscript Library, Lilly Library, and Music Library, and the library at the Duke Marine Laboratory in Beaufort. Duke's library holdings of 6.2 million volumes are among the largest of private universities in the United States.\r\n\t\r\nDuke's hometown is Durham, North Carolina, a city with vibrant research, medical and arts communities, and numerous shops, restaurants and theaters. Durham is located in the Research Triangle, a growing metropolitan area of more than one million people that provides a wide range of cultural, recreational and educational opportunities. The Triangle is conveniently located just a few hours from the mountains and the coast, offers a moderate climate, and has been ranked among the best places to live and to do business. \r\n\r\nDuke offers a comprehensive benefit package which includes both traditional benefits such as health insurance, leave time and retirement, as well as wide ranging work/life and cultural benefits. Details can be found at:  http://www.hr.duke.edu/benefits/index.php.\r\n\r\n**Application**\r\nAn electronic resume, cover letter, and list of 3 references should be submitted at https://hr.duke.edu/careers/apply - refer to Requisition # 401297169. Review of applications will begin immediately and will continue until the position is filled. \r\n\t\r\nApplications which are missing any of the components listed above will not be reviewed.  \r\n\r\nDuke University is an Affirmative Action/Equal Opportunity Employer committed to providing employment opportunity without regard to an individual’s age, color, disability, genetic information, gender, gender identity, national origin, race, religion, sexual orientation, or veteran status. The Duke University Libraries have a strong commitment to Affirmative Action and is actively seeking to increase the racial and ethnic diversity of our staff.\r\n",
        "featured": "false",
        "featured_text": "",
        "remote": "false",
        "term": "Full Time",
        "title": "FOLIO Senior Developer",
        "url": "http://codepen.io/url/job/rKNdYZ",
        "hashid": "gAbvPA"
    },
    {
        "company_name": "Bytion",
        "description": "",
        "featured": "false",
        "featured_text": "",
        "remote": "true",
        "term": "Full Time",
        "title": "Front-End Web Developer",
        "url": "http://codepen.io/url/job/ZNbPeZ",
        "hashid": "jzWOqz"
    },
    {
        "company_name": "Front End Web Developer — Swiftype",
        "description": "",
        "featured": "false",
        "featured_text": "",
        "remote": "false",
        "term": "Full Time",
        "title": "Front End Web Developer",
        "url": "http://codepen.io/url/job/zjVbJz",
        "hashid": "dAwmbk",
        "address": {
            "address1": "301 Howard St, Suite 1320",
            "city": "San Francisco",
            "state_prov": "CA",
            "postal_code": "94105",
            "country": "US"
        }
    },
    {
        "company_name": "Solutions Engineer — Swiftype",
        "description": "",
        "featured": "false",
        "featured_text": "",
        "remote": "false",
        "term": "Full Time",
        "title": "Solutions Engineer",
        "url": "http://codepen.io/url/job/zXNJMr",
        "hashid": "rkBnek",
        "address": {
            "address1": "301 Howard St, Suite 1320",
            "city": "San Francisco",
            "state_prov": "CA",
            "postal_code": "94608",
            "country": "US"
        }
    },
    {
        "company_name": "MJD Interactive",
        "description": "",
        "featured": "true",
        "featured_text": "Be a part of the creative collective recently awarded SD Journal Best Places to Work.",
        "remote": "false",
        "term": "Full Time",
        "title": "Senior Front End Engineer",
        "url": "http://codepen.io/url/job/rQGLYz",
        "hashid": "gkMVJz",
        "address": {
            "address1": "4667 Cass St",
            "city": "San Diego",
            "state_prov": "CA",
            "postal_code": "92109",
            "country": "US"
        }
    },
    {
        "company_name": "Rain43",
        "description": "Rain43 is one of the fastest-growing independent creative advertising agencies in Canada and we’re looking two full time Web Developers (one senior/full-stack and one intermediate/front-end).\r\nYou’ll report to our Senior Developer/Team Lead and be part of a tightly knit creative team where your ideas and your digital perspective are valued. Your responsibilities will include HTML5 Animation (via web banners), microsites & building custom CMS’s & DAM systems, as well as other development projects for our top-tier roster of clients. Plus, we want you to work on cool internal projects and help bring other skunkwerx projects to life (IoT).\r\nAt Rain43 you’ll work collaboratively with senior leaders, smart strategists, and other creative thinkers. We want someone who can make things, break things, and then make them even better. And we want you to do things that have never been done. That’s what it means to be a Rainmaker. And if that means something to you, then we want to talk.\r\n \r\n**You’ll need these tech skills:**\r\n\r\n- You know HTML5, CSS3, and Javascript inside and out\r\n- And you’ve got decent chops in Greensock, AngularJS/Vue.js, PHP too\r\n- You’re experienced in WordPress setup & theme development\r\n- You’re comfortable deploying projects to live environments using FTP, GIT & CPANEL\r\n- Moderate experience with Adobe Creative Suite (Photoshop, Illustrator etc.)\r\n- If you have a swiss army knife and can make things like MacGyver does that’s really cool too J\r\n \r\n**And the non-Tech skills we love are:**\r\n\r\n- Creativity and curiosity\r\n- Strategic and critical thinking\r\n- Great communication skills\r\n- Responsiveness and reliability\r\n- Attention to detail\r\n- Problem-solving ability, solution-oriented mind\r\n- And old skool bubble hockey or pacman skills… or join our baseball team? Show us your cupcake baking or DJ’ing or margarita mixing skills? Fun stuff like that would be nice too…\r\n- Oh, and a fun and funny personality.\r\nWe don’t ask much do we?!? But we give back with a great team and culture, and great perks and benefits such as unlimited vacation.  \r\n \r\nApply here or send your application to [iwanttowork@rain43.com](mailto:iwanttowork@rain43.com) and put “I’m your developer!” in the subject line.\r\nThanks for considering Rain43, we look forward to meeting you.\r\n \r\nRain43 is a creative and collaborative equal opportunity employer, committed to creating and maintaining a friendly, inclusive, and accessible workplace. If you are contacted for an interview and require accommodation during the interviewing process, please let us know.\r\nWe appreciate all applicants, however only those selected for an interview will be contacted.\r\nThank you for your interest in Rain43, and feel free to follow our company page on [LinkedIn](https://ca.linkedin.com/company/rain43).",
        "featured": "false",
        "featured_text": "",
        "remote": "false",
        "term": "Full Time",
        "title": "Front-end and Full-stack Developers",
        "url": "http://codepen.io/url/job/rkLNan",
        "hashid": "OAgrXz",
        "address": {
            "address1": "573 King St E, 200",
            "city": "Toronto",
            "state_prov": "Ontario",
            "postal_code": "M5A 1M5",
            "country": "CA"
        }
    },
    {
        "company_name": "Moss Corporation",
        "description": "**Front End Developer**\r\n\r\nMoss Corporation – Solon, OH\r\n\r\nWe are seeking a Front End Web Developer who is motivated to combine the art of design with the art of programming. Responsibilities will include translation of the UI/UX design wireframes to actual code that will produce visual elements of the application. You will work as a part of a small team of designers and developers, where you will bridge the gap between design and implementation. You’ll take an active role on both the visual and technical sides, defining how the application looks as well as how it works. Experience with backend development including .NET Framework is a plus.\r\n\r\nResponsibilities\r\n\r\n-\tDeveloping new user-facing web sites and features\r\n-\tEnsure the technical feasibility of UI/UX designs\r\n-\tOptimize applications for maximum speed and scalability\r\n-\tAssure that user input is validated before submitting to back-end\r\n-\tCollaborate with other team members\r\n\r\nSkills and Qualifications\r\n\r\n-\tLocated near and available to work from Solon, OH\r\n-\tAble to quickly learn and understand new systems\r\n-\tExperience developing reasonably complex systems\r\n-\tAdvanced knowledge of Javascript, HTML, and CSS\r\n-\tExperience with modern front end libraries and tooling including Component-Based Architectures like React.js\r\n-\tGood understand of asynchronous request handling and partial page updates\r\n-\tProficient understand of cross-browser compatibility issues and fixes\r\n-\tExcellent communication skills\r\n-\tGithub or other portfolio showcasing past work and personal projects\r\n\r\nUseful but Non-Essential skills\r\n\r\n-\t.NET Framework \r\n-\tUI/UX Design\r\n-\tNode.js / Express.js\r\n-\tSQL databases\r\n\r\nThe atmosphere in the office is open, friendly, and fun. We offer a good work-life balance and a relaxed work environment. As an employee, you have a casual dress code, flexible hours, and receive many benefits (401k match, health, life, dental, and vision insurance).\r\n\r\nEmail resume to: tsnyder@mosscorps.com\r\n\r\nDirect hires only, please no recruiters.\r\n",
        "featured": "false",
        "featured_text": "",
        "remote": "false",
        "term": "Full Time",
        "title": "Front End Developer",
        "url": "http://codepen.io/url/job/zbBGmz",
        "hashid": "ozGxwA",
        "address": {
            "address1": "5895 Harper Rd.",
            "city": "Solon",
            "state_prov": "OH",
            "postal_code": "44139",
            "country": "US"
        }
    },
    {
        "company_name": "Netlify",
        "description": "### Overview\r\n\r\nAt [Netlify](https://www.netlify.com), we’re building a platform to empower digital designers and developers to build better, more elaborate web projects than ever before. We’re aiming to change the landscape of modern web development.\r\n\r\nThe fullstack engineer's mission is to build the APIs and user interfaces that thousands of developers use when they deploy their sites on Netlify.\r\n\r\n\r\n### Some of the challenges you’ll be working on\r\n\r\n- Build new features to make working with Netlify a fantastic experience for developers.\r\n- Build internal tools to help our other teams interact with our users.\r\n- Integrate our [Open Source](/open-source) projects with the rest of Netlify's platform.\r\n- Make using our CLI a delightful experience for new and experienced users.\r\n\r\n\r\n### To be effective in this role, you’ll benefit from experience in:\r\n\r\n- Scripting programming languages. We use Ruby, with Rails as web framework, and JavaScript.\r\n- Writing web applications with a decoupled JavaScript frontend.\r\n- UI and UX experience.\r\n- Web and CDN technologies.\r\n- Internet standards like HTTP, DNS, and TLS.\r\n\r\n\r\n### Competencies that we value in candidates\r\n\r\n- You enjoy helping and mentoring other engineers to grow.\r\n- You can focus on key priorities and pragmatic solutions.\r\n- You can adjust quickly to changing priorities and conditions.\r\n- You are curious about compiled programming languages. We use Go and C++ in some areas of our infrastructure.\r\n\r\n\r\n### About the Team\r\n\r\nThough the team is small, we are a fast-growing startup. You will be working across the company. There are only less than twenty of us, so you are getting in at a time when we need people who can help us build a path towards the future.\r\n\r\nWe believe that empowered, engaged employees do the best work. We’ll be giving you the tools you need to succeed and looking to you for suggestions for improvement not just in your daily job, but in many other aspects of building a company. Whether you work from our main office in San Francisco, or you are a remote employee, we’ll be working together a lot - particularly, pairing and collaborating - we want you to succeed!  We don’t want you to work too hard (burnout is real), and we do want to encourage you to grow ([impostor syndrome](https://en.wikipedia.org/wiki/Impostor_syndrome) is also real) - and we’ll help you do that.\r\n\r\nNetlify is devoted to building a team of people with different backgrounds and lifestyles. We eagerly invite applications from people of all kinds. We don’t discriminate against employees or applicants based on gender identity or expression, sexual orientation, religion, age, race, citizenship, pregnancy status, or any other differences. If we can do anything to provide a better interview, i.e. accommodate a disability, then please do let us know.\r\n\r\n\r\n### How we hire\r\n\r\nOur hiring process starts as soon as you email us at [careers@netlify.com](mailto:careers@netlify.com). Please send us a thoughtful cover letter explaining why you enjoy building APIs and microservices, and why you’d like to work at Netlify.\r\n\r\nAfter we evaluate this email, we will schedule a conference call so we can meet. If you live in San Francisco, we usually substitute this call with a visit to our office. This first meeting helps us to learn more about your past experience and helps you to learn a little bit more about our company and how we work.\r\n\r\nIf we move forward with the process, we will work together in designing a test to evaluate your technical skills. We’ll invite you to join a dedicated Slack channel where we can reach each other and talk about the test.\r\n\r\nIf the test is successful, we'll schedule a next meeting with other members of the company that you’ll be working with, directly or indirectly.\r\n\r\nAfter this third interview, you’ll meet with the management team to discuss salary and other compensations.\r\n\r\n",
        "featured": "true",
        "featured_text": "Join us on our mission to secure and modernize the web",
        "remote": "false",
        "term": "Full Time",
        "title": "Fullstack Engineer",
        "url": "http://codepen.io/url/job/rBQjPZ",
        "hashid": "nAmxDz",
        "address": {
            "address1": "2475 3rd Street ",
            "city": "San Francisco",
            "state_prov": "CA",
            "postal_code": "94107",
            "country": "US"
        }
    },
    {
        "company_name": "Pobble",
        "description": "Join our product team to play a crucial role in the development of our platform. Shape the user experience of a product that has immense impact, every day...\r\n\r\nYou’ll work with a small, experienced team. Our product is still young so there is plenty of room to introduce technologies, tools and processes. On the other hand, we have incredible domain knowledge in-house, a growing base of customers for rapid feedback and financial backing from some great experts in the education industry.\r\n\r\n \r\n\r\n###ABOUT US\r\n\r\n[Pobble](https://pobble.com) is an award winning edtech start-up, founded by teachers. We believe that a spark of inspiration can change a child’s trajectory. After an initial 2 years on the previous build, we relaunched in September 2015 and are now seeing rapid growth.\r\n\r\nToday, primary school teachers use Pobble to find teaching resources, collaborate with classes across the world, and give pupils a real audience for their writing. In short, Pobble makes writing ridiculously exciting!\r\n\r\nWe work with hundreds of schools and reach tens of thousands of pupils every week. And we’re just getting started: we are growing fast in the UK and internationally, and are creating the product to make that possible.\r\n\r\n \r\n\r\n### ABOUT YOU\r\n\r\nWe can't wait to see your work. How have you impacted the success of the previous products you've worked on? Here is what's important to us (and we hope also to you):\r\n\r\n- Experience with our stack (React, Angular, ES6, Webpack, Gulp, REST)\r\n- Agile methodologies (we stand-up every day and constantly groom our backlog)\r\n- Data and metrics (test, learn and implement – rinse and repeat)\r\n- Eager to try stuff (if it doesn’t work: fine, learn from it and try again)\r\n- Team play (share your experience to make the team better)\r\n- An open team atmosphere (code reviews, open discussion and always beer in stock)\r\n\r\n \r\n\r\n### COMPENSATION DETAILS\r\n\r\nYou’ll receive £55-65k base salary depending on experience. Additionally, all our team members have the opportunity to own a part of our business as part of our option scheme. On top of that we offer:\r\n\r\n- Work with a great [team](https://pobble.com/join-us) of passionate and talented individuals;\r\n- A fantastic office environment in the heart of Primrose Hill, London (Utopia Village);\r\n- 10 minutes walk from Camden Town tube;\r\n- Freedom to work flexible hours in line with the needs of your job, and partly remote;\r\n- A budget for training and development.\r\n\r\n \r\n\r\n### AND NOW...\r\n\r\nIf this sounds good, don’t wait a second longer and [get in touch](https://www.pobble.com/join-us#op-181943-frontend-engineer). We’ll get back to you soon!",
        "featured": "false",
        "featured_text": "",
        "remote": "false",
        "term": "Full Time",
        "title": "Front End Developer",
        "url": "http://codepen.io/url/job/zwoKez",
        "hashid": "WARZYA",
        "address": {
            "address1": "36H Chalcot Sq",
            "city": "London",
            "state_prov": "London",
            "postal_code": "NW1 8YP",
            "country": "GB"
        }
    },
    {
        "company_name": "Booking.com",
        "description": "Booking.com BV (the company behind Booking.com™, the market leading online accommodation reservation service in the world) is looking for the world’s smartest designers. Join the world’s leading accommodation company and help define the future of travel. This position offers the successful candidate the freedom to make meaningful and measurable improvements, impacting millions of people. You’ll join us at our beautiful Amsterdam HQ and work with some of our industry’s smartest people.\r\n\r\n\r\n**B.responsible**\r\n\r\nAs a UX Designer you’ll be a key part of the idea generation process, working in a small startup-like group which takes full ownership of their part of our platform. ‘Designer’ is just what it says on your CV – you’d be just as happy to be labeled an Engineer, or Analyst; a Builder, Maker or Problem Solver. Your portfolio is a collection of stories that you can discuss with enthusiasm, and regret … because you’re always getting better at what you do and you’re never satisfied with ‘good enough’. You’re excited about the endless potential of the web and being able to build things that millions of people can use every day.\r\n\r\n \r\n\r\n**B.skilled**\r\n\r\nAs a candidate for the UX Designer position, you possess a broad range of abilities:\r\n\r\nYou are comfortable with each part of the design process, from research to exceptional UI design, through to shipping production code\r\nYou are proficient with HTML & CSS\r\nYou have experience with template engines to display data from the backend – you’d be implementing your work using our in-house templating engine (don’t worry - we’ll show you the ropes!)\r\nYou are comfortable creating the wireframes, polished mockups, and prototypes needed to communicate them (e.g., Sketch, Framer, InVision)\r\nYour strengths include being self-driven and taking full ownership of your ideas to solve challenging problems\r\nYou are comfortable working collaboratively with developers, product owners, and copywriters\r\nYou thrive on feedback and critique, responding with creative thinking and iterative design\r\nYou are a passionate advocate for the user, dedicated to the craft of design and creating elegant user experiences\r\nYou understand and thrive in an environment which employs extensive A/B testing - Booking.com is a data-informed company\r\n \r\n\r\n**B. Experienced**\r\n\r\nWe’re looking for Designers with a minimum of 4 years of relevant experience, ideally with some history of working in e-commerce & data-informed organisations.\r\n\r\nDesigners at Booking.com must be excellent collaborators – we work in an agile, dynamic, diverse environment in which openness & humility are key. Our designers combine their knowledge and expertise with the goals of our business to deliver a world-class user experience to our diverse, loyal user-base. At Booking.com, design is a team sport, and together we solve hard problems while keeping the user at the center of everything we do.\r\n\r\nEnsuring a diverse and inclusive workplace is part of our core values. We are an equal opportunity employer and know that a team of different backgrounds, abilities, and perspectives makes us thrive and build better products. We are fortunate to be members of one of the most diverse design teams in the world and we do our best work when we join forces. We’re looking forward to welcoming you into our team of exceptionally talented and fun colleagues, where you'll do challenging and rewarding work.\r\n\r\nYou will also contribute to the growth of Booking.com through interviewing, on-boarding, or other recruitment efforts\r\n\r\n \r\n\r\n**B.offered**\r\n\r\nWe are a performance-based company that offers career advancement and lucrative compensation, including bonuses and stock potential.  We also offer what we call the “Booking Deal” with other competitive perks and benefits.  IT also has regular hackathons, training and attends/speaks at global conferences.\r\n\r\nThis position is open to worldwide candidates and in the case of relocation, we will assist you with a generous relocation package, ensuring a smooth transition to working and living in Amsterdam.  We have successfully relocated 200+ IT professionals to Amsterdam in the last year!\r\n\r\n\r\n**Interested?**\r\n\r\nPlease send your CV and portfolio to **craig.paton@booking.com**.",
        "featured": "false",
        "featured_text": "",
        "remote": "false",
        "term": "Full Time",
        "title": "UX Designer (html/css)",
        "url": "http://codepen.io/url/job/nApEXr",
        "hashid": "VzvRaz",
        "address": {
            "address1": "Herengracht 597",
            "city": "Amsterdam",
            "state_prov": "",
            "postal_code": "1017CE",
            "country": "NL"
        }
    },
    {
        "company_name": "Booking.com",
        "description": "Booking.com BV (the company behind Booking.com™, the market leading online hotel reservation service in the world) is looking for a Graduate UX Designer. \r\n\r\n\r\n\r\n**B.epic**\r\n\r\nAs a Graduate UX Designer at one of the world's biggest e-commerce websites you'll have unparalleled freedom to make a big impact on our business. Your ideas and analyses will find their way into the hands of millions of our users, and you'll learn quickly about user behavior at scale. This Graduate Program really allows you to make your mark within the organization. We will encourage you to take full ownership of your projects and to make decisions every day. You will get insight and experience in a worldwide fast-growing internet company and a unique opportunity to learn about our business from some of the industry’s best people.\r\n\r\n\r\n\r\n**B.responsible**\r\n\r\n•\tYou will rotate in different projects over the course of this 12 month program to get maximum exposure to all parts of our business to assist in your development. During the program, you will develop an in-depth understanding and knowledge of IT at Booking.com, working on live projects and getting on and off-the job training.\r\n\r\n•\tWork with developers, product owners, copywriters and user researchers to conceive, analyze, hand code and test your ideas.\r\n\r\n•\tPlay a key-part in the idea generation process.\r\n\r\n•\tWrite excellent HTML and CSS. You’re excited about the endless potential of the web, and being able to build things that millions of people can use every day.\r\n\r\n•\tYou will prioritize your own work together with your team and product owner. Through A/B testing you will receive direct and immediate feedback from millions of users.\r\n\r\n\r\n\r\n**B.Skilled**\r\n\r\nWe love working with passionate, enthusiastic, self-motivated, pro-active people who are eager to learn, and to share their knowledge and experience with colleagues. Our ideal candidate is motivated to achieve the best results for his/her team and fulfills the following requirements:\r\n\r\n•\tYou are enthusiastic to work in a large e-commerce environment.\r\n\r\n•\tYou have passion for design and strong visual design skills.\r\n\r\n•\tYou are more than comfortable in the core areas of web design: writing production- standard HTML and CSS, creating beautiful, usable design work, and working closely with your technical colleagues to see the idea through exemplary implementation.\r\n\r\n•\tYou are not only capable of making beautiful designs, but also able to make data driven designs that improve the user experience and contribute to our business.\r\n\r\n•\tYou have craftsmanship in your work, and you have a great business sense.\r\n\r\n•\tYou love data. You are driven by data.\r\n\r\n•\tYou have practical hands-on experience during internships, freelance projects or after graduation.\r\n\r\n•\tYou can showcase your design from personal projects or your portfolio.\r\n\r\n•\tYou have a Bachelors or Masters degree in Design or equivalent.\r\n\r\n\r\n\r\n**Nice to haves**\r\n\r\n•\tExperience in e-commerce\r\n\r\n•\tExperience with A/B testing\r\n\r\n\r\n**Interested?**\r\n\r\nPlease send your CV and portfolio to **jorrit.devries@booking.com**.\r\n\r\n",
        "featured": "false",
        "featured_text": "",
        "remote": "false",
        "term": "Full Time",
        "title": "Graduate UX Designer",
        "url": "http://codepen.io/url/job/ryVBdn",
        "hashid": "rEYavE",
        "address": {
            "address1": "",
            "city": "Amsterdam",
            "state_prov": "",
            "postal_code": "1017CE",
            "country": "NL"
        }
    },
    {
        "company_name": "silverorange",
        "description": "",
        "featured": "false",
        "featured_text": "",
        "remote": "true",
        "term": "Full Time",
        "title": " Web Developer (Node/React)",
        "url": "http://codepen.io/url/job/nWoQLn",
        "hashid": "DEVMxA"
    },
    {
        "company_name": "AltspaceVR",
        "description": "We need design-minded front end developers with deep knowledge of modern web development to create next generation user interfaces. We are leveraging a Chromium integration paired with powerful VR APIs to present web apps in holographic 3D to devices like the Oculus Rift and HTC Vive. Forget supporting IE. With us you'd be programming against HUDs, non-rectangular displays, and holographic projectors.  \r\n\r\n[See more about AltspaceVR](https://www.youtube.com/watch?v=CQtQGoMRXaI) \r\n\r\nWe are:  \r\n\r\n- A virtual reality software company [https://twitter.com/AltspaceVR](https://twitter.com/AltspaceVR)  \r\n- Backed by some of the best investors on the planet [http://altvr.com/about/](http://altvr.com/about/)  \r\n- A team that is passionate about the future of VR  [http://altvr.com/team/](http://altvr.com/team/)  \r\n\r\n**[Apply!](https://jobs.lever.co/altspace/9761fb55-6bf5-4d49-852d-6ad9b09154eb)**",
        "featured": "false",
        "featured_text": "",
        "remote": "false",
        "term": "Full Time",
        "title": "Virtual Reality Front End UI Engineer",
        "url": "http://codepen.io/url/job/rPbqXz",
        "hashid": "JzoxrA",
        "address": {
            "address1": "850 Veterans Blvd #305",
            "city": "Redwood City",
            "state_prov": "California",
            "postal_code": "94063",
            "country": "US"
        }
    },
    {
        "company_name": "Handbuilt Creative",
        "description": "**JOB DESCRIPTION**\r\n\r\n- - -\r\n\r\nHandbuilt is looking for a talented super-genius to help conceive, design and develop highly immersive Augmented Reality (AR) products primarily using Apple’s ARKit, Google’s Tango, and Unreal Engine (or Unity), along with support to build on Handbuilt’s existing augmented reality product lines that are currently in development.\r\n\r\nTo this extent you will be able to demonstrate successful commercial experience developing for iOS and Android, and be very interested or have experience in technologies such as React Native.\r\n\r\nIn addition, this position may allow for the potential to contribute to high-end web app design + development areas that Handbuilt also work in, so having skills in user experience / UX design and modern javascript technologies such as Node and React are sought after too.\r\n\r\nEqually important to the team here at Handbuilt is the ability to be a team player who can add value to our culture, as well as having an insatiable hunger for learning, and a burning desire to produce the best possible work. It’s the thing we do around here, and it’s seen us scoop 18 international design awards, including a few at the Webby Awards.\r\n\r\nWe’ve designed, developed and managed projects for global brands and billion dollar Australian icons, and our client list ranges across a vast array of business types and sectors - ensuring you always get interesting, challenging projects to work on.\r\n\r\n\r\n- - -\r\n**Where to from here?**\r\n\r\nHere’s the deal…\r\n\r\nYou might not have all the skills we are after, but hard work and a fanatical passion for quality mean a great deal to us (and might just give you a shot) so we encourage people who think they have a decent chunk of the skills we’re after (but missing a few here and there) to get in touch with the usual CV that addresses the criteria below and provides links to that all-important portfolio work!\r\n\r\nWe’re really looking to fill a long-term, full-time position, although we could be swayed if you’re truly kick ass, and salaries will be commensurate with experience.\r\n\r\nFinal shortlisted candidates will be invited (or flown in) for an on-site visit, courtesy of Handbuilt.\r\n\r\nThis permanent full-time position is suitable for Australian citizens and permanent residents of all ages and genders.\r\n\r\nClosing date is Monday 3rd July 2017.\r\n\r\nInterested candidates will apply to:\r\n\r\nDavid Shering\r\n\r\nDirector\r\n\r\n<a href=\"mailto:jobs@handbuiltcreative.com.au\">jobs@handbuiltcreative.com.au</a>\r\n\r\n\r\n\r\n- - -\r\n\r\n**EXPERIENCE**\r\n\r\n- - -\r\n\r\n**Skills you’ll need to show experience in:**\r\n\r\n<ul>\r\n<li>Objective-C and/or Swift</li>\r\n<li>Java</li>\r\n<li>ARkit</li>\r\n<li>Unreal engine and/or Unity</li>\r\n<li>SceneKit</li>\r\n<li>SpriteKit</li>\r\n<li>Metal</li>\r\n</ul>\r\n\r\n\r\n<ul>\r\n<li>React, Vue or Angular</li>\r\n<li>React Native</li>\r\n<li>Flux / Redux</li>\r\n<li>WebSockets</li>\r\n<li>Node</li>\r\n<li>MongoDB or equiv</li>\r\n<li>HTML/SASS/MySQL/PHP</li>\r\n<li>Git / Github</li>\r\n<li>SSH / command line</li>\r\n</ul>\r\n\r\n\r\n- - -\r\n\r\n**Useful but non-essential skills**\r\n\r\n<ul>\r\n<li>Sketch / Illustrator</li>\r\n<li>3DS Max / Maya or equiv.</li>\r\n<li>3D modelling, rigging, rendering or lighting</li>\r\n</ul>\r\n\r\n\r\n\r\n- - -\r\n\r\n**PERKS**\r\n\r\n- - -\r\n\r\nWe believe great talent like you deserves a great job, so here’s just some of the perks we offer:\r\n\r\n\r\n**Personal development** - enabling you to create great things\r\n\r\n<ul>\r\n<li>Creative freedom to express your talents</li>\r\n<li>Long term, ongoing position</li>\r\n<li>Wide variety of clients and job types gives a fantastic opportunity to expand your repertoire and experience</li>\r\n<li>Research + development program allows time to explore new and emerging technologies</li>\r\n<li>Chance to work with global & national brands, governments, and major organisations</li>\r\n<li>Our award submissions policy is extensive and successful - meaning you have more chance to gain international recognition</li>\r\n</ul>\r\n\r\n\r\n**Awesome work environment** - having an encouraging and beautiful place to work stimulates creativity\r\n\r\n<ul>\r\n<li>Relaxed studio environment</li>\r\n<li>Large bespoke workstations give generous wrap-around desk space and integrated meeting nooks for inter-team discussions</li>\r\n<li>Ergonomic chairs and individual workstation lighting keep you healthy at work</li>\r\n<li>Shower facilities for that lunchtime run or bike ride</li>\r\n<li>Relaxing lounge area with VR, 4K TV, music and video-game facilities to let you chill out when you need a break, or lay down a serious 4-up challenge for your work mates!</li>\r\n<li>Private gardens with benches to enjoy your lunch, or snooze under the Willow Tree planted in 1884 on hot days</li>\r\n<li>Full kitchen facilities for those who like to prepare a fresh lunch</li>\r\n<li>Mellow and encouraging work ambiance</li>\r\n<li>Choice of brand new Mac or PC with 2 additional dual HD monitors</li>\r\n<li>All the latest creative software you need</li>\r\n<li>Comprehensive internal design + development environments for rapid and efficient work practices</li>\r\n<li>4 tier disaster recovery plan to protect our data, the company and your employment</li>\r\n</ul>\r\n\r\n\r\n**Enviable Location** - because you have to be happy where you live\r\n\r\n<ul>\r\n<li>Tassie’s fast becoming a hot-bed of hi-tech talent attracted here by the highly desirable lifestyle of world-class art, food, wine and natural beauty - all wrapped up in reduced cost of living, affordable housing, and the cleanest, sweetest air anywhere!</li>\r\n<li>Almost no traffic jams (seriously I’ve never sat in a traffic jam in over 8 years)</li>\r\n<li>Willow Cottage Studio is based in the stunning historic town of Richmond – first settled in 1823</li>\r\n<li>Safe and peaceful village surroundings</li>\r\n<li>Family friendly with an idyllic village green which hosts numerous music, cultural and heritage events</li>\r\n<li>Richmond has some of the State’s top primary schools</li>\r\n<li>Quiet roads - perfect for lunchtime runs and family bike rides</li>\r\n<li>15 mins to Hobart, 10 mins to the airport</li>\r\n<li>Access to some of the World’s most stunning scenery including Wineglass Bay, and World Heritage Areas such as the Tarkine Rainforest and the idyllic Bay of Fires</li>\r\n<li>Miles of jaw-dropping beaches, including our favourite dog friendly one only 10 mins away!</li>\r\n<li>Mt Wellington and Blue Derby are world-class mountain bike parks which have every trail type a fat-tyre enthuisast could dream of, and breathtaking climbing / bouldering are perfect for budding Chris Sharma's out there </li>\r\n</ul>\r\n- - -",
        "featured": "true",
        "featured_text": "Fancy a career developing in ARKit + Augmented Reality?",
        "remote": "false",
        "term": "Full Time",
        "title": "Augmented Reality developer (ARKit / Tango) / Javascript UX engineer (React / Node)",
        "url": "http://codepen.io/url/job/zpNJmr",
        "hashid": "Dkdmmz",
        "address": {
            "address1": "2 / 4 Percy Street",
            "city": "Richmond",
            "state_prov": "TAS",
            "postal_code": "7025",
            "country": "AU"
        }
    },
    {
        "company_name": "EF Education First",
        "description": "",
        "featured": "false",
        "featured_text": "",
        "remote": "false",
        "term": "Full Time",
        "title": "UI Web Developer",
        "url": "http://codepen.io/url/job/rObAeZ",
        "hashid": "QzQZrA",
        "address": {
            "address1": "2 Education Circle",
            "city": "Cambridge",
            "state_prov": "MA",
            "postal_code": "02141",
            "country": "US"
        }
    }
];

test('JobTable correctly filters out correct number of items', () => {
    const jobList = shallow(
        <JobTable jobs={jobs} filter="" favorites={[]} favoriteClicked={() => {}}/>
    );

    expect(jobList.node.props.children[1].length).toEqual(jobs.length);

    const jobListFiltered = shallow(
        <JobTable jobs={jobs} filter="web" favorites={[]} favoriteClicked={() => {}}/>
    );

    expect(jobListFiltered.node.props.children[1].length).toEqual(5);
});
