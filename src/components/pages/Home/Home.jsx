import React, { Component } from 'react';
import './Home.css';
import MovieCard from './movieCard/MovieCard';
import video from '../../assets/video.svg';
class Home extends Component {


    componentDidMount = () => {

        slide(document.getElementById("movies-1"))

        function slide(items) {

            let isDown = false;
            let startX;
            let scrollLeft;


            items.addEventListener("mousedown", (e) => {
                isDown = true;
                startX = e.pageX - items.offsetLeft;
                scrollLeft = items.scrollLeft;
            });
            items.addEventListener("mouseleave", () => {
                isDown = false;
                items.classList.remove("shifting")
            });
            items.addEventListener("mouseup", () => {
                isDown = false;
                items.classList.remove("shifting")
            });
            items.addEventListener("mousemove", (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - items.offsetLeft;
                const walk = x - startX;
                items.scrollLeft = scrollLeft - walk;
                items.classList.add("shifting")
            });

        }
    }

    render() {
        return (
            <div className="homeWrap">
                <div className="upper">
                    <img src={video} alt=""/>
                    <h3>Welcome to</h3>
                    <h2>Flex Movies!</h2>
                </div>
                <div className="catalogue">
                    <h2>Trends <i className='uil uil-fire'></i></h2>
                    <div id="movies-1" className="c-wrap">
                        <div className="c-content">
                            <MovieCard title="your name" id="555" description="The day the stars fell, two lives changed forever. High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers."></MovieCard>
                            <MovieCard title="your name" id="555" description="The day the stars fell, two lives changed forever. High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers."></MovieCard>
                            <MovieCard title="your name" id="555" description="The day the stars fell, two lives changed forever. High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers."></MovieCard>
                            <MovieCard title="your name" id="555" description="The day the stars fell, two lives changed forever. High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers."></MovieCard>
                            <MovieCard title="your name" id="555" description="The day the stars fell, two lives changed forever. High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers."></MovieCard>
                            <MovieCard title="your name" id="555" description="The day the stars fell, two lives changed forever. High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers."></MovieCard>
                        </div>
                    </div>
                </div>
                <div className="catalogue">
                    <h2>Lastest <i className='uil uil-clock-two'></i></h2>
                    <div id="movies-1" className="c-wrap">
                        <div className="c-content">
                            <MovieCard title="your name" id="555" description="The day the stars fell, two lives changed forever. High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers."></MovieCard>
                            <MovieCard title="your name" id="555" description="The day the stars fell, two lives changed forever. High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers."></MovieCard>
                            <MovieCard title="your name" id="555" description="The day the stars fell, two lives changed forever. High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers."></MovieCard>
                            <MovieCard title="your name" id="555" description="The day the stars fell, two lives changed forever. High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers."></MovieCard>
                            <MovieCard title="your name" id="555" description="The day the stars fell, two lives changed forever. High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers."></MovieCard>
                            <MovieCard title="your name" id="555" description="The day the stars fell, two lives changed forever. High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers."></MovieCard>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
