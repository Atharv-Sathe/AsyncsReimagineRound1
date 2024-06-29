import "./DropdownMenu.css";

interface DropDownItem {
  [key: string]: string[][];
}

const dropDownList: DropDownItem = {
  About: [
    ["https://www.isro.gov.in/profile.html", "Profile"],
    [
      "https://www.isro.gov.in/Vision-Mission-Objectives.html",
      "Vision-Mission-Objectives",
    ],
    ["https://www.isro.gov.in/citizencharter.html", "Citizen charter"],
    ["https://www.isro.gov.in/organisation.html", "Organisational structure "],
    [
      "https://www.isro.gov.in/isro_centre.html",
      " DoS Centers/units/enterprises",
    ],
    [
      "https://www.isro.gov.in/leadership.html",
      "Secretary, DoS/ Chairman, ISRO",
    ],
    [
      "https://www.isro.gov.in/formerchairman.html",
      "Former Secretaries/Chairmen",
    ],
    ["https://www.isro.gov.in/SpaceCommision.html", " Space Commission"],
    ["https://www.isro.gov.in/autonomous.html", "Autonomous bodies "],
    ["https://www.isro.gov.in/genesis.html", "Genesis "],
    ["https://www.isro.gov.in/Timeline.html", "Timeline"],
    ["https://www.isro.gov.in/whoswho.html", "Who's who"],
    ["https://www.isro.gov.in/contact.html", " Contact us"],
  ],

  Activities: [
    ["https://www.isro.gov.in/Mission.html", "Missions accomplished"],
    ["https://www.isro.gov.in/FutureMissions.html", "Upcoming Missions"],
    ["https://www.isro.gov.in/Science.html", "Science"],
    ["https://www.isro.gov.in/Launchers.html", "Launchers"],
    ["https://www.isro.gov.in/Satellites.html", "Satellites"],
    ["https://www.isro.gov.in/SpaceApplications.html", "Space Applications"],
    [
      "https://www.isro.gov.in/researchdevelopment.html",
      "Research & Development",
    ],
    ["https://www.isro.gov.in/Gaganyaan.html", "Gaganyaan"],
    [
      "https://www.isro.gov.in/GroundSegmentActivities.html",
      "Ground Segment activities",
    ],
    ["https://www.isro.gov.in/IN-SPACe.html", "Promotion & Authorisation"],
    [
      "https://www.isro.gov.in/InternationalCoOperation.html",
      "International co-operation",
    ],
    ["https://www.isro.gov.in/CapacityBuilding.html", "Capacity building"],
    ["https://www.isro.gov.in/Training.html", "Training"],
    ["https://www.isro.gov.in/Outreach.html", "Outreach "],
  ],

  Services: [
    ["https://www.isro.gov.in/launchservices.html", "Launch service"],
    [
      "https://www.isro.gov.in/SatelliteSystemBusSubSystemTesting.html",
      "Satellite: system, bus, sub-system, testing",
    ],
    ["https://www.isro.gov.in/missionsupport.html", "Mission support"],
    [
      "https://www.isro.gov.in/GroundSystemSupport.html",
      "Ground systems support",
    ],
    [
      "https://www.isro.gov.in/SatelliteCommunicationApplications.html",
      "Satellite Communication & Lease of transponders",
    ],
    [
      "https://www.isro.gov.in/SpaceBasedEarthObservationServices.html",
      "Space based Earth observation: Bhuvan & Bhoonidhi",
    ],
    [
      "https://www.isro.gov.in/SatelliteNavigationServices.html",
      "Satellite Navigation services",
    ],
    [
      "https://www.isro.gov.in/MeteorologicalOceanographicApplications.html",
      "Meteorological & Oceanographic Satellite Data ",
    ],
    [
      "https://www.isro.gov.in/DisasterManagementNationalInternational.html",
      "Disaster Management: National & International ",
    ],
    [
      "https://www.isro.gov.in/AerialServicesDigitalMapping.html",
      "Aerial Services & Digital Mapping ",
    ],
    [
      "https://www.isro.gov.in/North-EastIndiaRegionSpecificApplications.html",
      "North-East India region specific applications Services",
    ],
    ["https://www.isro.gov.in/VedasServices.html", "VEDAS services"],
    [
      "https://www.isro.gov.in/TransferOrbitService.html",
      "Transfer Orbit Service",
    ],
    [
      "https://www.isro.gov.in/SatelliteAidedSearchAndRescue.html",
      "Satellite aided search & rescue",
    ],
  ],

  Programmes: [
    ["https://www.isro.gov.in/AcademicCourses.html", "Academic courses "],
    ["https://www.isro.gov.in/Conference_Grants.html", "Conference Grants "],
    ["https://www.isro.gov.in/Fellowships.html", "Fellowships"],
    ["https://www.isro.gov.in/Merchandise.html", "Space merchandise"],
    ["https://www.isro.gov.in/spacetutor.html", "Space Tutor "],
    ["https://www.isro.gov.in/SpaceOnWheels.html", "Space on wheels"],
    [
      "https://www.isro.gov.in/Student_Program_Satellite.html",
      "Student Satellite",
    ],
    ["https://www.isro.gov.in/TechnologyTransfer.html", "Technology Transfer"],
    ["https://www.isro.gov.in/UNNATI.html", "UNNATI"],
    ["https://www.isro.gov.in/YUVIKA.html", "YUVIKA"],
  ],

  Resources: [
    ["https://www.isro.gov.in/River_Basin_Atlas.html", " Atlases: River basin"],
    ["https://bhuvan.nrsc.gov.in/", "Bhuvan"],
    ["https://www.isro.gov.in/DBEM.html", "Database for Emergency Management"],
    ["https://feast.vssc.gov.in/", "FEAST Tool"],
    ["https://igrasp.isro.gov.in/", " I-grasp"],
    [
      "https://www.isro.gov.in/InfoClimateEnv.html",
      "Info for Climate & Enviroment studies",
    ],
    [
      "https://www.isro.gov.in/Landslide_Atlas_India.html",
      "Landslide Atlas of India",
    ],
    [
      "https://www.mosdac.gov.in/live/index_one.php?url_name=india",
      "Meteorology & Oceanographic data",
    ],
    ["https://www.isro.gov.in/MobileApps.html", "Mobile Apps"],
    ["https://www.isro.gov.in/MonthlySummary.html", "Monthly Summary of DOS"],
    ["https://www.isro.gov.in/MOSDAC.html", "MOSDAC"],
    ["https://www.sac.gov.in/Vyom/time_current", "NAVIC Time"],
    ["https://www.isro.gov.in/publications.html", "Publications"],
    ["https://bhuvan-app1.nrsc.gov.in/mhrd_ncert/", "School Bhuvan - NCERT"],
    ["https://www.isro.gov.in/Sciencedata.html", "Science Data"],
  ],

  Engagements: [
    ["https://www.isro.gov.in/academia.html", "Academia "],
    ["https://www.isro.gov.in/ISROAPP/login.jsp", "Ask an expert"],
    ["https://www.isro.gov.in/Educators.html", " Educators "],
    ["https://www.isro.gov.in/Industry.html", "Industry"],
    [
      "https://www.isro.gov.in/InternshipAndProjects.html",
      "Internship & Projects ",
    ],
    ["https://www.isro.gov.in/Careers.html", "Join ISRO"],
    ["https://www.isro.gov.in/Press.html", "Media"],
    ["https://www.isro.gov.in/Researchers_en.html", "Researchers"],
    ["https://www.isro.gov.in/Start_ups.html", "Start-ups"],
    ["https://www.isro.gov.in/Students.html", "Students"],
    ["https://www.isro.gov.in/Training.html", "Training "],
    ["https://www.isro.gov.in/Visitors.html", "Visitors "],
  ],
};

interface DropdownMenuProps {
  title: string;
}

function DropdownMenu({ title }: DropdownMenuProps) {
  return (
    <div id="DropdownMenu" className="absolute -left-6 max-w-fit">
      <ul className="w-max text-base text-left">
        {dropDownList[title].map((item, index) => (
          <li
            key={index}
            className="hover:bg-gray-200 hover:cursor-pointer hover:text-black p-1 rounded-md
           transition-colors duration-300 ease-in-out
          "
          >
            <a href={item[0]} target="_blank">
              {item[1]}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropdownMenu;
