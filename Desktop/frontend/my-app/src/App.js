import './App.css';

const App = () => {
    return (
        <div className="layout">
            <div className="regi-box">
                <div className="regi-title">게시물 등록</div>
                <div className="writer-password-title">
                    <div>작성자</div>
                    {/* <div class="enroll-required-indicator"> *</div> */}
                    <div>비밀번호</div>
                    {/* <div class="enroll-required-indicator"> *</div> */}
                </div>
                <div className="writer-password-input-box">
                    <input
                        text="text"
                        placeholder="   작성자 명을 입력해 주세요"
                        className="writer-password-input"
                    ></input>
                    <input
                        text="text"
                        placeholder="   비밀번호를 입력해 주세요"
                        className="writer-password-input"
                    ></input>
                </div>

                <div className="title-box">
                    <div>제목</div>
                    <input
                        type="text"
                        placeholder="   제목을 입력해 주세요"
                        className="title-input"
                    ></input>
                </div>
                <div className="content-box">
                    <div>내용</div>
                    <textarea
                        type="text"
                        placeholder="    &#13;&#10;   내용을 입력해 주세요"
                        className="content-textarea"
                    ></textarea>
                </div>
            </div>
            <div className="address-box">
                <div>주소</div>
                <div className="address-number-box">
                    <input
                        type="text"
                        placeholder="213142"
                        className="address-number"
                    ></input>
                    <button className="address-number-button">
                        우편번호 검색
                    </button>
                </div>

                <div className="address-input-box">
                    <input
                        type="text"
                        placeholder="   주소를 입력해 주세요"
                        className="address-input"
                    ></input>
                    <input
                        type="text"
                        placeholder="   상세주소"
                        className="address-detail-input"
                    ></input>
                </div>
            </div>

            <div className="youtubeBox">
                <div>유튜브 링크</div>
                <input
                    placeholder="링크를 입력해 주세요"
                    className="youtubeBox-input"
                ></input>
            </div>

            <hr />

            <div className="photoBox">
                <div>사진첨부</div>
                <img src="./assets/add_image.jpg" alt="add_image"></img>
                <img src="./assets/add_image.jpg" alt="add_image"></img>
                <img src="./assets/add_image.jpg" alt="add_image"></img>
            </div>
            <div className="bottom-button-box">
                <button className="bottom-button-cancle">취소</button>
                <button className="bottom-button-regi">등록하기</button>
            </div>
        </div>
    );
};

export default App;
