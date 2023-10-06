import React from "react";

export default function About(props) {

  // const [myStyle, setMyStyle] = useState({
  //     color: '#F0F0F0',
  //     backgroundColor: '#191717'
  // })

  let myStyle = {
      color: props.mode === 'dark' ? '#fff' : '#000',
      backgroundColor: props.mode==='dark'?'#394867':'white' 
  }


  return (
    <div className="container py-2 px-4" style={{color: props.mode === 'dark' ? '#fff' : '#000'}}>
      <h1 className="mb-2">About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            Textutils gives you a way to analyze your text quickly and efficiently.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>Free To Use</strong> 
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            Be it word count, character count or TextUti1s is a free character counter tool that provides instant character count & word count statistics for a given text. TextUti1s reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>Browser Compatible</strong> 
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
