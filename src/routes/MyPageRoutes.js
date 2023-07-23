import ProfilePage from "../pages/ProfilePage";
import MyLikePage from "../pages/MyLikePage";
import {Route, Routes} from "react-router-dom";
import MyBoardPage from "../pages/MyBoardPage";

const MyPageRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="profile" element={<ProfilePage/>}/>
                <Route path="likes" element={<MyLikePage/>}/>
                <Route path="board" element={<MyBoardPage/>}/>
            </Routes>
        </div>
    );
};

export default MyPageRoutes;