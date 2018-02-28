import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/udder-t.jpg'
import thumb02 from '../assets/images/thumbs/infinity-t.jpg'
import thumb03 from '../assets/images/thumbs/junicorn-t.jpg'
import thumb04 from '../assets/images/thumbs/double-standard-t.jpg'
import thumb05 from '../assets/images/thumbs/canyon-t.jpg'
import thumb06 from '../assets/images/thumbs/mein-chick-t.jpg'

import full01 from '../assets/images/fulls/udder.jpg'
import full02 from '../assets/images/fulls/infinity.jpg'
import full03 from '../assets/images/fulls/junicorn.jpg'
import full04 from '../assets/images/fulls/double-standard.jpg'
import full05 from '../assets/images/fulls/canyon.jpg'
import full06 from '../assets/images/fulls/mein-chick.jpg'

const DEFAULT_IMAGES = [
    { id: '1', src: full01, thumbnail: thumb01, caption: 'Cow Udder Jellies', description: 'August 17, 2016. Ink and watercolor on paper.'},
    { id: '2', src: full02, thumbnail: thumb02, caption: 'Infinity and Beyond', description: 'July 20, 2017. iPhone.'},
    { id: '3', src: full03, thumbnail: thumb03, caption: 'Junicorn Challenge 2017', description: 'June 14, 2017. Watercolor on paper.'},
    { id: '4', src: full04, thumbnail: thumb04, caption: 'Double Standard', description: 'May 30, 2017. Ink on Paper'},
    { id: '5', src: full05, thumbnail: thumb05, caption: 'Of Course', description: 'April 11, 2017. iPhone @Grand Canyon.'},
    { id: '6', src: full06, thumbnail: thumb06, caption: 'Mein Chick, Not Your Side Bae', description: 'March 11, 2017. Ink et al on paper.'}
];

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description

        return (
            <div>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>About me</h2>
                        </header>
                        <p>Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae lobortis tortor primis integer massa adipiscing id nisi accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque cubilia.</p>
                    </section>

                    <section id="two">
                        <h2>Collections</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
                            src,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        <ul className="actions">
                            <li><a href="#" className="button">Full Portfolio</a></li>
                        </ul>
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p>Find me at Philz Coffee. Sometimes.</p>
                        <div className="row">
                            <div className="8u 12u$(small)">

                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        1234 Main St<br />
                                        Fremont, CA 94538<br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        000-000-0000
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="#">not_my_email@find.me</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </div>
        )
    }
}

// =================
// Unused markup
// =================
    // <ul className="actions">
    //     <li><a href="#" className="button">Learn More</a></li>
    // </ul>

    // <form method="post" action="#">
    //     <div className="row uniform 50%">
    //         <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
    //         <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
    //         <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
    //     </div>
    // </form>
    // <ul className="actions">
    //     <li><input type="submit" value="Send Message" /></li>
    // </ul>

export default HomeIndex

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`