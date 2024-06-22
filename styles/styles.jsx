// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff",
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    marginTop: 70,
    fontSize: 44,
    fontFamily: "Play",
    color: '#9D24A5',
  },
  description: {
    fontSize: 13,
    textAlign: 'center',
    width: 200,
    fontFamily: "Outfit",
    color: '#000',
  },
  messagesContainer: {
    justifyContent: 'flex-end',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 400,
    paddingBottom: 60,
  },
  message: {
    borderRadius: 30,
    padding: 10,
    marginBottom: 10,
    maxWidth: '80%',
  },
  messageText: {
    fontSize: 16,
    color: '#000',
    fontFamily: "Sign",
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#f2f2f2',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: "#f2f2f2",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 5,
    paddingTop: 5,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
    width: '90%',
    position: 'absolute',
    borderRadius: 200,
    borderColor: "#8440EE",
    bottom: 10,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginRight: 10,
    letterSpacing: 1.3,
  },
  iconContainer: {
    width: 45,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#8440EE',
  },
  disabledSendButton: {
    backgroundColor: '#ccc',
  },
  newTopicContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 70,
    width: 360,
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 200,
  },
  newTopicText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  newTopicButton: {
    backgroundColor: '#8440EE',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 150,
  },
  newTopicButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: "Outfit",
  },
  newTopicDescr: {
    fontSize: 13,
    fontWeight: '300',
    color: '#000',
  },
  initialContainers: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 20,
    width: '90%',
    backgroundColor: '#f2f2f2',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  containerItem: {
    alignItems: 'center',
  },
  containerText: {
    marginTop: 5,
    color: '#333',
    fontSize: 14,
    fontFamily: 'Outfit',
  },
});

export default styles;
