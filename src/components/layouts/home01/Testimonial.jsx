import React, { Component } from 'react';

class Testimonial extends Component {
    constructor(props){
        super(props);
        this.state = {
            testimonial: [
                {
                    id: 1,
                    img: './images/testimonial/07.jpg',
                    alt: 'images',
                    text01: 'Excellent design, great communication, fast turnaround of revisions. I had a ',
                    text02: 'clear vision of what I wanted. Sara did not just deliver it she',
                    text03: 'improved upon it substantially. Recommended!',
                    name: 'Silvia',
                    classname: 'testimonial-t1 text-center'
                },
                {
                    id: 2,
                    img: './images/testimonial/07.jpg',
                    alt: 'images',
                    text01: 'She Helped me to get my website fixed. I had an',
                    text02: 'old non responsive website. Thanks to Sara,',
                    text03: 'now I have a Beautiful responsive website for my restaurant. Recommended!',
                    name: 'Martino',
                    classname: 'testimonial-t1 text-center'
                },
                {
                    id: 3,
                    img: './images/testimonial/07.jpg',
                    alt: 'images',
                    text01: 'Good eyes for design. She quickly understood what I wanted',
                    text02: 'I trusted her and she build within a week a perfect website for my business',
                    text03: 'I love It. Higly Recommended!',
                    name: 'Ilaria',
                    classname: 'testimonial-t1 text-center'
                }
            ]
        }
    }
    render() {
        return (
            <div className="container">
                <div className="custom-dot dot-t1 dot-s1 none-nav-default mg-dots-s1">
                    <div className="flat-carousel-box data-effect clearfix" data-gap={0} data-column={1} data-column2={1} data-column3={1} data-column4={1} data-column5={1} data-dots="true" data-auto="false" data-nav="false" data-loop="true">
                        <div className="owl-carousel">
                            {
                                this.state.testimonial.map(data => (
                                    
                                    <div className={data.classname} key={data.id}>
                                                    <div className="avatar mg-b29"><img src={data.img} alt={data.alt} /></div>
                                                    <p className="lt-sp03 mg-b25">
                                                        {data.text01}<br /> {data.text02} <br/>{data.text03}
                                                    </p>
                                        <h3 className="name f-w600">{data.name}</h3>
                                    </div> 
                                ))
                            }
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
}

export default Testimonial;
