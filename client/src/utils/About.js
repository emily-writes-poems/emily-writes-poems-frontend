import React, { useState } from 'react';


const About = () => {
    const [ about1Hidden, setAbout1Toggle ] = useState(true);
    const [ about2Hidden, setAbout2Toggle ] = useState(true);


    return (
        <div className='container about'>
            <p className='font-2 color-accent-2' align='center'>Poems about myself, the world as I see it, and the worlds that I've created and imagined.</p>

            <div className='section'>
                <h6 className='color-accent-1'>about me<span className={'about1 expand_hide ' + (about1Hidden ? 'expand' : 'hide') } onClick={() => setAbout1Toggle(!about1Hidden)}></span></h6>
                <div className={'summary color-accent-2 ' + (about1Hidden ? 'hidden' : 'shown' )}>
                    <p>Hi! I'm Emily. You're probably here because I personally know you and I sent you the link, or you found this link on my personal website.</p>
                    <p>In college I studied computer science and minored in creative writing. People always ask "why creative writing" and the main answer is: I love stories! It stems from my love of reading. With creative writing, I get to create my <i>own</i> characters and worlds? Sounds fun to me!</p>
                </div>
            </div>

            <div className='section'>
                <h6 className='color-accent-1'>my writing style.<span className={'about2 expand_hide ' + (about2Hidden ? 'expand' : 'hide') } onClick={() => setAbout2Toggle(!about2Hidden)}></span></h6>
                <div className={'summary color-accent-2 ' + (about2Hidden ? 'hidden' : 'shown' )}>
                    <p>Whatever comes out of my mind goes onto the page, and then I edit and refine wording and structure. I <i>love</i> using <a className='link-style' href="https://literarydevices.net/enjambment/">enjambment</a>; it's interesting, it's ambiguous, I love it. Most of my poems are in free verse, not following any specific meter or rhyming pattern. I also tend to write "slice of life". From my own reading, I've discovered some aspects of my writing style:</p>
                    <ul>
                        <li><i>salt. the taste of salt. salt in the air.</i> I write about it a surprising amount.</li>
                        <li><i>vibrant, rich colors.</i> Red shows up often.</li>
                        <li><i>light & darkness.</i> For every poem that's set in sunshine, there's one that takes place in fog or night or shade.</li>
                        <li><i>the moon.</i> This ties in with the light & darkness thing. The image of the moon often inspires my writing.</li>
                        <li><i>comma splices.</i> It's like I don't know how to use commas. The rules of the English language are meant to be broken. I kinda like comma splices, don't you?</li>
                    </ul>
                </div>
            </div>
        <hr/>
        </div>
    );
}

export default About;
