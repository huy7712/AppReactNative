import { Svg } from 'react-native-svg';
import { Dimensions,Decorator,Text,View} from 'react-native';
import { LineChart, BarChart, PieChart,  } from 'react-native-chart-kit'
import text from '../components/text';

export default Chart


function Chart
(props){
    let {datas,labels,coment}=props
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
    ],
}}
width={Dimensions.get('window').width} // from react-native
height={220}
withVerticalLabels
yAxisLabel="$"
yAxisSuffix="k"
yAxisInterval={1} // optional, defaults to 1
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
<Text
    style={[text.h5,{alignSelf:'center'}]}
>Bieu Do: {coment}</Text>   

</Svg>

}