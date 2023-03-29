// import React, {  useState } from "react"
import ReactECharts from "echarts-for-react"
// import { XAxis } from "recharts"
// import { Card, CardHeader } from "reactstrap"
import {Link} from 'react-router-dom'
// import './BSM_Summary.scss'
// import { ArrowLeftCircle, Facebook, Twitter, Instagram, Globe, Bell, Settings, Hash } from 'react-feather'

function BSMsummary() {
//   const [name, setName] = useState("")
  const data = {
    itemStyle:{color:'#228B22', borderColor:'#DC143C'},
    symbol: "roundRect",
    symbolSize:30,
    name: "Ecommerce App",
      children: [
      {
         name:"Web Stack",
         position: "top",
         symbol: "circle",
         itemStyle:{color:'#228B22', borderColor:'#228B22'},
          lineStyle: {color: '#228B22', opacity:1}, 
          backgroundColor: '#95cb03',
           children: [
           {
            symbol: "pin",
            name: "WEBSRV1",
            itemStyle:{color:'#228B22', borderColor:'#228B22'},
            lineStyle: {color: '#228B22', opacity:1}, 
            children: [
              
              { 
                 symbol: "diamond",
                 itemStyle:{color:'#228B22', borderColor:'#228B22'},
                 lineStyle: {color: '#228B22', opacity:1},
                 name: "Service Status" },
              { 
                symbol: "diamond",
                itemStyle:{color:'#228B22', borderColor:'#228B22'},
                lineStyle: {color: '#228B22', opacity:1},
                name: "Response Time" }
            ]
          },
          {
            symbol: "pin",
            name: "WEBSRV2",
            itemStyle:{color:'#228B22', borderColor:'#228B22'}, 
            lineStyle: {color: '#228B22', opacity:1},
            // value: 3322
            children: [
              { 
                symbol: "diamond",
                itemStyle:{color:'#228B22', borderColor:'#228B22'},
            lineStyle: {color: '#228B22', opacity:1},
                name: "Service Status"},
              { symbol: "diamond",
              itemStyle:{color:'#228B22', borderColor:'#228B22'},
              lineStyle: {color: '#228B22', opacity:1},
                name: "Response Time" }
            ]
          },
          {
            symbol: "pin",
            name: "WEBSRV3",
            itemStyle:{color:'#228B22', borderColor:'#228B22'}, 
            lineStyle: {color: '#228B22', opacity:1},
            // value: 3322
            children: [
              { 
                symbol: "diamond",
                itemStyle:{color:'#228B22', borderColor:'#228B22'},
            lineStyle: {color: '#228B22', opacity:1},
                name: "Service Status"},
              { symbol: "diamond",
              itemStyle:{color:'#228B22', borderColor:'#228B22'},
              lineStyle: {color: '#228B22', opacity:1},
                name: "Response Time" }
            ]
          }
        ]
    },
      {
        name: "Application Stack",
        position: "bottom",
        symbol: "circle",
        itemStyle:{color:'#228B22', borderColor:'#228B22'},
        lineStyle: {color: '#228B22', opacity:1},
        position: "bottom",
        children: [
          { 
            symbol: "pin",
            itemStyle:{color:'#228B22', borderColor:'#228B22'},
            lineStyle: {color: '#228B22', opacity:1},
            name: "APPSRV1", 
            children: [
              
            { symbol: "diamond",
              itemStyle:{color:'#228B22', borderColor:'#228B22'},
              lineStyle: {color: '#228B22', opacity:1},
              name: "API statics"},
            
            { symbol: "diamond",
            itemStyle:{color:'#228B22', borderColor:'#228B22'},
            lineStyle: {color: '#228B22', opacity:1},
              name: "API Reachab"}
          ]
          },
          {
            symbol: "pin",
            itemStyle:{color:'#228B22', borderColor:'#228B22'},
            lineStyle: {color: '#228B22', opacity:1},
            name: "APPSRV2",
            children: [
              { symbol: "diamond",
              itemStyle:{color:'#228B22', borderColor:'#228B22'},
              lineStyle: {color: '#228B22', opacity:1},
                name: "API statics"},
              
              { symbol: "diamond",
              itemStyle:{color:'#228B22', borderColor:'#228B22'},
              lineStyle: {color: '#228B22', opacity:1},
                name: "API Reachab"}
            ]
          }
        ]
      },
      {
          name:"Database",
          position: "bottom",
          distance: 10,
          symbol: "circle",
          itemStyle:{color:'#228B22', borderColor:'#DC143C'},
          lineStyle: {color: '#DC143C', opacity:1},
           backgroundColor: '#95cb03',
            children: [
            {
              symbol: "pin",
             name: "DBSRV1",
             itemStyle:{color:'#228B22', borderColor:'#DC143C'},
            lineStyle: {color: '#DC143C', opacity:1}, 
             children: [
               {symbol: "diamond",
               itemStyle:{color:'#228B22', borderColor:'#228B22'},
               lineStyle: {color: '#228B22', opacity:1}, 
                name: "DB service status"},
               {symbol: "diamond", 
               itemStyle:{color:'#228B22', borderColor:'#228B22'},
               lineStyle: {color: '#228B22', opacity:1},
                name: "Connected users"},
                {symbol: "diamond", 
               itemStyle:{color:'#DC143C', borderColor:'#DC143C'},
               lineStyle: {color: '#DC143C', opacity:1},
                name: "Connection time"}
             ]
           },
           {
            symbol: "pin",
             name: "DBSRV2",
             itemStyle:{color:'#228B22', borderColor:'#228B22'},
            lineStyle: {color: '#228B22', opacity:1},
             // value: 3322
             children: [
                {symbol: "diamond",
               itemStyle:{color:'#228B22', borderColor:'#228B22'},
               lineStyle: {color: '#228B22', opacity:1}, 
                name: "DB service status"},
               {symbol: "diamond", 
               itemStyle:{color:'#228B22', borderColor:'#228B22'},
               lineStyle: {color: '#228B22', opacity:1},
                name: "Connected users"},
                {symbol: "diamond", 
               itemStyle:{color:'#228B22', borderColor:'#228B22'},
               lineStyle: {color: '#228B22', opacity:1},
                name: "Connection time"}
             ]
           },
           {
            symbol: "pin",
            name: "DBSRV3",
            itemStyle:{color:'#228B22', borderColor:'#DC143C'},
            lineStyle: {color: '#DC143C', opacity:1},
            // value: 3322
            children: [
                {symbol: "diamond",
                itemStyle:{color:'#228B22', borderColor:'#228B22'},
                lineStyle: {color: '#228B22', opacity:1}, 
                 name: "DB service status"},
                {symbol: "diamond", 
                itemStyle:{color:'#DC143C', borderColor:'#DC143C'},
                lineStyle: {color: '#DC143C', opacity:1},
                 name: "Connected users"},
                 {symbol: "diamond", 
                itemStyle:{color:'#228B22', borderColor:'#228B22'},
                lineStyle: {color: '#228B22', opacity:1},
                 name: "Connection time"}
            ]
          }
         ]
        }
    ]
  }
  return (
    <div>
        <h3><Link to='/BSMgrid'>----</Link> Ecommerce App</h3>
     
      <ReactECharts
          style={{ height: "70vh" }}
                    option = {{
                        tooltip: {
                          trigger: 'item',
                          triggerOn: 'mousemove'
                        },
                        series: [
                          {
                            type: 'tree',
                            data: [data],
                            top: '1%',
                            left: '25%',
                            bottom: '1%',
                            right: '33%',
                            symbolSize: 18,
                            label: {
                              position: 'left',
                              verticalAlign: 'middle',
                              align: 'right',
                              fontSize: 12
                            },
                            leaves: {
                              label: {
                                position: 'right',
                                verticalAlign: 'middle',
                                align: 'left'
                              }
                            },
                            initialTreeDepth:1,
                            emphasis: {
                              focus: 'descendant'
                            },
                            roam:true,
                            expandAndCollapse: true,
                            animationDuration: 550,
                            animationDurationUpdate: 750
                          }
                        ]
                      }}
      />
</div>
  )
}

export default BSMsummary
