import './hello.css';

function hello() {

    function hiClick() {
        alert("인사 제출이 완료되었습니다");
    }

    return 
    {
       <div>헬로우안녕하세요</div>;
       <form>
        <label htmlFor='hello'인사를하세요></label>
        <br/>
        <input id='hello' type='text' />
        <button onClick={hiClick}>제출하기</button>
       </form>
    }
}


export default hello;