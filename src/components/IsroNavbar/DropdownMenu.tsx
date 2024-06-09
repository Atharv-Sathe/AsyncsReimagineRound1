import './DropdownMenu.css';

interface DropDownItem {
  [key: string]: string[];
}

const dropDownList: DropDownItem = {
  'About' : [
    'Profile',
    'Vision-Mission-Objectives',
    'Citizen Charter',
    'Organisation Structure',
    'Dos Center/units/enterprises',
    'Secretary, Dos/Chairman, ISRO',
    'Former Secretaries/Chairmen',
    'Space Commission',
    'Autonomous Bodies',
    'Genesis',
    'Timeline',
    "Who's Who",
    'Contact Us'
  ],

  'Activities' : [
    'Missions Accomplished',
    'Upcoming Missions',
    'Science',
    'Launchers',
    'Satellites',
    'Space Applications',
    'Research & Development',
    'Gaganyaan',
    'Ground Segment Activities',
    'Promotion & Authorisation',
    'International Cooperation',
    'Capcity Building',
    'Training',
    'Outreach'
  ],
  
  'Services' : [
    "Satellite system, bus, sub-system, testing",
    "Mission support",
    "Ground systems support",
    "Space based Earth observation: Bhuvan & BhooSindhri",
    "Satellite Communication & Lease of transponders",
    "Meteorological & Oceanographic Satellite Data",
    "Satellite Navigation services",
    "Disaster Services & National Mapping",
    "Aerial Services & Digital & International",
    "North-East India region specific applications Services",
    "VEDAS service",
    "Launch Service",
    "Satellite aided search & rescue"
  ],

  'Programmes' : [
    "Academic courses",
    "Conference Grants",
    "Fellowships",
    "Space merchandise",
    "Space Tutor",
    "Space on wheels",
    "Student satellite",
    "Technology Transfer",
    "UNNATI",
    "YUVIKA"
  ],

  'Resources' : [
    "Atlases: River basin",
    "Bhuvan for Emergency Management",
    "Database",
    "F-GAS Tool",
    "I-GRASP",
    "Info for Climate & Environment studies",
    "Landslide Atlas of India",
    "Meteorology & Oceanographic data",
    "Mobile Apps",
    "Monthly Summary of DOS",
    "MOSDAC",
    "NAVIC Time",
    "Publications",
    "School Bhuvan - NCERT",
    "Science Data"
  ],

  'Engagements' : [
    "Academia",
    "Ask an expert",
    "Educators",
    "Industry",
    "Internship & Projects",
    "Join ISRO",
    "Media",
    "Researchers",
    "Start-ups",
    "Students",
    "Training",
    "Visitors"
  ]  
}

interface DropdownMenuProps {
  title: string;
}

function DropdownMenu({title}: DropdownMenuProps) {
  return (
    <div id="DropdownMenu"
    className="absolute -left-6 max-w-fit"
    >
      <ul className="w-max text-base text-left">
          {dropDownList[title].map((item, index) => <li 
          key={index}
          className="hover:bg-gray-200 hover:cursor-pointer hover:text-black pt-2 px-2  rounded-md
           transition-colors duration-300 ease-in-out
          "
          >
          {item}</li>)}
      </ul>
    </div>
  );
}

export default DropdownMenu;