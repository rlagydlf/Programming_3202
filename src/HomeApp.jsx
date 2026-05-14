import {useState} from 'react';
import CounterApp from './CounterApp.jsx';
import TodoListApp from './TodoListApp.jsx';

function ButtonPageApp({ setPage }) {
    return (
        <>
            <h1>App 목록</h1>
            <ul>
                <li><button onClick={() => setPage('counterapp')} style={{width:"100px", height:"100px", fontSize:"1.1rem"}}>🔢<br />CounterApp</button></li>
                <li><button onClick={() => setPage('todolistapp')} style={{width:"100px", height:"100px", fontSize:"1.1rem"}}>✅<br />TodoListApp</button></li>
            </ul>
        </>
    );
}

export default function HomeApp() {
    const [page, setPage] = useState('home');

    return (
        <>  
            {/* page가 home이면 <ButtonPageApp /> */}
                {page === 'home' && <ButtonPageApp setPage={setPage} />}

            {/* page가 home이 아니면, home으로 가는 버튼 만들자 */}    
            {page !== 'home' && (
                <button onClick={() => setPage('home')}
                    style={{position:"fixed", left:"10px",bottom:"10px", fontSize:"1.1rem", cursor:"pointer", borderRadius:"8px", padding:"6px", backgroundColor:"#eee", border:"none"}}>
                    🏠hooooome
                </button>
            )}

            {/* page가 counterapp이면 <CounterApp /> */}
                {page === 'counterapp' && <CounterApp />}
            {/* page가 todolistapp이면 <TodoListApp /> */}
                {page === 'todolistapp' && <TodoListApp />}
        </>
    )
}   