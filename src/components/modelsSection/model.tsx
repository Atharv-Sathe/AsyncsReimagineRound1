import Missions from "./Missions";

export default function Model() {
  return (
    <>
      <h2 className="text-5xl text-white pl-20 pt-20 pb-10 font-space">
        Missions
      </h2>
      <div className="flex flex-col gap-16">
        <Missions
          title="Chandrayaan-3"
          description="Chandrayaan-3 is a follow-on mission to Chandrayaan-2 to demonstrate
          end-to-end capability in safe landing and roving on the lunar surface.
          It consists of Lander and Rover configuration. It will be launched by
          LVM3 from SDSC SHAR, Sriharikota. The propulsion module will carry the
          lander and rover configuration till 100 km lunar orbit. The propulsion
          module has Spectro-polarimetry of Habitable Planet Earth (SHAPE)
          payload to study the spectral and Polari metric measurements of Earth
          from the lunar orbit."
          hrefUrl="https://isro.gov.in/Chandrayaan3_Details.html"
        />
        <Missions
          rtl
          title="ADITYA-L1"
          description="Aditya-L1, India's dedicated solar study satellite, carries seven 
          indigenous payloads developed by ISRO and Indian academic institutes.
          Positioned at Lagrange Point 1 (L1), approximately 1.5 million km away 
          from Earth, Aditya-L1 maintains an uninterrupted view of the Sun, studying its outer atmosphere. 
          It won't land on the Sun or approach it any closer. 
          This strategic placement allows Aditya-L1 to access solar radiation and magnetic storms before they are influenced 
          by Earth's magnetic field and atmosphere, optimizing its operational efficiency. "
          hrefUrl="https://www.isro.gov.in/Aditya_L1-MissionDetails.html"
        />
        <Missions
          title="Gaganyaan"
          description="The primary mandate of HSFC is to spearhead ISRO's Gaganyaan programme through co-ordinated efforts and 
          focus all the activities that are carried out in other ISRO centres, research labs in India, Indian academia and 
          Industries towards accomplishing the mission. HSFC, as the lead Centre for Human space flight activities conforms 
          to high standards of reliability and human safety in undertaking R&D activities in new technology areas, such as 
          life support systems, Human Factors Engineering, Bioastronautics, Crew training and Human rating & certification."
          hrefUrl="https://www.isro.gov.in/Gaganyaan.html"
        />
        <div className="flex justify-center z-10">
          <a href="https://www.isro.gov.in/Mission.html" target="_blank">
            <p className="text-xl text-white p-4 mb-16 rounded border-2">
              More Missions
            </p>
          </a>
        </div>
      </div>
    </>
  );
}
