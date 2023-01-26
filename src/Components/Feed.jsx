import { BusinessCenter, Create } from '@mui/icons-material'
import React from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOptions from './InputOptions';
import ImageIcon from '@mui/icons-material/Image';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import ArticleIcon from '@mui/icons-material/Article';
import Post from './Post';

const Feed = () => {
  return (
    <div className='feed'>
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form>
                    <input type="text" />
                    <button type='submit'>Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
                <InputOptions Icon={ImageIcon} title="Photo" color="#70b5f9"/>
                <InputOptions Icon={SmartDisplayIcon} title="Video" color="#e7a33e"/>
                <InputOptions Icon={BusinessCenter} title="Job" color="#c0cbcd"/>
                <InputOptions Icon={ArticleIcon} title="Write article" color="#7fc15e"/>
            </div>
        </div>

        {/* posts component */}
        <Post 
            name="Rahul Kumar"
            description="This is the test description"
            message="This is working and I am making clone"
            />

    </div>
  )
}

export default Feed