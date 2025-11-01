import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TestimonialCard = () => {
  return (
    <View style={styles.CardContainer}>

        <View style={styles.headerText}>
            <Text style={styles.HeaderFirstText}>
                What Our Users Say
            </Text>
            <Text style={styles.HeaderSecondText}>
                Hear from tournament organizers and 
                players worldwide.
            </Text>
        </View>

        <View style={styles.card}>
            <Text style={styles.quote}>
                "This platform made managing tournaments super easy!"
            </Text>

            <View style={styles.userContainer}>
                <View style={styles.avatar}>
                {/* <UserOutlined style={{ color: '#9CA3AF', fontSize: 22 }} /> */}
                </View>
                <Text style={styles.userName}>John Doe</Text>
            </View>

            <Text style={styles.role}>Organizer</Text>
        </View>

        <View style={styles.card}>
            <Text style={styles.quote}>
                Track team stats effortlessly. Highly recommended!            
            </Text>
            <View style={styles.userContainer}>
                <View style={styles.avatar}>
                {/* <UserOutlined style={{ color: '#9CA3AF', fontSize: 22 }} /> */}
                </View>
                <Text style={styles.userName}>Jane Smith</Text>
            </View>

            <Text style={styles.role}>Organizer</Text>
        </View>

        <View style={styles.card}>
            <Text style={styles.quote}>
                Love the clean interface and live updates!
            </Text>

            <View style={styles.userContainer}>
                <View style={styles.avatar}>
                {/* <UserOutlined style={{ color: '#9CA3AF', fontSize: 22 }} /> */}
                </View>
                <Text style={styles.userName}>Mike Johnson</Text>
            </View>

            <Text style={styles.role}>Organizer</Text>
        </View>


    </View>
  );
};

const styles = StyleSheet.create({
    headerText:{
        paddingVertical:10,
        fontWeight:'bold',
        justifyContent:'center',
        alignItems:'center'
    },
    HeaderSecondText:{
        justifyContent:'center',
        alignItems:'center',
        color:'#fff',
        paddingTop:5,
        width:245
    },
    HeaderFirstText:{
        fontSize:24,
        color:'#fff'
    },
    CardContainer:{
        paddingHorizontal:40,
        paddingVertical:50
    },
  card: {
    backgroundColor: '#1E293B',
    padding: 24,
    borderRadius: 16,
    shadowColor: '#3B82F6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
    alignItems: 'center',
    textAlign: 'center',
    marginVertical: 20,
  },
  quote: {
    color: '#D1D5DB',
    fontStyle: 'italic',
    marginBottom: 16,
    textAlign: 'center',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: '#334155',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  userName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  role: {
    color: '#9CA3AF',
    fontSize: 12,
  },
});

export default TestimonialCard;
