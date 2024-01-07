import './App.css';
import thumbsup from './thumbsup.png';
import oghu from './ooghu.jpg';
import {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
      <div className="LeftSide">   
        <img src={oghu} alt='oghu' className='ooghu'></img>
        <Link to='/'>
          <button className='about'>ABOUT</button>
        </Link>
        <Link to='/Todolist'>
          <button className='todolist'>TODOLIST</button>
        </Link>
      </div>
        <Routes>
          <Route path='/' element={<Aboutpage></Aboutpage>}>
          </Route>
          <Route path='/Todolist' element={<Todopage></Todopage>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}


/** 오른쪽 부분 */
function Aboutpage() {
  return (
    <div className='RightSide'>
      <div className='first'>
        <p className='name'>Haein <span className='jung'>Jung</span></p>
        <p className='slist'><span className='stitle'>Name</span>&nbsp;&emsp;&ensp;정해인</p>
        <p className='slist'><span className='stitle'>email</span>&emsp;&emsp;&nbsp;aa4075jhi@naver.com</p>
        <p className='slist'><span className='stitle'>Address</span>&ensp;&ensp;Nowon-gu, Seoul</p>
        <p className='slist'><span className='stitle'>Education</span><a href='https://namu.wiki/w/%EC%84%9C%EB%9D%BC%EB%B2%8C%EA%B3%A0%EB%93%B1%ED%95%99%EA%B5%90' target='_blank' rel='noreferrer noopener'>Sorabol High School</a></p>
      </div>
      <div className='second'>
        <div className='slist'>
          <p className='hello'>Hello, my name is Haein. Im majoring Electrical Engineering at Korea University, and now Im learning web front-end development in GDSC KU. This page is for GDSC FE class, as a final assignment.</p>
          
          <Thumbsup></Thumbsup>
        </div>
      </div>
    </div>
  )
}



function Thumbsup() {
  const [cnt, setCnt] = useState(Math.floor(Math.random()*100));

  return (
    <div className='thumbs'>
      <img src={thumbsup} alt='thumbsup' className='thumbsup' onClick={()=>{setCnt(cnt + 1)}}></img>
      <div className='count'>{cnt}</div>
    </div>   
  )
}


/**TODOLIST 페이지 */
function Todopage() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const deleteTask = function () {
    setTasks([]);
  };

  const addTask = () => {
    if (task !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  return(
    <div className='todopage'>
        <h1>Todo List</h1>
        <div className="what">
          <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Write your text" />
          <button onClick={addTask} className='addtask'>Add Task</button>
        </div>
        <ul>
          {tasks.map((t, index) => (
            <li key={index + 1}>
              {index + 1}.&emsp;{t}
            </li>
          ))}
        </ul>
        <button onClick={deleteTask}>Delete All</button>
    </div>
  )
}



export default App;
