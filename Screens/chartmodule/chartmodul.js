import { Svg } from 'react-native-svg';
import { Dimensions,Decorator,Text,View} from 'react-native';
import { LineChart,   } from 'react-native-chart-kit'
import text from '../../components/text';

export default ChartLine


function ChartLine(props){
    let {datas,labels,coment,unit}=props
    if (Math.min(...datas)-0.5 <= 0){
        minValue = 0
    }
    else {
        minValue = Math.min(...datas) -0.5
    }
    const maxValue = Math.max(...datas) +0.5;
    // const minValue = Math.min(...datas) -0.5
    const renderDotContent = ({ x, y, index }) => (
        <Text style={{ position: 'absolute', top: y-35 , left: x-5, color:'black',fontSize:15 }}>
          {datas[index]}
        </Text>
      );

    const Decorator = ({ x, y, data }) => {
        return data.map((value, index) => (
          <Text key={index} x={x(index)} y={y(value) - 10} fontSize={12} fontWeight="bold" fill="black" textAnchor="middle">
            {value}
          </Text>
        ));
      };
  return <Svg>
    <LineChart
data={{
    labels: labels,
    datasets: [
        {
            data: datas,
            strokeWidth: 2, // optional
        },
        {
            data: [minValue], //highest graph value
            withDots: false, //a flage to make it hidden
          },
        {
            data: [maxValue], //highest graph value
            withDots: false, //a flage to make it hidden
          },
          
    ],
}}
width={Dimensions.get('window').width-20} // from react-native
height={260}
withVerticalLabels
// yAxisLabel="$"
// yAxisSuffix="%"
yAxisInterval={1} // optional, defaults to 1
yLabelsOffset={20}
renderDotContent={renderDotContent}
chartConfig={{
    backgroundColor: 'white',
    backgroundGradientFrom: 'white',
    backgroundGradientTo: 'white',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: () => `black`,
    labelColor: () => `black`,
    style: {
        borderRadius: 16,
    },
    propsForDots: {
        r: '6',
        strokeWidth: '3',
        stroke: '#ffa726',
    },
    
}}
style={{
    marginVertical: 8,
    borderRadius: 16,
    
}}
/>
<View style={{
  flexDirection:'row',
  alignSelf:'center'
}}>
<Text
    style={[text.h5]}
>Biểu Đồ: {coment} </Text>   
<Text
    style={[text.h5,{marginHorizontal:5}]}
>({unit}) </Text>   
</View>
</Svg>

}