import React from "react";
import { Link } from "react-router-dom";
import ChannelViewContainer from "../channels/channel_view_container";
import ChatRoom from "../message/chat_room";
import ChatRoomContainer from "../message/chat_room_container";
import SidebarContainer from "../sidebar/sidebar_container";
import { Redirect } from "react-router";

const Navbar = (props) => {
    //console.log(props)
    const links = () => (
        <nav className='log-sign'>
            
            <div className='header'>
                <div><h1>lax</h1></div>
                <div className='h-buttons'>
                    <Link to="/login">Sign In</Link>
                    &nbsp; &nbsp;
                    <button id='h-button' className='s-button h-button' href='/signup'>TRY FOR FREE</button>
                    {/* <Link to="/signup">TRY FOR FREE</Link> */}
                </div>
            </div>
            <br />
            <span className='splash-info'>
                <div id='splash-1'>
                    <div>
                        <h2 id="splash-1a">Lax is where the future works</h2>
                        <p id="splash-1b">Transform the way you work with one place for everyone and everything you need to get stuff done.</p>
                        <button id='splash-1c' className='s-button'>TRY FOR FREE</button>
                    </div>
                    <div id='s-img-div'>
                        <img src="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/hero/img-campaign-hero@2x.jpg" alt="Slack1" />
                    </div>
                </div>
                <br />
                <div id='splash-2'>
                    <div id='ppf'>
                        <img  src="https://media.istockphoto.com/vectors/3d-road-sign-saying-present-and-past-and-future-vector-id501689867?k=20&m=501689867&s=612x612&w=0&h=yvNjx59gtzF2F895uCY7TG001Fu53egRgwLXFNS5oBg=" alt="Slack2" />
                    </div>
                    <div>
                        <h3>Now is your moment to build a better tomorrow</h3>
                        <p>We’ve seen what the future can be. Now it’s time to decide what it will be.</p>
                        {/* <button>Watch Video</button> */}
                    </div>
                </div>
                <br />
                <div id='splash-4'>
                    <div>
                        <h3>Move faster by organizing your work life</h3>
                        <p>The key to productivity in Slack is organized spaces called channels
                            —a different one for everything you’re working on. With all the people, 
                            messages and files related to a topic in one place, you can move a whole lot faster.
                        </p>
                    </div>
                    <div>
                        <img src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2018Q4/sales-org-structure/sales-organization-team-structure-header@2x.png" alt="Slack3" />
                    </div>
                </div>
                <br />
                <div id='splash-2'>
                    <div>
                        <img src="https://previews.123rf.com/images/artinspiring/artinspiring1809/artinspiring180900312/110266201-stack-or-pile-of-paper-with-busy-small-people-around-many-office-work-concept-chaos-on-the-workplace.jpg" alt="" />
                    </div>
                    <div>
                        <h3>Focus your time, on your own terms</h3>
                        <p>Give yourself the flexibility to work when, where and how you work best. 
                            Take control of notifications, collaborate live or on your own time, and find answers 
                            in conversations from across your company.
                        </p>
                    </div>
                </div>
                <br />
                <div id='splash-2'>
                    <div>
                        <h3>Simplify teamwork for everyone</h3>
                        <p>
                            Give everyone you work with—inside and outside your company—a more productive way to stay in sync. 
                            Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.
                        </p>
                    </div>
                    <div className='last-image'><img src="https://www.beefmagazine.com/sites/beefmagazine.com/files/mgmt-matters-teamwork-katleho-Seisa-GettyImages.jpg" alt="Slack5" /></div>
                </div>
                <br />
                <div>
                    <h2>Get started with Lax</h2>
                </div>
            </span>
        </nav>
    );
    const personalGreeting = () => (
        // <ChannelViewContainer />
        <Redirect to="/channels/4" />
        // <div className='greeting'>
        //     <div className='header'>
        //         <div><h1>lax</h1></div>
        //         <div className='log-sign'>
        //             <a onClick={props.logout}>Log Out</a>
        //         </div>
        //     </div>
        //     <div className='sidebar'>
        //         <div id='s-bar'>
        //             <SidebarContainer />
        //         </div>
        //         <div className='chat'><ChatRoomContainer /></div>
        //     </div>
        // </div>
    );

    return props.currentUser ? personalGreeting() : links();
};

export default Navbar;