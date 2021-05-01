import React ,{useState} from 'react';
import { StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  Pressable,
  Modal
} from 'react-native';
import Header from '../Header';



export default function ItemPage() {
  
  
  const renderCard = ({ item, onPress}) => (
    <TouchableOpacity onPress={onPress}>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        margin: 10,
      }}    
    >
        <View >
          <Image source={{ uri: item.src }} style={styles.picture} />
          <View style={{ flex:1 }}>
            <Text style={styles.title}>{item.title} </Text>
            <Text tyle={styles.subtitle}>{item.subtitle} </Text>
          </View>
          <View style={{flexDirection : "row", paddingVertical:10}}>
          <Image source={{ uri: item.profile }} style={styles.profile} />
          <Text style={{textAlign :"center", alignContent:"center", paddingLeft:10,  paddingTop:4}}>{item.username}</Text>
          </View>
        </View>
      
    </View>
          
    </TouchableOpacity>
  );
  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={
          <View style={styles.spaceBetween}>
          <Header />
          </View>
        }
        data={Cards}
        renderItem={renderCard}
        keyExtractor={(title) => title.id}
        style={{ margin: 15 }}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
   spaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical:10
  },
 picture: {
    width: 160,
    height: 100,
    marginBottom: 10,
  },
  profile:{
    width:25,
    height:25,
    borderRadius:50
  },
  title:{
    fontSize:18,
    paddingBottom:4
    
  },
  subtitle:{
    fontSize:13,
    fontWeight:"100"
    
  }
});

const Cards = [
  {
    id: "1",
    title: "My Biggest",
    subtitle: "Posted  1h ago",
    src:
      "https://upload.wikimedia.org/wikipedia/commons/e/eb/20201216_마리끌레르_송강.jpg",
      profile:  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/23729572-c33d-4110-8985-eaf95eba14f4/dduhqnl-ee008955-db8e-4a70-94d2-980179ab4755.jpg/v1/fill/w_1280,h_1711,q_75,strp/gone_fishing_by_yirikus_dduhqnl-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTcxMSIsInBhdGgiOiJcL2ZcLzIzNzI5NTcyLWMzM2QtNDExMC04OTg1LWVhZjk1ZWJhMTRmNFwvZGR1aHFubC1lZTAwODk1NS1kYjhlLTRhNzAtOTRkMi05ODAxNzlhYjQ3NTUuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.XhqEDFeO5nK_RCTH-8UHuJd09tycFgP3yd-LwdJ7CJ8",
    username : "송강"
  },
  {
    id: "2",
    title: "More Than Money",
    subtitle: "Posted  3days ago",
    src:
      "https://pbs.twimg.com/media/EHFr-k-WoAAAzVG.jpg",
      profile:  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/23729572-c33d-4110-8985-eaf95eba14f4/dduhqnl-ee008955-db8e-4a70-94d2-980179ab4755.jpg/v1/fill/w_1280,h_1711,q_75,strp/gone_fishing_by_yirikus_dduhqnl-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTcxMSIsInBhdGgiOiJcL2ZcLzIzNzI5NTcyLWMzM2QtNDExMC04OTg1LWVhZjk1ZWJhMTRmNFwvZGR1aHFubC1lZTAwODk1NS1kYjhlLTRhNzAtOTRkMi05ODAxNzlhYjQ3NTUuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.XhqEDFeO5nK_RCTH-8UHuJd09tycFgP3yd-LwdJ7CJ8",

    username : "서강준"
  },
  {
    id: "3",
    title: "So Fascinating",
    subtitle: "Posted  3days ago",
    src:
      "data:image/jpeg;base64,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",
      profile:  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/23729572-c33d-4110-8985-eaf95eba14f4/dduhqnl-ee008955-db8e-4a70-94d2-980179ab4755.jpg/v1/fill/w_1280,h_1711,q_75,strp/gone_fishing_by_yirikus_dduhqnl-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTcxMSIsInBhdGgiOiJcL2ZcLzIzNzI5NTcyLWMzM2QtNDExMC04OTg1LWVhZjk1ZWJhMTRmNFwvZGR1aHFubC1lZTAwODk1NS1kYjhlLTRhNzAtOTRkMi05ODAxNzlhYjQ3NTUuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.XhqEDFeO5nK_RCTH-8UHuJd09tycFgP3yd-LwdJ7CJ8",
    username : "차은우"
  },
  {
    
      id: "4",
      title: "Shake it up",
      subtitle: "Posted  1h ago",
      src:
      "https://image.ytn.co.kr/osen/2020/07/097ffdce-3e3c-4bbe-98ab-43d8a479d553.jpg",
      profile:  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/23729572-c33d-4110-8985-eaf95eba14f4/dduhqnl-ee008955-db8e-4a70-94d2-980179ab4755.jpg/v1/fill/w_1280,h_1711,q_75,strp/gone_fishing_by_yirikus_dduhqnl-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTcxMSIsInBhdGgiOiJcL2ZcLzIzNzI5NTcyLWMzM2QtNDExMC04OTg1LWVhZjk1ZWJhMTRmNFwvZGR1aHFubC1lZTAwODk1NS1kYjhlLTRhNzAtOTRkMi05ODAxNzlhYjQ3NTUuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.XhqEDFeO5nK_RCTH-8UHuJd09tycFgP3yd-LwdJ7CJ8",
    username : "Rowoon"
  },
];