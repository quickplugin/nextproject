import PersonalCard from "../../components/PersonalCard";
import { DashBoardContainer,DashBoardContent} from "../../styles/container/dashboard/dashboard.style";
import Carousel from "react-material-ui-carousel";

const DashBoard = () => {
    return (
        <DashBoardContainer>
            <DashBoardContent>
            <Carousel autoPlay={false} stopAutoPlayOnHover={true} >
            <PersonalCard />
            <PersonalCard />
            </Carousel>
            </DashBoardContent>
        </DashBoardContainer>
    )
}

export default DashBoard;