import { ProgressChart } from "react-native-chart-kit"


function ProGChart(props){
    data=props
    return <ProgressChart
    data={data.data}
    width={100}
    height={100}
    strokeWidth={16}
    radius={32}
    backgroundColor="#fff"
    accessor="data"
    chartConfig={{
        backgroundColor: 'white',
        backgroundGradientFrom: "white",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "white",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional                   
    }}
    hideLegend={true}
/>
}

export default ProGChart