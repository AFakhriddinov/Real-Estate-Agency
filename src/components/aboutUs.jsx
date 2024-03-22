import Image from 'react-bootstrap/Image';
import aboutUs from './images/about.jpg';

export default function AboutUs() {
  return (
    <div id="aboutus-div" fluid>
      <Image id="aboutus-img" fluid src={aboutUs} alt="About us" width="1340" />
      <p className="aboutus-p">
        <b>Roger Property Estate</b> is one of the leading Real Estate companies
        in Sydney. we have been a market leader selling properties in Sydney’s
        suburbs
        <br />
        <br />
        <b>Chris Geewala</b> the original co-founder of the enormously
        successful <b>Roger Property Estate</b> have carefully shaped the
        business into the successful boutique agency and today to further
        strengthen the company’s profile and level of service.
        <br />
        <br />
        With our intimate knowledge of the area and our vast network of
        neighbourhood contacts we are perfectly positioned to deliver the best
        possible results.
        <br />
        <br />
        At <b>Roger Property Estate</b> we are proud of the reputation we have
        built up over the past years. Not only for our record of outstanding
        results, but also more than that, the friendships we have forged along
        the way with our clients and their families. They know how much we value
        mutual trust, integrity and hard work.
        <br />
        <br />
        We know when a client has had a good experience with us, as they will
        recommend <b>Roger Property Estate</b> to others. Real estate decisions
        are among the most important decisions made in life and we feel
        privileged to be part of them.
        <br />
        <br />
        <b>Roger Property Estate</b> is made up of a team of dedicated,
        experienced professionals who are keen to make your property purchase or
        sale as stress-free, profitable and pleasant as possible.
        <br />
        <br />
        Please feel free to contact us at any time on 0431 400087
      </p>
    </div>
  );
}
