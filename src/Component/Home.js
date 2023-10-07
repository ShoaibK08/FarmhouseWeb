import Navbar from "../directives/Navbar";
import  "../assets/css/style.css"
import { FcHome } from "react-icons/fc";
import { AiTwotoneHome } from "react-icons/ai";
import { HiHomeModern } from "react-icons/hi2";
import { MdApartment } from "react-icons/md";
import FarmhouseSearchBar from "./SearchBar";
export default function Home() {
    return <>
        <FarmhouseSearchBar/>
        {/* <div className="home-bg">
            <div className="bg-area">
                <section className="section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="Nearby">
                                <h1>Find Your Nearby <span>Villas Weekend Homes</span></h1>
                                <h4>Find some best places to spend your holiday in your own city.</h4>
                            </div>
                            <div className="need-place">
                                <div className="check-in">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="check-out">
                                                <form>
                                                    <div className="row">
                                                        <div className="col-lg-2">
                                                            <div className="mb-3">
                                                            <label className="form-label">Check in</label>
                                                            <input type="date" className="form-control" aria-describedby="emailHelp" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-2">
                                                            <div className="clone-button">
                                                                <h6>Check in Time</h6>
                                                                <p>10 AM</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-2">
                                                            <div className="mb-3">
                                                            <label className="form-label">Check Out</label>
                                                            <input type="date" className="form-control" aria-describedby="emailHelp" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-2">
                                                            <div className="clone-button">
                                                                <h6>Check Out Time</h6>
                                                                <p>10 AM</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-2 mt-2">
                                                            <label className="form-label">No. of Guest</label>
                                                            <input type="number" />
                                                        </div>
                                                        <div className="col-lg-2 mt-4">
                                                            <select>
                                                                <option>Choose city</option>
                                                                <option>Any</option>
                                                                <option>Surat</option>
                                                                <option>Navsari</option>
                                                                <option>Daman</option>
                                                                <option>Bharuch</option>
                                                                <option>Vadodara</option>
                                                            </select>
                                                            <button class="button">Search</button>
                                                        </div>
                                                    </div>
                                                    {/* <div className="mb-3">
                                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                                        <input type="password" className="form-control" id="exampleInputPassword1" />
                                                    </div>
                                                    <div className="mb-3 form-check">
                                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                                    </div>
                                                     */}
                                                {/* </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="Browse">
                                <h3>Or Browse Popular Categories</h3>
                            </div>
                            <div className="col-lg-3">
                                <div className="cart">
                                    <a href="">
                                        <div className="house-icons">
                                            <FcHome />
                                            <p>Farmhouse</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="cart">
                                    <a href="">
                                        <div className="house-icons">
                                            <AiTwotoneHome />
                                            <p>Weekend Home</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="cart">
                                    <a href="">
                                        <div className="house-icons">
                                            <HiHomeModern />
                                            <p>Weekend Home</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="cart">
                                    <a href="">
                                        <div className="house-icons">
                                            <MdApartment />
                                            <p>Weekend Home</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <section className="section-padding">
            <div className="Most-Recommended">
                <div className="justify-content-center row mb-3">
                    <div className="col-lg-4">
                        <h3>Most Recommended</h3>
                    </div>
                </div>
                <div className="container">
                    <div className="row mb-3">
                        <div className="col-lg-4">
                            <a href="">
                                <div className="villa-card">
                                    <img src="https://farmhousehub.in/image/fh168-england-home-168-on-rent/thumb_500x500.jpeg"/>
                                    <span className="poji">weekend home</span>
                                    <div className="villa-card-body">
                                        <div className="row">
                                            <div className="col-lg-10">
                                                <h5>FH168 | England Home 168</h5>
                                            </div>
                                            <div className="col-lg-2">
                                                <div className="rating">
                                                    4.7
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="location">
                                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                                                <span>New dandi road, Surat.</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-10">
                                                <div className="price">
                                                <span className="pay-price">2,705</span>
                                                <strike className="show-price">8056</strike>
                                                <span className="discount">66% of</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-2">
                                            <div className="heart">
                                            <i class="fa fa-heart-o" aria-hidden="true"></i>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4">
                            <a href="">
                                <div className="villa-card">
                                    <img src="https://farmhousehub.in/image/fh168-england-home-168-on-rent/thumb_500x500.jpeg"/>
                                    <div className="villa-card-body">
                                        <div className="row">
                                            <div className="col-lg-10">
                                                <h5>FH168 | England Home 168</h5>
                                            </div>
                                            <div className="col-lg-2">
                                                <div className="rating">
                                                    4.7
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="location">
                                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                                                <span>New dandi road, Surat.</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-10">
                                                <div className="price">
                                                <span className="pay-price">2,705</span>
                                                <strike className="show-price">8056</strike>
                                                <span className="discount">66% of</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-2">
                                            <div className="heart">
                                            <i class="fa fa-heart-o" aria-hidden="true"></i>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
    </>
}