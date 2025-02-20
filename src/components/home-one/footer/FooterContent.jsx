import Shape1Img from "../../../assets/images/v1/shape1.png";
import Star2Img from "../../../assets/images/v1/star2.png";
function FooterContent() {
	return (
		<div className="aximo-default-content light position-relative">
			<h2>
				<span className="aximo-title-animation">
					Lets start a
					<span className="aximo-title-icon">
						<img src={Star2Img} alt="Star2Img" />
					</span>
				</span>
				<br />
				project together
			</h2>
			<p>
				Codersh web service is a web design and development company <br />
				aiming to provide high quality website development to its clients.
			</p>
			<div className="aximo-info-wrap">
				<div className="aximo-info">
					<ul>
						<li>Give us a call:</li>
						<li>
							<a href="tel: +91 96646-17700">+91 96646-17700</a>
						</li>
					</ul>
				</div>
				<div className="aximo-info">
					<ul>
						<li>Send us an email:</li>
						<li>
							<a href="mailto:arvind@codersh.com">arvind@codersh.com</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="aximo-social-icon social-large">
				<ul>
					<li>
						<a href="https://x.com/CodershWeb/" target="_blank">
							<i className="icon-twitter"></i>
						</a>
					</li>
					<li>
						<a href="https://www.facebook.com/Codershweb/" target="_blank">
							<i className="icon-facebook"></i>
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/codersh.web/" target="_blank">
							<i className="icon-instagram"></i>
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/company/30213091/admin/analytics/followers/" target="_blank">
							<i className="icon-linkedin"></i>
						</a>
					</li>
				</ul>
			</div>
			<div className="aximo-hero-shape aximo-footer-shape">
				<img src={Shape1Img} alt="Shape1Img" />
			</div>
		</div>
	);
}

export default FooterContent;
