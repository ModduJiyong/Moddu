import React from "react";
import "./Members_student.scss";
import {memberData} from "../home/components/MemberSummary";
import {useLocation} from "react-router-dom";
import Intro from "../home/components/Intro";
import Footer from "../general/Footer";
import Top from "../general/Top";

/*const memberDetail={
  "professor":[
    {
      title: "사전문진 & 메신저 정기상담",
      description:
        "의료진과 정기상담을 시작하기 전에 사전문진으로 필요한 정보를 입력하여\n" +
        "더욱 빠르고 효과적인 상담이 가능합니다.\n" +
        "또한, 정기상담으로 주고받은 모든 내용은\n" +
        "나의 기록으로 남아 언제든 확인할 수 있습니다",
      images : [
     
      ]
    },
   
  ],
  "students":[
    {
      title: "효율적이고 편리한 메세지 상담",
      description:
        "환자별 상담을 한 눈에 확인할 수 있어 즉각적인 응대가 가능하며,\n" +
        "반복적으로 전달해야하는 정보를 자주 사용하는 문구로 등록하여\n" +
        "더욱 효율적인 상담이 가능합니다",
      images : [
      //  require("../general/img/desktop-feature-1.png"),
      ]
    },
  
  ]
}
const renderMemberHeader=(platform)=>{
  let member;
  if(platform==="professor")
    member=memberData[1];
  else
    member=memberData[0];
  return(
    <div className={`member-header ${platform}`}>
      <div className="boundary">
        <div className="section-img"><div className="fade-layer"/></div>
        <div className="section-content">
          <span>{member.memberName}</span>
          <h1>{member.title}</h1>
          <p>{member.description}</p>
        </div>
      </div>

    </div>
  )
}
const renderMemberDetail = (platform) => {
  return (
    <div className={`member-body ${platform}`}>
      {memberDetail[platform].map( (feature, index) => {
        return (
          <div className="feature-item" key={index}>
            <div className="feature-images">
              {feature.images.map((img, j) => {
                return <img src={img.default} alt="" key={j}/>
              })}
            </div>
            <div className="feature-content">
              <h1>{feature.title}</h1>
              <p>{feature.description}</p>
              {feature.subDescription && (<p className="sub">{feature.subDescription}</p>)}
            </div>
          </div>
        )
      })}

    </div>
  );
}



const Members = () => {
  let platform;
  const location=useLocation();
  if(location.pathname.includes("professor"))
    platform="professor";
  else 
    platform="students";
  return (
    <div className="members">
      {renderMemberHeader(platform)}
      {renderMemberDetail(platform)}

      <Top/>
      <Footer/>
    </div>
  
  )
}
export default Members;
*/

const Student = () => {

  return (
    <div className="members_student">
      <Intro/>
      <Footer/>
    </div>
  
  )
}
export default Student;
