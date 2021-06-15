import React from 'react';
import x from './Profile.module.scss';

import Post from "./Post/Post";
import EntryField from "../Indifferent/EntryField/EntryField";
import Accordion from "./Accordion/Accordion";
import ProfileInformation from "./ProfileInformation/ProfileInformation";

const Profile = ({Profile, onSendClickConnect, newPostTextConnect}) => {


    let messageText = React.createRef();

    const newPostText = () => {
        newPostTextConnect(messageText.current.value);
    }

    const onSendClick = () => {
        onSendClickConnect();
    }

    return (
        <>
            <div className="content-small">

                <div className="d-flex justify-content-between align-items-center">
                    <div className={x.title}>My Profile</div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                            <path
                                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                        </svg>
                    </div>
                </div>

                <ProfileInformation
                    image={Profile.ProfileInfo.image}
                    name={Profile.ProfileInfo.name}
                    online="Active"
                />

                <div className="p-4">
                    <Accordion title='About' index={1}>
                        <div className="accordion-child">
                            <div className="accordion-child-mutedText">Name</div>
                            <div className="accordion-child-normalText">{Profile.ProfileInfo.name}</div>
                        </div>
                        <div className="accordion-child">
                            <div className="accordion-child-mutedText">Email</div>
                            <div className="accordion-child-normalText">{Profile.ProfileInfo.email}</div>
                        </div>
                        <div className="accordion-child">
                            <div className="accordion-child-mutedText">Age</div>
                            <div className="accordion-child-normalText">{Profile.ProfileInfo.age} years old.</div>
                        </div>
                    </Accordion>
                </div>

            </div>

            <div>
                <div className="content-big withEntryField">
                    {Profile.Posts.map((item, index) => (
                        <Post key={index}
                              author={Profile.ProfileInfo.name}
                              authorImage={Profile.ProfileInfo.image}
                              date={item.date}
                              likes={item.likes}
                              dislikes={item.dislikes}
                              text={item.text}
                              images={item.images}
                        />
                    ))}
                </div>
                <EntryField newText={newPostText} text={Profile.newPostText} inputRef={messageText}
                            onSendClick={onSendClick} placeholder="New post.."/>
            </div>
        </>
    )
}

export default Profile;