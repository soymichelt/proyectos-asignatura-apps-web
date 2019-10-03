import React from 'react';
import Layout from './../../theme/layout';
import Img1 from './../../../assets/img1.jpg';
import Img2 from './../../../assets/img2.jpg';
import Img3 from './../../../assets/img3.jpg';

const Index = (props) => {
    
    return (
        <Layout>
            <article>
                <img
                    src={Img1}
                />
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also
                    the leap into electronic typesetting, remaining essentially unchanged.
                </p>
            </article>
            <article>
                <img
                    src={Img2}
                />
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also
                    the leap into electronic typesetting, remaining essentially unchanged.
                </p>
            </article>
            <article>
                <img
                    src={Img3}
                />
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also
                    the leap into electronic typesetting, remaining essentially unchanged.
                </p>
            </article>
        </Layout>
    );

};

export default Index;