import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Scrollbar from '../../components/scrollbar'
import { useRouter } from 'next/router'
import Services from '../../api/service';
import Link from  'next/link'
import Benefits from './benefits'
import ServiceSidebar from './sidebar'
import Footer from '../../components/footer'
import Logo from '/public/images/logo.svg'
import Image from 'next/image';

const PracticeSinglePage =(props) => {
    const router = useRouter()

    const serviceDetails = Services.find(item => item.slug === router.query.slug)

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }


    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={serviceDetails?.sTitle} pagesub={'Project'}/> 
            <section className="wpo-service-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="wpo-service-single-wrap">
                                <div className="wpo-service-single-img">
                                    <Image src={serviceDetails?.sImg} alt="" />
                                </div>
                                <div className="wpo-service-single-content">
                                    <div className="wpo-service-single-content-des">
                                        <h2>{serviceDetails?.sTitle}</h2>
                                        <p>{serviceDetails?.description}</p>
                                        <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise.</p>
                                        <div className="wpo-service-single-sub-img">
                                            <ul>
                                                <li><Image src={serviceDetails?.ssImg1} alt="" /></li>
                                                <li><Image src={serviceDetails?.ssImg2} alt="" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="wpo-related-section">
                                    <h2>Related Service</h2>
                                    <div className="row">
                                        {Services.slice(0, 3).map((service, Sitem) => (
                                            <div className="col-lg-4 col-md-6 col-12" key={Sitem}>
                                                <div className="wpo-related-item">
                                                    <div className="wpo-related-icon">
                                                        <div className="icon">
                                                            <i className={service.icon}></i>
                                                        </div>
                                                    </div>
                                                    <div className="wpo-related-text">
                                                        <h2><Link onClick={ClickHandler} href="/practice/[slug]" as={`/practice/${service.slug}`}>{service.sTitle}</Link></h2>
                                                        <p>{service.des2}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <Benefits/>
                            </div>
                        </div>
                        <ServiceSidebar/>
                    </div>
                </div>
            </section>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default PracticeSinglePage;
