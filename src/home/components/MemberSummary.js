import React from "react";
import {Link} from "react-router-dom";
import "./MemberSummary.scss";


export const memberData = [
  {
    type: "students",
    productName: "의료진용 데스크탑 앱",
    title: "더욱 효율적인 환자상담",
    description: "사전문진, 자동 리포트 작성으로 반복되는 업무를 줄여\n 환자상담에만 집중할 수 있는 환경을 제공합니다",
    learnMoreUrl: "/product/desktop",
    downloadLinks: ["https://www.google.com"]
  },
  {
    type: "professor",
    productName: "환자용 모바일 앱",
    title: "체계적인 자기주도적 질병관리",
    description: "나의 건강데이터 관리는 물론, 체계적인 상담 시스템과\n 다양한 교육 자료로 환자분들의 질병관리를 돕습니다",
    learnMoreUrl: "/product/mobile",
    downloadLinks: ["https://www.google.com", "https://www.google.com"]
  }
]

const MemberSummary = () => {
    return (
    <div className="member-summary">
      <div className="boundary">
        {memberData.map((platform)=>{
          return (
            <div className={`member ${platform.type}`}>
              <div className="section-content">
                <span>{platform.memberName}</span>
                <h1>{platform.title}</h1>
                <p>{platform.description}</p>



              </div>

              <div className="section-img">
                <div className="fade-layer"/>
              </div>

            </div>
          )
        })}

      </div>
    
    </div>
    )
  }
  
  export default MemberSummary;