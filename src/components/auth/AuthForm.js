import Button from "../common/Button";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {useState} from "react";

const AuthFormBlock = styled.div`
  align-items: center; /* 수직 중앙 정렬 */
  display: flex; /* 내부 내용 중앙 정렬 */
  flex-direction: column; /* 플렉스 내의 아이템 배치 */
  margin-top: 200px;

  div {
    margin-bottom: 30px;
  }

  h3 {
    margin-bottom: 10px;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  border: 0.5px solid darkgrey;
  border-radius: 2.5px;
  font-size: 1rem;
  padding: 0.25rem 0 0.25rem 0.1rem;
`;

const StyledSelect = styled.select`
  width: 100%;
  border: 0.5px solid darkgrey;
  border-radius: 2.5px;
  font-size: 1rem;
  padding: 0.25rem 0 0.25rem 0.1rem;
`;

const StyledOption = styled.option`
  width: 100%;
  box-sizing: border-box;
  border: 0.5px solid darkgrey;
  border-radius: 2.5px;
  font-size: 1rem;
  padding: 0.25rem 0 0.25rem 0.1rem;
  background-color: ${(props) => (props.selected ? '#4BC75F' : '#FFF')};
`;

const Footer = styled.div`
  margin-top: 30px;
  text-align: center;
  font-size: 0.7rem;
`;

const textMap = {
    login: '로그인', // 프로퍼티
    signUp: '회원가입',
}; // 객체

const AuthForm = ({type, form, onChange, onSubmit, onSelectPart}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPart, setSelectedPart] = useState('직군');

    const handleIsOpen = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectedPart = part => {
        setSelectedPart(part);
    };

    const text = textMap[type];

    return (
        <AuthFormBlock>
            <h2>{text}</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <h3>이메일</h3>
                    <StyledInput name="email"
                                 placeholder="이메일"
                                 value={form.email}
                                 onChange={onChange}
                                 required="required"
                    />
                </div>
                <div>
                    <h3>비밀번호</h3>
                    <StyledInput name="password"
                                 placeholder="비밀번호"
                                 type="password"
                                 value={form.password}
                                 onChange={onChange}
                                 required="required"
                    />
                </div>
                {type === 'signUp' && (
                    <>
                        <div>
                            <h3>비밀번호 확인</h3>
                            <StyledInput name="checkPassword"
                                         placeholder="비밀번호 확인"
                                         type="password"
                                         value={form.checkPassword}
                                         onChange={onChange}
                                         required="required"
                            />
                        </div>
                        <div>
                            <h3>이름</h3>
                            <StyledInput name="name"
                                         placeholder="이름"
                                         value={form.name}
                                         onChange={onChange}
                                         required="required"
                            />
                        </div>
                        <div>
                            <h3>전화번호</h3>
                            <StyledInput name="phoneNumber"
                                         placeholder="010 - XXXX - XXXX"
                                         value={form.phoneNumber}
                                         onChange={onChange}
                                         required="required"
                            />
                        </div>
                        <div>
                            <h3>URL</h3>
                            <StyledInput name="referenceUrl"
                                         placeholder="URL"
                                         value={form.referenceUrl}
                                         onChange={onChange}
                            />
                        </div>
                        <div>
                            <h3>직군</h3>
                            <StyledSelect value={selectedPart} onClick={handleIsOpen} onChange={part => handleSelectedPart(part)}>
                                {selectedPart}
                            </StyledSelect>
                            {isOpen && (['BackEnd', 'FrontEnd', 'Mobile', 'Infra', 'DBA', 'Developer'].map(part => (
                                <StyledOption name="part"
                                              key={part}
                                              value={part.toUpperCase()}
                                              onClick={onSelectPart}
                                >
                                    {part}
                                </StyledOption>
                            )))}
                        </div>
                        <div>
                            <h3>소속</h3>
                            <StyledInput name="organization"
                                         placeholder="소속"
                                         value={form.organization}
                                         onChange={onChange}
                            />
                        </div>
                        <div>
                            <h3>한 줄 소개</h3>
                            <StyledInput name="motto"
                                         placeholder="한 줄 소개"
                                         value={form.motto}
                                         onChange={onChange}
                            />
                        </div>
                    </>
                )}
                <Button fullwidth="true">{text}</Button>
            </form>
            <Footer>
                {type === 'login' ? (
                    <p>회원이 아니신가요? <Link to="/auth/signup" style={{color: " #4BC75F"}}>회원가입</Link>하러 가기</p>
                ) : (
                    <p>이미 회원이신가요? <Link to="/auth/login" style={{color: " #4BC75F"}}>로그인</Link>하러 가기</p>
                )}
            </Footer>
        </AuthFormBlock>
    );
};

export default AuthForm;