import { BusinessCenter} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOptions from "./InputOptions";
import ImageIcon from "@mui/icons-material/Image";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import ArticleIcon from "@mui/icons-material/Article";
import Post from "./Post";
import { collection, addDoc, serverTimestamp, getDocs, orderBy, query } from "firebase/firestore";
import { db } from '../firebase';




const Feed = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {

  
    const fetchPost = async () => {
      await getDocs(query(collection(db, "posts"),orderBy('timeStamp','desc')))
        .then((snapshot)=>{
          const newPost = snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }));

          setPosts(newPost)
        })
    }

    fetchPost();


    // db.collection("posts").onSnapshot((snapshot) =>
    //   setPosts(
    //     snapshot.docs.map((doc) => ({
    //       id: doc.id,
    //       data: doc.data(),
    //     }))
    //   )
    // );
  }, [posts]);

  const sendPost = async (event) => {
    event.preventDefault();

    const docRef = await addDoc(collection(db, "posts"), {
        name: "Rahul Kumar",
        description: "This is a demo description",
        message: input,
        photoUrl: "",
        timeStamp: serverTimestamp(),
    })

    setInput("");

    // db.collection("posts").add({
    //   name: "Rahul Kumar",
    //   description: "This is a demo description",
    //   message: input,
    //   photoUrl: "",
    //   // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    // });
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOptions Icon={ImageIcon} title="Photo" color="#70b5f9" />
          <InputOptions Icon={SmartDisplayIcon} title="Video" color="#e7a33e" />
          <InputOptions Icon={BusinessCenter} title="Job" color="#c0cbcd" />
          <InputOptions
            Icon={ArticleIcon}
            title="Write article"
            color="#7fc15e"
          />
        </div>
      </div>

      {/* posts component */}
      {
        posts.map(({ id, data: { name, description, message, photoUrl}}) => (
        
        <Post
        key={id}
        name={name}
        description={description}
        message= {message}
        photoUrl= {photoUrl}
        /> ))
      }


    </div>
  );
};

export default Feed;
