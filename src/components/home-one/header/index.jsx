/* eslint-disable for-direction */
import DesktopNav from "../../common/navigation/desktop-nav/DesktopNav";
import Dropdown from "../../common/navigation/desktop-nav/Dropdown";
import DropdownItem from "../../common/navigation/desktop-nav/DropdownItem";
import NavItem from "../../common/navigation/desktop-nav/NavItem";
import { menuItemsData } from "../../common/navigation/mobile-nav/menuItemsData";
import MobileNavbar from "../../common/navigation/mobile-nav/MobileNavbar";
import HeaderButton from "./HeaderButton";
import HeaderLogo from "./HeaderLogo";

function Header() {
	return (
		<header className="site-header aximo-header-section aximo-header1 dark-bg" id="sticky-menu">
			<div className="container">
				<nav className="navbar site-navbar">
					<HeaderLogo />
					<div className="menu-block-wrapper">
						<DesktopNav>
							{/* <NavItem dropdown title="Demo">
								<Dropdown>
									<DropdownItem url="/">Design Agency</DropdownItem>
									<DropdownItem url="home-two">Startup Agency</DropdownItem>
									<DropdownItem url="home-three">SEO Agency</DropdownItem>
									<DropdownItem url="home-four">Business Consultation</DropdownItem>
									<DropdownItem url="home-five">Digital Marketing</DropdownItem>
									<DropdownItem url="home-six">Interior Design Agency</DropdownItem>
									<DropdownItem url="home-seven">Advertising agency</DropdownItem>
								</Dropdown>
							</NavItem> */}
							<NavItem dropdown title="Company">
								<Dropdown>
									{/* <DropdownItem url="service">Service</DropdownItem> */}
									<DropdownItem url="about-us">About Us</DropdownItem>
									<DropdownItem url="team">Team</DropdownItem>
									<DropdownItem url="testimonial">Testimonial</DropdownItem>
									<DropdownItem url="faq">FAQ</DropdownItem>
								</Dropdown>
							</NavItem>
							<NavItem dropdown title="Services">
								<Dropdown>
									<DropdownItem dropdown title="Ecommerce Development">
										<Dropdown noShape>
											<DropdownItem url="woocommercedevelopment">WooCommerce-Development</DropdownItem>
											<DropdownItem url="pestrashop">PestraShop  Development</DropdownItem>
											<DropdownItem url="shift4shop">Shift4Shop  Development</DropdownItem>
											<DropdownItem url="bigcommerce">BigCommerce  Development</DropdownItem>

										</Dropdown>
									</DropdownItem>
									<DropdownItem dropdown title="Mobile App Development">
										<Dropdown noShape>
											<DropdownItem url="androidappdev">AndroidAppDev  Development</DropdownItem>
										</Dropdown>
									</DropdownItem>
								</Dropdown>
							</NavItem>
							<NavItem dropdown title="Projects">
								<Dropdown>
									<DropdownItem url="casestudies">Case Studies</DropdownItem>
									<DropdownItem url="Ourwork">Our Work</DropdownItem>
									<DropdownItem url="Ourwork2">Our Work 2</DropdownItem>
								</Dropdown>
							</NavItem>
							<NavItem dropdown title="Pages">
								<Dropdown>
									{/* <DropdownItem url="about-us">About Us</DropdownItem> */}
									<DropdownItem url="pricing">Pricing</DropdownItem>
									<DropdownItem url="brand">brand</DropdownItem>

									<DropdownItem url="portfolio">Portfolio</DropdownItem>
									<DropdownItem url="blog1">Blog</DropdownItem>
									<DropdownItem url="blog-grid">Blog Grid</DropdownItem>

									{/* <DropdownItem dropdown title="Blog">
										<Dropdown noShape>
											<DropdownItem url="blog">Our Blog</DropdownItem>
											<DropdownItem url="blog-grid">Blog Grid</DropdownItem>
											<DropdownItem url="single-blog">Blog Details</DropdownItem>
											<DropdownItem url="singleblog2">Single Blog 2</DropdownItem>
											<DropdownItem url="blog1">Blog</DropdownItem>
										</Dropdown>
									</DropdownItem> */}
									{/* <DropdownItem dropdown title="Service">
										<Dropdown noShape>
											<DropdownItem url="service">Service</DropdownItem>
											<DropdownItem url="single-service">Service Details</DropdownItem>
										</Dropdown>
									</DropdownItem> */}
									{/* <DropdownItem dropdown title="Solutions">
										<Dropdown noShape>
											<DropdownItem url="creditrepair">Credit Repair</DropdownItem>
											<DropdownItem url="itdigitalagency">It Digital Agency</DropdownItem>
											<DropdownItem url="winestore">Wine store</DropdownItem>
											<DropdownItem url="businessdirectory">Business Directory</DropdownItem>
										</Dropdown>
									</DropdownItem> */}
									{/* <DropdownItem dropdown title={"Portfolio"}>
										<Dropdown noShape>
											<DropdownItem url="portfolio-one">Portfolio One Column</DropdownItem>
											<DropdownItem url="single-portfolio">Portfolio Details</DropdownItem> 
											<DropdownItem url="portfolio-two">Portfolio Two Column</DropdownItem>
											<DropdownItem url="portfolio1">Portfolio1</DropdownItem>
											<DropdownItem url="portfolio2">Portfolio2</DropdownItem>
											<DropdownItem url="categories">Categories</DropdownItem>
											<DropdownItem url="countries">Countries</DropdownItem>
											<DropdownItem url="industries">Industries</DropdownItem>
										</Dropdown>
									</DropdownItem> */}
									{/* <DropdownItem dropdown title="Projects">
										<Dropdown noShape>
											<DropdownItem url="casestudies">Case Studies</DropdownItem>
											<DropdownItem url="Ourwork">Our Work</DropdownItem>
										</Dropdown>
									</DropdownItem> */}
									{/* <DropdownItem dropdown title={"Team"}>
										<Dropdown noShape>
											<DropdownItem url="team">Team</DropdownItem>
											<DropdownItem url="single-team">Team Details</DropdownItem>
										</Dropdown>
									</DropdownItem> */}
									{/* <DropdownItem dropdown title="Utility">
										<Dropdown noShape>
											<DropdownItem url="faq">FAQ</DropdownItem>
											<DropdownItem url="error-page">Error Page</DropdownItem>
											<DropdownItem url="testimonial">Testimonial</DropdownItem>
											<DropdownItem url="coming-soon">Coming Soon</DropdownItem>
										</Dropdown>
									</DropdownItem> */}
									{/* <DropdownItem dropdown title="Account">
										<Dropdown noShape>
											<DropdownItem url="sign-up">Sign Up</DropdownItem>
											<DropdownItem url="sign-in">Sign In</DropdownItem>
											<DropdownItem url="reset-password">Reset Password</DropdownItem>
										</Dropdown>
									</DropdownItem> */}
								</Dropdown>
							</NavItem>
							{/* <NavItem dropdown title="Blog">
								<Dropdown>
									<DropdownItem url="blog">Our Blog</DropdownItem>
									<DropdownItem url="blog-grid">Blog Grid</DropdownItem>
									<DropdownItem url="single-blog">Blog Details</DropdownItem>
								</Dropdown>
							</NavItem> */}
							<NavItem dropdown title="Solutions">
								<Dropdown>
									<DropdownItem url="creditrepair">Credit Repair</DropdownItem>
									<DropdownItem url="itdigitalagency">It Digital Agency</DropdownItem>
									<DropdownItem url="winestore">Wine store</DropdownItem>
									<DropdownItem url="businessdirectory">Business Directory</DropdownItem>
								</Dropdown>
							</NavItem>
							<NavItem url="contact-us">Contact Us</NavItem>
						</DesktopNav>
					</div>
					<HeaderButton />

					<MobileNavbar menuItemsData={menuItemsData} title="CWS" />
				</nav>
			</div>
		</header>
	);
}

export default Header;
