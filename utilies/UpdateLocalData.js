import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const WeatherScreen = () => {
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [map, setMap] = useState(null);
  useEffect(() => {
    const getCurrentPosition = async () => {
      try {
        const position = await Geolocation.getCurrentPosition(
          position => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Gửi yêu cầu API để lấy thông tin nhiệt độ khu vực tại latitude và longitude
            // Ví dụ: sử dụng API OpenWeatherMap
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=36e4d0959420482a8b7e553b9837874b`)
              .then(response => response.json())
              .then(data => {
                if (data.main && data.main.temp) {
                  const temperature = data.main.temp;
                  setTemperature(temperature);
                  setHumidity(data.main.humidity)
                  setMap(data.name)
                } else {
                  console.log('Dữ liệu nhiệt độ không hợp lệ.');
                }
              })
              .catch(error => {
                console.log('Lỗi khi lấy thông tin nhiệt độ:', error);
              });
          },
          error => {
            console.log('Lỗi khi truy cập vị trí:', error);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      } catch (error) {
        console.log('Lỗi khi lấy vị trí:', error);
      }
    };

    getCurrentPosition();
  }, []);

  return (
    <View>
      {map ? (
        <Text style={{
          color:'black',
          fontSize:14
        }}>khu vực: <Text style={{
          fontWeight:'bold'
        }}>{(map)}</Text></Text>
      ) : (
        <Text>Đang tải vị trí...</Text>
      )}
      {temperature ? (
        <Text style={{
          color:'black',
          fontSize:14
        }}>Nhiệt độ khu vực: <Text style={{
          fontWeight:'bold'
        }}>{(temperature-273.15).toFixed(2)}</Text></Text>
      ) : (
        <Text>Đang tải nhiệt độ...</Text>
      )}
      {humidity ? (
        <Text style={{
          color:'black',
          fontSize:14
        }}>Độ ẩm: {humidity} %</Text>
      ) : (
        <Text>Đang tải độ ẩm...</Text>
      )}
    </View>
  );
};

export default WeatherScreen;
