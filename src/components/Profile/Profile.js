import x from './Profile.module.scss';
import Post from "./Post/Post";
import EntryField from "../ChatDetail/EntryField/EntryField";
import Accordion from "./Accordion/Accordion";

const Profile = () => {
    return (
        <>
            <div className={`${x.profile} px-4 pt-4`}>

                <div className="d-flex justify-content-between align-items-center">
                    <div className={x.title}>My Profile</div>

                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                            <path
                                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                        </svg>
                    </div>
                </div>

                <div className={x.miniInfo}>

                    <img className={x.image}
                         src="http://chatvia-dark.react.themesbrand.com/static/media/avatar-2.feb0f89d.jpg" alt="ava"/>

                    <div className={x.name}>
                        Taras Shevchenko
                    </div>

                    <div className={x.status}>
                        <svg width="10" height="10" fill="currentColor" viewBox="0 0 512 512"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 341.332031c-47.0625 0-85.332031-38.269531-85.332031-85.332031s38.269531-85.332031 85.332031-85.332031 85.332031 38.269531 85.332031 85.332031-38.269531 85.332031-85.332031 85.332031zm0 0"/>
                        </svg>
                        <div className={x.textMuted}>Active</div>
                    </div>

                </div>

                <div className="p-4">

                    <Accordion title='About' index={1}>
                        <div className="accordion-child">
                            <div className="accordion-child-mutedText">Name</div>
                            <div className="accordion-child-normalText">Taras Shevchenko</div>
                        </div>
                        <div className="accordion-child">
                            <div className="accordion-child-mutedText">Email</div>
                            <div className="accordion-child-normalText">TaraShevchenko@.com</div>
                        </div>
                    </Accordion>

                    <Accordion title='About' index={2}>
                        <div className="accordion-child">
                            <div className="accordion-child-mutedText">Name</div>
                            <div className="accordion-child-normalText">Taras Shevchenko</div>
                        </div>
                    </Accordion>


                </div>

            </div>
            <div>
                <div className={x.posts}>
                    <Post/>
                </div>
                <EntryField placeholder="New post.." />
            </div>
        </>
    )
}

export default Profile;