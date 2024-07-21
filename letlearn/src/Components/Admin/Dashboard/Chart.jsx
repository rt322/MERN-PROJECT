import React from 'react'
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,ArcElement,Legend} from "chart.js"
import {Line,Doughnut} from "react-chartjs-2"

ChartJS.register(
    CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,ArcElement,Legend
);


export const LineChart = (views=[]) => {
    const labels=getLastYearMonths();

    const options={
        responsive:true,
        plugins:{
            legend:{//tells abt labels of dataset
                position:"bottom"
            },
            title:{
                display:true,text:"Yearly Views"
            }
        }
    };

const data={
    labels,
    datasets:[
        {
            label:"Views",
            data:views,
            borderColor:"purple",
           
        }
    ]
};

  return <Line options={options} data={data} />;
  
}

export const DoughnutChart=({users=[]})=>{
 
const data={
    labels:["Subscribed","Not Subscribed"],
    datasets:[
        {
            label:"Views",
           data: users,//[3,20] 3 subscribed and rest 20 are unsubscribed
            borderColor:["rgb(62,12,171","rgb(214,43,129"],
            backgroundColor:["rgba(62,12,171,0.3)","rgba(214,43,129,0.3)"],
           borderWidth:1
        }
    ]
}
return <Doughnut data={data}/>
}

function getLastYearMonths(){
    const labels=[];

    const months=['jan','feb','mar','apr','may','jun','july','aug','sept','nov','dec']

    const currentMonth=new Date().getMonth();;
    const remain=11-currentMonth;
    for(let i=currentMonth;i<months.length; i--) {
        labels.unshift(months[i])
        if(i===0) break;
    }
    for(let  i=11;i>remain;i--) {
        const element=months[i];
        labels.unshift(element);
        if(i===currentMonth) break;
    }
    return labels;
}
