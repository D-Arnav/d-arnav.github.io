import './Blog.css';
import { BlogTitle } from './Blog';

function Robotics() {
    return (
        <div className="blog-page">
            <BlogTitle
                title="Robotics Achievements"
                author="Arnav Devalapally"
                date="2016 - 2022"
                highlight="Robotics"
            />
            <hr />

            <div className="blog-content">
                <p>
                    I was a founding member for Team TEQQ Televisors and these are all of our team's achievements.
                </p>
                <h3>2016</h3>
                <ul>
                    <li>Won <span>1st Place</span> in Robofest 2016 regionals conducted by IIT Hyderabad</li>
                    <li>Participated in Robofest 2016 World Championship, USA in Unknown Mission Challenge and Bottle Sumo categories</li>
                </ul>

                <h3>2017/18</h3>
                <ul>
                    <li>Won <span>1st Place</span> in Senior Bottle Sumo at Robofest 2017, Bangalore</li>
                    <li>Won <span>1st Place</span> in World Robot Olympiad - WRO 2017, Hyderabad Regional Championship and participated in National Championship at Ahmedabad</li>
                    <li>Won <span>3rd place</span> in the ROBOCUP South Zone Championships 2017 and participated in National Championship at Bangalore</li>
                    <li>Won <span>1st Place</span> in World Robot Olympiad - WRO 2018, Hyderabad Regional Championship and participated in National Championship at New Delhi</li>
                    <li>Won <span>Best Core Values Award</span> in First Lego League - FLL 2018, Hyderabad Regionals</li>
                </ul>

                <h3>2019/20</h3>
                <ul>
                    <li>Won <span>Best Robot Performance Award</span> in First Lego League - FLL 2019, Hyderabad Regionals and won <span>Best Core Values Award</span> in National Championship</li>
                    <li>Won <span>2nd Place</span> in Robofest 2019 World Championship, USA in two categories (Binary Blocks - Game Challenge and Unknown Mission Challenge) and won <span>Semi-finalist</span> in Bottle Sumo</li>
                    <li>Won in <span>1st Place</span> in Robofest 2020 Online World Championship - Senior UMC</li>
                    <li>Won in <span>Best Innovation Project Award</span> in First Lego League - FLL 2020 Hyderabad Regionals Championship and won <span>Best Strategy and Innovation Award</span> in National Championship 2021/22</li>
                </ul>
            </div>
        </div>
    );
}

export default Robotics;
