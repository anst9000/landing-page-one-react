import  "./Demo.css";
import Iframe from 'react-iframe'

export const  Demo  = () => {
  return (
  <div className='demo' id='demo'>
    <h2>Demo</h2>
    <span className='line'></span>
    <div className='container'>
      <div className='col-1'>
        <p>More Than 100 Financial Planners,</p>
        <p>One Philosophy</p>
        <p>Every single one of our financial advisors receives rigorous training according to John Doe’s philosophy based on academic research (including that of a Nobel laureate in Economics) and Behavioral Finance.</p>
        <button className='button'>Get your free financial analysis</button>
      </div>
      <div className='col-2'>
        <Iframe url="https://www.youtube.com/embed/oeqP5JtihMA"
          width="570px"
          height="320px"
          id="myId"
          className="iframe"
          display="initial"
          position="relative"/>
      </div>
    </div>
  </div>
)
};

export default Demo;
