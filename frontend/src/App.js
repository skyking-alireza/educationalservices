import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header";
import Signup from "./pages/signup";
import Signupmaster from "./pages/signupmaster";
import Signupstudent from "./pages/signupstudent";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Elections from "./pages/elections";
import Submit_vote from "./pages/submit_vote";
import Footer from "./components/footer";
import Votes from "./pages/votes";
import Courses from "./pages/courses";
import Blogs from "./pages/blogs";
import Blog from "./pages/blog";
import {useState,useEffect} from "react";
import Admin from "./pages/admin";
import Master from "./pages/master";
import {Alerts} from "./components/alerts";
import {course_api} from "./api/course";
function App() {
    const [sessionuser, setSessionuser] = useState(window.localStorage.getItem('accesstoken') || null);
    const [courses, setCourses] = useState([])
    useEffect(() => {
        (async () => {
            await course_api('courses').then((e) => {
                setCourses(e.data)
            }).catch((e) => {
                for (var value in e.response.data){Alerts({text:e.response.data[value],status:'danger'})}
            })
        })()
    }, [])
    const setsession = (accesstoken) => {
      window.localStorage.setItem('accesstoken' , accesstoken)
      setSessionuser(accesstoken)
    }
    return (
        <>
            <Header sessionuser={sessionuser} />
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/admin'} element={<Admin setsesstion={setsession}/>}/>
                <Route path={'/signup'}  element={<Signup />}/>
                <Route path={'/signupmaster'}  element={<Signupmaster />}/>
                <Route path={'/signupstudent'}  element={<Signupstudent />}/>
                <Route path={'/login'} element={<Login setsesstion={setsession} />}/>
                <Route path={'/profile'} element={<Profile setsesstion={setsession} />}/>
                <Route path={'/elections'} element={<Elections/>}/>
                <Route path={'/submitvote/:id'} element={<Submit_vote />}/>
                <Route path={'/blog/:id'} element={<Blog />}/>
                <Route path={'/result_election'} element={<Votes />}/>
                <Route path={'/courses'} element={<Courses courses={courses} />}/>
                <Route path={'/blogs'} element={<Blogs />}/>
                <Route path={'/master'} element={<Master setsesstion={setsession}/>}/>
            </Routes>
            <Footer />
        </>

    );
}

export default App;
