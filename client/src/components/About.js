import React from "react";

export class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imgSrc: null
        };
    }

    async componentDidMount() {
        const response = await fetch("https://cataas.com/cat/gif");
        const imgBlob = await response.blob();
        const imgSrc = window.URL.createObjectURL(imgBlob);

       this.setState({
           imgSrc,
       });
    }

    render() {
        return (
            <div id="about">
                <h1>About Me</h1>
                {this.state.imgSrc ? <img src={this.state.imgSrc} /> : <p>Loading gif...</p>}
                <p>Jun Qi is (yet another) software developer at ThoughtWorks whose expertise is in full-stack web development, working with Rails and now React and NodeJS. She has extensive experience teaching programming to beginners, having coached the last batch of TechLadies as well as volunteering multiple times as a teaching assistant for her university’s introductory programming course. She’s super excited to be working with the first all-female coaching team for TechLadies in the most gender-balanced coaching batch thus far, and really wants to fight for the growth of gender diversity in the industry. Rawr!</p>
            </div>
        )
    }
}