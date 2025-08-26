
import MainSection from "../components/MainSection";
import WhyChoose from "../components/Whychose";
import Courses from "../components/Courses";
import Mission from "../components/Mission";
import JoinCTA from "../components/Join";
import Certificate from "../components/Certificate";
import Contact from "../components/Contact";


function HomePage(){
    return (
        <>
            
            <MainSection/>
            <WhyChoose></WhyChoose>
            <Courses></Courses>
            <Mission></Mission>
            <JoinCTA></JoinCTA>
            <Certificate></Certificate>
            <Contact></Contact>
           
        </>
    )
}

export default HomePage