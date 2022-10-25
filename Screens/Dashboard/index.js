import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
const Dashboard = () => {
  const [la_dummyArr, setSetDummyArr] = useState([1, 2]);
  const [li_progress, setProgress] = useState(2);

  const handleCardPress = () => {
    setProgress(li_progress + 1);
    let testArray = [...la_dummyArr];
    testArray.push(li_progress);
    setSetDummyArr(testArray);
  };
  return (
    <View style={dashboardStyle.parentViewStyle}>
      <View style={dashboardStyle.columnViewStyle}>
        {la_dummyArr.map((item, inx) => (
          <View key={inx} style={dashboardStyle.rowViewStyle}>
            {la_dummyArr.map((itemRow, inxRow) => (
              <TouchableOpacity
                onPress={handleCardPress}
                key={inxRow}
                style={dashboardStyle.cardStyle}></TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const dashboardStyle = StyleSheet.create({
  cardStyle: {
    flex: 1,
    backgroundColor: 'blue',
    margin: 5,
  },
  columnViewStyle: {
    alignSelf: 'center',
    width: '100%',
    height: '50%',
  },
  parentViewStyle: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  rowViewStyle: {flexDirection: 'row', flex: 1},
});

export default Dashboard;
