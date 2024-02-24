import React from 'react'
import NavBar from "../components/NavBar"
import SideNavBar from "../components/SideNavBar"
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
    { id: 0, value: 10, label: 'series A' },
    { id: 1, value: 15, label: 'series B' },
    { id: 2, value: 20, label: 'series C' },
  ];

const HomePage = () => {
  
        
      
    return (
       <div>
        <div>
            <NavBar/>
        </div>
       
        <div className="container-fluid" style={{ paddingLeft: 0 }}>

        <div className="row">
            <div className="col-xl-2 col-sm-3">
                <SideNavBar/>
            </div>
            <div className="col-xl-4" style={{ paddingTop: '20px' }}>
            <div style={{
    borderRadius: '10px', // Adjust the value to change the roundness
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Adjust the values for the shadow effect
    backgroundColor: 'rgb(255, 248, 231)', // Creamy background color
}}>
    <BarChart
      series={[
        { data: [35, 44, 24, 34] },
        { data: [51, 6, 49, 30] },
        { data: [15, 25, 30, 50] },
        { data: [60, 50, 15, 25] },
      ]}
      height={290}
      xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
</div>
            
            </div>
            <div className="col-xl-4" style={{ paddingTop: '20px' }}>
            <div style={{
    borderRadius: '10px', // Adjust the value to change the roundness
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Adjust the values for the shadow effect
    backgroundColor: 'rgb(255, 248, 231)', // Creamy background color
}}>
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={200}
    />
</div>
            
            </div>
        </div>
    </div>


       </div>
    )

        
  };
  
export default HomePage;