import "./messenger.css";
import Conversation from "./Conversation";
import Message from "./Message";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import {
  addMessage,
  loadConversations,
  loadMessages,
} from "../../../redux/reducers/Messenger";
import { io } from "socket.io-client";
import { Link } from "react-router-dom";

const Messenger = () => {
  const dispatch = useDispatch();
  const [currentChat, setCurrentChat] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const socket = useRef();
  const userId = useSelector((state) => state.auth.userId);

  const scrollRef = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:8000/", {
      transports: ["websocket", "polling", "flashsocket"],
    });
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      dispatch({ type: "SET_MESSAGES", payload: arrivalMessage });
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", userId);
    socket.current.on("getUsers", () => {});
  }, [userId]);

  const messages = useSelector((state) => state.messengerReducer.messages);

  const conversations = useSelector(
    (state) => state.messengerReducer.conversations
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const receiverId = currentChat?.members.find((member) => member !== userId);

    socket.current.emit("sendMessage", {
      senderId: userId,
      receiverId,
      text: newMessage,
    });

    dispatch(addMessage(userId, newMessage, currentChat._id));
    setNewMessage("");
  };

  useEffect(() => {
    dispatch(loadConversations(userId));
  }, [userId]);

  useEffect(() => {
    dispatch(loadMessages(currentChat?._id));
  }, [currentChat]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
      <div className="messenger-body">
        <Link to={"/"}>
        <div className="back-home">
          <span className="material-symbols-outlined">keyboard_backspace</span>
          <span className="back-home-sign">Домой</span>
        </div>
        </Link>
        <div className="messenger">
          <div className="chat-menu">
            <div className="chat-menu-wrapper">
              {conversations.map((con) => (
                <div onClick={() => setCurrentChat(con)}>
                  <Conversation key={con._id} conversation={con} currentUser={userId} />
                </div>
              ))}
            </div>
          </div>
          <div className="chat-box">
            <div className="chat-box-wrapper">
              {currentChat ? (
                <>
                  <div className="chat-box-top">
                    {messages.map((message) => (
                      <div ref={scrollRef}>
                        <Message
                          key={message._id}
                          message={message}
                          own={message.sender === userId}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="chat-box-bottom">
                    <input
                      type="text"
                      className="chat-message-input"
                      placeholder="Введите сообщение..."
                      onChange={(e) => setNewMessage(e.target.value)}
                      value={newMessage}
                    ></input>
                    <button
                      className="chat-submit-button"
                      onClick={handleSubmit}
                    >
                      Send
                    </button>
                  </div>
                </>
              ) : (
                <span className="no-chat-text">Начните беседу...</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messenger;
